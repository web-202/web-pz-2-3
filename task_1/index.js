const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')
const p = document.getElementById('p')
const links = document.querySelectorAll('.link')
const nameInput = document.getElementById("firstName")
const lastnameInput = document.getElementById("lastName")
const ageInput = document.getElementById("age")
const demo = document.getElementById('demo')
const btn = document.getElementById('btn')

const turnImg = (e) =>{
    e.preventDefault()
    e.target.style.transform = 'rotate(90deg)'
}

const showHref = (e) => {
    alert(e.target.src)
}

img1.addEventListener('click', showHref)
img2.addEventListener('click', showHref)
img3.addEventListener('click', showHref)

img1.addEventListener('contextmenu', turnImg)
img2.addEventListener('contextmenu', turnImg)
img3.addEventListener('contextmenu', turnImg)

links.forEach(link => {
    link.addEventListener("mouseover", () => {
        const href = link.getAttribute("href")
        p.textContent = `(${href})`
      })
      link.addEventListener("mouseout", () => {
        const href = link.getAttribute("href")
        p.textContent = `()`
      })
});

function isValidName(name) {
    return /^[A-Za-z]{1,50}$/.test(name);
}
 
  function isValidAge(age) {
    return /^[0-9]+$/.test(age) && parseInt(age, 10) >= 0;
}


  btn.addEventListener("click", () => {
    let isGood = true
    if (!isValidName(nameInput.value)) {
      nameInput.style.border = "1px red solid"
      isGood = false
    }
    if (!isValidName(lastnameInput.value)) {
      lastnameInput.style.border = "1px red solid"
      isGood = false
    }
    if (!isValidAge(ageInput.value)) {
      ageInput.style.border = "1px red solid"
      isGood = false
    }
    if (isGood) {
      demo.textContent = `
          first name: ${nameInput.value}
          last: ${lastnameInput.value}
          age: ${ageInput.value}
      `
    }
  })
 