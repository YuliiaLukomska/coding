// В тебе є речення "Катя любить жирафів", треба щоб в консоль вивело останній символ речення, для цього треба знайти значення
// індексу останньої букви.
const words = 'Kate loves giraffes';
console.log(words[words.length - 1]); //s
console.log(words.length);

console.log(+'1' + '1' + '2'); // 112
console.log('A' - 'B' + 2); // NaN
console.log('A' - 'B' + 'A' + 3); // NaNA3

const age = 24;
const message = 'Poly is ' + age + ' years old!';
console.log(message); // Poly is 24 years old!

console.log(String); // function
console.log(Number); //function

console.log(typeof null == 'object');

// порядок виведення в консоль: // 1 3 2

// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 1000);
// console.log(3);

// Задача по js: дано масив чисел. Напиши функцію, яка порахує суму всіх парних чисел масиву.

const arr = [1, 3, 4];

function arrsum(arr) {
  let total = 0;

  for (const el of arr) {
    if (el % 2 === 0) {
      total = total + el;
    }
  }
  return total;
}

const result = arrsum(arr);
console.log(result);

const string = 'Hello world'; //треба вибрати метод, за доп. якого ти зможеш отримати слово "Hello".

console.log(string.slice(0, 5)); // 'Hello'

let obj = {
  firstProp: 'name',
};
// console.log(obj.hasOwnProperty('name')); // false
console.log(obj.hasOwnProperty('firstProp')); // true

function foo(x) {
  console.log(3);
  console.log(arguments.length);
  console.log(x);
  console.log(arguments);
}

foo(); // 3; 0; unfefined; [] псевдомасив;
foo(1, 2, 3); // 3; 3; 1; [1, 2, 3] псевдомасив;

const resultAdd = '4' + '8' - '6';
console.log(resultAdd); // спочатку буде конкатенація і '4' + '8' дасть -> 48. А далі 48 - 6 = 42.
// в математичному виразі множення та ділення виконується спочатку, а далі додавання та віднімання (як і в математиці)
console.log(4 + 10 - 'A' + 'B'); //NaNB. операції виконуємо послідовно -> 14 - 'A' це буде NaN. NaN + 'B' це буде конкатенація NaNB.
// Якщо застосувати оператор + до рядка та будь-якого іншого типу даних, результатом буде новий рядок, що містить об'єднання вихідних значень.

let amount = 2; // це глобальна область видимості. Всередині функції нам доступна змінна amount.

// дуже цікава задачка, уважно і послідовно.
function fook(amount) {
  amount = 5;
  return amount;
}

const a = fook(3);
const b = fook(amount);

console.log(a); // 3 зараз пише 5
console.log(b); // 2 зараз пише 5

// що означає 'присвоєння за значенням'? - в тебе є змінна string1,яка має значення `Bob`. Змінній string2 ми присвоюємо чисто
// значення змінної string1, тобто просто копіюємо цей рядок і вставляємо як значення string2, але ці змінні є абсолютно НЕЗАЛЕЖНИМИ.
// І якщо тобі захочеться змінити значення string1, то string2 про це абсолютно нічого знати не буде. Основна відмінність простих типів
// даних (примітивів) від складних в тому, що дані їм присвоюютьсяза значенням - кожна змінна - це окрема, незалежна комірка пам'яті.
// Зі складними типами даних інша ситуація - коли ми створюємо змінну в яку записуємо масив або об'єкт - то в цій змінній буде зберігатись
// не значення самого масиву, а адреса місця в пам'яті, де цей масив зберігається, іншими словами - посилання(покажчик) на цей масив.
// Отже, складні типи даних передаються за посиланням.
// Це можна зрозуміти на такому прикладі: змінна - це листок паперу.Значення змінної - це надпис на папері.
// якщо ми говоримо про прості типи даних, якщо нам треба щоб про надпис на папері дізналось більше людей, ми просто робимо копії цього
// аркушу з надписом і роздаємо людям - це КОПІЇ НЕЗАЛЕЖНІ, тобто якщо ми змінимо значення на якомусь аркуші паперу - інші про це і знати не будуть
//  Якщо ми говоримо про складні типи даних - то ми цей аркуш закриваємо в кімнаті на ключ і даємо ключі людям. Таким чином кожен, хто має
// ключ, може змінити значення на папері.
let string1 = 'Bob';
let string2 = string1;
let string3 = string1;
let string4 = string1;

string1 = 'Polly';
console.log(string2, string3, string4); // 'Bob', 'Bob', 'Bob'
console.log(string1); // 'Polly'

