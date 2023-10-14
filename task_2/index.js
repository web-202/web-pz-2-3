const button = document.getElementById("statusButton");
const statuse = ["grean", "yelow", "red"];
let currentStatusIndex = 0;

button.addEventListener("click", () => {
  button.className = `button ${statuse[currentStatusIndex]}`;
  currentStatusIndex = (currentStatusIndex + 1) % statuse.length;
});
