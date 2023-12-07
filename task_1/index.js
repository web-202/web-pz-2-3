function showNotification(href) {
    alert('Clicked! ' + href);
}

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    if (e.target.tagName === 'IMG') {
        e.target.style.transform = 'rotate(90deg)';
    }
});

function addHref(element) {
    element.innerText += ' (' + element.getAttribute('href') + ')';
}

function removeHref(element) {
    element.innerText = element.innerText.replace(/\s*\([^)]*\)$/, '');
}

function validateForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var age = document.getElementById('age').value;

    var namePattern = /^[A-Za-z ]{1,50}$/;
    var agePattern = /^[0-9]+$/;

    var isValid = namePattern.test(firstName) && namePattern.test(lastName) && agePattern.test(age);

    if (!isValid) {
        alert('Invalid input! Please check your entries.');
    } else {
        document.getElementById('demo').innerText = `First name: ${firstName}\nLast name: ${lastName}\nAge: ${age}`;
    }

    return isValid;
}
