const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsListRef = document.querySelector('#ingredients');

const createIngredient = ingredients => {
  ingredients.map(ingredient => {
    const listRef = document.createElement('li');
    listRef.textContent = ingredient;
    ingredientsListRef.appendChild(listRef);
  });
  return ingredientsListRef;
};
createIngredient(ingredients);
