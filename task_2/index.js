let btn = document.getElementById('btn');
let count = 0;

btn.addEventListener('click', (function (e) {
    if (count === 0) {
        btn.style.backgroundColor = '#00661f';
        btn.style.color = '#fff'
        btn.value = 'Update'
        count++;
    } else if (count === 1) {
        btn.style.backgroundColor = '#b00202';
        btn.value = 'Delete';
        count++;
    }
    else if (count === 2) {
        btn.style.backgroundColor = '#c1c801';
        btn.style.color = '#000'
        btn.value = 'Pending'
        btn.style.border = '1px solid'
        count = 0;
    }
}))