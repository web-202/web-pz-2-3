
    function generateChessboard() {
        const chessboard = document.querySelector(".chessboard");
        function generateChessboard() {
            const chessboard = document.querySelector(".chessboard");
            const pieceImages = [
                "./img/white-rook.PNG",
                "./img/white-knight.PNG",
                "./img/white-bishop.PNG",
                "./img/white-queen.PNG",
                "./img/white-king.PNG",
                "./img/white-bishop.PNG",
                "./img/white-knight.PNG",
                "./img/white-rook.PNG",
                "./img/white-pawn.PNG",
                "./img/white-pawn.PNG",
                "./img/white-pawn.PNG",
                "./img/white-pawn.PNG",
                "./img/white-pawn.PNG",
                "./img/white-pawn.PNG",
                "./img/white-pawn.PNG",
                "./img/white-pawn.PNG",
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
                "./img/pawn.png",
                "./img/pawn.png",
                "./img/pawn.png",
                "./img/pawn.png",
                "./img/pawn.png",
                "./img/pawn.png",
                "./img/pawn.png",
                "./img/pawn.png",
                "./img/rook.PNG",
                "./img/knight.png",
                "./img/bishop.png",
                "./img/queen.png",
                "./img/king.png",
                "./img/bishop.png",
                "./img/knight.png",
                "./img/rook.png",
                
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