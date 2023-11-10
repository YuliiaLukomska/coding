'use strict';

// function calculateEvenTotal(number) {
//   let total = 0;
//   for (let index = 0; number >= index; index += 1) {
//     if (index % 2 === 0) {
//       total = total + index;
//     } else {
//       total = total;
//     }
//   }
//   return total;
// }

// const result = calculateEvenTotal(0);
// console.log(result);

// const start = 6;
// const end = 17;
// let number;

// function getNumber(start, end) {
//   for (let i = start; i <= end; i += 1) {
//     if (i % 5 === 0) {
//       number = i;
//       break;
//     }
//   }
//   return number;
// }
// const result = getNumber(6, 17);
// console.log(result);

// const start = 17;
// const end = 25;
// let number;
// for (let i = start; i <= end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

// let a;
// for (let i = 6; i > 3; i--) {
//   a = i;
// }
// console.log(a);

// let i;
// for (let i = 6; i > 3; i--) {
//   i = i;
// }
// console.log(i);

// let firstName = null;
// let nickName = 'Суперкодер';

// console.log(firstName ?? nickName ?? 'Анонім');

// const string = 'user_age hello';

// const nextExample = string.split();
// console.log(nextExample); // ['user_age']

// const otherExample = string.split('');
// console.log(otherExample); //(8) ['u', 's', 'e', 'r', '_', 'a', 'g', 'e']

// const anotherExample = string.split(' ');
// console.log(anotherExample); // ['user_age']

// const newString = string.split('_');
// console.log(newString); //(2) ['user', 'age']
// const join = newString.join('-');
// console.log(join); //user-age

// let array = [1, 2, 3];
// array = array.push(`${i}`);
// console.log(array);

// const tags = [];

// for (let i = 0; i < 3; i += 1) {
//   tags.push(`tag-${i}`);
// }

// console.log(tags); // ["tag-0", "tag-1", "tag-2"]

// const planets = [1, 2, 3];

// planets.push(4);
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

// function getEvenNumbers(start, end) {
//   const array = [1, 2, 3];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       array.push(i);
//     }
//   }
//   return array;
// }

// const planets = ['Earth', 'Mars', 'Venus'];

// for (const planet of planets) {
//   console.log(planet);
// }

// function createReversedArray() {
//   const arrayArguments = Array.from(arguments);
//   let reverseArray = [];
//   for (let i = arrayArguments.length - 1; i >= 0; i -= 1) {
//     reverseArray.push(arrayArguments[i]);
//   }
//   return reverseArray;
// }

// // const result = createReversedArray(1, 3, 6, 9);
// // console.log(result);

// // multiply(1, 2, 3);

// const multiply = function (x, y, z) {
//   console.log(x * y * z);
// };

// // ✅ Працює виклик після оголошення
// multiply(4, 5, 6);
