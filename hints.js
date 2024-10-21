/* 
null && 'false' || 'Mango'
При визначення результату цього виразу, спочату все перетворюється на булевий тип, далі спрацьовують логічні оператори && або ||, і результатом
буде завжди значення одного з операндів: null, 'false' або 'Mango'.

У прикладі вище результатом виразу буде 'Mango'.
null && 'false' -> (оператор && шукає перше фолс) null
null || 'Mango' -> (оператор || шукає перше тру) 'Mango'

&& має вищу пріоритетність виконання, ніж || і буде виконуватись першим. 

Тернарний оператор - часто використовується, коли треба швидко зробити перевірку і результат зберегти в якусь змінну. 
const isOnline = 10 > 3 ? 'yes' : 'no';
console.log(isOnline);


Для того щоб зробити копію масиву найчастіше викор оператор spread(), або Array.from().

У const і у let блочна область видимості - це квадратні дужки.

Принцип(механізм) за яким функція, яка оголошена за доп. function declaration може бути викликана і до її оголошення і після 
називається хойстинг(hoisting) або підняття. Перед тим як запускати код джава скрипта, інтерпретатор знаходить всі функції, які оголошені як function 
declaration і підіймає їх на самий верх коду, на першу строку умовно кажучи, то ми можемо викликати function declaration в будь-якому місці
програми, тому що фактично, тому що вони всі фактично піднялися на самий верх коду. Цей механізм також працює з var. 

greet();

function greet(){
 return 'Hello user';
}

Але, важливий момент!
Ми не зможемо викликати функцію, якщо вона буде всередині блочної області видимості. Інтерпретатор не захожить всередину блоку, він 
шукає зсередини назовні. 

greet();  // Uncaught ReferenceError: greet is not defined

function wrap() {
  function greet() {
    console.log('hello');
  }
}

Псевдомасиви arguments буде часто використовуватись при роботі з DOM.

function foo() {
  console.log(arguments); // [1, 'apple', true]
}

foo(1, 'apple', true);

Мутування масиву - це поганий тон. Н-д, в тебе є масив, і тобі треба змінити якимось чином його елементи. Якщо ти будеш робити ось так:
array[index] = 'newValue';
То ти мутуєш початковий масив.
Найкращий варіант - створення копії масиву і робота з копією масиву.



Для того щоб видалити елемент з масиву, можна використати метод splice(index, the number of items to delete). Але цей метод мутує масив, він може
як видаляти так і додавати нові елементи до масиву. 

Н-д, в тебе є масив з книгами і тобі треба видалити книгу по назві. 

const library = {
  books: ['Hercule Poirot', 'Hamlet', 'Eneida', 'Tygrolovy'],
  addBook(newBook) {
    this.books.push(newBook);
  },
  deleteBook(unnecessaryBook) {
    const index = this.books.indexOf(unnecessaryBook);
    
    if (index > -1) {
      this.books.splice(index, 1);
    }
  },
  showUpdatedBooks() {
    return this.books;
  },
};

library.deleteBook('Eneida');
console.log(library.showUpdatedBooks()); // ['Hercule Poirot', 'Hamlet', 'Tygrolovy']
library.deleteBook('Dogs');
console.log(library.showUpdatedBooks());  // ['Hercule Poirot', 'Hamlet', 'Tygrolovy']


Синтаксис ...rest (або ...args) дозволяє отримати масив з переданих функції аргументів. Також можна викор arguments - він дає псевдомасив - рідко
використовують.

Інколи нам навпаки треба з масиву зробити список елементів, тоді викор синтаксис оператору розпилення ...spread.
Коли функціонал ...spread використовується при виклику функції, він перетворює масив на список аргументів.

console.log(...[1, 2, 3]); // 1, 2, 3

Раніше, щоб скопіювати масив, ми викор метод slice(), а щоб склеяти два і більше масивів - concat().
В сучасній розробці для цього викор оператор ...spread. array1 та array2 не змінюються.

const array1 = [1, 3, 5];
const array2 = [2, 4, 8];
const copyOfArray1 = [...array1];
const combo = [...array1, ...array2];


Для видалення елементу з масиву зазвичай викор. метод pop() - якщо треба видалити елемент в кінці або splice() - якщо треба конкретний елемент видалити; 
Обидва методи мутують вихідний масив. 


Чисті функції - це функції , які не мутують вхідні дані. Н-д, у функцію аргументом передають масив, тоді всередині ф-ї наприклад створюється 
копія цього масиву і далі опрацьовується вже копія і тоді переданий масив не змінюється. 

Копіювання масивів та об'єктів часто використовується на практиці, для цього викор ператор ...spread;

const array = [1, 3, 4];
const copyOfArray = [...array];

const object = {
a: 1,
b: 3,
};

const copyOfObject = {
...object
};


Нуль поділити на 0 буде NaN

Простий метод для розрахунку суми елементів масиву forEach():
const numb = [1, 2, 3, 4, 5];

let total = 0;

numb.forEach(function(item){
total += item; });

console.log(total); // 15

Ще простіший метод reduce(): 
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accum, item) => accum + item, 0);
console.log(sum); // 15

Функції ми можемо створювати як оголошення функції(function declaration) та як функціональний вираз (function expression).

--function declaration--:

function foo(a, b, c){
 return a + b + c;
}

--function expression--: 

const foo = function(a, b, c){
return a + b + c;
}

const foo = (a, b, c) => {
  return a + b + c;
  }


*/

// Деструктуризація - див ще раз пояснення на уроці 4 модуль, 2-й урок, 32:00
