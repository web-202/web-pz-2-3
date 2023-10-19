const status = ['Pending', 'Complete', 'Cancelled'];
let currentStatus = 0;

const button = document.getElementById('status-button');

button.addEventListener('click', () => {
  currentStatus++;
  
  if(currentStatus >= status.length) {
    currentStatus = 0;
  }

  updateButton();  
});

function updateButton() {
  button.textContent = status[currentStatus];
  
  if(status[currentStatus] === 'Pending') {
    button.className = 'status-pending';
  } else if (status[currentStatus] === 'Complete') {
    button.className = 'status-complete';
  } else {
    button.className = 'status-cancelled';
  }
}