    
    function alertt(img) {
        alert('Ви переглядаєте ' + img.alt);
    }
    const img = document.getElementById('yourImageId'); 
  
    function rotateImage(img) {
        const currentRotation = img.getAttribute('data-rotation') || 0;
        const newRotation = (parseInt(currentRotation) + 90) % 360;

        img.style.transform = `rotate(${newRotation}deg)`;
        img.setAttribute('data-rotation', newRotation);
        img.style.marginTop = newRotation % 180 === 90 ? '40px' : '0';
    }

    const userForm = document.getElementById('add-form');

    userForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const firstNameInput = document.getElementById('input_name');
    const lastNameInput = document.getElementById('input_last_name');
    const ageInput = document.getElementById('input_age');
    const demoBlock = document.getElementById('demo');

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const age = ageInput.value.trim();

    const firstNameRegex = /^[A-Za-z ]{1,50}$/;
    const lastNameRegex = /^[A-Za-z ]{1,50}$/;
    const ageRegex = /^\d+$/;

    const firstNameValid = firstName.match(firstNameRegex);
    const lastNameValid = lastName.match(lastNameRegex);
    const ageValid = age.match(ageRegex) && parseInt(age) >= 0;

    firstNameInput.classList.remove("invalid");
    lastNameInput.classList.remove("invalid");
    ageInput.classList.remove("invalid");

    if (firstNameValid && lastNameValid && ageValid) {
        demoBlock.innerHTML = `Форма валідна. ${firstName}  ${lastName}, ${age}y.o`;
    } else {
        demoBlock.innerHTML = "Не вірно введені дані";
        
        if (!firstNameValid) {
            firstNameInput.classList.add("invalid");
            firstNameInput.style.borderColor = "red";
        }
        if (firstNameValid) {
            firstNameInput.classList.remove("invalid");
            firstNameInput.style.borderColor = "";
        }

        if (!lastNameValid) {
            lastNameInput.classList.add("invalid");
            lastNameInput.style.borderColor = "red";
        }
        if (lastNameValid) {
            lastNameInput.classList.remove("invalid");
            lastNameInput.style.borderColor = "";
        }

        if (!ageValid || parseInt(age) < 0) {
            ageInput.classList.add("invalid");
            ageInput.style.borderColor = "red";
        }
        if (ageValid) {
            ageInput.classList.remove("invalid");
            ageInput.style.borderColor = "";
        }
    }
});   