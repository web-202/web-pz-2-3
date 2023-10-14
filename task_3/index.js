function generateChessboard() {
    const chessboardContainer = document.getElementById('chessboard-container');
    chessboardContainer.innerHTML = '';

    const chessboard = document.createElement('table');

    for (let row = 8; row >= 1; row--) {
        const chessboardRow = document.createElement('tr');

        for (let col = 'a'.charCodeAt(0); col <= 'h'.charCodeAt(0); col++) {
            const cell = document.createElement('td');
            cell.id = String.fromCharCode(col) + row;
            cell.textContent = '';
            cell.className = (row + col) % 2 === 0 ? 'black' : 'white';
            chessboardRow.appendChild(cell);
        }

        chessboard.appendChild(chessboardRow);
    }

    chessboardContainer.appendChild(chessboard);
}
