const boardDiv = document.querySelector(".board");
const cols = 8;
const rows = 8;
const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

function createRowWithNumbers(number) {
  const rowDiv = document.createElement("div");
  rowDiv.className = "row";

  function createNumberDiv(number) {
    const numberDiv = document.createElement("div");
    numberDiv.className = "number";
    numberDiv.textContent = number;
    return numberDiv;
  }

  rowDiv.appendChild(createNumberDiv(number));

  return rowDiv;
}

function createCell(isWhite, x, y) {
  const cell = document.createElement("div");
  cell.className = `cell ${isWhite ? 'white' : 'black'}`;
  cell.id = `cell-${x}_${y}`
  return cell;
}

function createLetterDiv(letter) {
  const letterDiv = document.createElement("div");
  letterDiv.textContent = letter;
  letterDiv.className = "letter";
  return letterDiv;
}

function createFigure(isWhite, x, y, figureName) {
  const cell = document.querySelector(`#cell-${x}_${y}`);
  const figure = document.createElement("img");
  figure.src = `./img/${isWhite ? `${figureName}-w.svg` : `${figureName}-b.svg`}`;
  figure.alt = figureName;
  figure.className = "figure";
  cell.appendChild(figure);
}

function setUpFigures() {
  const arr = [true, false];

  arr.forEach((isWhite) => {
    setUpPawns(isWhite);
    setUpRooks(isWhite);
    setUpKnights(isWhite);
    setUpBishops(isWhite);
    setUpQueens(isWhite);
    setUpKings(isWhite);
  });
}

function setUpPawns(isWhite) {
  const x = isWhite ? 7 : 2;
  for (let i = 0; i < 8; i++) {
    createFigure(isWhite, x, i + 1, "pawn");
  }
}

function setUpRooks(isWhite) {
  const x = isWhite ? 8 : 1;
  const corners = [1, 8];
  corners.forEach((corner) => createFigure(isWhite, x, corner, "rook"));
}

function setUpKnights(isWhite) {
  const x = isWhite ? 8 : 1;
  const corners = [2, 7];
  corners.forEach((corner) => createFigure(isWhite, x, corner, "knight"));
}

function setUpBishops(isWhite) {
  const x = isWhite ? 8 : 1;
  const corners = [3, 6];
  corners.forEach((corner) => createFigure(isWhite, x, corner, "bishop"));
}

function setUpQueens(isWhite) {
  const x = isWhite ? 8 : 1;
  createFigure(isWhite, x, 4, "queen");
}

function setUpKings(isWhite) {
  const x = isWhite ? 8 : 1;
  createFigure(isWhite, x, 5, "king");
}

function generateBoard() {
  const upLettersDiv = document.createElement("div");
  upLettersDiv.className = "letter_row";
  letters.forEach((letter) => upLettersDiv.appendChild(createLetterDiv(letter)));

  const bottomLettersDiv = upLettersDiv.cloneNode(true);

  boardDiv.appendChild(upLettersDiv);

  for (let col = 0; col < cols; col++) {
    const rowDiv = createRowWithNumbers(cols - col);

    for (let row = 0; row < rows; row++) {
      rowDiv.appendChild(createCell((col + row) % 2 === 0, col + 1, row + 1));
    }

    rowDiv.appendChild(createRowWithNumbers(cols - col));
    boardDiv.appendChild(rowDiv);
  }

  boardDiv.appendChild(bottomLettersDiv);

  setUpFigures()

}

generateBoard()
