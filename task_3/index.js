const chess_board = document.getElementById("chess_board");

for (let i = 0; i < 9; i++) {
  if (i === 0) {
    const colLabel = document.createElement("div");
    colLabel.classList.add("cell");
    chess_board.appendChild(colLabel);
  } else {
    const colLabel = document.createElement("div");
    colLabel.classList.add("cell", "col-label");
    colLabel.textContent = String.fromCharCode(65 + i - 1);
    chess_board.appendChild(colLabel);
  }
}

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    if ((row + col) % 2 === 0 && row !== 9) {
      cell.classList.add("white");
    } else {
      cell.classList.add("black");
    }

    if (col === 0) {
      const rowLabel = document.createElement("div");
      rowLabel.classList.add("cell", "row-label");
      rowLabel.textContent = row + 1;
      chess_board.appendChild(rowLabel);
    }

    if (row === 0) {
      if (col === 0 || col === 7) {
        const img = document.createElement("img");
        img.classList.add("chess_piece");
        img.src = "./img/black_rook.png";
        cell.appendChild(img);
      }
      if (col === 1 || col === 6) {
          const img = document.createElement("img");
          img.classList.add("chess_piece");
          img.src = "./img/black_knight.png";
          cell.appendChild(img);
      }
      if (col === 2 || col === 5) {
        const img = document.createElement("img");
        img.classList.add("chess_piece");
        img.src = "./img/black_bishop.png";
        cell.appendChild(img);
      }
      if (col === 3) {
        const img = document.createElement("img");
        img.classList.add("chess_piece");
        img.src = "./img/black_queen.png";
        cell.appendChild(img);
      }
      if (col === 4) {
        const img = document.createElement("img");
        img.classList.add("chess_piece");
        img.src = "./img/black_king.png";
        cell.appendChild(img);
      }
    }
    if (row === 7) {
      if (col === 0 || col === 7) {
        const img = document.createElement("img");
        img.classList.add("chess_piece");
        img.src = "./img/white_rook.png";
        cell.appendChild(img);
      }
      if (col === 1 || col === 6) {
        const img = document.createElement("img");
        img.classList.add("chess_piece");
        img.src = "./img/white_knight.png";
        cell.appendChild(img);
      }
      if (col === 2 || col === 5) {
          const img = document.createElement("img");
          img.classList.add("chess_piece");
          img.src = "./img/white_bishop.png";
          cell.appendChild(img);
      }
      if (col === 3) {
        const img = document.createElement("img");
        img.classList.add("chess_piece");
        img.src = "./img/white_queen.png";
        cell.appendChild(img);
      }
      if (col === 4) {
        const img = document.createElement("img");
        img.classList.add("chess_piece");
        img.src = "./img/white_king.png";
        cell.appendChild(img);
      }
    }
    if (col >= 0 && col < 8) {
      if (row === 1) {
        const img = document.createElement("img");
        img.classList.add("chess_piece");
        img.src = "./img/black_pawn.png";
        cell.appendChild(img);
      }
      if (row === 6) {
        const img = document.createElement("img");
        img.classList.add("chess_piece");
        img.src = "./img/white_pawn.png";
        cell.appendChild(img);
      }
    }
    chess_board.appendChild(cell);
  }
}