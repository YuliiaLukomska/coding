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

console.log(dog);
const dog = 1;
