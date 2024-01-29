console.log(+'1' + '1' + '2'); // 112
console.log('A' - 'B' + 2); // NaN
console.log('A' - 'B' + 'A' + 3); // NaNA3

console.log(String); // function
console.log(Number); //function

console.log(typeof null == 'object');

// порядок виведення в консоль: // 1 3 2
console.log(1);
setTimeout(() => {
  console.log(2);
}, 1000);
console.log(3);

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
