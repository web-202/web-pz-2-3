const btn = document.querySelector(".page-app .button");

const swithcedBtnType = (currentBtnType) => {
    switch (currentBtnType) {
        case "button_update":
            btn.textContent = "Delete";
            return "button_delete";
        case "button_delete":
            btn.textContent = "Pendding";
            return "button_pendding";
        case "button_pendding":
            btn.textContent = "Update";
            return "button_update"
        default:
            alert("There is no such button");
    }
}

btn.addEventListener("click", () => {
    const currentBtnType = btn.classList[1];
    const nextBtnType = swithcedBtnType(currentBtnType);
    btn.classList.remove(currentBtnType);
    btn.classList.add(nextBtnType);
});
