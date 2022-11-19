const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listRef = document.querySelector('.gallery')

const makeGalary =
  images.map(elem => {
    const liEl = document.createElement('li')
    liEl.insertAdjacentHTML('beforeEnd', `<img
  src = ${elem.url}, alt = ${elem.alt}>`)
    liEl.classList.add('gallery__item');
    listRef.append(liEl);
   
    return liEl
  });
  

const imgRef = listRef.querySelectorAll('img');
const imgElem = [...imgRef].map(elem => {elem.classList.add('gallery__image')})

