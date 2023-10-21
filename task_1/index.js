const images = document.querySelectorAll('.images img');
images.forEach(img => {
    img.addEventListener('click', () => {
        const href = img.getAttribute('href');
        alert(`Link: ${href}`);
    });

    img.addEventListener('contextmenu', e => {
        e.preventDefault();
        const currentRotation = img.style.transform.replace(/[^0-9-]/g, '') || 0;
        const newRotation = (parseInt(currentRotation) + 90) % 360;
        img.style.transform = `rotate(${newRotation}deg)`;
    });
});

const links = document.querySelectorAll('.links a');
links.forEach(link => {
    let originalText = link.textContent;
    link.addEventListener('mouseenter', () => {
        originalText = link.textContent;
        link.textContent = `${originalText} (${link.getAttribute('href')})`;
    });
    link.addEventListener('mouseleave', () => {
        link.textContent = originalText;
    });

});

const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const secondNameInput = document.getElementById('secondName');
const ageInput = document.getElementById('age');
const demo = document.getElementById('demo');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const secondName = secondNameInput.value.trim();
    const age = ageInput.value.trim();

    const nameIsValid = /^[A-Za-z\s]{1,50}$/.test(name);
    const secondNameIsValid = /^[A-Za-z\s]{1,50}$/.test(secondName);
    const ageIsValid = /^\d+$/.test(age) && age >= 0;

    if (!nameIsValid) {
        demo.textContent = 'Name is invalid.';
        demo.style.color = 'red';
    } else if (!secondNameIsValid) {
        demo.textContent = 'Second Name is invalid.';
        demo.style.color = 'red';
    } else if (!ageIsValid) {
        demo.textContent = 'Age is invalid.';
        demo.style.color = 'red';
    } else {
        demo.textContent = 'Form is valid.';
        demo.style.color = 'green';
    }
});
