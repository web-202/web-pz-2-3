const chessBoardBtn = document.querySelector(".prs-button");
const chessBoardContainer = document.querySelector(".chess-board");

const generateChessBoard = () => {
    const chessBoard = new ChessBoard(chessBoardContainer);
    chessBoard.drawBoard();
    chessBoardBtn.style.display = "none"; 
};

chessBoardBtn.addEventListener("click", generateChessBoard);

function ChessBoard(block) {
    this.size = 8;

    this.drawBoard = () => {
        const chessboardTable = document.createElement("table");
        chessboardTable.className = "chess-board_table";

        let lettersRow = this.generateLettersRow();
        lettersRow.className = "chess-board_row chess-board_row_border-bottom";
        chessboardTable.appendChild(lettersRow);

        for (let row = 0; row < this.size; row++) {
            const chessBoardRow = this.generateChessBoardRow(row);
            chessboardTable.appendChild(chessBoardRow);
        }

        lettersRow = this.generateLettersRow();
        lettersRow.className = "chess-board_row chess-board_row_border-top";
        chessboardTable.appendChild(lettersRow);

        block.appendChild(chessboardTable);
    }

    this.generateChessBoardRow = (row) => {
        const chessBoardRow = document.createElement("tr");
        chessBoardRow.className = "chess-board_row";

        let numberCell = this.generateNumberCell(this.size - row)
        numberCell.className = "chess-board_table-head chess-board_number-cell chess-board_number-cell_left";
        chessBoardRow.appendChild(numberCell);

        for (let column = 0; column < this.size; column++) {
            chessBoardRow.appendChild(this.generateChessBoardCell(row, column));
        }

        numberCell = this.generateNumberCell(this.size - row)
        numberCell.className = "chess-board_table-head chess-board_number-cell chess-board_number-cell_right";
        chessBoardRow.appendChild(numberCell);


        return chessBoardRow;
    }

    this.generateNumberCell = (number) => {
        const numberCell = document.createElement("th");
        numberCell.textContent = number;
        return numberCell;
    };

    this.generateChessBoardCell = (row, column) => {
        const chessBoardCell = document.createElement("td");
        chessBoardCell.className = "chess-board_cell";
        chessBoardCell.classList.add((row + column) % 2 === 0 ?
            "chess-board_cell_white" : "chess-board_cell_black");

        switch (row) {
            case 0:
                if (column === 0 || column === 7) {
                    chessBoardCell.appendChild(this.getChessPiecesImg("rook"));
                } else if (column === 1 || column === 6) {
                    chessBoardCell.appendChild(this.getChessPiecesImg("knight"));
                } else if (column === 2 || column === 5) {
                    chessBoardCell.appendChild(this.getChessPiecesImg("bishop"));
                } else if (column === 3) {
                    chessBoardCell.appendChild(this.getChessPiecesImg("queen"));
                } else if (column === 4) {
                    chessBoardCell.appendChild(this.getChessPiecesImg("king"));
                }
                break;
            case 1:
                chessBoardCell.appendChild(this.getChessPiecesImg("pawn"));
                break;
            case 6:
                chessBoardCell.appendChild(this.getChessPiecesImg("pawnw"));
                break;
            case 7:
                if (column === 0 || column === 7) {
                    chessBoardCell.appendChild(this.getChessPiecesImg("rookw"));
                } else if (column === 1 || column === 6) {
                    chessBoardCell.appendChild(this.getChessPiecesImg("knightw"));
                } else if (column === 2 || column === 5) {
                    chessBoardCell.appendChild(this.getChessPiecesImg("bishopw"));
                } else if (column === 3) {
                    chessBoardCell.appendChild(this.getChessPiecesImg("queenw"));
                } else if (column === 4) {
                    chessBoardCell.appendChild(this.getChessPiecesImg("kingw"));
                }
                break;
        }

        return chessBoardCell;
    }

    this.getChessPiecesImg = (type) => {
        const chessPiecesImg = document.createElement("img");
        chessPiecesImg.className = "chess-pieces";
        chessPiecesImg.src = `./img/${type}.png`;
        chessPiecesImg.alt = `${type}`;
        return chessPiecesImg;
    }

    this.generateLettersRow = () => {
        const lettersRow = document.createElement("tr");

        let emptyCell = document.createElement("th");
        emptyCell.className = "chess-board_table-head chess-board_empty-cell"
        lettersRow.appendChild(emptyCell);

        for (let i = 0; i < this.size; i++) {
            const letterCell = document.createElement("th");
            letterCell.className = "chess-board_table-head chess-board_letter-cell"
            letterCell.textContent = String.fromCharCode(65 + i);
            lettersRow.appendChild(letterCell);
        }

        emptyCell = document.createElement("th");
        emptyCell.className = "chess-board_table-head chess-board_empty-cell"
        lettersRow.appendChild(emptyCell);
        return lettersRow;
    };
}