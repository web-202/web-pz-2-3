const images = document.querySelectorAll(".image");
const links = document.querySelectorAll(".link");
const firstNameInput = document.querySelector("#firstname_input");
const lastNameInput = document.querySelector("#lastname_input");
const ageNameInput = document.querySelector("#age_input");
const form = document.querySelector("#form");
const demo = document.querySelector("#demo");

for (let img of images) {
  let rotation = 0;

  img.addEventListener("click", (event) => {
    if (event.button === 0) {
      alert(img.src);
    }
  });

  img.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    rotation += 90;
    img.style.transform = `rotate(${rotation}deg)`;
  });
}

for (let link of links) {
  link.addEventListener("mouseenter", () => {
    link.textContent += ` (${link.href})`
  })

  link.addEventListener("mouseleave", () => {
    link.textContent = link.textContent.replace(` (${link.href})`, "")
  })
}

form.addEventListener("submit", (event) => {
  event.preventDefault()
  demo.textContent = ""
  let isSuccess = true;

  const namePattern = /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ]{1,50}$/
  const positiveNumberPattern = /^\d*\.?\d+$/

  if (namePattern.test(firstNameInput.value)) {
    firstNameInput.className = "input-color-green"
  } else {
    firstNameInput.className = "input-color-red"
    isSuccess = false
  }

  if (namePattern.test(lastNameInput.value)) {
    lastNameInput.className = "input-color-green"
  } else {
    lastNameInput.className = "input-color-red"
    isSuccess = false
  }

  if (positiveNumberPattern.test(ageNameInput.value)) {
    ageNameInput.className = "input-color-green"
  } else {
    ageNameInput.className = "input-color-red"
    isSuccess = false
  }

  if (!isSuccess) {
    alert("Error validation!")
    return
  }

  demo.innerText = `first name: ${firstNameInput.value}\n
                      last name: ${lastNameInput.value}\n
                      age: ${ageNameInput.value}`
})

