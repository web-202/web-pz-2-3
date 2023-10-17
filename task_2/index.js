const button = document.getElementById('myButton');
const buttonTexts = ['Update', 'Delete', 'Pending'];
let currentIndex = 1;

button.addEventListener('click', () => {
    button.textContent = buttonTexts[currentIndex];

    if (currentIndex === 1) {
        button.classList.remove('green');
        button.classList.add('red');
    } else if (currentIndex === 2) {
        button.classList.remove('red');
        button.classList.add('orange');
    } else {
        button.classList.remove('orange');
        button.classList.add('green');
    }

    currentIndex = (currentIndex + 1) % buttonTexts.length;
});