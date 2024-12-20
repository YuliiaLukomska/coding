// Колбек функції
/*
Функція зворотного виклику або колбек функція (callback) - це функція яка передається іншій функції як аргумент, а та у свою чергу використовує
передану функцію.

function makePizza() {
  return "Your pizza is being prepared, please wait.";
}

const result = makePizza();  // в константі result результат виконання функції
const pointer = makePizza; // константа pointer містить посилання на функцію makePizza і в консолі буде внутрішнє представлення функції

console.log(result); // Your pizza is being prepared, please wait.
console.log(pointer); // ƒ makePizza() { return 'Your pizza is being prepared, please wait.'; }

Це означає, що посилання на функцію можна записати у змінну або передати як аргумент іншій функції.

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

--Інлайн-колбеки--

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

--Метод forEach(callback)--
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
--Стрілочні функції--
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

--Колбеки--
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

--Методи map і flatMap--

--Чисті функції--

Функція з побічними ефектами - це функція, яка взаємодіє з оточенням, і якимось чином впливає на нього, це функція, яка в процесі виконання може:
- змінювати або використовувати глобальні змінні;
- змінювати значення аргументів посилального типу;
- виконувати операції введення-виведення (н-д, використання console.log), тощо

Чиста функція завжди поводиться передбачувано. Якщо ти передаєш їй ті ж самі вхідні дані (аргументи), вона завжди поверне той  самий результат,
незалежно від того,скільки разів ти її виконаєш. Це відрізняє чисту функцію від функції з побічними ефектами, яка може повертати різні результати
залежно від зовнішніх факторів.

Приклад чистої функції:

function pureFunction(x) {
  return x * 2;
}

console.log(pureFunction(5)); // завжди поверне 10, незалежно від зовнішніх умов.
console.log(pureFunction(5)); // завжди поверне 10, незалежно від зовнішніх умов.

Функція pureFunction не змінює нічого поза своєю областю, що робить її чистою.

Чиста функція (pure function) — це функція, результат якої залежить тільки від значень переданих аргументів. За умови однакових аргументів 
вона завжди повертає один і той самий результат і не має побічних ефектів, тобто не змінює значення аргументів.

Функція з побічними ефектами може повертати різні результати, навіть якщо їй передати однакові аргументи, тому що вона залежить від зовнішніх
факторів або змінює зовнішній стан. Це може бути глобальна зміна, стан системи, поточний час, або взаємодія з користувачем.

let multiplier = 2;

function functionWithSideEffect(x) {
  // Побічний ефект: зміна глобальної змінної
  multiplier++;

  // Використання зовнішньої змінної впливає на результат
  return x * multiplier;
}

console.log(functionWithSideEffect(5)); // Результат залежить від multiplier, поверне 15 (5 * 3)
console.log(functionWithSideEffect(5)); // Поверне 20 (5 * 4), тому що multiplier змінюється

// Функція functionWithEffect використовує зовнішню змінну multiplier, яку вона змінює всередині себе (побічний ефект).
// Під час кожного виклику функції значення змінної multipler збільшується, тому результат залежить не лише від аргументу x, але й від стану
// глобальної змінної.

--Перебираючі методи--

У JavaScript є методи масивів, які прийшли з функціональних мов. Більшість із перебираючих методів масивів — це чисті функції. 
Вони створюють новий масив, заповнюють його, застосовуючи до значення кожного елемента зазначену колбек-функцію, після чого повертають цей 
новий масив.

Усі перебираючі методи масивів мають схожий синтаксис. На вихідному масиві array викликається перебираючий метод method, 
у який аргументом передається колбек-функція callback.

array.method(callback(currentValue, index, array))

array.method((item, idx, arr) => {
  // логіка, яка буде виконуватися на кожній ітерації
});

--Метод map--

Метод map - метод для трансформації масиву.

Метод map(callback) використовується для трансформації масиву. Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат 
її роботи записує в новий масив, який і буде результатом виконання методу.

Його можна використовувати для того, щоб змінити кожен елемент масиву. Оригінальний масив використовується як еталон, на основі якого 
можна зробити іншу колекцію.

Використання анонімних стрілочних функцій з неявним поверненням (без {} і return) суттєво скорочує «шум» оголошення колбек-функції, 
що робить код чистішим і простішим для сприйняття.

const numbers = [1, 3, 4];

const result = numbers.map(item => (item = 'x'));

console.log(result); // ['x', 'x', 'x']

Ось що відбувається:
1. На кожній ітерації анонімна стрілочна функція присвоює значенню item рядок 'x'.
2. Це нове значення 'x' повертається, і воно записується в новий масив.


const numbers = [1, 3, 4];

const result = numbers.map(item => 100);

console.log(result); // [100, 100, 100]


Метод flatMap()
Метод flatMap(callback) аналогічний методу map(), але застосовується у випадках, коли результат — це багатовимірний масив, який необхідно
 «розгладити».

 const students = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["science", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];

const mappedCourses = students.map(student => student.courses);
console.log(mappedCourses) // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

const flattenedCourses = students.flatMap(student => student.courses);
console.log(flattenedCourses) // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];


Метод flatMap викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує в новий масив. 
Відмінність від map() полягає в тому, що новий масив «розгладжується» на глибину, що дорівнює одиниці (одна вкладеність). 
Цей розгладжений (плоский) масив і є результатом роботи flatMap().

--Методи filter і find ---

Метод filter(callback) використовується для єдиної операції - фільтрації масиву. Тобто відбору усіх елементів з колекції за певним критерієм.

array.filter((element, index, array) => {
  // Тіло колбек-функції
});

const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]
// до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0  

const negativeValues = values.filter(value => value < 0);
console.log(negativeValues); // [-3, -68, -37]
// до negativeValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були < 0  

const bigValues = values.filter(value => value > 1000);
console.log(bigValues); // []
// до negatibigValues eValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000

console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// Оригінальний масив values не змінився


--Метод find()--

Метод find(callback) дозволяє знайти і повернути перший відповідний елемент, що задовольняє умову, після чого перебирання масиву припиняється. 
Тобто він, на відміну від методу filter(callback), шукає до першого збігу.

array.find((element, index, array) => {
  // Тіло колбек-функції
});

Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined

Метод find() використовується для одного завдання — пошуку першого елемента, який задовольняє умову. Наприклад, пошук користувача за поштою, 
автомобіля — за серійним номером, книги — за назвою тощо.



*/

