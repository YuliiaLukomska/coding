// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризуємо
// const { title, author: bookAuthor, isPublic, rating: bookRating } = book;
// console.log(title); // "The Last Kingdom"
// console.log(bookAuthor); // "Bernard Cornwell"
// console.log(isPublic); // true
// console.log(bookRating); // 8.38

// console.log(book);

// function doStuffWithBook(book) {
//   const { title, pages, downloads, rating, isPublic } = book;
//   console.log(title);
//   console.log(pages);
// }

// const result = doStuffWithBook({
//   title: 'The Last Kingdom',
//   pages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });
// console.log(result);

// const btnAdd = document.querySelector('#add');
// const btnDelete = document.querySelector('#delete');

// btnAdd.addEventListener('click', addKeydownlistener);

// function addKeydownlistener(event) {
//   document.addEventListener('keydown', event => {
//     console.log(event.code);
//   });
// }

// btnDelete.addEventListener('click', () => {
//   btnAdd.removeEventListener('click', addKeydownlistener);
// });

// const btnAdd = document.querySelector('#add');
// const btnDelete = document.querySelector('#delete');

// btnAdd.addEventListener('click', event => {
//   document.addEventListener('keydown', logCode);
// });

// function logCode(event) {
//   console.log(event.code);
// }

// btnDelete.addEventListener('click', () => {
//   document.removeEventListener('keydown', logCode);
// });

// const arr = [3, 6, 8, 10, 23];

// function sum(array) {
//   let total = 0;

//   array.forEach(el => (total += el));

//   return total;
// }

// const result = sum(arr);
// console.log(result);

// const form = document.querySelector('.feedback-form');
// const localKey = 'feedback-text-key';

// form.addEventListener('input', event => {
//   console.log(event.target.value);
//   localStorage.setItem(localKey, event.target.value);
// });

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   console.log(event.target.elements.message.value);
//   console.log(event.target);
//   console.log(event.currentTarget);
//   form.reset();
// });

// console.log(form.elements);

// const form = document.querySelector('.feedback-form');
// const localStorageKey = 'goit-example-message';

// form.elements.message.value = localStorage.getItem(localStorageKey) || '';

// form.addEventListener('input', evt => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener('submit', evt => {
//   evt.preventDefault();
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });

// class User {
//   constructor(username, lastname) {
//     this.firstname = username;
//     this.secondname = lastname;
//   }
// }

// const client = new User('Yuliia', 'Lukomska');

// console.log(client);

// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value pass to resolve function');
//     } else {
//       reject('Error! Error passed to error function');
//     }
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('Promise settled');
//   });

// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess('success value');
//     } else {
//       onError('error');
//     }
//   }, 2000);
// };

// fetchUserFromServer(
//   'Mango',
//   user => console.log(user),
//   error => console.error(error)
// );

// const number = Math.random() > 0.5;
// console.log(number);

// const promise = new Promise((resolve, reject) => {
//   if (number) {
//     resolve(`fullfeeled`);
//   } else {
//     reject(`regected`);
//   }
// });

// // console.dir(promise);

// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve('Resolved promise 2');
// const p3 = Promise.resolve(3);

// const result = Promise.allSettled([p1, p2, p3])
//   .then(values => {
//     console.log(values);
//     return values;
//   })
//   .catch(error => console.log(error));

// // console.log(result);

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.status);
//     }
//     return resp.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => console.log(error));

// const arr = [1, 3, 4];

// function arrsum(arr) {
//   let total = 0;

//   for (const el of arr) {
//     if (el % 2 === 0) {
//       total = total + el;
//     }
//   }
//   return total;
// }

// const result = arrsum(arr);
// console.log(result);

console.log(+'1' + '1' + '2'); // 112
console.log('A' - 'B' + 2); // NaN
console.log('A' - 'B' + 'A' + 3); // NaNA3

console.log(String); // function
console.log(Number); //function

console.log(typeof null == 'object');

// порядок виведення в консоль: // 1 3 2
console.log(1);
setTimeout(() => {
  console.log(2);
}, 1000);
console.log(3);

// Задача по js: дано масив чисел. Напиши функцію, яка порахує суму всіх парних чисел масиву.

const arr = [1, 3, 4];

function arrsum(arr) {
  let total = 0;

  for (const el of arr) {
    if (el % 2 === 0) {
      total = total + el;
    }
  }
  return total;
}

const result = arrsum(arr);
console.log(result);

const string = 'Hello world'; //треба вибрати метод, за доп. якого ти зможеш отримати слово "Hello".
console.log(string.slice(0, 5)); // 'Hello'
