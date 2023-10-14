function createChessboard() {
    const chessboard = document.getElementById('chessboard');
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  
    // Create the rows (8x8 grid)
    for (let row = 8; row >= 1; row--) {
      const chessRow = document.createElement('div');
      chessRow.classList.add('chess-row');
  
      // Create cells for each column
      for (let col = 0; col < 8; col++) {
        const chessCell = document.createElement('div');
        chessCell.classList.add('chess-cell');
  
        // Add labels for rows and columns
        if (col === 0) {
          const rowLabel = document.createElement('div');
          rowLabel.classList.add('row-label');
          rowLabel.textContent = row;
          chessCell.appendChild(rowLabel);
        }
  
        if (row === 8) {
          const colLabel = document.createElement('div');
          colLabel.classList.add('col-label');
          colLabel.textContent = letters[col];
          chessCell.appendChild(colLabel);
        }
  
        chessRow.appendChild(chessCell);
      }
      chessboard.appendChild(chessRow);
    }
  
    // Add chess piece images (e.g., for a simple starting position)
    const pieces = [
      '♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖',
      '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙',
      '♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'
    ];
  
    const cells = document.querySelectorAll('.chess-cell');
    cells.forEach((cell, index) => {
      const piece = document.createElement('img');
      piece.src = `path/to/chess-pieces/${pieces[index]}.png`;
      cell.appendChild(piece);
    });
  }
  
  createChessboard();