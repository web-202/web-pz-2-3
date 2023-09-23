boardNumeration = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

function addFigure(cellDiv, i, j) {
  /**
   * define figure type according to the order of figures in figures.png image
   * 0 - rook
   * 1 - knight
   * 2 - officer
   * 3 - king
   * 4 - queen
   * 5 - knight (mirrored)
   * 6 - pawn
   *
   * @type {number}
   */
  let figureIndex = -1;

  switch (i) {
    case 0:
    case 7:
      switch (j) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
          figureIndex = j
          break;
        case 5:
          figureIndex = 2;
          break;
        case 6:
          figureIndex = 5;
          break;
        case 7: {
          figureIndex = 0;
        }
      }
      break;
    case 1:
    case 6:
      figureIndex = 6
      break;

  }

  let isBlackIndex = i < 4 ? 1 : 0;

  if (figureIndex !== -1) {
    cellDiv.style.background = `url("./img/${isBlackIndex}-${figureIndex}.png") no-repeat`
    cellDiv.style.backgroundSize = 'contain'
    cellDiv.style.backgroundPositionX = 'center'
    cellDiv.style.backgroundPositionY = 'center'
  }
}

function generateBoard() {
  const boardDiv = document.getElementById('board')

  for (let i = 0; i < 9; i++) {
    let rowDiv = document.createElement('div');
    rowDiv.className = 'row'
    boardDiv.appendChild(rowDiv)

    for (let j = 0; j < 9; j++) {
      let cellDiv = document.createElement('div');
      cellDiv.className = 'cell'
      if (i === 0) {
        if (j !== 0) {
          cellDiv.textContent = (j).toString();
        }
      } else {
        if (j === 0) {
          if (i !== 0) {
            cellDiv.textContent = boardNumeration[i - 1]
          }
        } else {
          cellDiv.classList.add((i + j) % 2 === 0 ? 'black' : 'white')

          addFigure(cellDiv, i - 1, j - 1);
        }
      }

      rowDiv.appendChild(cellDiv)
    }
  }
}

generateBoard()
