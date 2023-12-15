// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';

// const firstListItem = document.querySelector('.menu-item');
// firstListItem.style.color = 'red';
// firstListItem.style.textDecoration = 'underline';

// console.log(listWithId.childNodes);
// console.log(firstListItem.parentNode);
// console.log(listWithId.firstChild);

// const link = document.querySelector('.link');
// console.log(link.href);
// link.href = '"[<https://neo.goit.global>](<https://neo.goit.global/>)";';

// console.log(link.href);

// const image = document.querySelector('.image');
// image.src = 'https://picsum.photos/id/13/640/480';
// image.alt = 'New alt';
// console.log(listWithId.textContent);
// console.log(firstListItem.textContent);

// firstListItem.textContent = 'textContent of first list item';

// const heading = document.createElement('h2');
// heading.classList.add('title');
// heading.textContent = 'This is a heading';
// console.log(heading);
// listWithId.before(heading, 'text-node');

// const btn = document.querySelector('.btn');
// const handler = () => {
//   console.log('Button was clicked');
// };
// const changeColor = () => {
//   btn.style.backgroundColor = 'red';
// };
// btn.addEventListener('click', handler);
// btn.addEventListener('click', changeColor);
// btn.removeEventListener('click', changeColor);

const textInput = document.querySelector('.text-input');
const output = document.querySelector('.output');

textInput.addEventListener('input', event => {
  output.textContent = event.currentTarget.value;
  console.dir(event.currentTarget);
});

const select = document.querySelector('.pizza-select');
const textOutput = document.querySelector('.text-output');
const valueOutput = document.querySelector('.value-output');

select.addEventListener('change', setOutput);

function setOutput(event) {
  const selectedOptionValue = event.currentTarget.value;
  const selectedOptionIndex = event.currentTarget.selectedIndex;
  const selectedOptionText =
    event.currentTarget.options[selectedOptionIndex].text;

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
  console.log(event.currentTarget);
  // console.log(selectedOptionIndex);
  // console.log(event.currentTarget.options);
}
