// Task 1
function showAlert(element) {
    alert(element.src);
  }
  
  // Task 2
  function rotateImage(event, element) {
    if (event.button === 2) { // Right mouse button
      console.log(element.style.transform)
      if (element.style.transform === 'rotate(0deg)')
        element.style.transform = "rotate(90deg)";
      else if (element.style.transform === 'rotate(90deg)')
        element.style.transform = "rotate(180deg)";
      else if (element.style.transform === 'rotate(180deg)')
        element.style.transform = "rotate(270deg)";
      else if (element.style.transform === 'rotate(270deg)')
        element.style.transform = "rotate(0deg)";
    }
  }
  
  // Task 3
  function addHref(element) {
    element.innerText = 'URL'; // Extract URL from parentheses
    // element.innerText = element.innerText.slice(-5, -1); // Extract URL from parentheses
  }
  
  function removeHref(element) {
    element.innerText = "href";
  }
  
  // Task 4
  function validateName(input) {
    let regex = /^[a-zA-Z ]{1,50}$/;
    if (!regex.test(input.value)) {
      input.classList.add("invalid");
    } else {
      input.classList.remove("invalid");
    }
  }
  
  function validateAge(input) {
    let regex = /^[0-9]+$/;
    if (!regex.test(input.value)) {
      input.classList.add("invalid");
    } else {
      input.classList.remove("invalid");
    }
  }
  
  function validateForm() {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let age = document.getElementById("age");
    let demo = document.getElementById("demo");
  
    if (firstName.classList.contains("invalid") || lastName.classList.contains("invalid") || age.classList.contains("invalid")) {
      demo.innerText = "Form is invalid. Please check your inputs.";
      demo.style.color = "red";
    } else {
      demo.innerText = "Form is valid!";
      demo.style.color = "green";
    }
  }