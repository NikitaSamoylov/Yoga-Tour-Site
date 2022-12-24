let slideIndex = 1;
slides = document.querySelectorAll('.slider-item'),
prev = document.querySelector('.prev'),
next = document.querySelector('.next'),
dotsWrap = document.querySelector('.slider-dots'),
dots = document.querySelectorAll('.dot');

showSlides(slideIndex);

function showSlides(n) {

if (n > slides.length) {
    slideIndex = 1;
}
if (n < 1) {
    slideIndex = slides.length;
}

slides.forEach((item) => item.style.display = 'none');
// for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
// }
dots.forEach((item) => item.classList.remove('dot-active'));

slides[slideIndex - 1].style.display = 'block';
dots[slideIndex - 1].classList.add('dot-active');
}

function plusSlides(n) {
showSlides(slideIndex += n); 
}
function currentSlide(n) {
showSlides(slideIndex = n);
}

prev.addEventListener('click', function() {
plusSlides(-1);
});

next.addEventListener('click', function() {
plusSlides(1);
});

dotsWrap.addEventListener('click', function(event) {
for (let i = 0; i < dots.length + 1; i++) {
    if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
        currentSlide(i);
    }
}
});

let x1 = null;
const sliderWrap = document.querySelector('.slider-wrap');

sliderWrap.addEventListener('touchstart', function(evt) {
let firstTouch = evt.touches[0].clientX.toFixed();
x1 = firstTouch;
console.log(x1)
});
sliderWrap.addEventListener('touchmove', function(evt) {
let x2 = evt.touches[0].clientX.toFixed()
// console.log(x2)
let result = x2 - x1;
console.log(result)
if (result < 0 && result < -150) {
    next.click()
}
else if (result > 0 && result > 150) {
    prev.click()
}
});