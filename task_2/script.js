document.addEventListener("DOMContentLoaded", function () {
    const Button = document.getElementById("Button");
    const statuses = [
        { text: "update", color: "green" },
        { text: "delete", color: "red" },
        { text: "pending", color: "orange" },
        
    ];
    let currentStatusIndex = 0;
    Button.textContent = statuses[0].text;
    Button.style.backgroundColor = statuses[0].color;

    Button.addEventListener("click", function () {
        currentStatusIndex = (currentStatusIndex + 1) % statuses.length;
        Button.textContent = statuses[currentStatusIndex].text;
        Button.style.backgroundColor = statuses[currentStatusIndex].color;
    });
});