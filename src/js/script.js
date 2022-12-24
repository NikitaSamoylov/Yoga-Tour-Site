import './button';
import './calculator';
import './contacts-form';
import './popup';
import './slider';
import './tabs';
import './timer';


// window.addEventListener("DOMContentLoaded", function() {
    
//     const tabs = document.querySelectorAll('.info-header-tab');
//     const info = document.querySelector('.info-header');
//     const tabContent = document.querySelectorAll('.info-tabcontent');
    
//     const hideTabContent = (a) => {
//         for (let i = a; i < tabContent.length; i++) {
//             tabContent[i].classList.remove('show');
//             tabContent[i]. classList.add('hide');
//         };
//     };
    
//     hideTabContent(1);
    
//     const showTabContent = (b) => {
//         if (tabContent[b].classList.contains('hide')) {
//             tabContent[b].classList.remove('hide');
//             tabContent[b].classList.add('show');
//         };
//     };
    
//     info.addEventListener('click', (evt) => {
//         const target = evt.target;
//         if (target && target.classList.contains('info-header-tab')) {
//             for (let i = 0; i < tabContent.length; i++) {
//                 if (target === tabs[i]) {
//                     hideTabContent(0);
//                     showTabContent(i);
//                     break;
//                 };
//             };
//         };
//     });
    
//         // Timer ------------------------------------------------------------------
    
//         function getTimeRemaining(endtime) {
//             const t = Date.parse(endtime) - Date.parse(new Date());
//             const seconds = Math.floor((t / 1000) % 60);
//             const minutes = Math.floor((t / 60000) % 60);
//             const hours = Math.floor((t / (3600000)) % 24);
//             const days = Math.floor(t / (1000 * 60 * 60 * 24));
//             return {
//               'total': t,
//               'days': days,
//               'hours': hours,
//               'minutes': minutes,
//               'seconds': seconds
//             };
//         };
          
//           function initializeClock(id, endtime) {
//             const clock = document.getElementById(id);
//             const daysSpan = document.querySelector('.daysNum');
//             const hoursSpan = document.querySelector('.hoursNum');
//             const minutesSpan = document.querySelector('.minutesNum');
//             const secondsSpan = document.querySelector('.secondsNum');
//             const daysText = document.querySelector('.daysText');
//             const hoursText = document.querySelector('.hoursText');
//             const minutesText = document.querySelector('.minutesText');
//             const secondsText = document.querySelector('.secondsText');
    
//             function updateClock() {
//                 const t = getTimeRemaining(endtime);
          
//                 daysSpan.innerHTML = t.days;
//                 hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//                 minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//                 secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    
//                 function wordsEnd(number, words) {  
//                      return words[(number % 100 > 04 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
//                 };
//                 secondsText.textContent = wordsEnd(secondsSpan.textContent, ['секунда', 'секунды', 'секунд']);
//                 minutesText.textContent = wordsEnd(minutesSpan.textContent, ['минута', 'минуты', 'минут']);
//                 hoursText.textContent = wordsEnd(hoursSpan.textContent, ['час', 'часа', 'часов']);
//                 daysText.textContent = wordsEnd(daysSpan.textContent, ['день', 'дня', 'дней']);
          
//                 const timeinterval = setInterval(updateClock, 1000);

//                 if (t.total <= 0) {
//                     // clearInterval(timeinterval);
//                     daysSpan.textContent = '00';
//                     hoursSpan.textContent = '00';
//                     minutesSpan.textContent = '00';
//                     secondsSpan.textContent = '00';
//                 };
//             };
//             updateClock();
//             };
          
//             const deadline="2022-12-15"; 
//             initializeClock('countdown', deadline);

//     // More and Description buttons---------------------------------

//     const moreBtn = document.querySelector('.more');
//     const overlay = document.querySelector('.overlay');
//     const closeBtn = document.querySelector('.popup-close');
//     const body = document.querySelector('body');
//     const overlayBackground = document.querySelector('.overlay-back')
//     const descrBtn = document.querySelectorAll('.description-btn');

//     const showOverlay = () => {
//         overlay.style.display = 'block';
//         body.style.overflowY = 'hidden';
//         overlayBackground.style.display = 'block'
//     }
//     moreBtn.addEventListener('click', showOverlay);
//     descrBtn.forEach((item) => {
//         item.addEventListener('click', showOverlay);
//     });

//     const hideOverlay = () => {
//         overlay.style.display = 'none';
//         body.style.overflowY = '';
//         overlayBackground.style.display = 'none'
//     }

//     closeBtn.addEventListener('click', hideOverlay);

//     // Form-----------------------------

//     const statusMessage = document.createElement('div');
//     statusMessage.classList.add('status');
   
//     let message = {
//         loading: 'Загрузка...',
//         success: 'Спасибо! Скоро мы с вами свяжемся!',
//         failure: 'Что-то пошло не так...'
//     };

