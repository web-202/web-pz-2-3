const images = document.querySelectorAll('.image-container img');
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        alert(`Відмінно ${index + 1}.`);
    });
});
images.forEach((img) => {
    img.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        transform(img);
    });
});

function transform(img) {
    
    const currentRotation = img.style.transform || 'rotate(0deg)';
    
    
    const currentAngle = parseInt(currentRotation.match(/\d+/)[0]);
    const newAngle = (currentAngle + 90) % 360;

    
    img.style.transform = `rotate(${newAngle}deg)`;
}
const links = document.querySelectorAll('.link');

        links.forEach((link) => {
            link.addEventListener('mouseenter', () => {
                link.setAttribute('href', link.href);
            });

            link.addEventListener('mouseleave', () => {
                link.removeAttribute('href');
            });
        });

        const form = document.getElementById('form');
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const age = document.getElementById('age');
        const demo = document.getElementById('demo');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const errors = [];

            if (!/^[A-Za-z]{1,50}$/.test(firstName.value)) {
                errors.push('First name is invalid.');
                firstName.classList.add('invalid');
            } else {
                firstName.classList.remove('invalid');
            }

            if (!/^[A-Za-z]{1,50}$/.test(lastName.value)) {
                errors.push('Last name is invalid.');
                lastName.classList.add('invalid');
            } else {
                lastName.classList.remove('invalid');
            }

            if (!/^[0-9]+$/.test(age.value) || age.value <= 0) {
                errors.push('Age is invalid.');
                age.classList.add('invalid');
            } else {
                age.classList.remove('invalid');
            }

            if (errors.length === 0) {
                demo.textContent = `Form is valid:\nFirst name: ${firstName.value}\nLast name: ${lastName.value}\nAge: ${age.value}`;
            } else {
                demo.textContent = 'Form contains errors:\n' + errors.join('\n');
            }
        });