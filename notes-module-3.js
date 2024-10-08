// ----------------------------Масиви----------------------------------------------------------------------------------------------------

// Масив — це впорядкована структура даних, яка використовується для зберігання колекції елементів.
// Масиви можуть містити елементи різних типів даних, таких як числа, рядки, булеві значення тощо.

const fruits = ['mango', 'apple', 'orange', 'strawberry', 'pineapple'];

const apple = fruits[1];
console.log(apple);

// Ми маємо можливість перевизначати значення елементів масиву. Н-д

fruits[0] = 'plum';
console.log(fruits); // ['plum', 'apple', 'orange', 'strawberry', 'pineapple'];

// Важливо розуміти, що ми не змінили саму змінну fruits, вона, як і раніше, містить масив. Ми просто змінили значення всередині цього масиву.
// Перевизначення елементів масиву дозволяє нам оновлювати дані та модифікувати масив під час виконання програми.
// Це корисно, коли в нас є масив даних і ми хочемо змінити або оновити певне значення.

//  Довжина масиву
const fruitsLength = fruits.length;
console.log(fruitsLength); // 5

// Індекс останнього елемента масиву
const lastElementIndex = fruits.length - 1;
console.log(lastElementIndex); // 4

const lastElement = fruits[lastElementIndex];
console.log(lastElement); // pineapple

// Присвоєння за посиланням і за значенням
/*
Фундаментальною відмінністю складних типів від примітивів є те, як вони зберігаються і копіюються.

Усі примітивні типи присвоюються за значенням, тобто створюється копія. !

let a = 5;

let b = a;  // відбувається присвоєння за значенням, грубо кажучи ти просто присвоїла змінній b число 5.
console.log(a); // 5
console.log(b); // 5

Присвоєння за значенням: у пам'яті буде створено ще одну ячейку з назвою b, в яку буде скопійовано значення 5, а не адресу змінної a. 
Тобто b тепер абсолютно незалежна змінна, яка має значення 5 і нічого більше не знає про долю змінної a. 

 Змінимо значення a
a = 10;
console.log(a); // 10
console.log(b); // 5 Значення b не змінилося, оскільки це окрема копія

// Масиви (складний тип) присвоюються за посиланням, тобто змінна просто отримує посилання (покажчик у пам'яті) на вже існуючий масив.

const a = ["Mango", "Poly"];
const b = a;
console.log(a); // ["Mango", "Poly"]
console.log(b); // ["Mango", "Poly"]

Оскільки a це масив, у b записується посилання на вже наявний у пам'яті масив. Тепер a і b вказують на один і той самий масив.

a[1] = "Jacob";
console.log(a); // ["Mango", "Jacob"]
console.log(b); // ["Mango", "Jacob"]

Те, що зберігається в b, також змінилося, тому що b, як і a, просто містить посилання на одне й те саме місце в пам'яті — масив.
Результат повторюється, якщо використовувати посилання у змінній b для зміни масиву.

const a = ["Mango", "Poly"];
const b = a;
console.log(a); // ["Mango", "Poly"]
console.log(b); // ["Mango", "Poly"]

a[1] = "Jacob";
console.log(a); // ["Mango", "Jacob"]
console.log(b); // ["Mango", "Jacob"]

b[0] = "Ajax";
console.log(a); // ["Ajax", "Jacob"]
console.log(b); // ["Ajax", "Jacob"]

Два масиви ніколи не дорівнюють один одному, навіть якщо вони порожні або в них однакові елементи.

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arr1 === arr2); // false
console.log([] === []); // false


const arr1 = [1, 2, 3];
const arr2 = arr1;
arr1[1] = 1;
arr2[2] = 1
console.log(arr2); // [1, 1, 1]

*/

// Приведення типів: масиви.
/*
Масив -> Рядок

При перетворенні масиву в рядок усі елементи масиву об'єднуються в один рядок, розділений комами, без пробілів.

const array = [1, 'hello', true];
const string = String(array);
console.log(string); // '1,hello,true';

Масив → Число
При перетворенні масиву в число алгоритм складається з двох кроків:
1) спочатку масив приводиться до рядка,
2) а потім цей рядок приводиться до числового значення.

console.log(Number([])); // String([]) -> ''; Number('') -> 0;
console.log(Number([1])); // 1
console.log(Number([1, 2, 3])); // NaN

Масив → Логічне значення (буль)
При перетворенні масиву в логічне значення будь-який масив, навіть порожній, перетворюється на true.
const emptyArray = [];
const nonEmptyArray = [1, 2, 3];

console.log(Boolean(emptyArray)); // true
console.log(Boolean(nonEmptyArray)); // true

const array= [false];
const result = array ? "A" : "B";
console.log(result) // 'A'

*/

