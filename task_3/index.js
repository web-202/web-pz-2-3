document.addEventListener('DOMContentLoaded', function() {
    const chessboard = document.getElementById('chessboard');

    function createChessboard() {
        let isDark = false;

        for (let row = 8; row >= 1; row--) {
            for (let col = 'A'.charCodeAt(0); col <= 'H'.charCodeAt(0); col++) {
                const cell = document.createElement('div');
                cell.classList.add(isDark ? 'dark' : 'light');

                const img = document.createElement('img');
                const piece = getChessPiece(row, col);
                if (piece !== 'empty') {
                    img.src = `img/${piece}.png`;
                    cell.appendChild(img);
                }
                cell.appendChild(img);

                chessboard.appendChild(cell);

                isDark = !isDark;
            }
            isDark = !isDark;
        }
    }

    function getChessPiece(row, col) {
        const pieces = [
            'dark_rook', 'dark_knight', 'dark_bishop', 'dark_queen', 'dark_king', 'dark_bishop', 'dark_knight', 'dark_rook',
            'dark_pawn', 'dark_pawn', 'dark_pawn', 'dark_pawn', 'dark_pawn', 'dark_pawn', 'dark_pawn', 'dark_pawn',
            'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
            'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
            'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
            'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
            'light_pawn', 'light_pawn', 'light_pawn', 'light_pawn', 'light_pawn', 'light_pawn', 'light_pawn', 'light_pawn',
            'light_rook', 'light_knight', 'light_bishop', 'light_queen', 'light_king', 'light_bishop', 'light_knight', 'light_rook'
        ];

        const index = (8 - row) * 8 + (col - 'A'.charCodeAt(0));
        return pieces[index];
    }

    createChessboard();
});
