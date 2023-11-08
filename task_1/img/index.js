function generateChessboard() {
    const chessboard = document.querySelector(".chessboard");
    function generateChessboard() {
        const chessboard = document.querySelector(".chessboard");
        const pieceImages = [
            "./img/white-icon-business.png",
            "./img/white-strategy.png",
            "./img/white-black-chess.png",
            "./img/white-queen.png",
            "./img/white-king.png",
            "./img/white-black-chess.png",
            "./img/white-strategy.png",
            "./img/white-icon-business.png",
            "./img/white-pawn.png",
            "./img/white-pawn.png",
            "./img/white-pawn.png",
            "./img/white-pawn.png",
            "./img/white-pawn.png",
            "./img/white-pawn.png",
            "./img/white-pawn.png",
            "./img/white-pawn.png",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "./img/icon-pawn.png",
            "./img/icon-pawn.png",
            "./img/icon-pawn.png",
            "./img/icon-pawn.png",
            "./img/icon-pawn.png",
            "./img/icon-pawn.png",
            "./img/icon-pawn.png",
            "./img/icon-pawn.png",
            "./img/black-biseness.png",
            "./img/black-knight.png",
            "./img/black-chess.png",
            "./img/icon-queen.png",
            "./img/black-king.png",
            "./img/black-chess.png",
            "./img/black-knight.png",
            "./img/black-biseness.png",

        ];


        const columnLabels = ["A", "B", "C", "D", "E", "F", "G", "H"];

        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const cell = document.createElement("div");
                cell.classList.add((row + col) % 2 === 0 ? "white" : "black");

                const pieceImg = document.createElement("img");
                pieceImg.src = pieceImages[row * 8 + col];
                cell.appendChild(pieceImg);

                chessboard.appendChild(cell);
            }
        }
    }


    generateChessboard();


}

generateChessboard();
