const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  event.target.value == ''
    ? (spanRef.textContent = 'незнакомец')
    : (spanRef.textContent = event.target.value);
});
