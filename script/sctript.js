// Task 1
document.querySelectorAll('#task1').forEach(item => {
    item.onclick = (event) => {
        alert(event.currentTarget.src);
    };
});
// /Task 1

// Task 2
let deg = 90
const title = document.querySelector('#titleTask2')
document.querySelectorAll('#itemTask2').forEach(item => {
    item.addEventListener('click', () => {
        item.style.transform = `rotate(${deg}deg)`
        deg += 90
    })
});
// /Task 2

// Task 3
document.querySelectorAll('#itemTask3').forEach(item => {
    const defaultValue = item.textContent
    item.addEventListener('mouseover', () => {
        item.textContent += `\n(${item.href})`
    })
    item.addEventListener('mouseout', () => {
        item.textContent = defaultValue
    })
});
// /Task 3

// Task 4
const validateForm =()=>{
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const age = document.getElementById('age');
        
    console.log('+');
    const nameRegex = /^[a-zA-Z]+$/
    const ageRegex = /^\d+$/
    console.log(nameRegex.test(firstName.value));
    if (!nameRegex.test(firstName.value)) {
        document.getElementById('firstName').classList.add('invalid');
        return
      } else {
        document.getElementById('firstName').classList.remove('invalid');
      }
    
      if (!nameRegex.test(lastName.value)) {
        document.getElementById('lastName').classList.add('invalid');
        return
      } else {
        document.getElementById('lastName').classList.remove('invalid');
      }
    
      if (!ageRegex.test(age.value) || age < 0) {
        document.getElementById('age').classList.add('invalid');
        return
      } else {
        document.getElementById('age').classList.remove('invalid');
      }
      if(nameRegex.test(firstName.value)||nameRegex.test(lastName.value||(ageRegex.test(age.value) || age < 0))){
        document.getElementById('demo').innerHTML = `first name: ${firstName.value} <br> last: ${lastName.value}<br>age: ${age.value}`;
      }
     
}

document.getElementById('submit4').addEventListener('click',validateForm)
// /Task 4

// Task 2.1
let counter = 1
document.querySelectorAll('#itemTask2_1').forEach(item => {
    item.addEventListener('click', () => {
        const styles = window.getComputedStyle(item);
        const backgroundColor = styles.backgroundColor;
        const colorList = ['green','red','yellow']
        const textList = ['Update','Delete','Pendding']
        if(counter == 1){
             item.style.backgroundColor = colorList[0];
             item.textContent = textList[0]
            counter++
            return
        }
        if(counter == 2){
            item.style.backgroundColor = colorList[1];
            item.textContent = textList[1]
           counter++
           return
       }
       if(counter == 3){
        item.style.backgroundColor = colorList[2];
        item.textContent = textList[2]
       counter = 1
        }

    })
});
// /Task 2.1


const generateChessBoard = () => {
    const chessBoard = document.createElement('div');
    chessBoard.classList.add('chess-board');

    for (let row = 8; row >= 1; row--) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add(row % 2 === 0 ? 'even-row' : 'odd-row');

        for (let col = 1; col <= 8; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = `${String.fromCharCode(64 + col)}${row}`;
            rowDiv.appendChild(cell);
        }

        chessBoard.appendChild(rowDiv);
    }

    document.body.appendChild(chessBoard);
}


const generateChessBoardPhoto = () => {
    const chessBoard = document.createElement('div');
    chessBoard.classList.add('chess-board');

    const piecesOrder = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];

    for (let row = 8; row >= 1; row--) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add(row % 2 === 0 ? 'even-row' : 'odd-row');

        for (let col = 1; col <= 8; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            const piece = document.createElement('div');
            piece.classList.add('piece');

            if (row === 1 || row === 8) {
                const img = document.createElement('img');
                img.src = row === 1  ? `./img/${piecesOrder[col - 1]}_black.png` : `./img/${piecesOrder[col - 1]}_white.png`;
                piece.appendChild(img);
            } else if (row === 2 || row === 7) {
                const img = document.createElement('img');
                img.src = row === 2 ? `./img/pawn_black.png` :`./img/chess-piece.png`;
                piece.appendChild(img);
            }

            cell.appendChild(piece);
            rowDiv.appendChild(cell);
        }

        chessBoard.appendChild(rowDiv);
    }

    document.body.appendChild(chessBoard);
}


generateChessBoard();
generateChessBoardPhoto();