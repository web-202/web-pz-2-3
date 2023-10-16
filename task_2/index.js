const statusButton = document.getElementById('statusButton');
const states = ['Status 1', 'Status 2', 'Status 3', 'Status 4'];
let currentState = 0;

function changeStatus() {
    currentState = (currentState + 1) % states.length;
    statusButton.textContent = states[currentState];
    statusButton.className = `state${currentState + 1}`;
}
