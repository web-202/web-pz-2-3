const button = document.getElementById("button");
let index = 0;

button.addEventListener("click", () => {
    switch (index) {
        case 0:
            button.style.backgroundColor = 'red';
            button.textContent = 'Delete'
            break;
        case 1:
            button.style.backgroundColor = 'yellow';
            button.textContent = 'Pending'
            break;
        case 2:
            button.style.backgroundColor = 'green';
            button.textContent = 'Update'
            break;
    }
    index = (index + 1) % 3;
})

document.addEventListener("DOMContentLoaded", function () {
    button.style.backgroundColor = 'green';
    button.textContent = 'Update'
});
