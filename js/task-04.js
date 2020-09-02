// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

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
