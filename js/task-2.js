const images = [
   {
    url: "/images/img-1.jpg",
    alt: "img-1",
  },
  {
    url: "/images/img-2.jpg",
    alt: "img-2",
  },
  {
    url: "/images/img-3.jpg",
    alt: "img-3",
  },
  {
    url: "/images/img-4.jpg",
    alt: "img-4",
  },
  {
    url: "/images/img-5.jpg",
    alt: "img-5",
  },
  {
    url: "/images/img-6.jpg",
    alt: "img-6",
  },

  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
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

const galleryList = document.querySelector(".gallery");

const fragment = document.createDocumentFragment();

images.forEach(({ url, alt }) => {
  const listItem = document.createElement("li"); 
  listItem.classList.add("list-img"); 
  const img = document.createElement("img");
  img.src = url;
  img.alt = alt;
  img.classList.add("list-img"); 
  listItem.append(img);
  fragment.append(listItem);
});

galleryList.append(fragment);