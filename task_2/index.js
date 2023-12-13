let buttonStates = ["error", "warning", "success"];
let currentStateIndex = 0;

function changeState() {
  let button = document.getElementById("statusButton");
  button.className = buttonStates[currentStateIndex];
  button.innerText = buttonStates[currentStateIndex]
  // Increment the state index or reset to 0 if it reaches the end
  currentStateIndex = (currentStateIndex + 1) % buttonStates.length;
}
