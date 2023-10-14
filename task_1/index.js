function alertt(img) {
    alert('Ви переглядаєте ' + img.alt);
  }

  function rotateImage(img) {
    const currentRotation = img.getAttribute('data-rotation') || 0;
    const newRotation = (parseInt(currentRotation) + 90) % 360;

    img.style.transform = `rotate(${newRotation}deg)`;
    img.setAttribute('data-rotation', newRotation);

    function addDepartment() {
        var webLink = document.getElementById('webLink');
        webLink.innerHTML += ' Department';
    }

    function removeDepartment() {
        var webLink = document.getElementById('webLink');
        webLink.innerHTML = 'Web_22';
    }
}