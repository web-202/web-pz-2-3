function alertHref(id){
  let item = document.getElementById(id)
  let href = item.getAttribute('href')
  alert(href)
}

const imgWheel = document.querySelectorAll('.img-wheel')
imgWheel.forEach(item => {
  item.addEventListener('contextmenu', () => {
    event.preventDefault()
    item.style.transform = 'rotate(90deg)'
  });
});

const text = document.querySelectorAll('#p1, #p2, #p3')

text.forEach(p =>{
  p.addEventListener('mouseover', ()=>{
    const href = p.getAttribute('href')
    p.textContent = p.textContent + ' (' + href + ') '

  })
  p.addEventListener('mouseout', () =>{
    p.textContent = p.textContent.split(' (')[0]
  })
})


document.getElementById('submitButton').addEventListener('click', () => {
  document.getElementById('firstName').classList.remove('error');
  document.getElementById('lastName').classList.remove('error');
  document.getElementById('age').classList.remove('error');

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const age = document.getElementById('age').value;


  const namePattern = /^[A-Za-z\s]{1,50}$/;
  const agePattern = /^[0-9]+$/;

  if (!namePattern.test(firstName)) {
    document.getElementById('firstName').classList.add('error');
  }

  if (!namePattern.test(lastName)) {
    document.getElementById('lastName').classList.add('error');
  }

  if (!agePattern.test(age) || parseInt(age) < 0) {
    document.getElementById('age').classList.add('error');
  }

  if (!document.querySelectorAll('.error').length) {
    document.getElementById('demo').textContent = 'Valid';
  } else {
    document.getElementById('demo').textContent = 'Invalid';
  }
  let resultDiv = document.getElementById("demo");
  resultDiv.textContent = "Значення firstName: " + firstName + ", lastName: " + lastName + ", age: " + age;
});

function validateInput(input) {
  let value = parseInt(input.value, 10);

  if (isNaN(value) || value < 1 || value > 100) {
    input.value = '';
    alert('Введіть число в діапазоні від 1 до 100');
  }
}
