function generateChessboard() {
    const chessboard = document.querySelector(".chess-board");
    const pieceImages = [
        "./img/white-icon-business.png",
        "./img/white-icon-strategy.png",
        "./img/white-icon-chess.png",
        "./img/white-icons-queen.png",
        "./img/white-icons-king.png",
        "./img/white-icon-chess.png",
        "./img/white-icon-strategy.png",
        "./img/white-icon-business.png",
        "./img/white-icon-pawn.png",
        "./img/white-icon-pawn.png",
        "./img/white-icon-pawn.png",
        "./img/white-icon-pawn.png",
        "./img/white-icon-pawn.png",
        "./img/white-icon-pawn.png",
        "./img/white-icon-pawn.png",
        "./img/white-icon-pawn.png",
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
        "./img/icon-biseness.png",
        "./img/icon-knight.png",
        "./img/icon-chess.png",
        "./img/icon-queen.png",
        "./img/icon-king.png",
        "./img/icon-chess.png",
        "./img/icon-knight.png",
        "./img/icon-biseness.png",

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