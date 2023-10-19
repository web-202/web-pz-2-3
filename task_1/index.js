const images = document.querySelectorAll('#image1, #image2, #image3');

images.forEach(image => {
  image.addEventListener('click', () => {
    alert(image.src);
  });
});

const rotateImages = document.querySelectorAll('.rotate-image');

rotateImages.forEach(img => {
  img.addEventListener('contextmenu', () => {
    img.style.transform = 'rotate(90deg)';
  });
});


const links = document.querySelectorAll('#link1, #link2, #link3');

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.textContent += ` (${link.href})`; 
  });
  
  link.addEventListener('mouseout', () => {
    link.textContent = link.textContent.replace(` (${link.href})`, '');
  });
});




const form = document.getElementById('form');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const ageInput = document.getElementById('age');


form.addEventListener('submit', e => {
  e.preventDefault();

  const firstName = firstNameInput.value; 
  const lastName = lastNameInput.value;
  const age = ageInput.value;

  
  if(isValid(firstName, lastName, age)) {  
    showSuccessMessage(firstName, lastName, age);
  }
});

 
function isValid(firstName, lastName, age) {
  
  return true; 
}

// Show success message
function showSuccessMessage(firstName, lastName, age) {
  const demo = document.getElementById('demo');
  demo.textContent = `
    First name: ${firstName}
    Last name: ${lastName}
    Age: ${age}
  `;
}