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
-----------------------------------------------------------------------------------------------------------------------------------------------

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
-----------------------------------------------------------------------------------------------------------------------------------------------

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
Метод масиву join(delimiter/розділювач) дозволяє об'єднати елементи масиву в рядок.
У результуючому рядку елементи будуть розділені символом або групою символів, зазначених у delimiter. 
Тобто замість коми ми ставимо вказаний розділювач і склеюємо елементи масиву у рядок.

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

Для того щоб зробити копію масиву найчастіше викор оператор spread(), або Array.from().

The shift() method of Array instances removes the first element from an array and returns that removed element. 
This method changes the length of the array.

const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1


The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]

Метод pop() використовують для видалення останнього елемента масиву.

const cities = ['Odessa', 'Kyiv', 'Lviv'];
console.log(cities.pop()); // повернув елемент, який видалив з масиву (останній елемент масиву) -> 'Lviv'
console.log(cities); // ['Odessa', 'Kyiv']

Метод splice() мутує масив? Так. За доп цього методи ми можемо видаляти або додавати елементи до масиву мутуючи його.

const colors = ['grey', 'yellow', 'black'];
console.log(colors.splice(1, 0, 'red')); // додаємо колір ред другий елементом масиву. В цьому випадку метод splice() повертає []
console.log(colors); // ['grey', 'red', 'yellow', 'black'];
console.log(colors.splice(0, 1)); // видаляємо 1 елемент з індексом 0. Метод повертає масив з видаленими елементами -> ['grey']
console.log(colors); // ['red', 'yellow', 'black']

// Питання: якщо метод splice() не видаляє якісь елементи масиву, що він повертає. Н-д, якщо ви вказали не існуючий індекс, або не видаляєте,
// а додаєте новий елемент до масиву.
console.log(colors.splice(10, 0)); // повертає []
-----------------------------------------------------------------------------------------------------------------------------------------------

*/

// Ітерація по масиву

