const btn = document.getElementById("btn")

let btnState = 0;

btn.addEventListener("click", () => {
  if (btnState === 0) {
    btn.className = "btn btn_update"
    btn.textContent = "Update"
    btnState++
  } else if (btnState === 1) {
    btn.className = "btn btn_delete"
    btn.textContent = "Delete"
    btnState++
  } else if (btnState === 2) {
    btn.className = " btn btn_pending"
    btn.textContent = "Pending"
    btnState = 0
  }
})
