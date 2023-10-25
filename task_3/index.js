const table = document.querySelector(".table");
const symbols = ["A", "B", "C", "D", "E", "F", "G", "H"];
const pieces = {
  "0:0": "./img/rook-b.png",
  "0:1": "./img/knight-b.png",
  "0:2": "./img/bishop-b.png",
  "0:3": "./img/queen-b.png",
  "0:4": "./img/king-b.png",
  "0:5": "./img/bishop-b.png",
  "0:6": "./img/knight-b.png",
  "0:7": "./img/rook-b.png",
  "2:pawn": "./img/pawn-b.png",
  "7:pawn": "./img/pawn-w.png",
  "7:0": "./img/rook-w.png",
  "7:1": "./img/knight-w.png",
  "7:2": "./img/bishop-w.png",
  "7:3": "./img/king-w.png",
  "7:4": "./img/queen-w.png",
  "7:5": "./img/bishop-w.png",
  "7:6": "./img/knight-w.png",
  "7:7": "./img/rook-w.png"
}
for (let i = 0; i < 9; i++) {
  const row = document.createElement("div");
  row.className = "row";
  for (let j = 0; j < 9; j++) {
    const boxes = document.createElement("div");
    boxes.className = `boxes table_borders ${((i + j) % 2 === 0) ? "white" : "black"}`;
    if (i !== 0 && j !== 0) {
      boxes.id = `${i-1}:${j-1}`;
      if (pieces.hasOwnProperty(boxes.id)) {
        const figure = document.createElement("img");
        figure.src = pieces[boxes.id];
        figure.className = "piece";
        boxes.appendChild(figure);
      } else if (i === 2 || i === 7) {
        const figure = document.createElement("img");
        figure.src = pieces[`${i}:pawn`];
        figure.className = "piece";
        boxes.appendChild(figure);
      }
    } else {
      boxes.textContent = i === 0 ? symbols[j-1] : j === 0 ? 8 - i + 1 : "";
    }
    row.appendChild(boxes);
  }
  table.appendChild(row);
}
