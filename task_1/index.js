function showAlert(message) {
  alert(message)
}

function rotateElement(element, angle) {
  const oldTransform = element.style.transform || 'rotate(0deg)';
  const regex = new RegExp('\\d+')
  let oldAngle = parseFloat(oldTransform.match(regex)[0]);
  element.style.transform = `rotate(${oldAngle + angle}deg)`;
}

function addHrefToTextContent(a) {
  a.textContent += `(${a.href})`
}

function removeHrefFromTextContent(a) {
  a.textContent = a.textContent.slice(0, a.textContent.indexOf('('))
}

function showDataInBlock() {
  let firstName = document.getElementById('firstName')
  let lastName = document.getElementById('lastName')
  let age = document.getElementById('age')

  if (!validateName(firstName.value)) {
    firstName.style.backgroundColor = 'red'
    return
  }
  firstName.style.backgroundColor = 'white'

  if (!validateName(lastName.value)) {
    lastName.style.backgroundColor = 'red'
    return
  }
  lastName.style.backgroundColor = 'white'

  if (!validateAge(age.value)) {
    age.style.backgroundColor = 'red'
    return
  }
  age.style.backgroundColor = 'white'

  const demoDiv = document.getElementById('demo')
  demoDiv.innerHTML = `First name - ${firstName.value} <br> Last name - ${lastName.value} <br> Age - ${age.value}`
}

function validateName(name) {
  return /^[A-Za-z]{1,50}$/.test(name);
}

function validateAge(age) {
  return age > 0
}

function preventDefaultForImages() {
  const imgList = document.getElementsByTagName('img')
  for (const imgListElement of imgList) {
    imgListElement.addEventListener('contextmenu', (event) => {
      event.preventDefault()
    })
  }
}

preventDefaultForImages();
