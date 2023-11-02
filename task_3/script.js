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
          'rook-b', 'knight-b', 'bishop-b', 'queen-b', 'king-b', 'bishop-b', 'knight-b', 'rook-b',
          'pawn-b', 'pawn-b', 'pawn-b', 'pawn-b', 'pawn-b', 'pawn-b', 'pawn-b', 'pawn-b',
          'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
          'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
          'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
          'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
          'pawn-w', 'pawn-w', 'pawn-w', 'pawn-w', 'pawn-w', 'pawn-w', 'pawn-w', 'pawn-w',
          'rook-w', 'knight-w', 'bishop-w', 'queen-w', 'king-w', 'bishop-w', 'knight-w', 'rook-w',
      ];

      const index = (8 - row) * 8 + (col - 'A'.charCodeAt(0));
      return pieces[index];
  }

  createChessboard();
});
