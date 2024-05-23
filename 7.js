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

//-----------------------------------------------------------------------------------------------------------------------------------------------
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
  // 2. метод forEach перебирає масив і до кожного елемента масива виконує колбек-фунцію. Завжди повертає undefined.
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
console.log(resultCalculateTotalPrice); // 21

const arrayOfNumbers = [3, 7, 10, 12];
const evenNumber = arrayOfNumbers.filter(item => item % 2 === 0);
console.log(evenNumber); // [10, 12] 3. метод filter() використовується для пошуку всіх значень, що задовільняють умову.

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

//4. метод find() - повертає перше значення, яке задовільняє умову, після чого перебирання масиву припиняється.
// якщо жоден елемент не задовільнив умову, то повертає undefined.

const words = ['apple', 'fox', 'dog'];
const smallWord = words.find(item => item.length <= 3);
console.log(smallWord); // 'fox'

//5. метод every() - повертає true, якщо ВСІ елементи задовільнили умову колбек-функції та повертає false,якщо хоча б один елемент повернув false і одразу перебір масиву припиняється.

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

//6. метод some() перевіряє чи задовольняє хоча б один елемент умові колбек-функції.Якщо так, то повертає true. Перебирання припиняється,якщо колбек повертає true. Якщо жоден елемент масиву не задовольняє умову колбека,тоді певертається false.

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
//7. метод reduce() застосовується для послудівної обробки кожного елементу масиву із збереженням проміжного результату. Цей метод має початкове значення акумулятора та акумулятор.
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
const letters = ['b', 'B', 'a', 'A', 'c', 'C'];
console.log(letters.toSorted()); // ["A", "B", "C", "a", "b", "c"]
// метод toSorted() не змінює вихідний масив.

// Свій порядок сортування чисел. Для цього викор. метод toSorted(compareFunction) з колбек функцією, яка буде порівнювати два значення.
const scores = [93, 27, 45, 87, 11, 3];
const ascending = scores.toSorted((a, b) => a - b);
// колбек функція буде порівнювати два значення,і якщо різниця буде від'ємна,тобто а менше за b, тоді a поставлять перед b.
// Таким чином масив відсортується за зростанням.
console.log(ascending); // [3, 11, 27, 45, 87, 93]
const descendingg = scores.toSorted((a, b) => b - a);
// в цьому випадку,якщо b більше за a, то воно буде стояти перед а. Відбудеться сортування за спаданням.
console.log(descendingg); // [93, 87, 45, 27, 11, 3]

//для сортування рядків викор метод localCompare() -> firstString.localCompare(secondString);
const students2 = ['Jacob', 'Artemis', 'Solomon', 'Adrian', 'Kai', 'Ganymede'];

const inAlphabetOrder = students2.toSorted((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

const inReversedOrder = students2.toSorted((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

const students3 = [
  { name: 'Mango', score: 83 },
  { name: 'Poly', score: 59 },
  { name: 'Ajax', score: 37 },
  { name: 'Kiwi', score: 94 },
];
/* Необхідно відсортувати масив об'єктів за трьома різними сценаріями:
за зростанням кількості балів
за спаданням кількості балів
за ім'ям студента в алфавітному порядку*/

const ascendingScore = students3.toSorted(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);
console.log(ascendingScore);

const descendingScore = students3.toSorted(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);
console.log(descendingScore);

const alphaberOrder = students3.toSorted((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);
console.log(alphaberOrder);

const schoolchildren = [
  { name: 'Mango', score: 83, courses: ['mathematics', 'physics'] },
  { name: 'Poly', score: 59, courses: ['science', 'mathematics'] },
  { name: 'Ajax', score: 37, courses: ['physics', 'biology'] },
  { name: 'Kiwi', score: 94, courses: ['literature', 'science'] },
];

/*
 Необхідно отримати масив їхніх імен, відсортованих за зростанням балів за тест.
*/

const answer = schoolchildren
  .toSorted((firstChild, secondChild) => firstChild.score - secondChild.score)
  .map(item => item.name);

console.log(answer); // ['Ajax', 'Poly', 'Mango', 'Kiwi']
// Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.

const answer2 = schoolchildren
  .flatMap(item => item.courses)
  .filter((item, index, array) => array.indexOf(item) === index)
  .toSorted((a, b) => a.localeCompare(b));

// Метод indexOf() буде шукати індекс першого елемента з такою назвою. Таким чином, indexOf('mathematics') завжди буде = 0, а от значення індексу буде змінюватись і для математики буде 0 та 3. І відповідно 0 !== 3. Тому відфільтрується лише унікальне значення.

// this
function foo() {
  console.log('this -', this);
}

foo(); // this - undefined

const book = {
  updateTitle(newTitle) {
    // ...
  },
};
const update = book.updateTitle;
const res = update('Lord Of The Rings');
console.log(res); // undefined
