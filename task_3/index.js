const chessboard = document.getElementById("chessboard");

for (let i = 0; i < 9; i++) {
  if (i === 0) {
    const colLabel = document.createElement("div");
    colLabel.classList.add("cell");
    chessboard.appendChild(colLabel);
  } else {
    const colLabel = document.createElement("div");
    colLabel.classList.add("cell", "col-label");
    colLabel.textContent = String.fromCharCode(65 + i - 1); // Преобразуем числовой код в букву
    chessboard.appendChild(colLabel);
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
      chessboard.appendChild(rowLabel);
    }

    ////////////////////////////////////////////Generate Figures//////////////////////////////////////////////////////

    if (row === 0) {
      //Rook
      if (col === 0 || col === 7) {
        const img = document.createElement("img");
        img.classList.add("chess-piece");
        img.src = "./img/black-rook.png";
        cell.appendChild(img);
      }
      //Knight
      if (col === 1 || col === 6) {
          const img = document.createElement("img");
          img.classList.add("chess-piece");
          img.src = "./img/black-knight.png";
          cell.appendChild(img);
      }
      //Bishop
      if (col === 2 || col === 5) {
        const img = document.createElement("img");
        img.classList.add("chess-piece");
        img.src = "./img/black-bishop.png";
        cell.appendChild(img);
      }
      //Queen
      if (col === 3) {
        const img = document.createElement("img");
        img.classList.add("chess-piece");
        img.src = "./img/black-queen.png";
        cell.appendChild(img);
      }
      //King
      if (col === 4) {
        const img = document.createElement("img");
        img.classList.add("chess-piece");
        img.src = "./img/black-king.png";
        cell.appendChild(img);
      }
    }
    if (row === 7) {
      //Rook
      if (col === 0 || col === 7) {
        const img = document.createElement("img");
        img.classList.add("chess-piece");
        img.src = "./img/white-rook.png";
        cell.appendChild(img);
      }
      //Knight
      if (col === 1 || col === 6) {
        const img = document.createElement("img");
        img.classList.add("chess-piece");
        img.src = "./img/white-knight.png";
        cell.appendChild(img);
      }
      //Bishop
      if (col === 2 || col === 5) {
          const img = document.createElement("img");
          img.classList.add("chess-piece");
          img.src = "./img/white-bishop.png";
          cell.appendChild(img);
      }
      //Queen
      if (col === 3) {
        const img = document.createElement("img");
        img.classList.add("chess-piece");
        img.src = "./img/white-queen.png";
        cell.appendChild(img);
      }
      //King
      if (col === 4) {
        const img = document.createElement("img");
        img.classList.add("chess-piece");
        img.src = "./img/white-king.png";
        cell.appendChild(img);
      }
    }
    //Pawn
    if (col >= 0 && col < 8) {
      if (row === 1) {
        const img = document.createElement("img");
        img.classList.add("chess-piece");
        img.src = "./img/black-pawn.png";
        cell.appendChild(img);
      }
      if (row === 6) {
        const img = document.createElement("img");
        img.classList.add("chess-piece");
        img.src = "./img/white-pawn.png";
        cell.appendChild(img);
      }
    }

    chessboard.appendChild(cell);
  }
}
