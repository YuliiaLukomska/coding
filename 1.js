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

class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value = this.#value.padEnd(this.#value.length + str.length, str);
  }
  padStart(str) {
    this.#value = this.#value.padStart(this.#value.length + str.length, str);
  }
  padBoth(str) {
    this.#value = this.#value
      .padStart(this.#value.length + str.length, str)
      .padEnd(this.#value.length + str.length + str.length, str);
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
