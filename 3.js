'use strict';

// Задачка від ментора по масивах

// let arr = [];

// console.log(fillArray(2, 10)); // 1

// function fillArray(min, max) {
//   for (let i = min; i <= max; i += 2) {
//     return arr.push(i);
//   }
// }

// // Важливо звернути увагу, що return міститься в самому тілі циклу for, тому відбудеться лише одна ітерація і функція зупинить своє виконання.
// // Нам потрібно повернути саме arr.push(i), а це не те саме, що просто return arr (саме тоді нам би повернувся масив [2]).
// // Функція fillArray на першій ітерації циклу поверне результат роботи push(). Пуш (в нашому випадку arr.push(i)) - повертає оновлену довжину
// // масиву після додавання до нього елементів.
// // В нас був пустий масив.Після першої ітерації до нього додалась двійка,
// // тому довжина буде 1.
// // Відповідь: 1.

// // Задачка про годинник

// const totalMinutes = 1441;

// const hours = String(Math.floor(totalMinutes / 60)).padStart(2, '0');
// const minutes = String(totalMinutes % 60).padEnd(2, '0');

// const result = `${hours}:${minutes}`;
// console.log(result);
