let prev = document.querySelector('.prev'),
    next = document.querySelector('.next');

let slideIndex = 1;

showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1)
}

function prevSlide() {
    showSlides(slideIndex -= 1)
}

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)

function showSlides(n) {
    let slides = document.querySelectorAll('.photo');

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(item => item.style.display = "none");
    slides[slideIndex - 1].style.display = "block";
}