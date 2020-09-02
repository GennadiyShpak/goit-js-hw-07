const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const ulRef = document.querySelector('#gallery');
ulRef.classList.add('gallery__wrapper');
const gallery = images => {
  images.map(image => {
    const imagesListRef = document.createElement('li');
    imagesListRef.classList.add('gallery__list');
    const imagesRef = document.createElement('img');
    imagesRef.classList.add('gallery__img');
    imagesRef.alt = image.alt;
    imagesRef.src = image.url;
    imagesListRef.appendChild(imagesRef);
    ulRef.appendChild(imagesListRef);
  });
  return ulRef;
};
gallery(images);
