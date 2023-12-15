const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
function rotate(element){
    element.style.transform = "rotate(90deg)";
}
function alertAction(element){
    alert("click on KARAS")
}
function addHref(link) {
    document
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
        if (specialChars.test(firstName) || specialChars.test(lastName) || firstName.length > 50 || lastName.length > 50) {
            alert("Ім'я та прізвище не повинні містити спеціальних символів і не можуть бути довшими за 50 символів");
            form.reset();
        }
        else if(age >= 100 ){
            alert("age must be < 100")
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


function links(e){
    alert("1")
    const form = document.getElementById('site-link');
    const link =  e.getAttribute('data-site');
    form.innerHTML = `${link}`;
}

const link_over = document.querySelectorAll(".link_over")

link_over.forEach(link => {
    let text = link.textContent;
    link.addEventListener("mouseover", () => {
        link.textContent = `${text} (${link.href})`
    })
    link.addEventListener("mouseout", () => {
        link.textContent = `${text}`
    })
})

document.oncontextmenu = disablecontext;
