const button = document.getElementById("status-button");

const state = {
  0: { className: "button-update", textContent: "update" },
  1: { className: "button-delete", textContent: "delete" },
  2: { className: "button-pendding", textContent: "pendding" },
};

let buttonState = 0;

button.addEventListener("click", () => {
  buttonState = (buttonState + 1) % 3;
  const { className, textContent } = state[buttonState];
  button.className = className;
  button.textContent = textContent;
});

