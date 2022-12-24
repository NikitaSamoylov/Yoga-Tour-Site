const persons = document.querySelectorAll('.counter-block-input')[0];
const restDays = document.querySelectorAll('.counter-block-input')[1];
const place = document.querySelector('#select');
const totalValue = document.querySelector('#total');
let personsSum = 0;
let daysSum = 0;
let total = 0;

totalValue.textContent = 0;

persons.addEventListener('change', function() {
    personsSum = this.value;
    total = (personsSum + daysSum)* 4000;
    if (restDays.value === '') {
        totalValue.textContent = 0;
    } else {
        totalValue.textContent = total;
    }
});
restDays.addEventListener('change', function() {
    daysSum = this.value;
    total = (personsSum + daysSum) * 4000;
    if (persons.value === '') {
        totalValue.textContent = 0;
    } else {
        totalValue.textContent = total;
    }
});
place.addEventListener ('change', function() {
    let a = total;
    if (restDays.value == '' || persons.value == '') {
        totalValue.textContent = 0;
    } else {
        totalValue.textContent = a * this.options[this.selectedIndex].value
    }
});
