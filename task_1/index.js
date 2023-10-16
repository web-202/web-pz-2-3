document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".clickable");
  const links = document.querySelectorAll(".link");
  const form = document.getElementById("form");
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const ageInput = document.getElementById("age");
  const demoBlock = document.getElementById("demo");

  // Показати сповіщення із посиланням при кліку на зображення
  images.forEach(image => {
    image.addEventListener("click", function() {
      alert(image.getAttribute("src"));
    });

    // Повернути зображення на 90 градусів за правим кліком миші
    image.addEventListener("contextmenu", function(event) {
      event.preventDefault();
      image.style.transform = `rotate(${(parseInt(image.style.transform.replace("rotate(", "").replace("deg)", "")) || 0) + 90}deg)`;
    });
  });

  // Додати та видалити посилання при наведенні курсора миші
  links.forEach(link => {
    link.addEventListener("mouseover", function() {
      link.href = `https://example.com/${link.innerText.replace(" (за замовчуванням)", "")}`;
    });

    link.addEventListener("mouseout", function() {
      link.href = "А все)";
    });
  });

  // Перевірка форми та відображення повідомлення в блоку demo
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Скинути рамки
    firstNameInput.classList.remove("red-border");
    lastNameInput.classList.remove("red-border");
    ageInput.classList.remove("red-border");

    // Валідація
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const age = ageInput.value.trim();

    const nameRegex = /^[А-Яа-яЁё ]{1,50}$/u;
    const ageRegex = /^[0-9]+$/;

    if (!firstName || !nameRegex.test(firstName)) {
      firstNameInput.classList.add("red-border");
      return;
    }

    if (!lastName || !nameRegex.test(lastName)) {
      lastNameInput.classList.add("red-border");
      return;
    }

    if (!age || !ageRegex.test(age) || parseInt(age) < 0) {
      ageInput.classList.add("red-border");
      return;
    }

    demoBlock.textContent = `Форма успішно відправлена! Ім'я: ${firstName}, Прізвище: ${lastName}, Вік: ${age}`;
  });
});
