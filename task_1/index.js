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

        if(isNaN(age.value) || Number(age.value) < 0 || age.value == ""){
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

    image_1.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        rotate_img_1 += 90
        image_1.style.transform = `rotate(${rotate_img_1}deg)`
    })

    image_2.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        rotate_img_2 += 90
        image_2.style.transform = `rotate(${rotate_img_2}deg)`
    })

    image_3.addEventListener('contextmenu', (e) => {
        e.preventDefault()  
        rotate_img_3 += 90
        image_3.style.transform = `rotate(${rotate_img_3}deg)`
    })

    const img_text_1 = document.getElementById('img_text_1')
    const img_text_2 = document.getElementById('img_text_2')
    const img_text_3 = document.getElementById('img_text_3')

    const valueImglName = () => {
        const image_name_1 = image_1.getAttribute('src').split('/')[3].split('.')[0]
        const image_name_2 = image_2.getAttribute('src').split('/')[3].split('.')[0]
        const image_name_3 = image_3.getAttribute('src').split('/')[3].split('.')[0]

        img_text_1.textContent = image_name_1
        img_text_2.textContent = image_name_2
        img_text_3.textContent = image_name_3
    }
    
img_text_1.addEventListener('mouseover', (e) => {
    e.preventDefault()
    img_text_1.innerText = img_text_1.textContent + `(${image_1.getAttribute('src')})`
})

img_text_1.addEventListener('mouseout', () => {
    img_text_1.innerText = image_1.getAttribute('src').split('/')[3].split('.')[0]
})

img_text_2.addEventListener('mouseover', (e) => {
    e.preventDefault()
    img_text_2.innerText = img_text_2.textContent + `(${image_2.getAttribute('src')})`
})

img_text_2.addEventListener('mouseout', () => {
    img_text_2.innerText = image_2.getAttribute('src').split('/')[3].split('.')[0]
})


img_text_3.addEventListener('mouseover', (e) => {
    e.preventDefault()
    img_text_3.innerText = img_text_3.textContent + `(${image_3.getAttribute('src')})`
})

img_text_3.addEventListener('mouseout', () => {
    img_text_3.innerText = image_3.getAttribute('src').split('/')[3].split('.')[0]
})



valueImglName()