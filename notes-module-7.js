// DOM
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

images.forEach(item => {
  const li = document.createElement('li');
  li.innerHTML = `<img src=${item.url} alt=${item.alt} width='300' height='300' />`;
  console.log(li);
  galleryList.append(li);
});

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
