const fontSizeHendlerRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');
const counterFontSizes = fontSizeHendlerRef.addEventListener('input', event => {
  const fontSizeCounter = event.target.valueAsNumber * 2;
  spanRef.style.fontSize = `${fontSizeCounter}px`;
});
