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
const markup = technologies
  .map(item => `<li class="list-item">${item}</li>`)
  .join('');

console.log(markup);
techList.insertAdjacentHTML('beforeend', markup);
// techList.insertAdjacentHTML('afterend', markup);

document.addEventListener('keydown', event => {
  console.log('Keydown', event);
});

document.addEventListener('keyup', event => {
  console.log('Keyup', event);
});
