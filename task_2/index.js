const button = document.getElementById("status-button");
  const states = ["pending", "success"];
  let currentState = 0;

  button.addEventListener("click", () => {
    button.classList.remove(states[currentState]);
    currentState = (currentState + 1) % states.length;
    button.classList.add(states[currentState]);
  });