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
