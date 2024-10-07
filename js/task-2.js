const images = [
  {
    url: "./images/img-1.jpg",
    alt: "img-1",
  },
  {
    url: "./images/img-2.jpg",
    alt: "img-2",
  },
  {
    url: "./images/img-3.jpg",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const gallery = document.querySelector('.gallery');

// Створення елементів
const galleryItems = images.map(image => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  
  img.src = image.url;
  img.alt = image.alt;
  
  li.appendChild(img);
  return li;
});

// Додавання всіх елементів за одну операцію
gallery.append(...galleryItems);