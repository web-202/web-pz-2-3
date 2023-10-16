function ActionRight(element, e){
	element.preventDefault();
    e.style.transform = "rotate(90deg)";
		
}
function ActionLeft(element){
    alert("image " + element.textContent)
}
function addHref(link) {
    const text = link.textContent;
    if (text.includes('(') && text.includes(')')) {
        const textInParentheses = text.match(/\(([^)]+)\)/)[1];
        link.href = textInParentheses;
    }
}

function removeHref(link) {
    link.removeAttribute('href');
}

function submitForm() {
    const form = document.getElementById('userForm');
    const demo = document.getElementById('demo');

    if (form.checkValidity()) {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
				const age = document.getElementById('age').value;
				if(age >= 150){
					form.reset();
				}else{
        demo.innerHTML = `Name: ${firstName},
				 LastName: ${lastName},
				 Age: ${age}`;
        demo.style.display = 'block';
				}
        form.reset();
    } else {
        demo.style.display = 'none';
    }
}



