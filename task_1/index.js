const images = document.querySelectorAll(".image-container .image-container__image");
const links = document.querySelectorAll(".link-container .link");
const personalDataForm = document.querySelector(".personal-data");
const textBlock = document.getElementById("demo");

const rotate = (degree) => `rotate(${degree}deg)`;

const getCurrentDegrre = (str) => {
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
        image.style.transform = rotate(getCurrentDegrre(currentDegree));
    })
});

links.forEach(link => {
    link.addEventListener("mouseover", () => {
        const href = link["href"];
        link.textContent += ` (${href})`;
    });

    link.addEventListener("mouseleave", () => {
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
        firstName: personalDataForm["first-name"].value,
        lastName: personalDataForm["last-name"].value,
        age: personalDataForm["age"].value,
    };

    let isValid = true, message = "";

    if (!validationName(personalData.firstName + " " + personalData.lastName)) {
        isValid = false;
        message += "First and last name must be letters without special characters and max length should be 50 characters.<br>";
        personalDataForm["first-name"].style.borderColor = "red";
        personalDataForm["last-name"].style.borderColor = "red";
    }

    if (!validationAge(personalData.age)) {
        isValid = false;
        message += "Age must be only number without negative number.<br>";
    }

    if (isValid) textBlock.textContent = "This is form valid!!!";
    else textBlock.innerHTML = "This is form not valid!!! <br>" + message;
});
