const chessBoardBtn = document.querySelector(".menu__button_generate");
const chessBoardContainer = document.querySelector(".chess-board");

const generateChessBoard = () => {
    const chessBoard = new ChessBoard(chessBoardContainer);
    chessBoard.drawBoard();

    chessBoardBtn.classList.remove("menu__button_generate");
    chessBoardBtn.classList.add("menu__button_delete");
    chessBoardBtn.textContent = "Delete";

    chessBoardBtn.removeEventListener("click", generateChessBoard);
    chessBoardBtn.addEventListener("click", deleteChessBoard);
};

const deleteChessBoard = () => {
    chessBoardContainer.innerHTML = "";

    chessBoardBtn.classList.remove("menu__button_delete");
    chessBoardBtn.classList.add("menu__button_generate");
    chessBoardBtn.textContent = "Generate";

    chessBoardBtn.removeEventListener("click", deleteChessBoard);
    chessBoardBtn.addEventListener("click", generateChessBoard);
};

chessBoardBtn.addEventListener("click", generateChessBoard);

function ChessBoard(block) {
    this.size = 8;

    this.drawBoard = () => {
        const chessboardTable = document.createElement("table");
        chessboardTable.className = "chess-board__table";

        let lettersRow = this.generateLettersRow();
        lettersRow.className = "chess-board__row chess-board__row_border-bottom";
        chessboardTable.appendChild(lettersRow);

        for (let row = 0; row < this.size; row++) {
            const chessBoardRow = this.generateChessBoardRow(row);
            chessboardTable.appendChild(chessBoardRow);
        }

        lettersRow = this.generateLettersRow();
        lettersRow.className = "chess-board__row chess-board__row_border-top";
        chessboardTable.appendChild(lettersRow);

        block.appendChild(chessboardTable);
    }

    this.generateChessBoardRow = (row) => {
        const chessBoardRow = document.createElement("tr");
        chessBoardRow.className = "chess-board__row";

        let numberCell = this.generateNumberCell(this.size - row)
        numberCell.className = "chess-board__table-head chess-board__number-cell chess-board__number-cell_left";
        chessBoardRow.appendChild(numberCell);

        for (let column = 0; column < this.size; column++) {
            chessBoardRow.appendChild(this.generateChessBoardCell(row, column));
        }

        numberCell = this.generateNumberCell(this.size - row)
        numberCell.className = "chess-board__table-head chess-board__number-cell chess-board__number-cell_right";
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
        chessBoardCell.className = "chess-board__cell";
        chessBoardCell.classList.add((row + column) % 2 === 0 ?
            "chess-board__cell_white" : "chess-board__cell_black");

        switch (row) {
            case 0:
                if (column === 0 || column === 7) {
                    chessBoardCell.appendChild(this.getChessPiecesImg("black", "rook"));
                } else if (column === 1 || column === 6) {
                    chessBoardCell.appendChild(this.getChessPiecesImg("black", "knight"));
                } else if (column === 2 || column === 5) {
                    chessBoardCell.appendChild(this.getChessPiecesImg("black", "bishop"));
                } else if (column === 3) {
                    chessBoardCell.appendChild(this.getChessPiecesImg("black", "queen"));
                } else if (column === 4) {
                    chessBoardCell.appendChild(this.getChessPiecesImg("black", "king"));
                }
                break;
            case 1:
                chessBoardCell.appendChild(this.getChessPiecesImg("black", "pawn"));
                break;
            case 6:
                chessBoardCell.appendChild(this.getChessPiecesImg("white", "pawn"));
                break;
            case 7:
                if (column === 0 || column === 7) {
                    chessBoardCell.appendChild(this.getChessPiecesImg("white", "rook"));
                } else if (column === 1 || column === 6) {
                    chessBoardCell.appendChild(this.getChessPiecesImg("white", "knight"));
                } else if (column === 2 || column === 5) {
                    chessBoardCell.appendChild(this.getChessPiecesImg("white", "bishop"));
                } else if (column === 3) {
                    chessBoardCell.appendChild(this.getChessPiecesImg("white", "queen"));
                } else if (column === 4) {
                    chessBoardCell.appendChild(this.getChessPiecesImg("white", "king"));
                }
                break;
        }

        return chessBoardCell;
    }

    this.getChessPiecesImg = (color, type) => {
        const chessPiecesImg = document.createElement("img");
        chessPiecesImg.className = "chess-pieces";
        chessPiecesImg.src = `./img/chess_pieces/${color}/${type}.png`;
        chessPiecesImg.alt = `${type}`;
        return chessPiecesImg;
    }

    this.generateLettersRow = () => {
        const lettersRow = document.createElement("tr");

        let emptyCell = document.createElement("th");
        emptyCell.className = "chess-board__table-head chess-board__empty-cell"
        lettersRow.appendChild(emptyCell);

        for (let i = 0; i < this.size; i++) {
            const letterCell = document.createElement("th");
            letterCell.className = "chess-board__table-head chess-board__letter-cell"
            letterCell.textContent = String.fromCharCode(65 + i);
            lettersRow.appendChild(letterCell);
        }

        emptyCell = document.createElement("th");
        emptyCell.className = "chess-board__table-head chess-board__empty-cell"
        lettersRow.appendChild(emptyCell);
        return lettersRow;
    };
}