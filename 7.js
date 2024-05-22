const user = {
  name: 'Yuliia',
  age: 25,
};

const user2 = {
  name: 'Yuliia',
  age: 25,
};

const isObjectEqual = user === user2;
console.log(isObjectEqual);
const objectString = JSON.stringify(user);
console.log(objectString);
const object2String = JSON.stringify(user2);
const isEqual = objectString === object2String;
console.log(isEqual);

// нижче наведено приклад рекурсивної роботи функції - коли функція викликає сама себе.
// функція викликає сама себе доти, доки не досягне найпростішої частини задачі(базового випадку),після чого розраховує результат,
// рухаючись назад по ланцюжку викликів.

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const resultFactorial = factorial(3);
console.log(resultFactorial); // 6
/*
1) factorial(3) повертає виклик factorial(2): return 3 * виклик ф-ї factorial(3 - 1) 
2) factorial(2) повертає виклик factorial(1): return 2 * виклик ф-ї factorial(2 - 1)
3) factorial(1) повертає 1. (базовий випадок)
4) тоді повертаємось назад і розраховуємо повередні виклики: return 2 * виклик ф-ї factorial(2 - 1) --> 2*1=2
повертаємось до першого виклику return 3 * виклик ф-ї factorial(3 - 1) --> 3*2=6
*/

// об'єкти можна копіювати поверхнево (копіюється лише верхній рівень об'єкта, вкладеності залишають посиланнями на ті самі об'єкти)
// тобто при зміні вкладеної властивості в копії(car2) - в оригіналі(car) ця властивість теж змінюється.
// поверхневе можна виконати за доп. оператора spread та Object.assign()
const car = {
  name: 'Audi',
  data: {
    realise: [1, 3, 5],
  },
};

const car2 = { ...car };
car2.data.realise[0] = 8;
console.log(car2); // {
//   name: 'Audi',
//   data: {
//     realise: [8, 3, 5],
//   },
// };
console.log(car); // {
//   name: 'Audi',
//   data: {
//     realise: [8, 3, 5],
//   },
// };

const target = {};
const source = { b: 4, c: 5 };

const mix = Object.assign(target, source);
console.log(target); // { b: 4, c: 5 }
console.log(mix); // { b: 4, c: 5 }

// Глибоке копіювання копіює всі рівні об'єкта, створюючи нові копії всіх вкладених об'єктів.
// Викор метод JSON.stringify та JSON.parse (але він має обмеження, бо не використовується при наявності методів та symbols)

const original = {
  name: 'Alice',
  adress: {
    cite: 'Wonderland',
  },
};

const originalCopy = JSON.parse(JSON.stringify(original));
console.log(originalCopy);

originalCopy.name = 'Nana';
console.log(original.name); // Alice
console.log(originalCopy.name); // Nana
// Тепер вкладені об'єкти в копії змінюються, а в оригіналі ні, бо тепер це різні вкладені об'єкти

const fox = [1, 3, 4];
console.log(Array.isArray(fox)); // true

// console.log(dog);
// const dog = 1;
// Перебираючі методи масиву
// 1. map
const countries = ['Spain', 'Canada', 'Poland'];

const countriesCapitals = countries.map(value => `<li>${value}</li>`);
console.log(countriesCapitals);
const countriesCapitalsString = countriesCapitals.join();
console.log(countriesCapitalsString);
const count = countries.map(() => 1); // що ми напишемо в колбек функції, те і буде значеннями нового масиву. Масив буде такої ж довжини, що і оригінал.
console.log(count);

const ar1 = [1, 1];
const ar2 = [1, 1];
console.log(ar1 === ar2);
/**Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, додаючи 
 * до нього значення параметра value, який точно є числом.
Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і 
повертала новий масив з оновленими значеннями. */

const numbers = [1, 2, 3, 4, 5, 6];
const value = 2;

function changeEven(numbers, value) {
  const copyNumbers = [...numbers];
  // метод forEach перебирає масив і до кожного елемента масива виконує колбек-фунцію. Завжди повертає undefined.
  copyNumbers.forEach((item, index) => {
    if (item % 2 === 0) {
      copyNumbers[index] = copyNumbers[index] + value;
    }
  });
  return copyNumbers;
}
const resultChangeEven = changeEven(numbers, value);
console.log(resultChangeEven); // [1, 4, 3, 6, 5, 8]

