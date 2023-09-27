const images = document.querySelectorAll('.blocks img');

images.forEach((img) => {
    img.onclick = () => {
        alert(img.getAttribute('href'));
    };
});


images.forEach((img) => {
    img.onclick = () => {
        alert(img.getAttribute('href'));
    };

    img.oncontextmenu = (event) => {
        event.preventDefault();
        img.style.transform = 'rotate(90deg)';
    };
});





const links = document.querySelectorAll('.links a');

links.forEach((link) => {
    link.addEventListener('mouseover', () => {
        link.textContent += ` (${link.getAttribute('href')})`;
    });

    link.addEventListener('mouseout', () => {
        const text = link.textContent.split(' ')[0]; 
        link.textContent = text;
    });
});





const form = document.getElementById('myForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const ageInput = document.getElementById('age');
const demoMessage = document.getElementById('demo');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    if (isValidForm()) {
        demoMessage.textContent = 'Form is valid!';
    } else {
        demoMessage.textContent = 'Form is invalid!';
    }
});

function isValidForm() {
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const age = ageInput.value;

  
    const namePattern = /^[A-Za-z ]{1,50}$/;
    const agePattern = /^\d+$/;

    return namePattern.test(firstName) && namePattern.test(lastName) && agePattern.test(age);
}

firstNameInput.addEventListener('input', () => {
    if (!isValidName(firstNameInput.value)) {
        firstNameInput.style.borderColor = 'red';
    } else {
        firstNameInput.style.borderColor = 'green';
    }
});

lastNameInput.addEventListener('input', () => {
    if (!isValidName(lastNameInput.value)) {
        lastNameInput.style.borderColor = 'red';
    } else {
        lastNameInput.style.borderColor = '';
    }
});

ageInput.addEventListener('input', () => {
    if (!isValidAge(ageInput.value)) {
        ageInput.style.borderColor = 'red';
    } else {
        ageInput.style.borderColor = '';
    }
});

function isValidName(name) {
    return /^[A-Za-z ]{1,50}$/.test(name);
}

function isValidAge(age) {
    return /^\d+$/.test(age) && parseInt(age) >= 0;
}

