document.addEventListener("DOMContentLoaded", function () {
    const statusButton = document.getElementById("statusButton");
    const statuses = [
        { text: "update", color: "green" },
        { text: "delete", color: "red" },
        { text: "pending", color: "yellow" },
    ];
    let currentStatusIndex = 0;

    statusButton.textContent = statuses[0].text;
    statusButton.style.backgroundColor = statuses[0].color;

    statusButton.addEventListener("click", function () {
        currentStatusIndex = (currentStatusIndex + 1) % statuses.length;
        statusButton.textContent = statuses[currentStatusIndex].text;
        statusButton.style.backgroundColor = statuses[currentStatusIndex].color;
    });
});