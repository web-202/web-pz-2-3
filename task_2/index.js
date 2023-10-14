const btn = document.getElementById('btn')
const colors = ['green', 'red', 'yellow']
const texts  =['Update', 'Delete', 'Pedding']
let currentVersion = 0

btn.addEventListener('click', ()=>{
    btn.style.backgroundColor = colors[currentVersion]
    btn.textContent  = texts[currentVersion]
    currentVersion = (currentVersion + 1) % colors.length;
})