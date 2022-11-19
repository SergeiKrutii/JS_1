const ulCategoriesRef = document.querySelector("#categories");
const childrenUlRef = ulCategoriesRef.children.length;
console.log("Кол-во категорий :",  childrenUlRef)


// const liItemRef = ulCategoriesRef.querySelector('.item')
// const titleRef = liItemRef.firstElementChild;
// console.log(`Категория : ${titleRef.textContent}`);

// const ulInLiRef = liItemRef.querySelector('ul');
// console.log(`Елементов : ${ulInLiRef.children.length}`)

const allLiRef = ulCategoriesRef.querySelectorAll('.item')
    const arrCateg = [...allLiRef].map(elem => {
        const titleRef = elem.firstElementChild.textContent;
        console.log(`Категория : ${titleRef}`)
        const listRef = elem.querySelectorAll('li')
        console.log(`Элементов : ${listRef.length}`)
    })



