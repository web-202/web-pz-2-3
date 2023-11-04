const img_1 = document.getElementById('1');
const img_2 = document.getElementById('2');
const img_3 = document.getElementById('3');
const images = document.querySelectorAll('.rotate');
const links = document.querySelectorAll('.link');
const form = document.getElementById('div_3');
const demo = document.getElementById('demo');


img_1.onclick = function() {
    alert('Image 1 was clicked!');
};

img_2.onclick = function() {
    alert('Image 2 was clicked!');
};

img_3.onclick = function() {
    alert('Image 3 was clicked!');
};

function rotateImage(image) {
    const currentRotation = image.getAttribute('data-rotation') || 0;
    const newRotation = (parseInt(currentRotation) + 90) % 360;

    image.style.transform = `rotate(${newRotation}deg)`;
    image.setAttribute('data-rotation', newRotation);
}

images.forEach((image) => {
    image.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        rotateImage(image);
    });
});

links.forEach((link) => {
    const originalText = link.textContent;
    const newText = link.getAttribute('data-text');

    link.addEventListener('mouseover', () => {
        link.textContent = newText;
    });

    link.addEventListener('mouseout', () => {
        link.textContent = originalText;
    });
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;

    document.getElementById('firstName').style.border = '';
    document.getElementById('lastName').style.border = '';
    document.getElementById('age').style.border = '';

    let isValid = true;

    if (!/^[A-Za-z ]{1,50}$/.test(firstName)) {
        document.getElementById('firstName').style.border = '2px solid red';
        isValid = false;
    }

    if (!/^[A-Za-z ]{1,50}$/.test(lastName)) {
        document.getElementById('lastName').style.border = '2px solid red';
        isValid = false;
    }

    if (!/^\d+$/.test(age) || (age < 0 || age > 150)) {
        document.getElementById('age').style.border = '2px solid red';
        isValid = false;
    }

    if (isValid) {
        demo.innerHTML = `Form is valid. First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}`;
    } else {
        demo.innerHTML = 'Please correct the input errors.';
    }
});