// accum - значення, яке розраховується
// accum = numb[0], якщо явно не задаємо початкове значення аккумулятора

const numb = [1, 2, 5, 10];

const sum = numb.reduce((accum, item, index, array) => accum + item, 0);
console.log(sum);

const names = ['Olena', 'Sasha', 'Yana'];

const object = names.reduce((accum, item, index) => {
  return {
    ...accum,
    [index]: item,
  };
}, {});

console.log(object); // {0: 'Olena', 1: 'Sasha', 2: 'Yana'}

const words = ['I', 'like', 'learning', 'English'];

const sentence = words.reduce((accum, item) => accum + ' ' + item);

console.log(sentence); // 'I like learning English'

// --Метод toSorted()--

/*
Оскільки за замовчуванням перед сортуванням метод toSorted() приводить усі елементи масиву до рядків, то фактично елементи сортуються як рядки,
 тобто на основі їхніх значень у таблиці Unicode. Стандартне сортування чисел виглядає незвично, коли ми думаємо про числа, але зрозуміло,
  якщо знати, що числа були перетворені на рядки.

const scores = [27, 2, 41, 4, 7, 3, 75];

console.log(scores.toSorted()); // [2, 27, 3, 4, 41, 7, 75]

Масив рядків
Масив рядків сортується за алфавітом.
Водночас порядковий номер великих літер менший, ніж у малих.




Необхідно отримати масив їхніх імен, відсортованих за зростанням балів за тест.

*/

const students = [
  { name: 'Mango', score: 83, courses: ['mathematics', 'physics'] },
  { name: 'Poly', score: 59, courses: ['science', 'mathematics'] },
  { name: 'Ajax', score: 37, courses: ['physics', 'biology'] },
  { name: 'Kiwi', score: 94, courses: ['literature', 'science'] },
];

