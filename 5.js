// Моє крейзі рішення 6-ої задачі Модуля 7 0_0

// const input = document.querySelector('input');
// const createBtn = document.querySelector('[data-create]');
// const destroyBtn = document.querySelector('[data-destroy]');
// const boxes = document.querySelector('#boxes');
// let startBoxWidth = 20;
// let startBoxHeight = 20;

// input.addEventListener('change', checkInput);

// function checkInput(event) {
//   const inputValue = event.currentTarget.value;
//   if (inputValue >= 1 && inputValue <= 100) {
//     createBtn.addEventListener('click', () => {
//       boxes.innerHTML = '';
//       createBoxes(inputValue);
//       input.value = '';
//     });
//   } else {
//     return;
//   }
// }

// function createBoxes(amount) {
//   const markupArray = [];
//   for (let i = 1; i <= amount; i += 1) {
//     const div = '<div></div>';
//     markupArray[i] = div;
//   }
//   const markup = markupArray.join('');
//   boxes.insertAdjacentHTML('afterbegin', markup);

//   const boxChild = boxes.children;
//   for (const div of boxChild) {
//     div.style.backgroundColor = getRandomHexColor();
//     div.style.width = setBoxWidth();
//     div.style.height = setBoxHeight();
//   }
//   resetStartBoxSize();
// }

// function setBoxWidth() {
//   startBoxWidth += 10;
//   return `${startBoxWidth}px`;
// }

// function setBoxHeight() {
//   startBoxHeight += 10;
//   return `${startBoxHeight}px`;
// }

// function resetStartBoxSize() {
//   startBoxHeight = 20;
//   startBoxWidth = 20;
// }

// destroyBtn.addEventListener('click', () => {
//   boxes.innerHTML = '';
// });
