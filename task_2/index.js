const button = document.querySelector("#button")
const buttonStates = [
  {
    color: "green",
    text: "Update"
  },
  {
    color: "red",
    text: "Delete"
  },
  {
    color: "#d9d10e",
    text: "Pendding"
  },
]

let currentStateIndex = 0;

button.addEventListener("click", () => {
  currentStateIndex = (currentStateIndex + 1) % buttonStates.length;

  const { color, text } = buttonStates[currentStateIndex];
  button.textContent = text;
  button.style.backgroundColor = color;
});