//     let form = document.querySelector('.main-form'),
//         input = document.querySelector('.popup-form__input');

//         form.addEventListener('submit', async(evt) => {
//             evt.preventDefault();
//             const url = 'https://jsonplaceholder.typicode.com/users';
//             try{
//                 const response = await fetch(url, {
//                     method : "POST",
//                     body : new FormData(form)
//                     })
                
//                 const result = await response.json()
//                 statusMessage.innerHTML = message.success
//                 form.appendChild(statusMessage)
//                 input.value = ''
//             } catch (error) {
//                 statusMessage.innerHTML = message.failure
//                 statusMessage.appendChild(input)
//                 input.value = ''
//             }
//         })

//         // contacts form------------------

//         const contactsForm = document.querySelector('.contacts-form');
//         const inputContactsForm = document.querySelectorAll('.contacts-form > input');

//         contactsForm.addEventListener('submit', async (e) => {
//             e.preventDefault();
//             const url = 'https://jsonplaceholder.typicode.com/users';
//             try {
//                 const response = await fetch(url, {
//                     method: 'POST',
//                     body: new FormData(contactsForm)
//                 })
//                 const result = await response.json()
//                 statusMessage.innerHTML = message.success;
//                 contactsForm.appendChild(statusMessage);
//                 inputContactsForm.forEach((input) => {
//                     input.value = ''
//                 });

//             } catch (error) {
//                 statusMessage.innerHTML = message.failure;
//                 contactsForm.innerHTML = message.failure;
//                 contactsForm.appendChild(statusMessage);
//                 inputContactsForm.forEach((input) => {
//                     input.value = ''
//                 });
//             };
//         });

//     // Slider---------------------------

    
//     let slideIndex = 1;
//         slides = document.querySelectorAll('.slider-item'),
//         prev = document.querySelector('.prev'),
//         next = document.querySelector('.next'),
//         dotsWrap = document.querySelector('.slider-dots'),
//         dots = document.querySelectorAll('.dot');

//     showSlides(slideIndex);

//     function showSlides(n) {

//         if (n > slides.length) {
//             slideIndex = 1;
//         }
//         if (n < 1) {
//             slideIndex = slides.length;
//         }

//         slides.forEach((item) => item.style.display = 'none');
//         // for (let i = 0; i < slides.length; i++) {
//         //     slides[i].style.display = 'none';
//         // }
//         dots.forEach((item) => item.classList.remove('dot-active'));

//         slides[slideIndex - 1].style.display = 'block';
//         dots[slideIndex - 1].classList.add('dot-active');
//     }

//     function plusSlides(n) {
//         showSlides(slideIndex += n); 
//     }
//     function currentSlide(n) {
//         showSlides(slideIndex = n);
//     }

//     prev.addEventListener('click', function() {
//         plusSlides(-1);
//     });

//     next.addEventListener('click', function() {
//         plusSlides(1);
//     });

//     dotsWrap.addEventListener('click', function(event) {
//         for (let i = 0; i < dots.length + 1; i++) {
//             if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
//                 currentSlide(i);
//             }
//         }
//     });

//     let x1 = null;
//     const sliderWrap = document.querySelector('.slider-wrap');

//     sliderWrap.addEventListener('touchstart', function(evt) {
//         let firstTouch = evt.touches[0].clientX.toFixed();
//         x1 = firstTouch;
//         console.log(x1)
//     });
//     sliderWrap.addEventListener('touchmove', function(evt) {
//         let x2 = evt.touches[0].clientX.toFixed()
//         // console.log(x2)
//         let result = x2 - x1;
//         console.log(result)
//         if (result < 0 && result < -150) {
//             next.click()
//         }
//         else if (result > 0 && result > 150) {
//             prev.click()
//         }
//     });


//     // Calculator--------------------------------------

//     const persons = document.querySelectorAll('.counter-block-input')[0];
//     const restDays = document.querySelectorAll('.counter-block-input')[1];
//     const place = document.querySelector('#select');
//     const totalValue = document.querySelector('#total');
//     let personsSum = 0;
//     let daysSum = 0;
//     let total = 0;

//     totalValue.textContent = 0;

//     persons.addEventListener('change', function() {
//         personsSum = this.value;
//         total = (personsSum + daysSum)* 4000;
//         if (restDays.value === '') {
//             totalValue.textContent = 0;
//         } else {
//             totalValue.textContent = total;
//         }
//     });
//     restDays.addEventListener('change', function() {
//         daysSum = this.value;
//         total = (personsSum + daysSum) * 4000;
//         if (persons.value === '') {
//             totalValue.textContent = 0;
//         } else {
//             totalValue.textContent = total;
//         }
//     });
//     place.addEventListener ('change', function() {
//         let a = total;
//         if (restDays.value == '' || persons.value == '') {
//             totalValue.textContent = 0;
//         } else {
//             totalValue.textContent = a * this.options[this.selectedIndex].value
//         }
//     });



// });  











