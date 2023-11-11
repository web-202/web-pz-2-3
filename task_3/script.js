const chessboard = document.getElementById('chessboard');


for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const cell = document.createElement('div');
        cell.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
        cell.classList.add('square'); 
        cell.id = String.fromCharCode(65 + col) + (8 - row);
        chessboard.appendChild(cell);
    }
}
const pieces = [];


function addPiece(cellId, imageUrl, alt) {
    const cell = document.getElementById(cellId);
    if (cell) { 
        const piece = document.createElement('img');
        piece.src = imageUrl;
        piece.alt = alt;
        piece.classList.add('piece'); 
        
        const cell = document.getElementById(cellId);
        cell.classList.remove('white', 'black'); 
        cell.appendChild(piece);
        
        pieces.push(piece); 
        
    }
}


addPiece('A1', 'img/white_rook.png', 'white_rook');
addPiece('B1', 'img/black_officer.png', 'White Knight');
addPiece('C1', 'img/white_horse.png', 'White Bishop');
addPiece('D1', 'img/black_queen.png', 'White Queen');
addPiece('E1', 'img/white_king.png', 'White King');
addPiece('F1', 'img/black_horse.png', 'White Bishop');
addPiece('G1', 'img/wnite_officer.png', 'White Knight');
addPiece('H1', 'img/black_rook.png', 'white_rook4');

for (let col = 'A'; col <= 'H'; col = String.fromCharCode(col.charCodeAt(0) + 1)) {
    addPiece(`white-pawn-${col}2`, 'img/white-pawn.png', 'White Pawn');
}

addPiece('A8', 'img/black_rook.png', 'white_rook');
addPiece('B8', 'img/wnite_officer.png', 'White Knight');
addPiece('C8', 'img/black_horse.png', 'White Bishop');
addPiece('D8', 'img/white_queen.png', 'White Queen');
addPiece('E8', 'img/black_king.png', 'White King');
addPiece('F8', 'img/white_horse.png', 'White Bishop');
addPiece('G8', 'img/black_officer.png', 'White Knight');
addPiece('H8', 'img/white_rook.png', 'white_rook4');

for (let col = 'A'; col <= 'H'; col = String.fromCharCode(col.charCodeAt(0) + 1)) {
    addPiece(`black-pawn-${col}7`, 'img/black-pawn.png', 'Black Pawn');
}
addPiece('A2', 'img/black_peshka.jpg', 'white_rook');
addPiece('B2', 'img/white_peshka.png', 'White Knight');
addPiece('C2', 'img/black_peshka.jpg', 'White Bishop');
addPiece('D2', 'img/white_peshka.png', 'White Queen');
addPiece('E2', 'img/black_peshka.jpg', 'White King');
addPiece('F2', 'img/white_peshka.png', 'White Bishop');
addPiece('G2', 'img/black_peshka.jpg', 'White Knight');
addPiece('H2', 'img/white_peshka.png', 'white_rook4');
for (let col = 'A'; col <= 'H'; col = String.fromCharCode(col.charCodeAt(0) + 1)) {
    addPiece(`${col}2`, '', '');
}
addPiece('H7', 'img/black_peshka.jpg', 'white_rook');
addPiece('B7', 'img/black_peshka.jpg', 'White Knight');
addPiece('C7', 'img/white_peshka.png', 'White Bishop');
addPiece('D7', 'img/black_peshka.jpg', 'White Queen');
addPiece('E7', 'img/white_peshka.png', 'White King');
addPiece('F7', 'img/black_peshka.jpg', 'White Bishop');
addPiece('G7', 'img/white_peshka.png', 'White Knight');
addPiece('A7', 'img/white_peshka.png', 'white_rook4');
for (let col = 'A'; col <= 'H'; col = String.fromCharCode(col.charCodeAt(0) + 1)) {
    addPiece(`${col}7`, '', '');
}