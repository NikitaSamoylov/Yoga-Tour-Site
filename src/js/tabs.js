const tabs = document.querySelectorAll('.info-header-tab');
const info = document.querySelector('.info-header');
const tabContent = document.querySelectorAll('.info-tabcontent');

const hideTabContent = (a) => {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i]. classList.add('hide');
    };
};

hideTabContent(1);

const showTabContent = (b) => {
    if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    };
};

info.addEventListener('click', (evt) => {
    const target = evt.target;
    if (target && target.classList.contains('info-header-tab')) {
        for (let i = 0; i < tabContent.length; i++) {
            if (target === tabs[i]) {
                hideTabContent(0);
                showTabContent(i);
                break;
            };
        };
    };
});