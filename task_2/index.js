const statusButton = document.getElementById('statusButton');
const states = ['Оновлення', 'Видалення', 'Обробка'];
let currentState = 0;

function change() {
    currentState = (currentState + 1) % states.length;
    statusButton.textContent = states[currentState];
    statusButton.className = `state${currentState + 1}`;
}
