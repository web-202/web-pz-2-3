function createChessboard() {
    const chessboardContainer = document.getElementById('chessboard-container');
    let isWhite = true;

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell ' + (isWhite ? 'white' : 'black');
            chessboardContainer.appendChild(cell);
            isWhite = !isWhite;
        }
        isWhite = !isWhite;
    }
}

createChessboard();