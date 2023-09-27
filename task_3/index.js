function createChessboard() {
    const chessboard = document.getElementById('chessboard');
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const initialPlacement = [
        ['townWhite', 'horseWhite', 'elephWhite', 'qeenWhite', 'kingWhite', 'elephWhite', 'horseWhite', 'townWhite'],
        ['peshkaWhite', 'peshkaWhite', 'peshkaWhite', 'peshkaWhite', 'peshkaWhite', 'peshkaWhite', 'peshkaWhite', 'peshkaWhite'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['peshkaBlack', 'peshkaBlack', 'peshkaBlack', 'peshkaBlack', 'peshkaBlack', 'peshkaBlack', 'peshkaBlack', 'peshkaBlack'],
        ['townBlack', 'horseBlack', 'elephBlack', 'qeenBlack', 'kingBlack', 'elephBlack', 'horseBlack', 'townBlack'],
    ];

    for (let row = 8; row >= 1; row--) {
        for (let col = 0; col < 8; col++) {
            const cell = document.createElement('div');
            cell.classList.add((row + col) % 2 === 0 ? 'white' : 'black');

            if (row === 8) {
                const columnLabel = document.createElement('span');
                columnLabel.textContent = letters[col];
                cell.appendChild(columnLabel);
            }

            if (col === 0) {
                const rowLabel = document.createElement('span');
                rowLabel.textContent = row;
                cell.appendChild(rowLabel);
            }

            const pieceName = initialPlacement[8 - row][col];
            if (pieceName) {
                const piece = document.createElement('img');
                piece.id = pieceName.split('.')[0];
                piece.src = `./img/${pieceName}.png`;
                piece.draggable = true;
                cell.appendChild(piece);

                piece.addEventListener('dragstart', (event) => {
                    event.dataTransfer.setData('text/plain', piece.id);
                });
                piece.addEventListener('dragover', (event) => {
                    event.preventDefault();
                });
                piece.addEventListener('drop', (event) => {
                    event.preventDefault();
                    const draggedPieceId = event.dataTransfer.getData('text/plain');
                    const targetPiece = event.target;
                    if (targetPiece.tagName === 'IMG') {
                        const sourcePiece = document.getElementById(draggedPieceId);
                        const sourceParent = sourcePiece.parentElement;
                        const targetParent = targetPiece.parentElement;
                        sourceParent.appendChild(targetPiece);
                        targetParent.appendChild(sourcePiece);
                    }
                });
            }

            chessboard.appendChild(cell);
        }
    }
}

createChessboard();
