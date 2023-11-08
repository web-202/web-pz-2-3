function chessBoard() {
  const chessBoardElement = document.querySelector(".chessBoardElement");

  function chessBoard() {
    const chessBoardElement = document.querySelector(".chessBoardElement");
    const imagesChess = [
      "./img/white-business.png",
      "./img/white-strategy.png",
      "./img/white-chess.png",
      "./img/white-queen.png",
      "./img/white-king.png",
      "./img/white-chess.png",
      "./img/white-strategy.png",
      "./img/white-business.png",
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
      "./img/black-pawn.png",
      "./img/black-pawn.png",
      "./img/black-pawn.png",
      "./img/black-pawn.png",
      "./img/black-pawn.png",
      "./img/black-pawn.png",
      "./img/black-pawn.png",
      "./img/black-pawn.png",
      "./img/black-biseness.png",
      "./img/black-knight.png",
      "./img/black-chess.png",
      "./img/black-queen.png",
      "./img/black-king.png",
      "./img/black-chess.png",
      "./img/black-knight.png",
      "./img/black-biseness.png",

    ];


    const columnLabels = ["A", "B", "C", "D", "E", "F", "G", "H"];

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const elementBoard = document.createElement("div");
        elementBoard.classList.add((row + col) % 2 === 0 ? "white" : "black");

        const imageChess = document.createElement("img");
        if (imagesChess[row * 8 + col] === '') {
          console.log(imagesChess[row * 8 + col])
        } else {
          imageChess.src = imagesChess[row * 8 + col];
        }

        if (imagesChess[row * 8 + col] === '') {
          console.log(imagesChess[row * 8 + col])
        } else {
          elementBoard.appendChild(imageChess);
        }
        chessBoardElement.appendChild(elementBoard);
      }
    }
  }


  chessBoard();


}

chessBoard();