const foldingType = [1, 3, 6];
const arr3 = foldingType; // тобто змінна arr3 просто отримує посилання (покажчик у пам'яті) на вже існуючий масив foldingType;
// тобто arr3 і foldingType тепер вказують на один і той самий масив.
arr3[0] = 3;
console.log(arr3); // [3, 3, 6]
console.log(foldingType); // [3, 3, 6]
// Два масиви ніколи не дорівнюють один одному, навіть якщо вони порожні або в них однакові елементи, тому що оператор рівності
// перевіряє рівність посилань на масиви, а не самих елементів усередині масивів.Це можна порівняти з тим, що змінні arr1 та arr2
// посилаються на різні кімнати, в яких різні папірці, але з однаковим вмістом.
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arr1 === arr2); // false

console.log(typeof []);
console.log(typeof {});
console.log(typeof fook);
console.log(typeof 2);
console.log(typeof String);

// Задачка на розуміння того, що складні типи даних присвоюються за посиланням.
// У рядку нижче змінній присвоюється не значення об'єкту, а посилання на комірку у пам'яті, де цей об'єкт зберігається.
const personKarl = {
  name: 'Karl',
  age: 21,
};

function createCopy(person) {
  // константі personKarlCopy ми передаємо посилання на об'єкт. Тобто personKarl і personKarlCopy зараз містять однакове
  // посилання(ключ від кімнати, де лежить наш об'єкт)
  const personKarlCopy = person;
  // тут ми вирішили змінити властивість name, і так як константа personKarlCopy містила посилання на наш об'єкт,
  // то об'єкт змінюєтьс і в константі personKarl
  personKarlCopy.name = 'Yuliia';
  return personKarlCopy;
}

console.log(createCopy(personKarl)); //{ name: 'Yuliia', age: 21, }
console.log(personKarl); //{ name: 'Yuliia', age: 21, }
// ВАЖЛИВО! Якщо тобі треба створити копію складного типу даних, то потрібно використати spread-оператор.
// У випадку об'єкта const personCopy = {...person}. Тобто у нас формується новий об'єкт з новим посиланням.
// У випадку масиву const arrCopy = [...arr]

const testObj = {
  name: 'Yuliia',
  age: 27,
};

const keys = Object.keys(testObj); //[`name`, `age`]

function createObjCopy(obj) {
  const objCopy = {};
  for (const key of keys) {
    console.log(key); // name , age

    objCopy[key] = obj[key];
  }
  return objCopy;
}
console.log(createObjCopy(testObj));

// Задача: є масив чисел,треба відфільтрувати унікальні числа. Тобто,отримати масив лише з унікальними числами.(Відфільтрувати масив на унікальні значення)

const arrayOfNumbers = [1, 4, 4, 7, 8, 8, 8, 37, 37];
const filteredNumb = new Set(arrayOfNumbers); //отримаємо Set, де будуть лише унікальні числа Set(5) {1, 4, 7, 8, 37}
const arrayOfFilteredNumb = [...filteredNumb]; // робимо із сета масив
console.log(arrayOfFilteredNumb); // [1, 4, 7, 8, 37]

// Set - це колекція унікальних значень. Має багато методів. Якщо ти хочеш додати в сет нове значення, то сет перевіряє,
// чи є вже це значення(складні типи перевіряє за посиланням, а прості за ===), якщ вже є , то не додає, якщо нема - додає.

const set = new Set();
set.add(testObj);
console.log(set); // Set(1) {{…}} - цифра в дужках означає кількість значень в колекції
set.add(testObj);
console.log(set.size); // 1 - не додало той самий об'єкт.
set.add(1);
set.add('hello');
console.log(set.keys());
console.log(set.entries());

// якщо тобі потрібно записати всі аргументи функції в масив, - використовуй оператор rest.
function foos(...arr) {
  const array1 = arr;
  return array1;
}

console.log(foos(1, 3, 4, 'hello')); // [1, 3, 4, 'hello']

function fooq() {
  // console.log('var', q);
  // q = 10;
  // console.log('let', w);
  // w = 3;
  // console.log('const', e);
  // const e = 5;
}

const fooqResult = fooq();
console.log(fooqResult); // error, q is not defined. error, w is not defined. error, Cannot access 'e' before initialization. Ти викликаєш зміннну до її оголошення.

let hello;
var qwery;
const yes = 1;

const af = {
  apple: 2,
  pineapple: 3,
};
