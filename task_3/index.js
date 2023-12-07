const pieces = {
    'white-pawn': 'img/white-pawn.png',
    'white-rook': 'img/white-rook.png',
    'black-pawn': 'img/black-pawn.png',
    'black-rook': 'img/black-rook.png',
};

function createChessboard() {
    const chessboard = document.getElementById('chessboard');

    for (let row = 8; row >= 1; row--) {
        for (let col = 'A'.charCodeAt(); col <= 'H'.charCodeAt(); col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = String.fromCharCode(col) + row;

            if ((row === 2 || row === 7) && (col === 'A'.charCodeAt() || col === 'H'.charCodeAt())) {
                const piece = document.createElement('img');
                piece.src = pieces['white-rook'];
                if (row === 7) {
                    piece.src = pieces['black-rook'];
                }
                piece.classList.add('piece');
                cell.appendChild(piece);
            } else if (row === 1 && (col !== 'A'.charCodeAt() && col !== 'H'.charCodeAt())) {
                const piece = document.createElement('img');
                piece.src = pieces['white-pawn'];
                piece.classList.add('piece');
                cell.appendChild(piece);
            } else if (row === 8 && (col !== 'A'.charCodeAt() && col !== 'H'.charCodeAt())) {
                const piece = document.createElement('img');
                piece.src = pieces['black-pawn'];
                piece.classList.add('piece');
                cell.appendChild(piece);
            }

            chessboard.appendChild(cell);
        }
    }
}

window.onload = createChessboard;
