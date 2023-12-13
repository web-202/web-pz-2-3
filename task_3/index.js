function generateChessboard() {
  const chessboard = document.getElementById("chessboard");

  // Add row numbers
  for (let i = 8; i > 0; i--) {
    const rowNumber = document.createElement("div");
    rowNumber.classList.add("row-number");
    rowNumber.textContent = i;
    chessboard.appendChild(rowNumber);
  }

  // Add squares with images
  for (let i = 0; i < 8; i++) {
    // Add column letters
    const columnLetter = document.createElement("div");
    columnLetter.classList.add("column-letter");
    columnLetter.textContent = String.fromCharCode(65 + i);
    chessboard.appendChild(columnLetter);

    for (let j = 8; j > 0; j--) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.dataset.row = j;
      square.dataset.column = String.fromCharCode(65 + i);

      // Add chess piece images
      const chessPiece = document.createElement("img");
      chessPiece.classList.add("chess-piece");
      chessPiece.src = getChessPieceImage(j, String.fromCharCode(65 + i));
      square.appendChild(chessPiece);

      chessboard.appendChild(square);
    }
  }
}

function getChessPieceImage(row, column) {
  // You can customize this function to return the appropriate image URL based on the row and column
  // For simplicity, this example returns a placeholder image for every square
  return "placeholder.png";
}

generateChessboard();
