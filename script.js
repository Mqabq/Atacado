const imagens = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", // Continue adicionando suas imagens
];

const carouselContainer = document.querySelector('.carrossel-container');

// Gera os itens do carrossel dinamicamente
imagens.forEach((imagem, index) => {
    const item = document.createElement('div');
    item.className = 'carrossel-slide';
    item.innerHTML = `<img src="${imagem}" alt="Promoção ${index + 1}">`;
    carouselContainer.appendChild(item);
});

// Funções para mover os slides
let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carrossel-slide');
    slideIndex = (slideIndex + step + slides.length) % slides.length;
    const newTransform = -slideIndex * 100; // Faz o slide
    carouselContainer.style.transform = `translateX(${newTransform}%)`;
}

setInterval(() => {
    moveSlide(1);
}, 5000); // Muda de slide automaticamente
