document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".image-container img");
  const links = document.querySelectorAll(".link-container a");
  const form = document.getElementById("userForm");
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const ageInput = document.getElementById("age");
  const demoBlock = document.getElementById("demo");

  images.forEach(img => {
      img.addEventListener("click", function() {
          alert(img.getAttribute("src"));
      });

      img.addEventListener("contextmenu", function(event) {
          event.preventDefault();
          img.style.transform = "rotate(90deg)";
      });
  });

  links.forEach(link => {
      link.addEventListener("mouseover", function() {
          link.innerText += ` (${link.getAttribute("href")})`;
      });

      link.addEventListener("mouseout", function() {
          const text = link.innerText.split(" ")[0];
          link.innerText = text;
      });
  });

  form.addEventListener("submit", function(event) {
      event.preventDefault();

      const firstNameValue = firstNameInput.value.trim();
      const lastNameValue = lastNameInput.value.trim();
      const ageValue = ageInput.value.trim();

      if (/^[A-Za-z]{1,50}$/.test(firstNameValue) && /^[A-Za-z]{1,50}$/.test(lastNameValue) && /^[0-9]+$/.test(ageValue)) {
          demoBlock.innerText = `Form is valid. First Name: ${firstNameValue}, Last Name: ${lastNameValue}, Age: ${ageValue}`;
          demoBlock.classList.remove("red-border");
      } else {
          demoBlock.innerText = "Invalid form data. Please check your inputs.";
          demoBlock.classList.add("red-border");
      }
  });
});
