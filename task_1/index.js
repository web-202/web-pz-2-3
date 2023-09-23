const images = document.querySelectorAll('.blocks img');

images.forEach((img) => {
    img.onclick = () => {
        alert(img.src);
    };
});
