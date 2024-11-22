// DOM
/*
DOM - Document Object Model - незалежний від мови програмування інтерфейс для роботи з браузером. Не є частиною JavaScript. 
JavaScript це просто мова програмування, яка має стандарт ECTMAScript. А все що пов'язано з DOM це методи, які нам надає браузер. Цих методів 
в JavaScript немає. 
JS це мова, яка запускається і в браузері і в консолі, виходить що весь функціонал, яким ми користуємось в ДОМі це чисто браузерна тема. 
Він нам надається браузером від глобального об'єкта window.
В ДОМ дереві існують елементи-вузли, текстові-вузли і коментарі.
DOM-елемент, який представляє весь документ називається document.
Саме через нього і відбувається доступ до всього документу. 
Посилання на батька елемента elem, можна отримати за доп elem.parentNode. Отримання посилання на інше елементи дом-дерева відбувається по властивості.
Ці властивості формуються одразу під час створення ДОМ-дерева і кожен елемент отримує відповідну властивіть чи то parentNode, чи childNode.
Щоб отримати посилання на перший дочірній вузловий елемент всередині elem, викор elem.firstElementChild.
elem.firstChild поверне посилання не на елемент, а на вузол, а вузлом може бути і текст(в т.ч. пробіли чи ентери) і коментар.
Метод querySelectop(selector) - повертає перший елемент,що відповідає селектору selector.
Метод підтримує будь-який CSS-селектор, навіть nth-child. 
Якщо querySelector(selector) не знайде жодного елемента то він поверне null(відсутнє посилання).
Метод querySelectorAll(selector) - повертає NodeList (псевдомасив, нема методів map, filter іт.д) усіх елементів, що відповідають CSS-селектору.
Для створення ДОМ-елементів використовується метод document.createElement(tagName);

Кожен вузол ДОМ дерева це JS об'єкт і в цьому JS-об'єкті є вся інформація про цей вузол. Н-д: в ньому зберігається що це тег img, в ньому зберігаються його
атрибути, там є н-д вл-ть parentElement. Всі вузли ДОМ-дерева взаємопов'язані між собою і мають купу властивостей,які формуються на етепі побудови ДОМ-дерева.

Властивість childNodes зберігає всі вузли-діти елемента (елемент, текст, коментар). 
А властивість children - зберігає діти-вузли-елементи (тут не може бути тексту або коментаря.)

Властивості ДОМ-елементів. 

Дата-атрибути призначені для зберігання даних.
Значення дата-атрибуту це завжди рядок. Якщо там буде записане число і тобі треба буде працювати з ним як з числом, то треба зробити перетворення
рядка в число. 
Якщо назва дата-атрибута подвійна н-д <button type='button' data-action-btn='remove'>Delete</button>, то в джс ми звертаємось до дата-атрибуту
через CamelCase: element.dataset.actionBtn (<- тут буде значення 'remove').
dataset - це об'єкт,де зберігаються всі дата-атрибути. Їх може бути безліч.


Додавання елементів на сторінку відбуваєтся  двома методами:
Через використання методів (document.createElement('tag') - створюємо вузол-елемент, далі заповнюємо його (вміст,атрибути)) -> element.append(createdElement) / element.prepend(createdElement) - вставляємо в розмітку.
Щоб додати елемент просто в body, можна просто написати document.body.append(на початок)/prepend(в кінець)(createdElement);
За доп методів append/prepend можна одночасно додавати декілька елементів, просто вказавши їх через кому.
Метод, append/prepend може приймати або строку або вузол(елемент-тег, створений через createElement). Якщо в тебе є масив з кнопками-вузлами н-д, то щоб всі ці
кнопки додати в  розмітку, треба розпилит масив.  container.append(...array). 

Небажано змінювати ДОМ-дерево багато разів, н-д, в тебе є якесь рішення задачі, і тобі треба його покращити, як варіант, можна зробити так, щоб зменшити к-ть
змін ДОМ-дерева (тобто щоб код якнайменше ДОМ-дерево змінював, н-д не за декілька разів додавав розмітку, а за один раз) і тоді це підвищить продуктивність. 
Перебудова ДОМ-дерева це енергозатратно, бо кожного разу коли н-д приходить новий елемент, то треба сусідні елементи перерахувати, десь дитина додавась, десь змінився батько.



Через використання строк. Коли робимо рядок з тегами і тоді за доп методу insertAdjacentHTML('place', markup) / innerHTML вставляємо його в розмітку.





*/

console.dir(document);

const listWithId = document.querySelector('#menu');
console.log(listWithId);
console.log(listWithId.textContent);

listWithId.style.textTransform = 'uppercase';
listWithId.style.fontSize = '24px';

const listWithClass = document.querySelector('.menu');
console.log(listWithClass);

const itemWithClass = document.querySelector('.menu_item');
console.log(itemWithClass);
itemWithClass.style.color = 'red';

