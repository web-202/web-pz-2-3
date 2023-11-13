const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
function rotate(element){
    element.style.transform = "rotate(90deg)";
}
function alertAction(element){
    alert("click on images")
}
function addHref(link) {
    const text = link.textContent;
    if (text.includes('(') && text.includes(')')) {
        const textInParentheses = text.match(/\(([^)]+)\)/)[1];
        link.href = textInParentheses;
    }
}

function removeHref(link) {
    link.removeAttribute('href');
}

function submitForm() {
    const form = document.getElementById('userForm');
    const demo = document.getElementById('demo');
    if (form.checkValidity()) {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const age = document.getElementById('age').value;
        if (specialChars.test(firstName) || specialChars.test(lastName) || firstName.length > 20 || lastName.length > 20) {
            alert("Ім'я та прізвище не повинні містити спеціальних символів і не можуть бути довшими за 50 символів");
            form.reset();
        }
        else if(age >= 150 ){
            alert("age must be < 150")
            form.reset(); 
        }else{
        demo.innerHTML = `Дані надіслані: Ім'я: ${firstName}, Прізвище: ${lastName}, Вік: ${age}`;
        demo.style.display = 'block';
        form.reset();
        }
    } else {
        demo.style.display = 'none';
    }
}
function disablecontext(e) {
    var clickedEl = (e == null) ? event.srcElement.tagName : e.target.tagName;
    if (clickedEl == "IMG") {
        e.preventDefault();
    }
}

document.oncontextmenu = disablecontext;
