const image_1 = document.getElementById('img_1');
const image_2 = document.getElementById('img_2');
const image_3 = document.getElementById('img_3');
const loginForm = document.getElementById("form");
const demo = document.getElementById('demo')

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const name = document.getElementById('name')
        const last = document.getElementById('last')
        const age = document.getElementById('age')

        let formatSpecialCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/|]/g;
        let formatNumbers = /[-+]?\d*\.\d+|\d+/g;
        let check = true

        if(name.value.match(formatSpecialCharacters) || name.value.match(formatNumbers) || name.value.length > 50 || name.value.length == 0){
            name.style.borderColor = 'red'
            check = false
        }else{
            name.style.borderColor = 'black'
        }

        if(last.value.match(formatSpecialCharacters) || last.value.match(formatNumbers) || last.value.length > 50 || last.value.length == 0){
            last.style.borderColor = 'red'
            check = false
        }else{
            last.style.borderColor = 'black'
        }

        if(isNaN(age.value) || Number(age.value) < 0){
            age.style.borderColor = 'red'
            check = false
        }else{
            age.style.borderColor = 'black'
        }

        if(check){
            demo.innerText = 'Valid'
        }else{
            demo.innerText = 'Not valid'
        }
    })

    image_1.addEventListener('mouseover', () => {
        const text = document.getElementById('text_1')
        text.value=image_1.getAttribute('src')
    })

    image_1.addEventListener('mouseout', () => {
        const text = document.getElementById('text_1')
        text.value=""
    })

    image_2.addEventListener('mouseover', () => {
        const text = document.getElementById('text_2')
        text.value=image_2.getAttribute('src')
    })
    
    image_2.addEventListener('mouseout', () => {
        const text = document.getElementById('text_2')
        text.value=""
    })

    image_3.addEventListener('mouseover', () => {
        const text = document.getElementById('text_3')
        text.value=image_3.getAttribute('src')
    })

    image_3.addEventListener('mouseout', () => {
        const text = document.getElementById('text_3')
        text.value=""
    })

    image_1.addEventListener('click', () => {
        alert(image_1.getAttribute('src'))  
    })


    image_2.addEventListener('click', () => {
        alert(image_2.getAttribute('src'))  
    })

    image_3.addEventListener('click', () => {
        alert(image_3.getAttribute('src'))  
    })

    let rotate_img_1 = 0
    let rotate_img_2 = 0
    let rotate_img_3 = 0

    image_1.addEventListener('contextmenu', () => {
        rotate_img_1 += 90
        image_1.style.transform = `rotate(${rotate_img_1}deg)`
    })

    image_2.addEventListener('contextmenu', () => {
        rotate_img_2 += 90
        image_2.style.transform = `rotate(${rotate_img_2}deg)`
    })

    image_3.addEventListener('contextmenu', () => {
        rotate_img_3 += 90
        image_3.style.transform = `rotate(${rotate_img_3}deg)`
    })
