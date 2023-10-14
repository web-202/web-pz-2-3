function alertt(img) {
    alert('Ви переглядаєте ' + img.alt);
  }

  function rotateImage(img) {
    const currentRotation = img.getAttribute('data-rotation') || 0;
    const newRotation = (parseInt(currentRotation) + 90) % 360;

    img.style.transform = `rotate(${newRotation}deg)`;
    img.setAttribute('data-rotation', newRotation);
    img.style.marginTop = newRotation % 180 === 90 ? '40px' : '0';s
  }

  userForm.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const firstNameInput = userForm.elements.firstName;
    const lastNameInput = userForm.elements.lastName;
    const ageInput = userForm.elements.age;

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const age = ageInput.value.trim();

    const firstNameRegex = /^[A-Za-z\s]{1,50}$/;
    const lastNameRegex = /^[A-Za-z\s]{1,50}$/;
    const ageRegex = /^\d+$/;

    const firstNameValid = firstName.match(firstNameRegex);
    const lastNameValid = lastName.match(lastNameRegex);
    const ageValid = age.match(ageRegex) && parseInt(age) >= 0;

    firstNameInput.classList.remove("invalid");
    lastNameInput.classList.remove("invalid");
    ageInput.classList.remove("invalid");

    if (firstNameValid && lastNameValid && ageValid) {
        demoBlock.innerHTML = `first name: ${firstName}<br>last: ${lastName}<br>age: ${age}`;
    } else {
        demoBlock.innerHTML = "Не вірно введені дані";

        if (!firstNameValid) {
            firstNameInput.classList.add("invalid");
        }
        if (!lastNameValid) {
            lastNameInput.classList.add("invalid");
        }
        if (!ageValid || parseInt(age) < 0) {
            ageInput.classList.add("invalid");
        }
    }
});

