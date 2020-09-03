'use strict';
const counterValue = document.querySelector('#value');
const counterDecrementBtnHendler = document.querySelector(
  'button[data-action="decrement"]',
);
const counterIncrementBtnHendler = document.querySelector(
  'button[data-action="increment"]',
);
const increment = () => {
  ++counterValue.textContent;
};
const decrement = () => {
  --counterValue.textContent;
};

counterIncrementBtnHendler.addEventListener('click', () => {
  increment();
});
counterDecrementBtnHendler.addEventListener('click', () => {
  decrement();
});
