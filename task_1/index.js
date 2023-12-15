const images = document.querySelectorAll('.images img');
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

        const lastName = document.getElementById('last_Name');
        const firstName = document.getElementById('first_Name');
        const demo = document.getElementById('demo');
        const form = document.getElementById('form');
        const age = document.getElementById('age');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const errors = [];

            
            if (!/^[A-Za-z]{1,50}$/.test(lastName.value)) {
                lastName.classList.add('invalid');
                errors.push('Last name is invalid.');
            } else {
                lastName.classList.remove('invalid');
            }
            
            if (!/^[A-Za-z]{1,50}$/.test(firstName.value)) {
                firstName.classList.add('invalid');
                errors.push('First name is invalid.');
            } else {
                firstName.classList.remove('invalid');
            }
            if (!/^[0-9]+$/.test(age.value) || age.value <= 0) {
                age.classList.add('invalid');
                errors.push('Age is invalid.');
            } else {
                age.classList.remove('invalid');
            }

            if (errors.length === 0) {
                demo.textContent = `Form is valid:\nFirst name: ${firstName.value}\nLast name: ${lastName.value}\nAge: ${age.value}`;
            } else {
                demo.textContent = 'Form contains errors:\n' + errors.join('\n');
            }
        });