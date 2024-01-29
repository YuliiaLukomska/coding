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

// const isSuccess = false;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 3000);
// });

// console.log(promise);

// promise
//   .then(value => {
//     console.log(value);
//   })
//   .catch(err => console.log(err))
//   .finally(() => {
//     console.log('the end of promise');
//   });

// const result = makePromise({ value: 'A', delay: 0 });
// console.log(result);

// const makePromise = ({ value, delay, isFulFilled = true }) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isFulFilled) {
//         resolve(value);
//       } else {
//         reject(value);
//       }
//     }, delay);
//   });
// };

// makePromise({ value: 'A', delay: 2000 })
//   .then(value => console.log(value))
//   .catch(error => console.log(error));

// makePromise({ value: 'B', delay: 4000 })
//   .then(value => console.log(value))
//   .catch(error => console.log(error));

// makePromise({ value: 'error', delay: 6000, isFulFilled: false })
//   .then(value => console.log(value))
//   .catch(error => console.log(error));

// Чому виклик функції повертає undefined?
// Питання
// const makePromise = ({ value, delay, isFulFilled = true }) => {
//   setTimeout(() => {
//     if (isFulFilled) {
//       return Promise.resolve(value);
//     } else {
//       return Promise.reject(value);
//     }
//   }, delay);
// };

// makePromise({ value: 'hello', delay: 2000 })
//   .then(value => console.log(value))
//   .catch(error => console.log(error));

// Якщо так як нижче, без setTimeout(), то все працює

// const makePromise = ({ value, delay, isFulFilled = true }) => {
//   if (isFulFilled) {
//     return Promise.resolve(value);
//   } else {
//     return Promise.reject(value);
//   }
// };

// makePromise({ value: 'hello', delay: 2000 })
//   .then(value => console.log(value))
//   .catch(error => console.log(error));

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Data handling
//     console.log(data);
//   })
//   .catch(error => {
//     // Error handling
//     console.log(error);
//   });
// async function foo() {
//   console.log(5);
// }
// const result = foo();
// console.log(result);

// foo().then(data => console.log(data));

function fetchPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

fetchPosts()
  .then(posts => console.log(posts))
  .catch(error => console.log(error));

async function asyncFetchPost() {
  // оператор await витягає з промісу об'єкт response і зберігає його в константу.
  //  І ми можемо використовувати його в нашій функції так само якби це був звичайниий синхронний код без використання промісів.
  // async/await дали можливість витягнути результат асинхронної операції в синхронний код. Без них це неможливо.
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();

  return data;
}

// asyncFetchPost()
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

async function onasyncFetchPost() {
  try {
    const data = await asyncFetchPost();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

onasyncFetchPost();

//Бібліотека Axios
const fetchUsers = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
};

const doStuff = async () => {
  try {
    const users = await fetchUsers();
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};

doStuff();
