const imagens = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg",
    "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", 
    "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", 
    "35.jpg", "36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpg", "41.jpg", "42.jpg", "43.jpg", "44.jpg", "45.jpg", 
    "46.jpg", "47.jpg", "48.jpg", "49.jpg", "50.jpg", "51.jpg", "52.jpg", "53.jpg", "54.jpg", "55.jpg", "56.jpg", 
    "57.jpg", "58.jpg", "59.jpg", "60.jpg", "61.jpg", "62.jpg", "63.jpg", "64.jpg", "65.jpg", "66.jpg", "67.jpg", 
    "68.jpg", "69.jpg", "70.jpg", "71.jpg","72.jpg", "73.jpg", "74.jpg", "75.jpg", "76.jpg", "77.jpg", "78.jpg", 
    "79.jpg", "80.jpg", "81.jpg", "82.jpg", "83.jpg", "84.jpg", "85.jpg", "86.jpg", "87.jpg", "88.jpg", "89.jpg",
    "90.jpg", "91.jpg", "92.jpg", "93.jpg", "94.jpg", "95.jpg", "96.jpg", "97.jpg", "98.jpg", "99.jpg", "100.jpg", 
    "101.jpg", "102.jpg", "103.jpg", "104.jpg", "105.jpg", "106.jpg", "107.jpg", "108.jpg", "109.jpg", "110.jpg",
    "111.jpg", "112.jpg", "113.jpg", "114.jpg", "115.jpg",, "116.jpg", "117.jpg", "118.jpg", "119.jpg", "120.jpg", 
    "121.jpg", "122.jpg", "123.jpg", "124.jpg",// Continue adicionando suas imagens
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
