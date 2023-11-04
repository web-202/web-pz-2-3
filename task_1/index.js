const form = document.getElementById('form');
const demo = document.getElementById('demo');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const secondNameInput = document.getElementById('secondName');
    const ageInput = document.getElementById('age');

    const name = nameInput.value.trim();
    const secondName = secondNameInput.value.trim();
    const age = ageInput.value.trim();

    const nameIsValid = /^[A-Za-z\s]{1,50}$/.test(name);
    const secondNameIsValid = /^[A-Za-z\s]{1,50}$/.test(secondName);
    const ageIsValid = /^\d+$/.test(age) && age >= 0;

    if (!nameIsValid) {
        nameInput.style.borderColor = 'red';
    } else {
        nameInput.style.borderColor = '';
    }

    if (!secondNameIsValid) {
        secondNameInput.style.borderColor = 'red';
    } else {
        secondNameInput.style.borderColor = '';
    }

    if (!ageIsValid) {
        ageInput.style.borderColor = 'red';
    } else {
        ageInput.style.borderColor = '';
    }

    if (!nameIsValid || !secondNameIsValid || !ageIsValid) {
        demo.textContent = 'Form is invalid.';
        demo.style.color = 'red';
    } else {
        demo.textContent = 'Form is valid.';
        demo.style.color = 'green';
    }
});
