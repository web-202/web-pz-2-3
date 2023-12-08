let button = document.getElementById("button")

button.addEventListener("click", () => {
    if(button.className.includes("green")) {
        button.className = "button button-bg-red"
        button.textContent = "Delete"
    } else if(button.className.includes("red")) {
        button.className = "button button-bg-orange"
        button.textContent = "Pendding"
    } else if(button.className.includes("orange")) {
        button.className = "button button-bg-green"
        button.textContent = "Update"
    }
})
