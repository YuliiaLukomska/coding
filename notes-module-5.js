// Колбек функції
/*

function makePizza() {
  return "Your pizza is being prepared, please wait.";
}

const result = makePizza();  // в константі result результат виконання функції
const pointer = makePizza; // константа pointer містить посилання на функцію makePizza і в консолі буде внутрішнє представлення функції

console.log(result); // Your pizza is being prepared, please wait.
console.log(pointer); // ƒ makePizza() { return 'Your pizza is being prepared, please wait.'; }


Це означає, що посилання на функцію можна записати у змінну або передати як аргумент іншій функції.

Функція зворотного виклику або колбек функція (callback) - це функція яка передається іншій функції як аргумент, а та у свою чергу використовує
передану функцію.

function greet(name) {
  console.log(`Hello, ${name}!`);
}

function notify(name) {
  console.log(`${name}, your room nubmer is 8`);
}

function registration(name, callback) {
  console.log(`Registering ${name}`);
  callback(name);
}

console.log(registration('Carlos', greet));

Функція вищого порядку (higher order function) — функція, яка приймає в якості параметрів інші функції або повертає функцію в якості результату.
У прикладі це функція registeration, тому що вона очікує іншу функцію як параметр і викликає її.

// Інлайн-колбеки

function notify(name) {
  return `${name}, your room is being prepared`;
}

function registerGuest(name, callback) {
  console.log(`Registration ${name}`);
  return callback(name);
}

console.log(registerGuest('Sasha', notify));

registerGuest('Olga', function greet(name) {
  console.log(`Hello, ${name}`);
});

Метод forEach(callback) - це метод для перебору масиву, який застосовується для заміни циклів for та for...of в роботі з колекцією.
Метод forEach(callback):
1. Поелементно перебирає масив;
2. Для кожного елементу масиву викликає колбек функцію;
3. Завжди повертає undefined, навіть якщо явно задати return.

Перервати виконання методу forEach не можна, він завжди перебирає масив до кінця.
Якщо треба щоб перебір зупинився за якоїсь умови, тоді викор цикли for або for...of

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (item, index) {
  numbers[index] = item + 1;
});

console.log(numbers); // [2, 3, 4, 5, 6]

numbers.forEach(function (item, index) {
  numbers[index] = 1;
});

console.log(numbers); // [1, 1, 1, 1, 1]

// Тобто все, що ти пропишеш у функції, все буде виконано з кожним елементом масиву

-------------------------------------------------------------------------------------------------------------------------------------------------
// Стрілочні функції
Стрілочні функції (сленг — 'стрілки') мають скорочений, лаконічніший синтаксис, що зменшує обсяг коду, особливо коли функція маленька 
або якщо вона використовується як колбек. Усі стрілки створюються як функціональний вираз, і їх необхідно присвоювати змінній.

const arrowAdd = (a, b, c) => {
    return a + b + c;
    }

- явне повернення (explicit return): викор, коли перед return має бути ще якийсь вираз. Мають бути фігурні дужки та слово return.

const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

- неявне повернення (implicit return): він доречний тільки тоді, коли в тілі функції не потрібно виконувати жодних додаткових інструкцій, 
окрім повернення значення, тоді можна явно не вказувати фігурні дужки та ретьорн.

const add = (a, b, c) => a + b + c;

У стрілочної функції немає локальної змінної arguments, яка збирає всі передані аргументи в псевдомасив. Щоб отримати масив з аргументів,
слід використати оператор ...rest.

// Колбеки
Анонімні стрілочні функції відмінно підходять для колбеків перебираючих методів масиву завдяки коротшому синтаксису оголошення, 
особливо якщо код у тілі функції не громіздкий.

const numbers = [1, 2, 3, 4];

//Звичайна анонімна функція

numbers.forEach(function(item, index){
console.log(`Index ${index}, value: ${item}`);
})

// Стрілочна анонімна функція

numbers.forEach((item, index) => {
    console.log(`Index ${index}, value: ${item}`)
    })

Стрілочну колбек-функцію також можна оголошувати окремо й передавати на неї посилання. Це варто робити, якщо одна функція 
використовується в декількох місцях програми або якщо вона громіздка.

const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Index ${index}, value ${number}`);
};

numbers.forEach(logMessage);




*/
