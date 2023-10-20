const img_1 = document.getElementById('img_1')
const img_2 = document.getElementById('img_2')
const img_3 = document.getElementById('img_3')

const name_img_1 = document.getElementById('name_img_1')
const name_img_2 = document.getElementById('name_img_2')
const name_img_3 = document.getElementById('name_img_3')

const form_submit = document.getElementById('form-submit')

name_img_1.textContent  = img_1.getAttribute('src').split('/')[2].split('.')[0]
name_img_2.textContent  = img_2.getAttribute('src').split('/')[2].split('.')[0]
name_img_3.textContent  = img_3.getAttribute('src').split('/')[2].split('.')[0]
 
form_submit.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.getElementById('name')
    const last = document.getElementById('last')
    const age = document.getElementById('age')
    const demo = document.getElementById('demo')

    let check = true
    let specialChars =/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
    let reg = /^\d+$/;

    if(name.value.length > 50  || name.value.length == 0 || name.value.match(reg) ||  name.value.match(specialChars)){
        name.style.border = "1px solid red"
        check = false
    }

    if(last.value.length > 50 || last.value.length == 0 || last.value.match(reg) ||  last.value.match(specialChars)){
        last.style.border = "1px solid red"
        check = false
    }

    if(age.value < 0 || age.value.length == 0){
        age.style.border = "1px solid red"
        check = false
    }

    if(check){
        demo.innerHTML = `Ім'я:${name}, Прізвище:${last}, Вік:${age}`
    }else{
        demo.innerHTML = "Not vallid"
    }
})

name_img_1.addEventListener('mouseover', (e) => {
    name_img_1.textContent += `(${img_1.getAttribute('src')})`
})

name_img_1.addEventListener('mouseout', (e) => {
    name_img_1.textContent = img_1.getAttribute('src').split('/')[2].split('.')[0]
})

name_img_2.addEventListener('mouseover', (e) => {
    name_img_2.textContent += `(${img_2.getAttribute('src')})`
})

name_img_2.addEventListener('mouseout', (e) => {
    name_img_2.textContent = img_2.getAttribute('src').split('/')[2].split('.')[0]
})

name_img_3.addEventListener('mouseover', (e) => {
    name_img_3.textContent += `(${img_3.getAttribute('src')})`
})

name_img_3.addEventListener('mouseout', (e) => {
    name_img_3.textContent = img_3.getAttribute('src').split('/')[2].split('.')[0]
})

img_1.addEventListener('click', () => {
    alert(img_1.getAttribute('src'))
})

img_2.addEventListener('click', () => {
    alert(img_2.getAttribute('src'))
})

img_3.addEventListener('click', () => {
    alert(img_3.getAttribute('src'))
})

let rotate_img_1 = 0
let rotate_img_2 = 0
let rotate_img_3 = 0

img_1.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    rotate_img_1 += 90;
    img_1.style.transform = `rotate(${rotate_img_1}deg)`
})

img_2.addEventListener ('contextmenu', (e) => {
    e.preventDefault()
    rotate_img_2 += 90;
    img_2.style.transform = `rotate(${rotate_img_2}deg)`
})

img_3.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    rotate_img_3 += 90;
    img_3.style.transform = `rotate(${rotate_img_3}deg)`
})

