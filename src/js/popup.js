const statusMessage = document.createElement('div');
statusMessage.classList.add('status');

let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
};

let form = document.querySelector('.main-form'),
    input = document.querySelector('.popup-form__input');

    form.addEventListener('submit', async(evt) => {
        evt.preventDefault();
        const url = 'https://jsonplaceholder.typicode.com/users';
        try{
            const response = await fetch(url, {
                method : "POST",
                body : new FormData(form)
                })
            
            const result = await response.json()
            statusMessage.innerHTML = message.success
            form.appendChild(statusMessage)
            input.value = ''
        } catch (error) {
            statusMessage.innerHTML = message.failure
            statusMessage.appendChild(input)
            input.value = ''
        }
    })