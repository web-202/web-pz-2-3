let imgs = document.getElementsByTagName("img");
let as = document.getElementsByTagName("a");
let submitButton = document.getElementById("submitBtn")


submitButton.addEventListener("click", submitForm)

for (let img of imgs) {
    let rotate = 0;
    img.addEventListener("click", alertImageClick);
    img.addEventListener("contextmenu", (e) => {
        e.preventDefault()
        rotate = (rotate + 90) % 360
        rotateImage(img, rotate)
    })
}

for (let a of as) {
    let text = a.text
    a.addEventListener("mouseover", () => addHrefA(a, text))
    a.addEventListener("mouseleave", () => delHrefA(a, text))
}

function addHrefA(a, text) {
    a.text = `${text}(${a.href})`
}

function delHrefA(a, text) {
    a.text = text
}

function alertImageClick(e) {
    alert(e.target.src)
}

function rotateImage(img, rotate) {
    img.style.transform = `rotate(${rotate}deg)`
}

function containsSS(str) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (const s of str) {
        if (!letters.includes(s.toLowerCase())) {
            return true;
        }
    }
    return false;
}

function submitForm(e) {
    e.preventDefault()

    let last = document.getElementById("lastInput")
    let first = document.getElementById("firstInput")
    let age = document.getElementById("ageInput")
    let demo = document.getElementById("demo")

    let error = false

    if (first.value.length > 50 || first.value.length === 0) {
        first.classList.add("input-border-red")
        error = true
    } else if (containsSS(first.value)) {
        first.classList.add("input-border-red")
        error = true
    } else {
        first.classList.remove("input-border-red")
    }


    if (last.value.length > 50 || last.value.length === 0) {
        last.classList.add("input-border-red")
        error = true
    } else if (containsSS(last.value)) {
        last.classList.add("input-border-red")
        error = true
    } else {
        last.classList.remove("input-border-red")
    }


    let number = parseInt(age.value)
    if (isNaN(number)) {
        age.classList.add("input-border-red")
        error = true
    } else if (number !== Math.abs(number)) {
        age.classList.add("input-border-red")
        error = true
    } else {
        age.classList.remove("input-border-red")
    }

    if (error) {
        demo.textContent = "Form is not valid"
    } else {
        demo.textContent = "Form is valid"
    }
}
