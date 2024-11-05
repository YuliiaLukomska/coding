// Метод array.prototype.forEach() нічого не повертає, а просто перебирає масив. Якщо зберегти результат виконання методу в змінну, то він
// поверне undefined

const numbers = [5, 6, 7, 8, 9];

numbers.forEach(
  function (number) {
    console.log(this.a);
  },
  { a: 'I`m the second argument of the method' }
);
// 5 разів виведеться речення 'I`m the second argument of the method'
// В цьому випадку об'єкт буде другим аргументом методу forEach() і функція (яка є першим аргументом), буде виконуватись в констексті цього об'єкту.
// І буде виведено п'ять разів, бо метод forEach() проходиться по всьому масиву до кінця.

const elements = [3, 2, 1, 0];

const newElements = elements.map(function (number) {});
console.log(newElements); // [undefined, undefined, undefined, undefined]

// Метод map повертає новий масив, такої ж довжини як вихідних масив, не мутуючи вихідний масив, але як елементи нового масиву він записує те,
// що повертає колбек функція. Якщо колбек функція поверне про 0, то кожним елементом нового масиву будуть нулі. В прикладі функція повертає
// undefined, бо нема return.

// Чи змінює початковий масив метод Array.prototype.sort()?

// Так, мутує
const array = [1, 0, 3, 2, 10];
const newArr = array.sort((a, b) => a - b);
console.log(array); // [0, 1, 2, 3, 10]
console.log(newArr); // [0, 1, 2, 3, 10]

// А метод toSorted() не мутує.
const arr2 = [1, 0, 5, 2, 4];
const newArr2 = arr2.toSorted((a, b) => a - b);
console.log(arr2); // [1, 0, 5, 2, 4]

const letters = ['a', 'B', 'b', 'A'].sort();
console.log(letters); // ['A', 'B', 'a', 'b']

const prices = [1000, 360, 20, 8503, 240].sort();
console.log(prices); // спочатку перетворюються в рядки і тоді сортуються по Юнікоду (посимвольно) -> [1000, 20, 240, 360, 8503]

// Геттери і Сеттери
const myObject = {
  _a: 100,
  get a() {
    return this._a;
  },
  set a(x) {
    this._a = x;
    return;
  },
};

myObject.a = 100500; //тут викликаємо сеттер і змінюємо значення _a на 100500
console.log(myObject.a); // а тут геттер і отримуєио 100500

console.log(Object.keys(function () {})); // [] Object.keys повертає або масив ключів або порожній масив.
// В Object.keys ми зазвичай передаємо об'єкт і отримуємо масив ключів цього об'єкту. Але функція це теж об'єкт, тому і її можна записати, в ній
// метод нічого не знаходить і повертає пустий масив.

// Функція, що повертається матиме доступ до всіх локальних змінних батьківської функції. Це називається замиканням.

const user = {
  tag: 'Mango',
  showTag() {
    console.log('showTag -> this', this.tag);
  },
};

const otherShowTag = user.showTag; // тут просто посилання на функцію. Контекст втрачено.
otherShowTag(); // Uncaught TypeError: Cannot read properties of undefined (reading 'tag')
// Можна використати метод bind, щоб прив'язати контекст об'єкту до функції і тоді в otherShowTag  буде записана нова функція з контекстом.

// Що буде виведено в консоль?

let user3 = {
  firstName: 'Poly',
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  },
};
console.log(user3.sayHi()); // 'Poly'. this в стрілкових функціях визначається місцем оголошення стрілкової функції і посилається на
// батьківську область видимості місця, де було оголошено стрілкову функцію - в прикладі виходимо на одні фігурні дужки назад  і
// це буде об'єкт user3.
