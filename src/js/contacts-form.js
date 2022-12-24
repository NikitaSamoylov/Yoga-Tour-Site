const contactsForm = document.querySelector('.contacts-form');
const inputContactsForm = document.querySelectorAll('.contacts-form > input');

contactsForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = 'https://jsonplaceholder.typicode.com/users';
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: new FormData(contactsForm)
        })
        const result = await response.json()
        statusMessage.innerHTML = message.success;
        contactsForm.appendChild(statusMessage);
        inputContactsForm.forEach((input) => {
            input.value = ''
        });

    } catch (error) {
        statusMessage.innerHTML = message.failure;
        contactsForm.innerHTML = message.failure;
        contactsForm.appendChild(statusMessage);
        inputContactsForm.forEach((input) => {
            input.value = ''
        });
    };
});