/**
 * Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, і розраховує загальну суму його елементів, 
 * яка зберігається у змінній totalPrice і повертається як результат роботи функції.

Доповни виклик метода forEach, передавши йому колбек-функцію, яка на кожній ітерації додає до totalPrice значення поточного елемента 
масива orderedItems.
 */

const calculateTotalPrice = orderedItems => {
  let totalPrice = 0;
  orderedItems.forEach(item => (totalPrice += item));
  return totalPrice;
};

const resultCalculateTotalPrice = calculateTotalPrice(numbers);
console.log(resultCalculateTotalPrice);

const arrayOfNumbers = [3, 7, 10, 12];
const evenNumber = arrayOfNumbers.filter(item => item % 2 === 0);
console.log(evenNumber); // [10, 12] метод filter() використовується для пошуку всіх значень, що задовільняють умову.

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: 'Mango', score: 83 },
  { name: 'Poly', score: 59 },
  { name: 'Ajax', score: 37 },
  { name: 'Kiwi', score: 94 },
  { name: 'Houston', score: 64 },
];

const best = students.filter(item => item.score >= HIGH_SCORE);
const average = students.filter(
  item => item.score >= LOW_SCORE && item.score < HIGH_SCORE
);
const worst = students.filter(item => item.score < LOW_SCORE);

console.log(best);
console.log(average);
console.log(worst);

// метод find() - повертає перше значення, яке задовільняє умову, після чого перебирання масиву припиняється.
// якщо жоден елемент не задовільнив умову, то повертає undefined.

const words = ['apple', 'fox', 'dog'];
const smallWord = words.find(item => item.length <= 3);
console.log(smallWord); // 'fox'

// метод every() - повертає true, якщо ВСІ елементи задовільнили умову колбек-функції та повертає false,якщо хоча б один елемент повернув false і одразу перебір масиву припиняється.

const every = words.every(item => item.length >= 3);
console.log(every); // true
const every2 = words.every(item => item.length < 4);
console.log(every2); // false
const products = [
  { name: 'apple', quantity: 2 },
  { name: 'orange', quantity: 5 },
  { name: 'plum', quantity: 0 },
];

const isAllProductsAvailable = products.every(item => item.quantity > 0);
console.log(isAllProductsAvailable); // false

// метод some() перевіряє чи задовольняє хоча б один елемент умові колбек-функції.Якщо так, то повертає true. Перебирання припиняється,якщо колбек повертає true. Якщо жоден елемент масиву не задовольняє умову колбека,тоді певертається false.

const isAnyProductAvailable = products.some(item => item.quantity > 0);
console.log(isAnyProductAvailable); // true

// function varFoo() {
//   var pet = 'dog';
// }
{
  var pet = 'dog';
  let flower = 'rose';
}
console.log(pet);
//метод reduce() застосовується для послудовної обробки кожного елементу масиву із збереженням проміжного результату. Цей метод має початкове значення акумулятора та акумулятор.
// array.reduce((accum, item, index, array)=> , initialValue); accum - це акумулятор, тобто проміжний результат. Значення,яке поверне
// колбек - функція на поточній ітерації буде значенням цього параметра на наступній ітерації.

// Цим методом дуже легко знаходити суму чисел у масиві.
const ages = [3, 5, 9, 12];
const sumOfAges = ages.reduce((accum, item) => accum + item, 0);
console.log(sumOfAges); // 29

// за замовчуванням перед сортуванням метод toSorted() приводить усі елементи масиву до рядків, то фактично елементи сортуються як рядки,
// тобто на основі їхніх значень у таблиці Unicode.
const sorted = ages.toSorted();
console.log(sorted);
// Масив рядків сортується за алфавітом.  Водночас порядковий номер великих літер менший, ніж у малих.
const sortedStrings = words.toSorted();
console.log(sortedStrings); //['apple', 'dog', 'fox']
