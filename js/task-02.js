const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngridientsRef = document.querySelector('#ingredients');
console.log(listIngridientsRef)

// const liRef = document.createElement('li')
// liRef.textContent = ingredients[1]
// liRef.classList.add('item')
// console.log(liRef)


const makeingridients = elements => {
  return elements.map(elem => {
    const liRef = document.createElement('li')
    liRef.textContent = elem;
    console.log(liRef.textContent)
    liRef.classList.add('item')
   
    return liRef;
 
  });
};
// console.log(makeingridients(ingredients));

const elementsLi = makeingridients(ingredients);
listIngridientsRef.append(...elementsLi);