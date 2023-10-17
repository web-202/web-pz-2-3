function validateInput(input) {
    const value = input.value.trim();
    const id = input.id;

    if (id === "firstName" || id === "lastName") {
       
        if (!/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+$/.test(value)) {
            input.classList.add("invalid-input");
            return false;
        }
    } else if (id === "age") {
        
        if (!/^\d+$/.test(value) || parseInt(value) > 150) {
            input.classList.add("invalid-input");
            return false;
        }
    }

    input.classList.remove("invalid-input");
    return true;
}

function validateForm() {
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const ageInput = document.getElementById("age");
    const demoMessage = document.getElementById("demo");

    const isFirstNameValid = validateInput(firstNameInput);
    const isLastNameValid = validateInput(lastNameInput);
    const isAgeValid = validateInput(ageInput);

    if (isFirstNameValid && isLastNameValid && isAgeValid) {
        demoMessage.textContent = "Форма дійсна. Подання успішне!";
        demoMessage.classList.remove("invalid-message");
    } else {
        demoMessage.textContent = "Форма недійсна. Перевірте введені дані.";
        demoMessage.classList.add("invalid-message");
    }
    function rotateImage(event) {
        if (event.button === 2) {
            const img = event.target;
            img.style.transform = `rotate(${(img.dataset.rotation || 0) + 90}deg)`;
            img.dataset.rotation = (img.dataset.rotation || 0) + 90;
        }
    }
    
    const images = document.querySelectorAll(".image-container img");
    
    images.forEach((img) => {
        img.addEventListener("contextmenu", (event) => event.preventDefault());
        img.addEventListener("mousedown", rotateImage);
    });
    
}
