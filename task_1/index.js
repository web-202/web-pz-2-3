//1
function showNotification(href) {
  alert(href);
}


let rotationAngles = {};
function rotateImage(imageId) {
  const image = document.getElementById(imageId);
  if (!rotationAngles[imageId]) {
    rotationAngles[imageId] = 0;
  }
  rotationAngles[imageId] += 90;
  image.style.transform = `rotate(${rotationAngles[imageId]}deg)`;
}




//2
function addHrefToText(linkId) {
  const span = document.getElementById(`href${linkId.slice(-1)}`);
  span.classList.remove('hidden'); // Показуємо текст
}

function removeHrefFromText(linkId) {
  const span = document.getElementById(`href${linkId.slice(-1)}`);
  span.classList.add('hidden'); // Приховуємо текст
}

const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');

link1.addEventListener('mouseover', () => addHrefToText('link1'));
link1.addEventListener('mouseout', () => removeHrefFromText('link1'));

link2.addEventListener('mouseover', () => addHrefToText('link2'));
link2.addEventListener('mouseout', () => removeHrefFromText('link2'));

link3.addEventListener('mouseover', () => addHrefToText('link3'));
link3.addEventListener('mouseout', () => removeHrefFromText('link3'));





//3
function validateForm() {
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const age = document.getElementById('age');
  const demo = document.getElementById('demo');

  firstName.classList.remove('error');
  lastName.classList.remove('error');
  age.classList.remove('error');

  let isValid = true;

  const namePattern = /^[A-Za-z]{1,50}$/;
  if (!namePattern.test(firstName.value)) {
    firstName.classList.add('error');
    isValid = false;
  }

  if (!namePattern.test(lastName.value)) {
    lastName.classList.add('error');
    isValid = false;
  }

  const agePattern = /^\d+$/;
  if (!agePattern.test(age.value) || parseInt(age.value) < 0) {
    age.classList.add('error');
    isValid = false;
  }

  if (isValid) {
    demo.innerHTML = 'Form is valid!';
  } else {
    demo.innerHTML = 'Form is invalid. Please correct the errors.';
  }
}
