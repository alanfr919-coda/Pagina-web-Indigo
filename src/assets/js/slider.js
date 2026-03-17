const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".testimonial");

const nextBtn = document.querySelector(".arrow.right");
const prevBtn = document.querySelector(".arrow.left");

const dots = document.querySelectorAll(".dot");

let index = 0;

function updateSlider () {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

nextBtn.addEventListener('click', () => {
    index++;

    if (index >= slides.length) {
        index = 0;
    }

    updateSlider();
});

prevBtn.addEventListener('click', () => {
    index--;

    if (index < 0) {
        index = slides.length -1;
    }

    updateSlider();
});

function nextSlide () {

    index++;

    if(index >= slides.length){
        index = 0;
    }

    updateSlider();
}

const mobile = window.matchMedia("(max-width:460px)");

if (mobile.matches){

    setInterval(nextSlide, 4000);

}