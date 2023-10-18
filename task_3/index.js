let board = document.getElementById("board");
let cell = null;


const createRook = (color) => {
    const img = document.createElement("img");
    img.classList.add("figure");
    if (color === 'black') {
        img.src = "./img/black/rook.png";
    }else {
        img.src = "./img/white/rook.png";
    }
    return img;
}

const createKnight = (color) => {
    const img = document.createElement("img");
    img.classList.add("figure");
    if (color === 'black') {
        img.src = "./img/black/knight.png";
    }else {
        img.src = "./img/white/knight.png";
    }
    return img;
}

const createBishop = (color) => {
    const img = document.createElement("img");
    img.classList.add("figure");
    if (color === 'black') {
        img.src = "./img/black/bishop.png";
    }else {
        img.src = "./img/white/bishop.png";
    }
    return img;
}

const createQueen = (color) => {
    const img = document.createElement("img");
    img.classList.add("figure");
    if (color === 'black') {
        img.src = "./img/black/queen.png";
    }else {
        img.src = "./img/white/queen.png";
    }
    return img;
}

const createKing = (color) => {
    const img = document.createElement("img");
    img.classList.add("figure");
    if (color === 'black') {
        img.src = "./img/black/king.png";
    }else {
        img.src = "./img/white/king.png";
    }
    return img;
}

const createPawn = (color) => {
    const img = document.createElement("img");
    img.classList.add("figure");
    if (color === 'black') {
        img.src = "./img/black/pawn.png";
    }else {
        img.src = "./img/white/pawn.png";
    }
    return img;
}


for (let i = 0; i < 9; i++) {
    if (i === 0) {
        cell = document.createElement("div");
        cell.classList.add("cell");
        board.appendChild(cell);
    } else {
        cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.textAlign = "center";
        cell.style.fontSize = "20px"
        cell.textContent = i;
        board.appendChild(cell);
    }
}

for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        cell = document.createElement("div");
        cell.classList.add("cell");

        if ((row + col) % 2 === 0 && row !== 9) {
            cell.style.backgroundColor = 'purple';
            cell.color = 'white'
        } else {
            cell.style.backgroundColor = 'orange';
            cell.color = 'black'
        }

        if (col === 0) {
            const numberCell = document.createElement("div");
            numberCell.classList.add("cell")
            numberCell.style.textAlign = "center";
            numberCell.style.fontSize = "20px"
            numberCell.textContent = String.fromCharCode(65 + row+1 - 1);
            board.appendChild(numberCell);
        }

        if (row === 0) {
            if (col === 0 || col === 7) {
                cell.appendChild(createRook('black'))
            }
            if (col === 1 || col === 6) {
                cell.appendChild(createKnight('black'))
            }
            if (col === 2 || col === 5) {
                cell.appendChild(createBishop('black'))
            }
            if (col === 3) {
                cell.appendChild(createQueen('black'))
            }
            if (col === 4) {
                cell.appendChild(createKing('black'))
            }
        }
        if (row === 7) {
            if (col === 0 || col === 7) {
                cell.appendChild(createRook('white'))
            }
            if (col === 1 || col === 6) {
                cell.appendChild(createKnight('white'))
            }
            if (col === 2 || col === 5) {
                cell.appendChild(createBishop('white'))
            }
            if (col === 3) {
                cell.appendChild(createQueen('white'))
            }
            if (col === 4) {
                cell.appendChild(createKing('white'))
            }
        }
        if (col >= 0 && col < 8) {
            if (row === 1) {
                cell.appendChild(createPawn('black'))
            }
            if (row === 6) {
                cell.appendChild(createPawn('white'))
            }
        }


        board.appendChild(cell);
    }
}



