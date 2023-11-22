'use strict';

// function foo({ a, b, c, ...props }) {
//   console.log(props);
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// // foo({ a: 1, b: 2, c: 3, d: 4, e: 5 });

// const totalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// };

// numbers.forEach(logMessage);

// const getUsersWithAge = (users, minAge, maxAge) => {
//   const userAgeObject = users.filter(
//     user => user.age >= minAge && user.age <= maxAge
//   );
//   return userAgeObject;
// };

// function greet(name) {
//   console.log(`Hello, ${name}`);
// }

// console.log(greet);
// greet('Yuliia');

// const hello = greet;
// console.log(hello);

// function greet(name) {
//   console.log(`Hello, ${name}`);
// }

// function notification(name) {
//   console.log(`Goodbye, ${name}`);
// }

// function registerGuest(name, callback) {
//   console.log(`${name}, your number is ready!`);
//   callback(name);
// }

// registerGuest('Mango', function greet(name) {
//   console.log(`Hello, ${name}`);
// });
// const arr = [1, 3, 6, 9];

// function total(array) {
//   let total = 0;
//   array.forEach(function (element) {
//     total += element;
//   });
//   return total;
// }

// console.log(total(arr));

// // Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers
//  і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, які
//  більші за значення другого параметра числа value.Якщо таких значень не буде знайдено,
//   функція повертає порожній масив.

// function filterArray(numbers, value) {
//   let array = [];
//   numbers.forEach(function (element) {
//     if (element > value) {
//       array.push(element);
//     }
//   });
//   return array;
// }

// // console.log(filterArray([1, 6, 10, 55, 4, 7, 3], 12));

// const filterArrayNew = (...arg) => {
//   console.log(arg);
// };

// console.log(filterArrayNew(1, 2, 3, 4, 5));

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Inex ${index}, value ${number}`);
// };

// // console.log(numbers.forEach(logMessage));

// function changeEven(numbers, value) {
//   const copyArray = [...numbers];

//   copyArray.forEach((element, index) => {
//     if (element % 2 === 0) {
//       copyArray[index] = copyArray[index] + value;
//     }
//   });
//   for (let i = 0; i < copyArray.length; i += 1) {
//     if (copyArray[i] % 2 === 0) {
//       copyArray[i] = copyArray[i] + value;
//     }
//   }
//   return copyArray;
// }

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const bookNames = books.map(book => book.title);
//
// console.log(bookNames);

// const LOW_SCORE = 50;
// const HIGH_SCORE = 90;
// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
//   { name: 'Houston', score: 64 },
// ];
// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); //

// // Доповни код функції getUsersWithAge(users, minAge, maxAge), щоб повернути масив користувачів,
// вік(збережений у властивості age) яких потрапляє у заданий діапазон від minAge до maxAge.

// const getUsersWithAge = (users, minAge, maxAge) => {
//   const userAges = users.filter(
//     user => user.age >= minAge && user.age <= maxAge
//   );
//   return userAges;
// };

// Важлива і цікава задачка 5 модулю з конспекту.

const students = [
  { name: 'Mango', score: 83, courses: ['mathematics', 'physics'] },
  { name: 'Poly', score: 59, courses: ['science', 'mathematics'] },
  { name: 'Ajax', score: 37, courses: ['physics', 'biology'] },
  { name: 'Kiwi', score: 94, courses: ['literature', 'science'] },
];

const uniqueSortedCourses = students.flatMap(student => student.courses);
// .filter((course, index, array) => array.indexOf(course) === index)
// .toSorted((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

const arr = [
  'mathematics',
  'physics',
  'science',
  'mathematics',
  'physics',
  'biology',
  'literature',
  'science',
];

const found = arr.indexOf('physics');

console.log(found);
// // 0 === 0 індекс оф це завжди буде одне і те ж число, яке буде = ідексу першої зустрічі елемента який шукаємо.
// Для метематики це буде нуль.
// // // 0 === 3 а от просто індекс буде змінюватись, для матеатики спочатку це буде 0, а потім 3.
// відповідно до нового масиву додасться лише  одне значення яке виконує умову.
