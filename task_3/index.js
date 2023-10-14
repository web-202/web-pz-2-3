const table = document.querySelector(".table");

let symbols = ["A", "B", "C", "D", "E", "F", "G", "H"];

for (let i = 0; i < 9; i++) {
    const row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < 9; j++) {
        const fell = document.createElement("div");
        fell.className = "fell table_borders";
        if (i !== 0 && j !== 0) {
            fell.id = `${i - 1}:${j - 1}`;
            if ((i + j) % 2 === 0) {
                fell.className += " white";
            } else {
                fell.className += " black";
            }
            const figure = document.createElement("img");
            if (i === 2) {
                figure.src = "./img/pawn-b.png";
            }
            if (i === 7) {
                figure.src = "./img/pawn-w.png";
            }
            switch (fell.id) {
                case "0:0":
                case "0:7":
                    figure.src = "./img/rook-b.png";
                    break;
                case "0:1":
                case "0:6":
                    figure.src = "./img/knight-b.png";
                    break;
                case "0:2":
                case "0:5":
                    figure.src = "./img/bishop-b.png";
                    break;
                case "0:3":
                    figure.src = "./img/queen-b.png";
                    break;
                case "0:4":
                    figure.src = "./img/king-b.png";
                    break;
                case "7:0":
                case "7:7":
                    figure.src = "./img/rook-w.png";
                    break;
                case "7:1":
                case "7:6":
                    figure.src = "./img/knight-w.png";
                    break;
                case "7:2":
                case "7:5":
                    figure.src = "./img/bishop-w.png";
                    break;
                case "7:3":
                    figure.src = "./img/king-w.png";
                    break;
                case "7:4":
                    figure.src = "./img/queen-w.png";
                    break;
            }
            figure.className = "piece";
            fell.appendChild(figure);
        } else {
            fell.textContent = i === 0 ? symbols[j - 1] : j === 0 ? 8 - i : "";
        }
        row.appendChild(fell);
    }
    table.appendChild(row);
}
