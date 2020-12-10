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


function showSlides(n) {
    let photo = document.querySelectorAll('.photo');

    if (n > photo.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = photo.length;
    }

    photo.forEach(item => {
        item.style.display = "none";
    })
    photo[slideIndex - 1].style.display = "block"; 
}

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)