let buttonStates = ["error", "warning", "success"];
let currentStateIndex = 0;

function changeState() {
  let button = document.getElementById("statusButton");
  button.className = buttonStates[currentStateIndex];
  button.innerText = buttonStates[currentStateIndex]
  currentStateIndex = (currentStateIndex + 1) % buttonStates.length;
}
