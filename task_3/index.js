
document.addEventListener('DOMContentLoaded', function() {
    createChessboard();
});

function createChessboard() {
    const chessboard = document.querySelector(".chessboard");
    const columns = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const pieces = [
        "rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"
    ];

    for (let row = 8; row >= 1; row--) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement("div");
            square.className = "square";

            if ((row + col) % 2 === 0) {
                square.classList.add("white");
            } else {
                square.classList.add("black");
            }

            if (row === 2 || row === 7) {
                square.innerHTML = `<img class="chess-piece" src="./img/${
                    row === 2 ? "light" : "dark"
                }_pawn.png" alt="pawn">`;
            } else if (row === 1 || row === 8) {
                square.innerHTML = `<img class="chess-piece" src="img/${row === 1 ? "dark" : "light"}_${
                    pieces[col]
                }.png" alt="${
                    pieces[col]
                }">`;
            }
            

            chessboard.appendChild(square);
        }
    }
}
