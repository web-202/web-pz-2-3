const images = document.querySelectorAll('.image-container img');
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        alert(`Щасливого Хелоувіну! ${index + 1}.`);
    });
});