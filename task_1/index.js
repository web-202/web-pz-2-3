const imgs = document.getElementsByClassName('img');
const tegA = document.getElementsByTagName("a");
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const age = document.getElementById('age');
const exeption = document.getElementById('exeption');
const firstPatern = /^[A-Za-z]{1,50}$/;
const secondPatern = /^\d+$/;
let exeptions = ["Данні введені не правильно!"];



let rotation = {};


for (let i = 0; i< imgs.length; i++){
    imgs[i].addEventListener('click', () => {
        alert(imgs[i].alt)
    } )

    imgs[i].addEventListener('contextmenu', (ev) => {
        ev.preventDefault();

        if (!rotation[imgs[i].id]) {
            rotation[imgs[i].id] = 0;
        }
        rotation[imgs[i].id] += 90;
        imgs[i].style.transform = `rotate(${rotation[imgs[i].id]}deg)`;
    })
}

for (let i = 0; i< tegA.length; i++){
    tegA[i].addEventListener('mouseover', () => {
        const children = document.getElementById(`url${i+1}`);
        children.classList.remove('close');
    })
    tegA[i].addEventListener('mouseout', () => {
        const children = document.getElementById(`url${i+1}`);
        children.classList.add('close');
    })
}

const button = document.getElementById('ok');
button.addEventListener("click", () => {
    exeptions = ["Данні введені не правильно!"];
    surname.classList.remove('red');
    name.classList.remove('red');
    age.classList.remove('red');
    surname.classList.remove('green');
    name.classList.remove('green');
    age.classList.remove('rgreened');

    let valid = true;

    if (!firstPatern.test(name.value)) {
        name.classList.add('red');
        exeptions.push(`firstname : ${name.value}`)
        valid = false;
    }else {
        name.classList.add('green');
    }

    if (!firstPatern.test(surname.value)) {
        surname.classList.add('red');
        exeptions.push(`lastname : ${surname.value}`)
        valid = false;
    }else {
        surname.classList.add('green');
    }

    if (!secondPatern.test(age.value) || parseInt(age.value) < 0 || parseInt(age.value) > 150) {
        age.classList.add('red');
        exeptions.push(`age : ${age.value}`)
        valid = false;
    }else {
        age.classList.add('green');
        
    }

    if (valid) {
        exeptions = ["Данні введені правильно!"];
        exeptions.push(`firstname : ${name.value}`)
        exeptions.push(`lastname : ${surname.value}`)
        exeptions.push(`age : ${age.value}`)
        
        exeption.innerHTML = exeptions.join('<br>');
        exeption.style.color = "green"
    } 
    else
    {
        exeption.style.color = "red";
        exeption.innerHTML = exeptions.join('<br>');
    } 
})
