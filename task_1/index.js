// Task 1: 
function showAlert(href) {
    alert(href);
}

// Task 2: 
function rotateImage(event) {
    event.preventDefault();
    const img = event.target;
    const currentRotation = (img.style.transform.match(/(\d+)/) || [])[0] || 0;
    img.style.transform = `rotate(${parseInt(currentRotation) + 90}deg)`;
}

// Task 3:
function addHref(element, href) {
    element.innerText = element.innerText + ` (${href})`;
}

function removeHref(element) {
    const originalText = element.innerText.split(' (')[0]; // Remove appended href
    element.innerText = originalText;
}

// Task 4: 
function validateInput(input) {
    const regex = /^[a-zA-Z]+$/;
    const value = input.value;

    if (input.name !== "age") {
        if (!regex.test(value) || value.length > 50) {
            input.classList.add("invalid-input");
        } else {
            input.classList.remove("invalid-input");
        }
    } else {
        if (isNaN(value) || value < 0) {
            input.classList.add("invalid-input");
        } else {
            input.classList.remove("invalid-input");
        }
    }
}

function validateForm() {
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const age = document.getElementById("age");
    const demo = document.getElementById("demo");

    if (firstName.classList.contains("invalid-input") || lastName.classList.contains("invalid-input") || age.classList.contains("invalid-input")) {
        demo.innerText = "Форма недійсна. Перевірте введені дані.";
    } else {
        demo.innerText = "Форма дійсна. Подання успішне!";
    }
}
