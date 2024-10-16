// Задачки та кахут по блендеду (модуль 3 та 4)

const numbers = [1, 4, 6];
numbers.length = 0; // цією операцією ми очищуємо масив, робимо його порожнім
console.log(numbers[0]); // undefined

const a = [10];
const b = a;
a[0] = 21;
console.log(a === b); // true. Бо масиви передаються і зберіга.ться за посиланням. Виходить, що  в констатнту b ми записати посилання на  масив а.
// Тобто a і b містять посилання на один і той же масив і відповідно, якщо ми вносимо зміни в масив, то ці зміни відображаються в обох константах.

let k = 10;
let c = k;
k = 21;
console.log(k === c); // false. Число-це простий тип даних. Прості типи даних зберігаються за значенням. Тому в змінну c в нас просто запишеться
// число 10 (значення змінної k). Про подальшу долю змінної k змінна c нічого знати не буде. Вони взагалі нічого один про одного більше не знають.

// Що повертає метод push()?

const pets = ['cat', 'rabbit'];
console.log(pets.push('parrot')); // 3

// Метод push() повертає оновлену(після пуша) довжину масива.

// Метод splice() мутує масив? Так. За доп цього методи ми можемо видаляти або додавати елементи до масиву мутуючи його.

const colors = ['grey', 'yellow', 'black'];
console.log(colors.splice(1, 0, 'red')); // додаємо колір ред другий елементом масиву. В цьому випадку метод splice() повертає []
console.log(colors); // ['grey', 'red', 'yellow', 'black'];
console.log(colors.splice(0, 1)); // видаляємо 1 елемент з індексом 0. Метод повертає масив з видаленими елементами -> ['grey']
console.log(colors); // ['red', 'yellow', 'black']

// Питання: якщо метод splice() не видаляє якісь елементи масиву, що він повертає. Н-д, якщо ви вказали не існуючий індекс, або не видаляєте,
// а додаєте новий елемент до масиву.
console.log(colors.splice(10, 0)); // повертає []

// Метод splice() повертає два випадки: або масив видалених елементів - якщо щось видалив. Або пустий масив, якщо нічого не видалив.

// Що повертає метод concat()?

console.log(pets.concat(colors)); // новий об'єднаний масив ['cat', 'rabbit', 'red', 'yellow', 'black']

// Що повертає метод slice()?

const flowers = ['sunflower', 'rose', 'lavanda'];
console.log(flowers.slice(0, 2)); // повертає новий масив, що містить копію елементів початкового масиву ['sunflower', 'rose']

// Що повертає метод pop() якщо масив порожній?

const cities = ['Odessa', 'Kyiv', 'Lviv'];
console.log(cities.pop()); // повернув елемент, який видалив з масиву (останній елемент маисву) -> 'Lviv'
console.log(cities); // ['Odessa', 'Kyiv']

const emptyArr = [];
console.log(emptyArr.pop()); // undefined

// Якщо після return нічого нема і функція викликається, то повернеться undefined

// Специфічний приклад

const q = {};
const w = {};

const e = {
  a: 10,
  b: 20,
};

e[q] = 30; // тут ключем об'єкту e стає пустий об'єкт, а значенням ключа стає 30
e[w] = 40; // тут знову ключем об'єкту стає пустий об'єкт, але ключі в одному об'єкті мають бути унікальними,тому попередній ключ-об'єкт перезаписується
//  і отримує значення 40.

console.log(e); //  {a: 10, b: 20, [object Object]: 40}

// -------------------------------------------------------------ЗАДАЧІ-----------------------------------------------------------------------

/* 
Напиши скрипт для об'єкта user послідовно:
1 додати поле mood зі значенням 'happy'
2 замінити hobby на 'skydiving'
3 замінити значення premium на false
4 виводить вміст об'єкта users у форматі ключ: значення використовуючи Object.keys() і for...of

*/

const user = {
  name: 'John',
  age: 20,
  hobby: 'tennis',
  premium: true,
};

// user.mood = 'happy';
user['mood'] = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const userKeys = Object.keys(user);

for (const key of userKeys) {
  console.log(`${key}: ${user[key]}`);
}

for (const item in user) {
  console.log(item);
} // цикл for..in перебирає лише ключі об'єкту

// --------------------------------------------------------------------------------------------------------------------------------------------

/* 
Напиши функцію, яка приймає об'єкт і рахує загальну суму зарплат працівників
*/
const someObj = {
  worker1: 360,
  worker2: 750,
  worker3: 240,
};

function countSum(obj) {
  const values = Object.values(someObj);
  let total = 0;
  for (const item of values) {
    total += item;
  }
  return total;
}

console.log(countSum(someObj)); // 1350

