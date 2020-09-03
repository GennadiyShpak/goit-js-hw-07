'use strict';
const inputRef = document.querySelector('input');
const boxesRef = document.querySelector('#boxes');
const renderBtnRef = document.querySelector('button[data-action="render"]');
const cleanerBtnRef = document.querySelector('button[data-action="destroy"]');

const colorGenerator = () => {
  const randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
  return randomColor;
};

const divGenerator = number => {
  const divRef = document.createElement('div');
  const sizeParameter = number => {
    let divSize = 30;
    if (number == 1) {
      return divSize;
    } else {
      divSize = divSize + 10 * (number - 1);
      return divSize;
    }
  };
  divRef.style.backgroundColor = colorGenerator();
  divRef.style.width = `${sizeParameter(number)}px`;
  divRef.style.height = `${sizeParameter(number)}px`;
  boxesRef.appendChild(divRef);
};

const divConstructor = number => {
  for (let i = 1; i < number + 1; i++) {
    divGenerator(i);
  }
};

const getInputValue = inputRef.addEventListener('input', () => {
  return inputRef.valueAsNumber;
});

const renderBtnLauncher = renderBtnRef.addEventListener('click', () => {
  divConstructor(inputRef.valueAsNumber);
});
const cleanerBtnLauncher = cleanerBtnRef.addEventListener('click', () => {
  document.querySelectorAll('#boxes > div').forEach(el => {
    el.remove();
  });
});
