const imges = document.getElementById("click");
imges.onclick = function(){
    alert('You clicked on img')
}

// Поворот на 90%

document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".imges_1");

    function rotateImage(event) {
        var img = event.target;
        var currentRotation = img.getAttribute("data-rotation") || 0;
        currentRotation = (parseInt(currentRotation) + 90) % 360;
        img.style.transform = "rotate(" + currentRotation + "deg)";
        img.setAttribute("data-rotation", currentRotation);
    }

    images.forEach(function(img) {
        img.addEventListener("contextmenu", function(event) {
            event.preventDefault();
            rotateImage(event);
        });
    });
});



//Forms

function isValidName(name) {
    return /^[A-Za-z]{1,50}$/.test(name);
  }
  
  function isValidAge(age) {
    return /^[0-9]+$/.test(age) && parseInt(age, 10) >= 0;
  }
  
  function validateForm() {
    var name = document.forms["myForm"]["firstname"].value;
    var surname = document.forms["myForm"]["lastname"].value;
    var age = document.forms["myForm"]["age"].value;
    var valid = true;
    var nameRegex = /^[a-zA-Z]{1,50}$/;
  
    let errors = 0;
    const errorMessages = [];
  
    if (!isValidName(name)) {
      document.forms["myForm"]["firstname"].style.border = "1px red solid";
      errorMessages.push('ERROR Name');
      errors++;
    }
  
    if (!isValidName(surname)) {
      document.forms["myForm"]["lastname"].style.border = "1px red solid";
      errorMessages.push('ERROR Surname');
      errors++;
    }
  
    if (!isValidAge(age)) {
      document.forms["myForm"]["age"].style.border = "1px red solid";
      errorMessages.push('ERROR Age');
      errors++;
    }
  
    if (errors > 0) {
      document.getElementById("demo").innerHTML = errorMessages.join("<br>");
      return false;
    } else {
      var message = "Ім'я: " + name + "<br>" + "Прізвище: " + surname + "<br>" + "Вік: " + age;
      document.getElementById("demo").innerHTML = message;
      return false;
    }
    

    
}