// Методи масиву
/*
- Метод split(delimiter) - це метод рядків!
Дозволяє перетворити рядок на масив, розбивши його за вказаним роздільником(delimiter);
Якщо роздільник є порожнім рядком (рядком, у якому нема символів), то вийде масив окремих символів рядка. 
Роздільником може бути один або кілька символів. Результат роботи методу можна зберегти у змінну для подальшого використання.

const name = "Mango";
const letters = name.split("");
console.log(letters); // ["M", "a", "n", "g", "o"]

const message = "JavaScript essentials";
const words = message.split(" ");
console.log(words); // ["JavaScript", "essentials"]

const slug = "amazing-french-recipes";
const slugParts = slug.split("-");
console.log(slugParts); // ["amazing", "french", "recipes"]

const sentence = 'apartment is awfull';
console.log(sentence.split('a'));  // ['', 'p', 'rtment is ', 'wfull']


**Метод join()**
Метод масиву join(delimiter) дозволяє об'єднати елементи масиву в рядок.
У результуючому рядку елементи будуть розділені символом або групою символів, зазначених у delimiter.

const array = ['a', 'b', 'c'];
const arrayJoin = array.join('-');
console.log(arrayJoin); // 'a-b-c'

const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing'
console.log(words.join(" ")); // 'JavaScript is amazing'
console.log(words.join("-")); // 'JavaScript-is-amazing'

Метод join() корисний за необхідності перетворення масиву в рядок з певними роздільниками між елементами. 
Наприклад, нам потрібно написати функцію, яка перетворює рядки зі snake_case (зміїної нотації з підкресленнями) в kebab-case (нотацію з тире).

function changeFormat(snakeWord) {
  const splitWord = snakeWord.split('_'); // ['user', 'name']
  const kebabWord = splitWord.join('-'); // 'user-name'
  return kebabWord;
}

const result = changeFormat('user_name');
console.log(result); // user-name

**Метод slice(begin, end)**
Це метод масиву, який повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його. 
Копія створюється від індексу (begin), до, але не включаючи індекс end.

const ages = [23, 15, 17, 45, 60];
const agesSlice = ages.slice(0, 2);
console.log(agesSlice); // [23, 15]

const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets.slice(1, 3)); // ['Mars', 'Venus']

Якщо не вказати параметри begin і end, буде створено повну копію вихідного масиву.

const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets.slice()); // ["Earth", "Mars", "Venus", "Jupiter", "Saturn"]

Якщо не вказати end, копіювання відбуватиметься від begin до кінця масиву:

const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets.slice(1)); // ["Mars", "Venus", "Jupiter", "Saturn"]
console.log(planets.slice(2)); // ["Venus", "Jupiter", "Saturn"]

Якщо значення begin негативне, а end не вказано, будуть скопійовані останні begin елементів (тобто стільки елементів з кінця, 
скільки вказано в параметрі begin):

const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets.slice(-2)); // ["Jupiter", "Saturn"]

Метод slice() корисний, коли необхідно отримати підмасив із вихідного масиву або створити його копію для подальшої роботи з ним.

**Метод concat(arr1, arr2....arrN)**
Використовується для об'єднання двох або більше масивів.

const firstArray = ['cat', 'dog'];
const secondArray = ['parrot', 'rabit'];
const pets = firstArray.concat(secondArray);
console.log(pets); // ['cat', 'dog', 'parrot', 'rabit']

Зверни увагу, що вихідні масиви firstArray і secondArray залишаються незмінними після виклику concat(). 
Метод concat() створює і повертає новий масив, що містить усі елементи об'єднаних масивів.

Порядок аргументів методу визначає порядок розташування елементів у новому масиві.

const firstArray = ["Mercury", "Venus"];
const secondArray = ["Mars", "Jupiter"];
const thirdArray = ["Saturn", "Neptune"];

console.log(firstArray.concat(secondArray, thirdArray)); 
// ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Neptune'];

**Метод indexOf(elem)**
Це метод масиву, який використовується для визначення індексу першого входження елемента elem у масив. 
Він повертає індекс елемента, якщо він знайдений, або -1, якщо елемент не знайдений. 
Метод indexOf() виконує сувору рівність (===) при порівнянні елементів.
Синтаксис: array.indexOf(elem)

const seasons = ['winter', 'spring', 'summer', 'autumn'];
console.log(seasons.indexOf('winter')); // 0
console.log(seasons.indexOf('Winter')); // -1
console.log(seasons.indexOf('hot')); // -1

const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
console.log(clients.indexOf("Poly")); // 2   перше входження рядка 'Poly' у масиві, всі наступні входження вже не будуть аналізуватися
console.log(clients.indexOf("Monkong")); // -1

**Метод push()**
Це метод масиву, який використовується для додавання одного або більше елементів у кінець масиву.
Синтаксис методу: array.push(element1, element2, ..., elementN);

const items = ['bananas', 'sour cream', 'bread'];
console.log(items.push('toothpaste')); // 4   зверни увагу!
console.log(items); // ['bananas', 'sour cream', 'bread', 'toothpaste'];

const planets = ["Earth", "Mars", "Venus"];

planets.push("Jupiter");
console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

planets.push("Saturn", "Neptune");
console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]

За допомогою циклу ми можемо виконувати повторювані операції і використовувати метод push для додавання нових елементів у масив на кожній 
ітерації. Це дуже корисно, коли нам потрібно створити масив з елементами, які можна динамічно додавати.

const array = [];
for (let i = 1; i <= 3; i++) {
  array.push(`items-${i}`);
}
console.log(array); // ['items-1', 'items-2', 'items-3']

**Метод includes()**
Використовується для перевірки наявності певного елемента в масиві. Він повертає логічне значення true, якщо елемент знайдено і false якщо 
елемент відсутній.
Синтаксис: array.includes(element);

const guestsNumbers = [1, 7, 8, 23];
console.log(guestsNumbers.includes(8)); // true
console.log(guestsNumbers.includes(2)); // false

*/

