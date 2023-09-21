const button = document.getElementById('colorButton');
const colors = ['red', 'yellow', 'green'];
const texts = ['Delete', 'Pending', 'Update'];
let currentColorIndex = 0;

function changeButtonColor() {
  button.style.backgroundColor = colors[currentColorIndex];
  button.textContent = texts[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;
}