/* 
Ітерація по масиву з викор циклу for дозволяє перебрати елементи масиву і виконати певну дію для кожного елементу.
У прикладі нижче масив містить назви продуктів, і цикл for використовується для виведення кожного елемента в консоль.

const items = ['grain', 'butter', 'milk'];
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}
-----------------------------------------------------------------------------------------------------------------------------------------------

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
-----------------------------------------------------------------------------------------------------------------------------------------------

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

Додатково оголошувати змінну arguments всередині функції нетреба, вона створюється там автоматично.

// Напиши функцію , яка повертає результат множення будь якої к-ті аргументів.

function numbersMultiplication() {
  let total = 1;

  for (const number of arguments) {
    total *= number;
  }
  return total;
}

console.log(numbersMultiplication(1, 10, 3));
console.log(numbersMultiplication(2, 3, 8));

Якщо до псевдомасиву треба застосувати методи масиву, то можна використати метод Array.from(), для перетворення псевдомасиву на масив.

function kebabCreation() {
  const array = Array.from(arguments);
  return array.join('-');
}

console.log(kebabCreation('a', 'b', 'c'));  // a-b-c
-----------------------------------------------------------------------------------------------------------------------------------------------

Метод масиву array.toReversed() або ще є метод array.reverse() дозволяють змінювати порядок елементів масиву на зворотній. 
Н-д [1, 2, 3] -> [3, 2, 1]

// Задача: Функція createReversedArray() може приймати довільну кількість аргументів. Доповни код функції так, щоб вона повертала масив 
усіх аргументів, але в масиві вони повинні йти у зворотному порядку.

function createReversedArray() {
  let array = [];
  for (let i = arguments.length - 1; i >= 0; i--) {
    array.push(arguments[i]);
  }
  return array;
}

console.log(createReversedArray(1, 2, 3)); // [3, 2, 1]

// або в один рядок з викор методу toReversed()

function createReversedArray() {
  return Array.from(arguments).toReversed();
  
}
-----------------------------------------------------------------------------------------------------------------------------------------------
Параметри за замовчуванням

Функції можуть мати параметри зі значеннями за замовчуванням, тобто необов'язкові параметри. 
Ці значення використовуються в тому випадку, якщо функція викликається без передавання відповідного аргументу для цього параметра. 
Але, якщо аргумент передається, то він буде в пріоритеті. 
Значенням за замовчуванням може бути будь-який тип даних.

function greeting(username = 'Mike') {
  return `Hello, ${username}`;
}

greeting(); // 'Hello, Mike'
greeting('Oleg'); // 'Hello, Oleg'

-----------------------------------------------------------------------------------------------------------------------------------------------
Функціональний вираз
Функціональний вираз - function expression - це звичайне оголошення змінної, значенням якої буде функція. 
Це альтернативний спосіб оголошення функції. 

Синтаксис оголошення функції, який ми розглядали до цього був function declaration:

function multiply(x, y, z){
 return x*y*z;
}

Синтаксис function expression:

const multiply = function(x, y, z){
  return x*y*z;
}

Різниця в тому, що функціональний вираз (function expression) не можна викликати до місця його створення, тільки після, тому що це буквально 
оголошення const змінної.

// ❌ Помилка! Не працює виклик до оголошення
multiply(1, 2, 3);  // Uncaught ReferenceError: Cannot access 'multiply' before initialization


const multiply = function (x, y, z) {
  console.log(x * y * z);
};

// ✅ Працює виклик після оголошення
multiply(4, 5, 6);

Не важливо, який синтаксис використовувати, головне, щоб код у проєкті був однорідним. 
Тобто необхідно намагатися не змішувати оголошення функції (function declaration) з функціональними виразами (function expression), 
щоб писати більш стандартизований зрозумілий код.

---------------------------------------------------------------------------------------------------------------------------------------------
Область видимості
Область видимості(scope) - це механізм, який визначає доступність змінних в коді, що виконується.

Ланцюжок областей видимості(scope chain) - області видимості утворюють ієрархію так, що дочірні області мають доступ до змінних із 
батьківських областей, але не навпаки.

Змінна видима для виконуваного коду, якщо вона є:
- в поточній області видимості
або
- в ланцюжку областей видимості.

Змінні, оголошені на найвищому рівні, тобто поза будь-якими конструкціями типу: if, for і функцій - перебувають у глобальній області видимості
і доступні скрізь після їх оголошення.

Змінні, оголошені всередині конструйкцій if, for, функцій та інших блоків коду, що огорнуті фігурними дужками {} перебувають у блоковій області
видимості та доступні тільки всередині цього блоку або вкладених у нього. 

Це можна уявити як будинок із кімнатами.
Будинок знаходиться в глобальній області видимості. Кожна функція і блок створюють нову кімнату, вкладену всередину будинку. 
Змінні, оголошені всередині цих кімнат, доступні тільки тоді, коли ви перебуваєте всередині цієї кімнати. Поза кімнатою ці змінні недоступні.

(Див. малюнок в зошині-конспекті про пошук змінної інтерпретатором.) 

Зверни увагу, що існують глобальні змінні, ім'я яких уже зарезервовано, наприклад, name. Тому якщо у тебе в коді є однойменна змінна 
з глобальною, то треба дуже уважно слідкувати за областями видимості, у яких ця змінна використовується. Наприклад (співбесіда):

{
const name="Mango"
console.log(name) // "Mango"
}
console.log(name) // значення глобальної змінної name. Помилки в консолі не буде

-------------------------------------------------------------------------------------------------------------------------------------------------
Стек викликів (читай конспект LMS - модуль 3, останній розділ в кінці.)

Під час виклику функції всередині її тіла можуть викликатися інші функції, а в них інші тощо.
JavaScript — однопотокова мова, тобто в одну одиницю часу може виконуватися тільки одна інструкція. 
Це означає, що вже викликані функції, які не закінчили своє виконання, повинні чекати виконання функцій, 
викликаних усередині себе, для того щоб продовжити свою роботу.

function fnA() {
  console.log("Log inside fnA function before calling fnB");
  fnB();
  console.log("Log inside fnA function after fnB call");
}

function fnB() {
  console.log("Log inside fnB function");
}

console.log("Log before calling fnA");
fnA();
console.log("Log after calling fnA");

// "Log before calling fnA"
// "Log inside fnA function before calling fnB"
// "Log inside fnB function"
// "Log inside fnA function after fnB call"
// "Log after calling fnA"

Щоб код працював контрольовано й очікувано, потрібен механізм зберігання списку функцій, які були викликані, але ще не закінчили своє 
виконання, і механізм управління послідовністю виконання цих функцій. Саме за це й відповідає стек викликів (call stack).

Стек — структура даних, яка працює за принципом LIFO (Last-In-First-Out), тобто останнім прийшов — першим вийшов. Останнє, 
що додається на стек, буде видалено з нього першим, значить, можна додати або видалити елементи тільки з верхівки стека. Уяви стек як 
масив, у якого можна додати або видалити тільки елемент у кінці колекції.

Стек викликів (call stack) — це структура даних, яка допомагає інтерпретатору відстежувати послідовність і стан викликів функцій у програмі. 
Він показує, яка функція зараз виконується і яка буде викликана наступною.



Коли в коді викликається функція, інтерпретатор додає її в стек викликів і починає виконання.
Будь-які функції, викликані виконуваною функцією, додаються до стеку викликів і виконуються, щойно відбувається їхній виклик.
Коли виконання функції завершено, інтерпретатор знімає її зі стеку викликів і відновлює виконання коду з тієї точки, де зупинився до цього. 
Тобто починає виконуватися функція, запис якої лежить наступною на стеку.


Stack frame (кадр стека, запис стека) — структура, яка додається на стек при виклику функції. Зберігає службову інформацію, наприклад ім'я 
функції та номер рядка, у якому стався виклик.

function bar() {
  console.log("bar");
}

function baz() {
  console.log("baz");
}

function foo() {
  console.log("foo");
  bar();
  baz();
}

foo();

Стек викликів не безмежний, йому відводиться кінцевий обсяг пам'яті. Іноді в консолі можна побачити помилку "Uncaught RangeError: 
Maximum call stack size exceeded" — переповнення стека (stack overflow).

Це може статися при зациклюванні викликів функцій, тобто якщо йдуть нескінченні виклики функцій і результат не повертається, то
 стек збільшується. Наприклад, якщо функція викликає сама себе, що називається рекурсією. По досягненню межі кількості записів стека
  і виникне така помилка, і скрипт "падає".

*/
//-----------------------------------------Задачі-------------------------------------------------------------------------------------------
// Task-1 Module 3
// функція має перетворювати заголовок статті на slug - ідентифікатор url-адреси у форматі some-new-words

function slugify(title) {
  return title.toLowerCase().split(' ').join('-');
}

console.log(slugify('JavaScript is awesome'));
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));

// Task-2

function makeArray(firstArray, secondArray, maxLength) {
  const commonArray = firstArray.concat(secondArray);
  if (commonArray.length > maxLength) {
    return commonArray.slice(0, maxLength);
  } else {
    return commonArray;
  }
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []

// Task-3

function filterArray(numbers, value) {
  const newArray = [];
  for (const item of numbers) {
    if (item > value) {
      newArray.push(item);
    }
  }
  return newArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
