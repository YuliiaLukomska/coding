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
// otherShowTag(); // Uncaught TypeError: Cannot read properties of undefined (reading 'tag')
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

// --Задача--
// Напишіть ф-ю, яка приймає масив об'єктів і повертає новий масив. Зробіть знижку 20% на всі фрукти у масиві. Надайте id для кожного продукту.

const fruits = [
  { name: 'apple', price: 200 },
  { name: 'orange', price: 300 },
  { name: 'grapes', price: 750 },
];

// const updateFruits = fruitsArray => {
//   return fruitsArray.map((item, index) => {
//     return { ...item, price: item.price * 0.8, id: index + 1 };
//   });
// };

// console.log(updateFruits(fruits));

// Щоб скоротити запис рішення можна зробити неявне повернення стрілочної функції.
// В методі map треба додати круглі дужки, щоб фігурні дужки об'єкта? який повертається, не сприймались як дужки для return.

const updateFruits = fruitsArray =>
  fruitsArray.map((item, index) => ({
    ...item,
    price: item.price * 0.8,
    id: index + 1,
  }));

console.log(updateFruits(fruits));

// Поверніть об'єкт в якому вказано кількість тегів.
// Очікуваний результат {js: 3, nodejs: 3, css: 2, react: 2}

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const createObj = array => {
  const arrayOfTags = array.flatMap(item => item.tags);

  const obj = arrayOfTags.reduce((accum, item, index) => {
    return { ...accum, [item]: accum[item] ? accum[item] + 1 : 1 };
  }, {});
  // якщо в акумуляторі є вже такий тег, то збільш його на 1, якщо нема, то його значенням буде 1.
  return obj;
};

console.log(createObj(tweets));

// ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']
// Очікуваний результат {js: 3, nodejs: 3, css: 2, react: 2}

const dates = {
  Monday: new Date('2023-05-12'),
  Tuesday: new Date('2020-02-22'),
  Wednesday: new Date('2025-05-05'),
  Thursday: new Date('2024-12-12'),
  Friday: new Date('2022-02-02'),
  Saturday: new Date('2026-11-11'),
};

// function updateDates(obj) {
//   const array = [];
//   for (const day in obj) {
//     console.log(obj[day]);
//     if (obj[day] > new Date()) {
//       array.push(day);
//     }
//   }
//   return array;
// }

// console.log(updateDates(dates));

function updateDates(obj) {
  const objKeys = Object.keys(obj);
  const actualDates = objKeys.filter(item => obj[item] > new Date());
  return actualDates.toSorted((a, b) => obj[a] - obj[b]);
}

console.log(updateDates(dates));

// task-1 hw module 6

const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// task-2

class Storage {
  #items;
  constructor(items) {
    this.#items = items;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    if (this.#items.indexOf(itemToRemove) > 0) {
      this.#items.splice(this.#items.indexOf(itemToRemove), 1);
    }
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// task-3
class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value = this.#value + str;
  }
  padStart(str) {
    this.#value = str + this.#value;
  }
  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="

// ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']
// Очікуваний результат {js: 3, nodejs: 3, css: 2, react: 2}

const tags = [
  'js',
  'nodejs',
  'html',
  'css',
  'html',
  'js',
  'nodejs',
  'css',
  'react',
  'js',
  'nodejs',
  'react',
];

const object = tags.reduce((accum, item, index, array) => {
  return { ...accum, [item]: accum[item] ? accum[item] + 1 : 1 };
}, {});
console.log(object);

const tweets2 = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// Очікуваний результат {js: 3, nodejs: 3, css: 2, react: 2}

function createObj2(array) {
  return array.reduce((accum, item) => {
    item.tags.forEach(tag => {
      accum[tag] = accum[tag] + 1 || 1;
      console.log(accum);
    });

    return accum;
  }, {});
}

console.log(createObj2(tweets2));
