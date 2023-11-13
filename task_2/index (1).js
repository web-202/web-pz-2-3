const statusButton = document.getElementById('statusButton');
const states = ['Update', 'Delete', 'Pending'];
let currentState = 0;

function change() {
    currentState = (currentState + 1) % states.length;
    statusButton.textContent = states[currentState];
    statusButton.className = `state${currentState + 1}`;
}
