document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('statusButton');
    const states = ['Update', 'Delete', 'Pending'];
    let currentState = 0;

    button.addEventListener('click', function() {
        currentState = (currentState + 1) % states.length;
        updateButtonState();
    });

    function updateButtonState() {
        button.textContent = states[currentState];
        button.className = ''; 

        switch (currentState) {
            case 0:
                button.classList.add('green');
                break;
            case 1:
                button.classList.add('red');
                break;
            case 2:
                button.classList.add('orange');
                break;
            
        }
    }
    updateButtonState();
});
