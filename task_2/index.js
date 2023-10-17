const button = document.getElementById("statusButton");
const statuse = ["grean", "yelow", "red"];
const texts = ["GREEN", "YELLOW", "RED"];
let currentStatusIndex = 0;

button.addEventListener("click", () => {
  button.className = `button ${statuse[currentStatusIndex]}`;
  button.textContent = texts[currentStatusIndex];
  currentStatusIndex = (currentStatusIndex + 1) % statuse.length;
});





