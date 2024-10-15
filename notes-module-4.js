// -------------------------------------------------ОБ'ЄКТИ------------------------------------------------------------------------------------
/*
Об'єкти дозволяють описати та згрупувати характеристики об'єктів реального світу, наприклад, користувач, книга, продукт магазину — чого завгодно.
Об'єкти ще називають словниками, тобто вони містять терміни (властивості) та їх визначення (значення).

const apartment = {
  descr: 'Spacious apartment in the city center',
  rate: 8,
  price: 2345,
  tags: ['top', 'promo', 'extraLarge', 'center'],
};

Вкладені властивості
Значенням властивості може бути інший об'єкт. Це використовується для зберігання вкладених і згрупованих даних.

const user = {
  name: 'Olga',
  location: {
    country: 'Ukraine',
    city: 'Kyiv',
  },
  stats: {
    likes: 1230,
    followers: 345,
  },
};

Доступ до властивостей через крапку
Перший спосіб отримати доступ до властивості об'єкта — це синтаксис objectName.key.
- На місце звернення буде повернуте значення властивості з таким ключем.
- Якщо в об'єкті відсутня властивість з таким ключем, на місце звернення повернеться undefined.

Здебільшого синтаксис «через крапку» використовується тоді, коли ми заздалегідь знаємо ім'я (ключ) властивості, до якої хочемо отримати доступ.

const book = {
  name: 'Hercule Poirot',
  author: 'Agatha Cristie',
  genres: ['novels', 'detectives'],
  rate: 8.1,
};

const bookName = book.name;
console.log(bookName); // 'Hercule Poirot'

Доступ до вкладених властивостей
Для доступу до вкладених властивостей використовується ланцюжок звернень «через крапку».
Якщо значення властивості — це вкладений об'єкт, до доступ до значення властивості отримуємо через крапку.

const user = {
  name: 'Jacob',
  tag: 'jcob',
  location: {
    country: 'Ukraine',
    city: 'Lviv',
  },
};

const location = user.location;
console.log(location); // {country: 'Ukraine', city: 'Lviv', }
const userCity = user.location.city;
console.log(userCity); // 'Lviv;

Якщо значення властивості це масив, то доступ до масиву отримуємо через крапку, а доступ дотелементу масиву - через квадратні дужки 
та індекс array[index]:

const user = {
  name: 'Jacob',
  tag: 'jcob',
  location: {
    country: 'Ukraine',
    city: 'Lviv',
  },
  hobbies: ['tennis', 'piano', 'gardening'],
};

console.log(user.hobbies[0]); // 'tennis'

Також можна використовувати властивості й методи масиву, наприклад отримати значення його довжини з властивості length: user.hobbies.length;

Доступ до властивостей через квадратні дужки

Другий спосіб отримати доступ до властивості об'єкта — це синтаксис objectName['key'].
Зазвичай використовується, коли ім'я властивості наперед невідоме або зберігається в змінній, н-д к параметр функції.

const car = {
  year: 2008,
  name: 'Voltswagen',
  rate: 8.3,
};

const objectValue = 'rate';
console.log(car.objectValue); // undefined. В цьому випадку інтерпретатор шукає в об'єкті властивість 'objectValue' -а такої нема.
console.log(car[objectValue]); // тут замість objectValue підставляється 'rate' -> car['rate'] -> інтерпретатор шукає вл-ть rate, вона є, тому
// він виводить значення 8.3

Зміна значення властивостей
Після того як об'єкт створений, значення його властивостей можна змінити.
Для цього необхідно звернутися до них за ключем, наприклад, «через крапку», і присвоїти нове значення.

Додавання властивостей

Операція додавання нової властивості після створення об'єкта нічим не відрізняється від зміни значення вже існуючої властивості.

Якщо під час запису значення за ключем така властивість відсутня в об'єкті, вона буде створена.

const car = {
  year: 2008,
  name: 'Voltswagen',
  rate: 8.3,
};

car.owners = 3;
// car.descr.type = 'automatic'; // так буде помилка, бо властивості descr зараз нема у об'єкті.
car.descr = {};
car.descr.type = 'automatic'; // тепер все буде ок
car.descr.wheels = 4;

console.log(car);

Короткі властивості
Іноді під час створення об'єкта значення властивості необхідно взяти зі змінної або параметра функції з таким самим ім'ям, 
як і сама властивість.

const name = "Henry Sibola";
const age = 25;

const user = {
  name: name,
  age: age,
};

console.log(user.name); // "Henry Sibola"
console.log(user.age); // 25

Синтаксис коротких властивостей (shorthand properties) вирішує цю проблему, дозволяючи використовувати ім'я змінної як ім'я властивості,
 а її значення як значення властивості.

const name = "Henry Sibola";
const age = 25;

const user = {
  name,
  age,
};

console.log(user.name); // "Henry Sibola"
console.log(user.age); // 25

Тобто під час оголошення об'єкта достатньо вказати тільки ім'я властивості, а значення буде взято зі змінної з аналогічним ім'ям.

Обчислювальні властивості

Бувають ситуації, коли під час оголошення об'єкта необхідно додати властивість з ім'ям, яке ми заздалегідь не знаємо, тому що воно 
зберігається як значення змінної або як результат виконання функції.

const propName = "name";

const user = {
  age: 25,
};

user[propName] = "Henry Sibola";
console.log(user.name); // "Henry Sibola"

Синтаксис обчислювальних властивостей (computed properties) допомагає уникнути зайвого коду і в деяких випадках спростити його.

Значенням обчислювальної властивості може бути будь-який валідний вираз.

const propName = 'name';

const user = {
  age: 25,
  [propName]: 'Henry',
};

console.log(user.name); // 'Henry'

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};

-----------------------------------------------------------------------------------------------------------------------------------------------
Перебір об'єкта

Цикл for...in

const genesis = {
  name: 'IT-company',
  location: 'Kyiv',
  stack: ['JavaScript', 'TypeScript'],
  language: ['English', 'Ukrainian'],
};

function objectIteration(obj) {
  for (const key in obj) {
    console.log(key);
    console.log(obj[key]);
  }
}

objectIteration(genesis);

Метод Object.keys();
Object - це вбудований клас. І він має свої методи. Метод Object.keys(object) дозволяє отримати масив з ключами об'єкта. Якщо об'єкт не має
властивостей, то повернеться пустий об'єкт.

Метод Object.values()

const user = {
  name: 'Alex',
  age: 45,
};

console.log(Object.keys(user)); // ['name', 'age']

const userKey = Object.keys(user);

for (const key of userKey) {
  console.log(key);
  console.log(user[key]);
}


--------------------------------------------------------------------------------------------------------------------------------------------------

Масив об'єктів 

Пошук об'єкта за значенням властивості

function getAllPropValues(propName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];
  const productsName = [];
  for (const item of products) {
    if (item.hasOwnProperty(propName)) {
      productsName.push(item[propName]);
    }
  }
  return productsName;
}

console.log(getAllPropValues('name'));
console.log(getAllPropValues('category'));

--------------------------------------------------------------------------------------------------------------------------------------------------
Методи об'єкта 
Функції, які виступають властивостями об'єкта називають методами об'єкта.


const library = {
  books: ['Hercule Poirot', 'Hamlet', 'Eneida', 'Tygrolovy'],
  addBook(newBook) {
    this.books.push(newBook);
  },
  deleteBook(unnecessaryBook) {
    const index = this.books.indexOf(unnecessaryBook);
    console.log(index);
    if (index > -1) {
      this.books.splice(index, 1);
      console.log(this.books);
    }
  },
  showUpdatedBooks() {
    return this.books;
  },
};

library.deleteBook('Eneida');
console.log(library.showUpdatedBooks());
library.deleteBook('Dogs');
console.log(library.showUpdatedBooks());

Синтаксис spread і rest

Залишкові параметри - ...args. Коли кількість аргументів при виклику функції перевищує к-ть заданих параметрів, то залишкові аргументи
ми можемо зібрати в ...args. Це буде масив з залишковими аргументами. Тобто синтаксис ...args або ...rest дозволяє зібрати групу незалежних 
елементів у масив.

function sum(x, y, ...args) {
  console.log(x + y);
  console.log(args);
}

sum(2, 6, 10, 4); // 8 [10, 4]
sum(3, 9); // 12  []



function foo(...args) {
	console.log(args);
}
foo("a", "b"); // ['a', 'b']

Наприклад в тебе завдання: напиши ф-ю,яка приймає довільну к-ть аргументів і повертає їх суму.

const sum = function (...rest) {
  let total = 0;
  for (const item of rest) {
    total += item;
  }
  return total;
};

console.log(sum(1, 2, 3, 4, 5, 6, 6, 7, 8, 9));  // 51

Склеювання та копіювання масивів за доп оператора ...spread (див hints)

Створення об'єкта

Операція spread дозволяє розпилити властивості довільної кількості об'єктів в один новий.
Порядок має значення, оскільки в об'єкті не може бути два однакових ключа, тому вони просто перезапишуться. 


const first = { propA: 5, propB: 10 };
const second = { propC: 15, propB: 3 };
const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 3, propC: 15 }



*/

const students = {
  firstStudent: 'Olya',
  secondStudent: 'Katia',
};

const students2 = {
  thirdStudent: 'Max',
  firstStudent: 'Yuliia',
};

const mix = { ...students, ...students2 };

console.log(mix);