// Ітерація по масиву

/* 
Ітерація по масиву з викор циклу for дозволяє перебрати елементи масиву і виконати певну дію для кожного елементу.
У прикладі нижче масив містить назви продуктів, і цикл for використовується для виведення кожного елемента в консоль.

const items = ['grain', 'butter', 'milk'];
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

- Цикл for...of
це зручний спосіб перебору масиву. Тіло циклу буде виконуватись на кожному елементі масиву. Це гарна заміна циклу for, якщо не потрібний
доступ до лічильника.
Синтаксис:
for (const element of array) {
  // тіло циклу
}
  Де:
  - element — це змінна, в яку на кожній ітерації буде записуватися поточний елемент масиву.
  - array — це вихідний масив, який ми хочемо перебрати.

const filters = ['black', 'white', 'grey', 'beige'];
for (const arrayElement of filters) {
  console.log(arrayElement); // в консолі один за один виведуться елементи масиву: 'black' 'white' 'grey' beige'
}

Цикл for...of завжди перебирає масив від першого і до останнього елемента, задати умову припинення циклу не можна. 
Якщо необхідно закінчити виконання циклу передчасно, використовується вже знайомий оператор break.

*/

// Функції (частина 2)
/*
Псевдомасив arguments
Доступ до списку всіх аргументів можна отримати за допомогою спеціальної змінної arguments.
Коли ти викликаєш функцію з агрументами, arguments автоматично створюється всередині цієї функції і заповнюється переданими значеннями аргументів.

function sum(a, b) {
  console.log(arguments); // псевдомасив [2, 8]
  return a + b;
}

sum(2, 8);

У цьому прикладі при виклику функції sum(2, 8) зберуться всі передані аргументи (числа 2 і 8) і запишуться як елементи колекції 
псевдомасиву arguments.
Ця колекція схожа на масив, але насправді є псевдомасивом, тобто:
-у неї є деякі властивості масивів, наприклад length;
-у неї є можливість звернутися до елемента за індексом;
-у неї немає методів для роботи з масивом;
-її можна перебирати за допомогою циклів.



*/
