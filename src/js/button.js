const moreBtn = document.querySelector('.more');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.popup-close');
const body = document.querySelector('body');
const overlayBackground = document.querySelector('.overlay-back')
const descrBtn = document.querySelectorAll('.description-btn');

const showOverlay = () => {
    overlay.style.display = 'block';
    body.style.overflowY = 'hidden';
    overlayBackground.style.display = 'block'
}
moreBtn.addEventListener('click', showOverlay);
descrBtn.forEach((item) => {
    item.addEventListener('click', showOverlay);
});

const hideOverlay = () => {
    overlay.style.display = 'none';
    body.style.overflowY = '';
    overlayBackground.style.display = 'none'
}

closeBtn.addEventListener('click', hideOverlay);