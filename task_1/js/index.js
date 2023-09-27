const images1 = document.querySelectorAll(".images1")
const images2 = document.querySelectorAll(".images2")
const links = document.querySelectorAll(".link")
const resultLink = document.querySelector(".container__result")
const submitBtn = document.getElementById("btn-submit")
const nameInput = document.getElementById("name")
const lastnameInput = document.getElementById("lastname")
const ageInput = document.getElementById("age")
const inputs = document.querySelectorAll(".form__input")
const demo = document.querySelector(".demo")
images1.forEach(img => {
  img.addEventListener("click", () => {
    const href = img.getAttribute("src");
    alert(`Href: ${href}`)
  })
})

images2.forEach(img => {
  img.style.transitionDuration = "300ms"
  let rotationDegree = 0;

  img.addEventListener("click", () => {
    rotationDegree += 90
    img.style.transform = "rotate(" + rotationDegree + "deg)"
  })

  img.addEventListener("contextmenu", (e) => {
    e.preventDefault()
    rotationDegree -= 90
    img.style.transform = "rotate(" + rotationDegree + "deg)"
  })
})

links.forEach(link => {
  link.addEventListener("mouseover", () => {
    const href = link.getAttribute("href")
    resultLink.textContent = `(${href})`
  })
  link.addEventListener("mouseout", () => {
    const href = link.getAttribute("href")
    resultLink.textContent = `()`
  })
})

function isValidName(name) {
  return /^[A-Za-z]{1,50}$/.test(name);
}

function isValidAge(age) {
  return /^[0-9]+$/.test(age) && parseInt(age, 10) >= 0;
}

submitBtn.addEventListener("click", () => {
  let counter = 0
  if (!isValidName(nameInput.value)) {
    nameInput.style.border = "1px red solid"
    counter++
  }
  if (!isValidName(lastnameInput.value)) {
    lastnameInput.style.border = "1px red solid"
    counter++
  }
  if (!isValidAge(ageInput.value)) {
    ageInput.style.border = "1px red solid"
    counter++
  }

  if (counter === 0) {
    demo.textContent = `
        first name: ${nameInput.value}
        last: ${lastnameInput.value}
        age: ${ageInput.value}
    `
  }
})

inputs.forEach(input => {
  input.addEventListener("change", () => {
    input.style.border = "1px grey solid"
  })
})







