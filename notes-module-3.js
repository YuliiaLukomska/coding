// ----------------------------Масиви----------------------------------------------------------------------------------------------------
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

const lastElement = fruits[fruits.length - 1];
console.log(lastElement); // pineapple

// Присвоєння за посиланням і за значенням
/*
Фундаментальною відмінністю складних типів від примітивів є те, як вони зберігаються і копіюються.

Усі примітивні типи присвоюються за значенням, тобто створюється копія.

let a = 5;

let b = a;  // відбувається присвоєння за значенням, грубо кажучи ти просто присвоїла змінній b число 5.
console.log(a); // 5
console.log(b); // 5
// Присвоєння за значенням, у пам'яті буде створено ще
// одну ячейку, в яку буде скопійовано значення 5, а не адресу змінної a. Тобто b тепер абсолютно незалежна змінна,яка має значення 5 і нічого
// більше не знає про долю змінної a. 

// Змінимо значення a
a = 10;
console.log(a); // 10
console.log(b); // 5 Значення b не змінилося, оскільки це окрема копія


// Масиви (складний тип) присвоюються за посиланням, тобто змінна просто отримує посилання (покажчик у пам'яті) на вже існуючий масив.

const a = ["Mango", "Poly"];
const b = a;
console.log(a); // ["Mango", "Poly"]
console.log(b); // ["Mango", "Poly"]

Оскільки a це масив, у b записується посилання на вже наявний у пам'яті масив. Тепер a і b вказують на один і той самий масив.

const a = ["Mango", "Poly"];
const b = a;
console.log(a); // ["Mango", "Poly"]
console.log(b); // ["Mango", "Poly"]

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
- Метод split(delimiter)
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


- Метод join()
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



*/
