
const carouselItems = [
    'images/manhwa1.jpg',
    'images/manhwa2.jpg',
    'images/manhwa3.jpg',
    
];

const carouselContainer = document.querySelector('.carousel');

carouselItems.forEach(item => {
    const img = document.createElement('img');
    img.src = item;
    img.alt = 'Manhwa cover';
    img.loading = 'lazy';
    
    carouselContainer.appendChild(img);
});