// -----------------------------------------------------------------------------------------------------------------------------------------
/*
Напишіть ф-ію calcTotalPrice(someStones, stonesName), 
яка приймає масив об'єктів та рядок під назвою каменю.
Функція рахує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з об'єкта.
*/

const stones = [
  { name: 'Ізумруд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 6 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебень', price: 150, quantity: 100 },
];

function calcTotalPrice(someStones, stonesName) {
  for (const obj of someStones) {
    if (obj.name === stonesName) {
      return obj.price * obj.quantity;
    }
  }
  return 'There is no stone with such name';
}

console.log(calcTotalPrice(stones, 'Щебень'));
console.log(calcTotalPrice(stones, 'hjhjh'));
console.log(calcTotalPrice(stones, 'Діамант'));

//------------------------------------------------------------------------------------------------------------------------------------------

/*
Напишіть функцію, яка приймає масив об'єктів і повертає новий масив. 
Зробіть знижку 20% на всі фрукти у масив. 
Надайте id для кожного продукту.
*/

const fruits = [
  { name: 'apple', price: 200 },
  { name: 'orange', price: 300 },
  { name: 'grapes', price: 750 },
];

// function createNewObj(obj) {
//   const copyOfFruits = [...obj];

//   for (const item of copyOfFruits) {
//     item.price = item.price - item.price * 0.2;
//     item.id = copyOfFruits.indexOf(item);
//   }
//   return copyOfFruits;
// }

// console.log(createNewObj(fruits));

// або інший метод

function createNewObj(obj) {
  const newArray = [];
  let id = 1;
  for (const item of obj) {
    const newItem = { ...item, price: item.price * 0.8, id };
    newArray.push(newItem);
    id += 1;
  }
  return newArray;
}

console.log(createNewObj(fruits));
console.log(fruits);

// -------------------------------------------------------------------------------------------------------------------------------------------
/* 
Є масив arr. Написати функцію, яка поверне рядок "JS is the BEST".
Для цього: 
 розвернути масив,
 вирізати foo,
 перевести його в рядок розділений пробілами,
  Масив arr не має мутуватись


*/

const arr = ['BEST', 'the', 'foo', 'is', 'JS'];

// function createString(arr) {
//   const reversedArr = [...arr].reverse();
//   const indexOfFoo = reversedArr.indexOf('foo');
//   reversedArr.splice(indexOfFoo, 1);

//   return reversedArr.join(' ');
// }

// console.log(createString(arr));
// console.log(arr);

// Запис в один рядок від ментора Зозулі

function createString(arr) {
  // const copyArr = [...arr]; XXXXXXXX окрему копію створювати нетреба, бо метод slice() сам створює копію, він повертає новий масив з необх значеннями

  return arr
    .slice(0, arr.indexOf('foo'))
    .concat(arr.slice(arr.indexOf('foo') + 1))
    .reverse()
    .join(' ');
}

console.log(createString(arr));
console.log(arr);

// джуе важливо розуміти, що робить кожен метод. Якийсь одразу мутує масив, якийсь створює копію.
// наприклад, якщо ти зробиш копію масиву і до копії почнеш застос метод splice() і далі реверс і джоін, то вже сам splice() поверне тобі
// видалений елемент і далі все буде застосовуватись до цього елементу, а не масиву і все піде нетак.

/*

*/

function isCapasityEnough(product, containerSize) {
  const amountsArray = Object.values(product);
  let total = 0;
  for (const number of amountsArray) {
    total += number;
  }

  return containerSize >= total;
}

console.log(isCapasityEnough({ apples: 10, peaches: 5 }, 20));
console.log(isCapasityEnough({ apples: 30, peaches: 5 }, 20));
console.log(isCapasityEnough({ apples: 10, peaches: 10 }, 20));

console.log(isCapasityEnough({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

// -------------------------------------------------------------------------------------------------------------------------------------------

// Порахувати середню к-ть калорій

function calcAverageCalories(days) {
  let total = 0;
  for (const obj of days) {
    if (obj.hasOwnProperty('calories')) {
      total += obj.calories;
    }
  }

  return total ? total / days.length : 0;
}

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 3010 },
    { day: 'tuesday', calories: 3200 },
    { day: 'wednesday', calories: 3120 },
    { day: 'thursday', calories: 2900 },
    { day: 'friday', calories: 3450 },
    { day: 'saturday', calories: 3280 },
    { day: 'sunday', calories: 3300 },
  ])
); // 3180

console.log(calcAverageCalories([])); // 0

// -----------------------------------------------------------------------------------------------------------------------------------------------

const profile = {
  username: 'Jacob',
  playTime: 300,
  changeUsername(newName) {
    this.username = newName;
  },
  updatePlayTime(hours) {
    this.playTime = this.playTime + hours;
  },
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
