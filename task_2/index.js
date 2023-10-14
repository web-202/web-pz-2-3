const btn_state = document.getElementById('btn-state')

const state_delete = "Delete"
const state_update = "Update"
const state_pendig = "Pendig"


btn_state.addEventListener('click', () => {
    if(btn_state.value == state_update){
         btn_state.value = state_delete
         btn_state.style.backgroundColor = "#d9534f"
     }else if(btn_state.value  == state_delete){
         btn_state.value = state_pendig
         btn_state.style.backgroundColor = "#f0ad4e"
     }else if(btn_state.value  == state_pendig){
         btn_state.value = state_update
         btn_state.style.backgroundColor = "#5db85c"
     }
 })