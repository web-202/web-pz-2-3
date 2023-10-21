document.addEventListener('DOMContentLoaded', function () {
    function createChessboard() {
        const chessboard = document.getElementById('chessboard');

        for (let i = 8; i >= 1; i--) {
            for (let j = 0; j < 8; j++) {
                const square = document.createElement('div');
                square.classList.add('square');
                const img = document.createElement('img');

                if ((i + j) % 2 === 0) {
                    square.style.backgroundColor = '#fff';
                } else {
                    square.style.backgroundColor = '#C99461';
                }

                if (i === 2) {
                    img.src = './img/pawnBlack.png';
                } else if (i === 7) {
                    img.src = './img/pawnWhite.png';
                } else if (i === 1) {
                    const pieceImages = ['turaBlack.png', 'horseBlack.png', 'sloneBlack.png', 'kingBlack.png', 'qeenBlack.png', 'sloneBlack.png', 'horseBlack.png', 'turaBlack.png'];
                    img.src = './img/' + pieceImages[j];
                } else if (i === 8) {
                    const pieceImages = ['turaWhite.png', 'horseWhite.png', 'sloneWhite.png', 'kingWhite.png', 'qeenWhite.png', 'sloneWhite.png', 'horseWhite.png', 'turaWhite.png'];
                    img.src = './img/' + pieceImages[j];
                }

                square.appendChild(img);
                chessboard.appendChild(square);
            }
        }
    }

    createChessboard();
});
