// index.js
document.addEventListener("DOMContentLoaded", function() {
    const chessboard = document.getElementById("chessboard");
    const figures = [
      ["dark_rook", "dark_knight", "dark_bishop", "dark_queen", "dark_king", "dark_bishop", "dark_knight", "dark_rook"],
      ["dark_pawn", "dark_pawn", "dark_pawn", "dark_pawn", "dark_pawn", "dark_pawn", "dark_pawn", "dark_pawn"],
      [], [], [], [], 
      ["light_pawn", "light_pawn", "light_pawn", "light_pawn", "light_pawn", "light_pawn", "light_pawn", "light_pawn"],
      ["light_rook", "light_knight", "light_bishop", "light_queen", "light_king", "light_bishop", "light_knight", "light_rook"]
    ];
  
    const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const rows = 8;
    
    const boardContainer = document.createElement("div");
    boardContainer.classList.add("board-container");
  
    // Додаємо літери стовпців
    const columnLabelsRow = document.createElement("div");
    columnLabelsRow.classList.add("row", "labels-row");
    columns.forEach(column => {
      const columnLabel = document.createElement("div");
      columnLabel.classList.add("label", "column-label");
      columnLabel.textContent = column;
      columnLabelsRow.appendChild(columnLabel);
    });
    boardContainer.appendChild(columnLabelsRow);
  
    // Генеруємо дошку
    for (let i = 0; i < rows; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
      
      // Додаємо літери рядків
      const rowLabel = document.createElement("div");
      rowLabel.classList.add("label", "row-label");
      rowLabel.textContent = rows - i;
      row.appendChild(rowLabel);
  
      for (let j = 0; j < columns.length; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
  
        // Додаємо клас "black" до чорних клітинок
        if ((i + j) % 2 !== 0) {
          square.classList.add("black");
        }
  
        // Додаємо шахові фігури
        const figureType = figures[i][j];
        if (figureType) {
          const figureImg = document.createElement("img");
          figureImg.src = `img/${figureType}.png`; // Відповідно до імен файлів у папці img
          figureImg.alt = figureType;
          square.appendChild(figureImg);
        }
  
        row.appendChild(square);
      }
      boardContainer.appendChild(row);
    }
    chessboard.appendChild(boardContainer);
  });
  