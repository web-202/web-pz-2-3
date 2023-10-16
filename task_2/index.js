// index.js
document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".status-button");

  buttons.forEach(button => {
    button.addEventListener("click", function() {
      if (button.classList.contains("success")) {
        button.classList.remove("success");
        button.classList.add("failure");
        button.textContent = "Failed";
      } else if (button.classList.contains("failure")) {
        button.classList.remove("failure");
        button.classList.add("neutral");
        button.textContent = "Neutral";
      } else {
        button.classList.remove("neutral");
        button.classList.add("success");
        button.textContent = "Success";
      }
    });
  });
});
