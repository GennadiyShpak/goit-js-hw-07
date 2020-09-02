const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('change', event => {
  if (Number(inputRef.dataset.length) === event.target.value.length) {
    inputRef.classList.add('valid'), inputRef.classList.remove('invalid');
  } else inputRef.classList.add('invalid');
});
