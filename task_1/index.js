document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img");
    const links = document.querySelectorAll("a");
    const form = document.getElementById("myForm");
    const demo = document.getElementById("demo");

    const rotationDegrees = {}; 

    images.forEach(img => {
        rotationDegrees[img.src] = 0;
        img.addEventListener("click", function () {
            alert("Image clicked: " + img.src);
        });

        img.addEventListener("contextmenu", function (event) {
            event.preventDefault();
           
            rotationDegrees[img.src] += 90;
            img.style.transform = `rotate(${rotationDegrees[img.src]}deg)`;
        });
    });

    const link = document.querySelectorAll('.links a');
    const siteLink = document.getElementById('site-link');
    
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            const site = link.getAttribute('data-site');
            siteLink.innerHTML = `<a href="${site}" target="_blank">${site}</a>`;
        });
    
        link.addEventListener('mouseout', () => {
            siteLink.innerHTML = '';
        });
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const firstName = document.getElementById("firstName");
        const lastName = document.getElementById("lastName");
        const age = document.getElementById("age");

        const namePattern = /^[A-Za-z ]{1,50}$/;
        const agePattern = /^\d+$/;

        if (!namePattern.test(firstName.value) || !namePattern.test(lastName.value) || !agePattern.test(age.value)) {
            firstName.classList.add("invalid");
            lastName.classList.add("invalid");
            age.classList.add("invalid");
            demo.innerText = "Form is invalid. Please correct the input fields.";
        } else {
            firstName.classList.remove("invalid");
            lastName.classList.remove("invalid");
            age.classList.remove("invalid");
            demo.innerText = "Form is valid. First Name: " + firstName.value + ", Last Name: " + lastName.value + ", Age: " + age.value;
        }
    });
});