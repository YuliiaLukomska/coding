'use strict';

// class User {
//   constructor({ name, surname }) {
//     this.name = name;
//     this.surname = surname;
//   }
//   getSurname() {
//     return this.surname;
//   }
//   changeSurname(newSurname) {
//     this.surname = newSurname;
//   }
// }

// const yuliia = new User({ name: 'Yuliia', surname: 'Lukomska' });

// console.log(yuliia);
// console.log(yuliia.getSurname());
// yuliia.changeSurname('Mykhaskova');
// console.log(yuliia.getSurname());
// console.log(yuliia);

// function greet(str) {
//   console.log(`${str} ${this.username}, your room is ${this.room}`);
// }

// const user1 = {
//   username: 'Yuliia',
//   room: 97,
// };

// const user2 = {
//   username: 'Andrii',
//   room: 93,
// };

// console.log(greet.call(user1, 'Hello'));
// console.log(greet.apply(user2, ['Hi']));

// const customer = {
//   username: 'Jacob',
//   sayHello() {
//     console.log(`Hello, ${this.username}!`);
//   },
// };

// const greet = customer.sayHello.bind(customer);

// greet();

// const book = {
//   name: 'Harry Potter',
//   author: 'Joahn Rowling',
//   rate: 9,
// };

// // for (const key in book) {
// //   console.log(key);
// // }
// const arr = Object.keys(book);
// const arrValues = Object.values(book);

// for (const value of arrValues) {
//   console.log(value);
// }

// class User {
//   name;
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// // console.log(mango.#email); недоступна поза межами класу, бо приватна. Щоб її отримати, треба викор публічні методи класу.
// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail()); // "mango@supermail.com"

// class StringBuilder {
//   #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padEnd(str) {
//     this.#value = this.#value.padEnd(this.#value.length + str.length, str);
//   }
//   padStart(str) {
//     this.#value = this.#value.padStart(this.#value.length + str.length, str);
//   }
//   padBoth(str) {
//     this.#value = this.#value
//       .padStart(this.#value.length + str.length, str)
//       .padEnd(this.#value.length + str.length + str.length, str);
//   }
// }

// class StringBuilder {
//   #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padEnd(str) {
//     this.#value = this.#value + str;
//   }
//   padStart(str) {
//     this.#value = str + this.#value;
//   }
//   padBoth(str) {
//     this.#value = str + this.#value + str;
//   }
// }

// const builder = new StringBuilder('.');

// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// function greet(str) {
//   console.log(`${str} ${this.username}, your room is ${this.room}`);
// }
// const user1 = {
//   username: 'Andrii',
//   room: 97,
// };

// console.log(greet.call(user1, 'Hello'));

// function greet(str) {
//   console.log(`${str} ${this.username}, your room is ${this.room}`);
// }
// const user1 = {
//   username: 'Andrii',
//   room: 97,
// };
// const newFunc = greet.call(user1, 'Hello');

// console.log(newFunc);

// class Blogger {
//   constructor({ email, age, numberOfPosts, topics }) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }
//   getInfo() {
//     return `Blogger ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }
//   updatePostsCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const blogger = new Blogger({
//   email: 'yanfoo@mail.com',
//   age: 47,
//   numberOfPosts: 5,
//   topics: ['sport', 'cooking'],
// });

// console.log(blogger);
// blogger.updatePostsCount(5);
// console.log(blogger.getInfo());

// class User {
//   #email;
//   #login;
//   constructor({ email, login }) {
//     this.#email = email;
//     this.#login = login;
//   }
//   #checkEmail(newEmail) {
//     return newEmail.includes('@');
//   }

//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     if (this.#checkEmail(newEmail)) {
//       this.#email = newEmail;
//     } else {
//       console.log('Invalid data');
//       return;
//     }
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }
// }

// const mango = new User({ email: 'mango@mail.com', login: 'hellomango' });

// console.dir(mango);
// mango.email = 'polly@mail.com';

// console.log(mango.email);

// // class Storage {
// //   constructor(array = []) {
// //     this.items = array;
// //   }
// //   getItems() {
// //     return this.items;
// //   }
// //   addItem(item) {
// //     this.items.push(item);
// //   }
// //   removeItem(item) {
// //     const index = this.items.indexOf(item);
// //     if (index !== -1) {
// //       this.items.splice(index, 1);
// //     } else {
// //       return;
// //     }
// //   }
// // }

