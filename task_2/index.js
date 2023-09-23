let btn = document.getElementById('btn');
let countClick = 0;
const colors = ['red', 'tomato', 'green'];
const texts = ['Delete', 'Pending', 'Update'];

function changeColorAndText() {
    countClick++;

    if (countClick === colors.length + 1) {
        countClick = 1;
    }

    btn.style.backgroundColor = colors[countClick - 1];
    btn.textContent = texts[countClick - 1];
}

btn.addEventListener('click', changeColorAndText);