const itemArray = document.querySelectorAll('.menu_item');
console.log(itemArray);

for (let i = 0; i < itemArray.length; i++) {
  //   itemArray[i].style.color = 'yellow';
  itemArray[i].addEventListener('click', function (event) {
    itemArray[i].style.color = 'yellow';
    itemArray[i].style.fontSize = '32px';
  });
}

const itemByTag = document.querySelector('li');
console.log(itemByTag);

const linkGoit = document.querySelector('.link');
console.log(linkGoit.href);
linkGoit.href = 'https://neo.goit.global';

const image = document.querySelector('.img');
image.src = 'https://picsum.photos/id/13/640/480';
image.alt = 'A river';

const title = document.querySelector('.title');

title.textContent = 'Welcome to Ukraine';

console.log(image.getAttribute('alt'));
const saveBtn = document.querySelector('button[data-action="save"]');

console.log(saveBtn.dataset.action);
saveBtn.dataset.role = 'main';

console.log(saveBtn.dataset.role);

const gameList = document.querySelector('.game-list');
const lastElement = document.createElement('li');
lastElement.textContent = 'tennis';
gameList.append(lastElement);

const firstElement = document.createElement('li');
firstElement.textContent = 'basketball';
gameList.prepend(firstElement);
gameList.append(firstElement);

const technologies = ['React', 'Node.js', 'jQuery'];
const techList = document.querySelector('.tech-list');
const markUp = technologies
  .map(item => `<li class="list-item">${item}</li>`)
  .join('');

console.log(markUp);
techList.insertAdjacentHTML('beforeend', markUp);
// techList.insertAdjacentHTML('afterend', markup);

// document.addEventListener('keydown', event => {
//   console.log('Keydown', event);
// });

// document.addEventListener('keyup', event => {
//   console.log('Keyup', event);
// });

// HW 7
// 1
const categories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categories.length}`);
categories.forEach(item => {
  console.log(item.firstElementChild.textContent);

  const list = item.lastElementChild;
  const li = list.querySelectorAll('li');
  console.log(li.length);
});

// 2
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    alt: 'Alpine Spring Meadows',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    alt: 'Nature Landscape',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    alt: 'Lighthouse Coast Sea',
  },
];

const galleryList = document.querySelector('.gallery');
// const markup = images
//   .map(
//     item =>
//       `<li><img src=${item.url} alt=${item.alt} width='300' height='300' /></li>`
//   )
//   .join('');

// galleryList.insertAdjacentHTML('beforeend', markup);

// const html = images.map((item)=> )

// 1. створити лішку.
// 2. В лішку додати img
// 3. вставити лішку в список

// вирішення задачі нижче непродуктивне, бо багато разів буде змінено ДОМ-деремо. А також, якщо у нас всередині li є картинка, то картинку треба
// створити через createElement, наповнити її і тоді засунути за доп append в лішку. І за один раз додати всі лішки і ДОМ-дерево. Див розв'язок нижче.

// images.forEach(item => {
//   const li = document.createElement('li');
//   li.innerHTML = `<img src=${item.url} alt=${item.alt} width='300' height='300' />`;
//   console.log(li);
//   galleryList.append(li);
// });

const itemsArray = images.map(({ url, alt }) => {
  const liEl = document.createElement('li');
  const imgEl = document.createElement('img');
  imgEl.src = url;
  imgEl.alt = alt;
  imgEl.width = 300;
  liEl.append(imgEl);

  return liEl;
});

console.log(itemsArray);
galleryList.append(...itemsArray);

// 3

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', event => {
  output.textContent = event.target.value.trim();
  if (event.target.value.trim() === '') {
    output.textContent = 'Anonimous';
  }
});

//4

const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const formElements = event.target.elements;
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (email.trim() === '' || password.trim() === '') {
    alert('All form fields must be filled in');
  }
  const objKeys = Object.keys(formElements);
  console.log(objKeys);

  formEl.reset();
});

// 5

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');
const span = document.querySelector('.color');

changeColorBtn.addEventListener('click', event => {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
});

// 6

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const numberInput = document.querySelector('#controls input');
const boxesList = document.querySelector('#boxes');

createBtn.addEventListener('click', event => {
  const inputValue = numberInput.value;
  if (inputValue < 1 || inputValue > 100) {
    alert('Value should be from 1 to 100');
    return;
  }
  boxesList.innerHTML = createBoxes(inputValue);
  numberInput.value = '';
});

function createBoxes(amount) {
  let markup = '';
  let size = 30;
  for (let i = 1; i <= amount; i++) {
    markup += `<div style='height: ${size}px; width: ${size}px; background-color: ${getRandomHexColor()};'></div>`;
    size += 10;
  }
  return markup;
}

console.log(createBoxes(3));

destroyBtn.addEventListener('click', () => {
  boxesList.innerHTML = '';
});

const liElements = document.querySelectorAll('li');
console.log(liElements);
