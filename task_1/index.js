const imgs = document.getElementsByClassName('img');
const tegA = document.getElementsByTagName("a");
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const age = document.getElementById('age');
const exeption = document.getElementById('exeption');
const firstPatern = /^[A-Za-z]{1,50}$/;
const secondPatern = /^\d+$/;



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
    surname.classList.remove('red');
    name.classList.remove('red');
    age.classList.remove('red');

    let valid = true;

    if (!firstPatern.test(name.value)) {
        name.classList.add('red');
        valid = false;
    }

    if (!firstPatern.test(surname.value)) {
        surname.classList.add('red');
        valid = false;
    }

    if (!secondPatern.test(age.value) || parseInt(age.value) < 0) {
        age.classList.add('red');
        valid = false;
    }

    if (valid) exeption.innerHTML = 'Молодець!';
    else exeption.innerHTML = 'Щось пішло не так((';
})