const namesArray = students
  .toSorted((a, b) => a.score - b.score)
  .map(item => item.name);
console.log(namesArray);

// Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.

const unicCourses = students
  .flatMap(item => item.courses)
  .filter((item, index, array) => array.indexOf(item) === index)
  .toSorted((a, b) => a.localeCompare(b));

console.log(unicCourses);

// Напиши стрілочну функцію getUserNames(users), яка прийматиме один параметр users — масив об’єктів користувачів.
// Функція має повертати масив імен усіх користувачів(властивість name) із масиву users.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її викликів.

const getUserNames = users => {
  return users.map(item => item.name);
};

console.log(
  getUserNames([
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      balance: 2811,
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      balance: 3821,
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      balance: 3793,
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      balance: 2278,
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      balance: 3951,
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      balance: 1498,
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      balance: 2764,
    },
  ])
);

const getUsersWithFriend = (users, friendName) => {
  return users.filter(item => item.friends.includes(friendName));
};

const allUsers = [
  {
    name: 'Moore Hensley',
    friends: ['Sharron Pace'],
  },
  {
    name: 'Sharlene Bush',
    friends: ['Briana Decker', 'Sharron Pace'],
  },
  {
    name: 'Ross Vazquez',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
  },
  {
    name: 'Elma Head',
    friends: ['Goldie Gentry', 'Aisha Tran'],
  },
  {
    name: 'Carey Barr',
    friends: ['Jordan Sampson', 'Eddie Strong'],
  },
  {
    name: 'Blackburn Dotson',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
  },
  {
    name: 'Sheree Anthony',
    friends: ['Goldie Gentry', 'Briana Decker'],
  },
];

console.log(getUsersWithFriend(allUsers, 'Briana Decker'));

console.log(getUsersWithFriend(allUsers, 'Adrian Cross')); // []

const sortByDescendingFriendCount = users => {
  return users.toSorted((a, b) => b.friends.length - a.friends.length);
};

console.log(
  sortByDescendingFriendCount([
    {
      name: 'Moore Hensley',
      friends: ['Sharron Pace'],
      gender: 'male',
    },
    {
      name: 'Sharlene Bush',
      friends: ['Briana Decker', 'Sharron Pace'],
      gender: 'female',
    },
    {
      name: 'Ross Vazquez',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      gender: 'male',
    },
    {
      name: 'Elma Head',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      gender: 'female',
    },
    {
      name: 'Carey Barr',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      gender: 'male',
    },
    {
      name: 'Blackburn Dotson',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      gender: 'male',
    },
    {
      name: 'Sheree Anthony',
      friends: ['Goldie Gentry', 'Briana Decker'],
      gender: 'female',
    },
  ])
);

const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter(item => item.gender === gender)
    .reduce((accum, item) => accum + item.balance, 0);
};

const clients = [
  {
    name: 'Moore Hensley',
    gender: 'male',
    balance: 2811,
  },
  {
    name: 'Sharlene Bush',
    gender: 'female',
    balance: 3821,
  },
  {
    name: 'Ross Vazquez',
    gender: 'male',
    balance: 3793,
  },
  {
    name: 'Elma Head',
    gender: 'female',
    balance: 2278,
  },
  {
    name: 'Carey Barr',
    gender: 'male',
    balance: 3951,
  },
  {
    name: 'Blackburn Dotson',
    gender: 'male',
    balance: 1498,
  },
  {
    name: 'Sheree Anthony',
    gender: 'female',
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(clients, 'male')); // 12053

console.log(getTotalBalanceByGender(clients, 'female')); // 8863

let total = 0;

[1, 2, 3, 4].forEach(item => (total += item));

console.log(total);

// const book = {
//   title: 'Hello',
//   updateTitle(newTitle) {
//     console.log(this);

//     this.title = newTitle;
//   },
// };

// const update = book.updateTitle;

// console.log(update('Lord Of The Rings'));
