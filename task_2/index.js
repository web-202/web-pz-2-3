document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('statusButton');
    const states = [
        { text: 'Update', className: 'green' },
        { text: 'Delete', className: 'red' },
        { text: 'Pending', className: 'orange' }
    ];
    let currentState = 0;

    button.addEventListener('click', function() {
        currentState = (currentState + 1) % states.length;
        updateButtonState();
    });

    function updateButtonState() {
        button.textContent = states[currentState].text;
        button.className = 'button ' + states[currentState].className;
    }
    updateButtonState();
});
