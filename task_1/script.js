document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");
  const links = document.querySelectorAll("a");
  const form = document.getElementById("form");
  const demo = document.getElementById("demo");

  const rotationDegrees = {}; 

  images.forEach(img => {
      rotationDegrees[img.src] = 0;
      img.addEventListener("click", function () {
          alert("Image clicked: " + img.src);
      });

      img.addEventListener("contextmenu", function (event) {
          event.preventDefault();
          rotationDegrees[img.src] += 90;
          img.style.transform = `rotate(${rotationDegrees[img.src]}deg)`;
      });
  });

  const link = document.querySelectorAll('a');
  form.addEventListener("submit", function (event) {
      event.preventDefault();
      const firstName = document.getElementById("first_name");
      const lastName = document.getElementById("last_name");
      const age = document.getElementById("age");

      const namePattern = /^[A-Za-z ]{1,50}$/;
      const agePattern = /^\d+$/;

      if (!namePattern.test(firstName.value) || !namePattern.test(lastName.value) || !agePattern.test(age.value)) {
          firstName.classList.add("invalid-border");
          lastName.classList.add("invalid-border");
          age.classList.add("invalid-border");
          demo.innerText = "Form is invalid. Please correct the input fields.";
      } 
      else {
          firstName.classList.remove("invalid_border");
          lastName.classList.remove("invalid_border");
          age.classList.remove("invalid_border");
          demo.innerText = "Form is valid. First Name: " + firstName.value + ", Last Name: " + lastName.value + ", Age: " + age.value;
      }

      




  });
});