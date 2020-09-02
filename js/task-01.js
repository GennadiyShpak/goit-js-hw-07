const itemRef = document.querySelectorAll('.item');
console.log(`В списке ${itemRef.length} категории.`);

const itemIncludeInfo = itemRef.forEach(element => {
  console.log(`Категория: ${element.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${element.querySelectorAll('li').length}`);
});
