const btn_status = ['update', 'delete', 'pending']
let status = 0

const btn = document.getElementById("btn");
btn.addEventListener('click', (e) => {
  status++
  if(status > btn_status.length-1){
    status = 0
  }

  if(btn_status[status] === 'update') {
    btn.textContent = 'update'
    btn.className = 'update';
  } else if (btn_status[status] === 'delete') {
    btn.textContent = 'delete'
    btn.className = 'delete';
  } else if (btn_status[status] === 'pending') {
    btn.textContent = 'pending'
    btn.className = 'pending';
  }
})
