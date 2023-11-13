const button = document.getElementById("statusButton");
let currentStatus = 1;
const statusTexts = ['none status', 'Update', 'Delete', 'Pending'];

button.addEventListener("click", () => {
    currentStatus++;
    if (currentStatus > 4) {
        currentStatus = 1;
    }

    button.className = `status-${currentStatus}`;
    button.textContent = statusTexts[currentStatus-1];
});
