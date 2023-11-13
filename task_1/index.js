const images = document.querySelectorAll(".prs-images img");
const links = document.querySelectorAll(".prs-links a");
const personalDataForm = document.querySelector(".prs-form");
const textBlock = document.getElementById("demo");

const rotate = (degree) => `rotate(${degree}deg)`;

const getCurrentDegree = (str) => {
    if (str === "") return 90;
    const rotateValue = str.split("(")[1].split(")")[0];
    const rotateDegree = parseFloat(rotateValue) + 90;
    return rotateDegree === 360 ? 0 : rotateDegree;
};

images.forEach(image => {
    image.addEventListener("click", () => alert(image.getAttribute("src")));

    image.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        const currentDegree = image.style.transform;
        image.style.transform = rotate(getCurrentDegree(currentDegree));
    });
});

links.forEach(link => {
    link.addEventListener("mouseover", () => {
        const href = link.href;
        link.textContent += ` (${href})`;
    });

    link.addEventListener("mouseout", () => {
        const textArr = link.textContent.split(" ");
        textArr.pop();
        link.textContent = textArr.join(" ");
    });
});

const validationName = (name) => {
    const regex = /^[a-zA-Z0-9\s]*$/;
    if (name.length > 50 || name.length < 2) return false;
    return regex.test(name);
};

const validationAge = (age) => {
    if (age <= 0) return false;
    else return age <= 120;
};

personalDataForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const personalData = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        age: document.getElementById('age').value,
    };

    let isValid = true, message = "";

    if (!validationName(personalData.firstName + " " + personalData.lastName)) {
        isValid = false;
        message += "First and last name must be letters without special characters and max length should be 50 characters.\n";
        document.getElementById('first-name').style.borderColor = "red";
        document.getElementById('last-name').style.borderColor = "red";
    }

    if (!validationAge(personalData.age)) {
        isValid = false;
        message += "Age must be only a number without a negative number.\n";
    }

    if (isValid) {
        personalDataForm.reset();
        alert("This form is valid!!!");

    } else {
        alert("This form is not valid!!!" + "\n" + message);
    }
});

