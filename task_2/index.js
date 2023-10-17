const btn_stages = document.getElementById('btn-stages')

btn_stages.addEventListener('click', () => {
    if(btn_stages.value == "Update"){
        btn_stages.style.backgroundColor = "red"
        btn_stages.value = "Delete"
    }else if(btn_stages.value == "Delete"){
        btn_stages.style.backgroundColor = "orange"
        btn_stages.value = "Pending"
    }else if(btn_stages.value == "Pending"){
        btn_stages.style.backgroundColor = "green"
        btn_stages.value = "Update"
    }
})