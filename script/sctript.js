// Task 1
document.querySelectorAll('#task1').forEach(item => {
    item.onclick = (event) => {
        alert(event.currentTarget.src);
    };
});
// /Task 1

// Task 2
const title = document.querySelector('#titleTask2')
document.querySelectorAll('#itemTask2').forEach(item => {
    item.addEventListener('mouseover', () => {
        title.textContent = item.textContent
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
document.querySelectorAll('#itemTask4').forEach(item => {
    const defaultValue = item.textContent
    let countMove = 0
    item.addEventListener('mouseover', () => {
        item.textContent += `\n(${item.href})`
    }, { once: true })
    item.addEventListener('mouseout', () => {
        item.textContent = defaultValue
    })
});
// /Task 4

// Task 5
const input1 = document.getElementById('itemTask5.1');
const input2 = document.getElementById('itemTask5.2');
const input3 = document.getElementById('itemTask5.3');
document.querySelectorAll('.input__task5').forEach(item => {
    item.addEventListener('blur', (event) => {
        document.getElementById('demo').textContent = `Input 1: ${input1.value}, Input 2: ${input2.value}, Input 3: ${input3.value}`;
    });
})
// /Task 5

// Task 6
document.querySelectorAll('#itemTask6').forEach(item => {
    item.addEventListener('click', () => {
        alert(item.value)
    }, { once: true })
});
// /Task 6

// Task 7
document.querySelectorAll('#itemTask7').forEach(item => {
    item.addEventListener('click', () => {
        const digitMatch = item.textContent.match(/\d+/);
        const originalNumber = parseInt(digitMatch[0]);
        console.log(originalNumber)
        const squaredNumber = originalNumber * originalNumber;
        const outputString = item.textContent.replace(originalNumber, squaredNumber);
        item.textContent = outputString
    })
});
// /Task 7

// Task 8
document.querySelectorAll('#itemTask8').forEach(item => {
    item.addEventListener('blur', () => {
        const correctLength = item.dataset.length;
        const inputDataLength = item.value.length;
        if (correctLength == inputDataLength) {
            item.style.border = '3px solid green';

        } else {
            item.style.borderColor = 'red';
        }

    })
});
// /Task 8

// Task 2.1
document.querySelectorAll('#itemTask2_1').forEach(item => {
    item.addEventListener('click', () => {
        const styles = window.getComputedStyle(item);
        const backgroundColor = styles.backgroundColor;
        console.log(backgroundColor)
        if (backgroundColor == 'rgb(0, 128, 0)') {
            return item.style.backgroundColor = 'red';
        }
        return item.style.backgroundColor = 'green';

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

const generateChessBoardPlus = () => {
    const chessBoard = document.createElement('div');
    chessBoard.classList.add('chess-board');

    const piecesOrder = ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'];

    for (let row = 8; row >= 1; row--) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add(row % 2 === 0 ? 'even-row' : 'odd-row');

        for (let col = 1; col <= 8; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            const piece = document.createElement('div');
            piece.classList.add('piece');

            if (row === 1 || row === 8) {
                piece.textContent = piecesOrder[col - 1];
                piece.style.color = row === 1 ? 'black' : 'white';
            } else if (row === 2 || row === 7) {
                piece.textContent = 'P';
                piece.style.color = row === 2 ? 'black' : 'white';
            }

            cell.appendChild(piece);
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
                img.src = row === 1  ? `../img/${piecesOrder[col - 1]}_black.png` : `../img/${piecesOrder[col - 1]}_white.png`;
                piece.appendChild(img);
            } else if (row === 2 || row === 7) {
                const img = document.createElement('img');
                img.src = row === 2 ? `img/pawn_black.png` :`img/chess-piece.png`;
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
generateChessBoardPlus();
generateChessBoardPhoto();