// // const storage = new Storage(['apple', 'pear', 'banana', 'grapes']);

// // console.log(storage);
// // console.log(storage.getItems());
// // storage.addItem('orange');
// // console.log(storage.getItems());
// // storage.removeItem('pear');
// // console.log(storage.getItems());
// // storage.removeItem('pearw');
// // console.log(storage.getItems());

// // Напишіть функцію checkBrackets(str) яка приймає рядок джс коду (someFn) і
// перевіряє правильність закриття дужок (), {}, [].
// Якщо рядок містить коректний
// код - функція повертає true, в іншому випадку повертає false.

// const someFn = `function foo( {)
//   const arr = [1, 2, 3;
//   console.log(arr)];
// }`;

// function checkBrackets(str) {
//   let arr = [];
//   for (let i = 0; i <= str.length; i += 1) {
//     if (
//       str[i] === '[' ||
//       str[i] === ']' ||
//       str[i] === '{' ||
//       str[i] === '}' ||
//       str[i] === '(' ||
//       str[i] === ')'
//     ) {
//       arr.push(str[i]);
//     }
//   }
//   return arr;
// }
// const result = checkBrackets('[{}hello()]');
// console.log(result);

// console.log(checkBrackets(someFn));

// function isValid(s) {
//   const brackets = {
//     ')': '(',
//     ']': '[',
//     '}': '{',
//   };
//   // в качестве стека в JavaScript можно использовать обычный массив
//   //(если пользоваться только «разрешенными» методами push & pop)
//   const st = [];
//   for (let i = 0; i < s.length; i++) {
//     if (isClosedBracket(s[i])) {
//       if (brackets[s[i]] !== st.pop()) return false;
//       // это открывающая скобка, т.к. других символов по условию в строке нет
//     } else {
//       st.push(s[i]);
//     }
//   }
//   return st.length === 0;
// }
// function isClosedBracket(ch) {
//   return [')', ']', '}'].indexOf(ch) > -1;
// }

// const result = isValid('[{}()]');
// console.log(result);

// const someFn = `function foo() {
//   const arr = [1, 2, 3];
//   console.log(arr);
// }`;

// function checkBrackets(str) {
//   let arr = [];
//   for (let i = 0; i < str.length; i += 1) {
//     if (
//       str[i] === '[' ||
//       str[i] === ']' ||
//       str[i] === '{' ||
//       str[i] === '}' ||
//       str[i] === '(' ||
//       str[i] === ')'
//     ) {
//       arr.push(str[i]);
//     }
//   }
//   console.log(arr);
//   const string = arr.join('');

//   console.log(string);
//   // [[]{}]
//   const bracket = {
//     ')': '(',
//     ']': '[',
//     '}': '{',
//   };
//   const array = [];
//   for (let i = 0; i < string.length; i += 1) {
//     if (isBracketClosed(string[i])) {
//       if (bracket[string[i]] !== array.pop()) {
//         return false;
//       } else {
//         console.log(array);
//         array.splice(-1, 1);
//         console.log(array);
//       }
//     } else {
//       array.push(string[i]);
//       console.log(array);
//     }
//   }
//   return array.length === 0;
// }

// function isBracketClosed(brack) {
//   return [')', ']', '}'].indexOf(brack) > -1;
// }

// const result = checkBrackets('[[hel]{}]');
// console.log(result);

const someFn = `function foo() {
  const arr = [1, 2, 3];
  console.log(arr);
}`;

function checkBrackets(str) {
  let arr = [];
  for (let i = 0; i < str.length; i += 1) {
    if (
      str[i] === '[' ||
      str[i] === ']' ||
      str[i] === '{' ||
      str[i] === '}' ||
      str[i] === '(' ||
      str[i] === ')'
    ) {
      arr.push(str[i]);
    }
  }
  console.log(arr); // ['(', ')', '{', '[', ']', '(', ')', '}']
  const bracket = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  const array = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (isBracketClosed(arr[i])) {
      if (bracket[arr[i]] !== array.pop()) {
        return false;
      } else {
        array.pop();
      }
    } else {
      array.push(arr[i]);
    }
  }
  return array.length === 0;
}

function isBracketClosed(brack) {
  return [')', ']', '}'].indexOf(brack) > -1;
}

const result = checkBrackets(someFn);
console.log(result);
