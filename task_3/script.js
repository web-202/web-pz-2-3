const table = document.querySelector(".table")

let letters = ["A", "B", "C", "D", "E", "F", "G", "H"]


const row = document.createElement("div")
for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div")
  if (i !== 0) {
    cell.textContent = `${i}`
  } else {
    cell.textContent = ``
  }

  cell.className = "cell table__borders"
  row.appendChild(cell)
}

for (let i = 0; i < 8; i++) {
  row.className = "row"
  const cell = document.createElement("div")
  cell.textContent = letters[i]
  cell.className = "cell table__borders"
  row.appendChild(cell)
  for (let j = 0; j < 8; j++) {
    const cell = document.createElement("div")

    if ((i + j) % 2 === 0) {
      cell.className = "cell white"
    } else {
      cell.className = "cell black"
    }
    cell.id = `${i}:${j}`


    const figure = document.createElement("img")

    if(i===1){
      figure.src = "./img/pawn-b.png"
    }

    if(i===6){
      figure.src = "./img/pawn-w.png"
    }

    switch (cell.id) {
      case "0:0":
      case "0:7":
        figure.src = "./img/rook-b.png"
        break;
      case "0:1":
      case "0:6":
        figure.src = "./img/knight-b.png"
        break;
      case "0:2":
      case "0:5":
        figure.src = "./img/bishop-b.png"
        break;
      case "0:3":
        figure.src = "./img/queen-b.png"
        break;
      case "0:4":
        figure.src = "./img/king-b.png"
        break;
    }

    switch (cell.id) {
      case "7:0":
      case "7:7":
        figure.src = "./img/rook-w.png"
        break;
      case "7:1":
      case "7:6":
        figure.src = "./img/knight-w.png"
        break;
      case "7:2":
      case "7:5":
        figure.src = "./img/bishop-w.png"
        break;
      case "7:3":
        figure.src = "./img/king-w.png"
        break;
      case "7:4":
        figure.src = "./img/queen-w.png"
        break;
    }
    cell.appendChild(figure)

    row.appendChild(cell)
  }
  table.appendChild(row)
}
