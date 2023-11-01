const table = document.createElement("table");
table.className = "board";

let letsArr = ["A", "B", "C", "D", "E", "F", "G", "H"]

for (let i = 1; i < 11; i++) {
    let tr = document.createElement('tr');
    for (let j = 1; j < 11; j++) {

        let td = document.createElement('td');

        if ((i === 1 || i === 10)) {
            if (j !== 1 && j !== 10) {
                td.textContent = letsArr[j - 2]

            }
        } else if (j === 1 || j === 10) {
            if (i !== 1 && i !== 10) {
                td.textContent = i - 1
            }
        } else {
            td.id = `${i - 1}-${j - 1}`
            td.className = (i % 2 === j % 2) ? "w cell" : "b cell";
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

document.querySelector("div").appendChild(table);

for (let i = 0; i < 8; i++) {
    let figure = document.createElement("img")
    figure.src = "images/pawn-b.svg"
    figure.width = 48
    figure.height = 48
    let td = document.getElementById(`2-${i + 1}`)
    td.append(figure)
}

for (let i = 0; i < 8; i++) {
    let figure = document.createElement("img")
    figure.src = "images/pawn-w.svg"
    figure.width = 48
    figure.height = 48
    let td = document.getElementById(`7-${i + 1}`)
    td.append(figure)
}

let rook1 = document.createElement("img");
rook1.src = "images/rook-b.svg";
rook1.width = 48;
rook1.height = 48;
let td1 = document.getElementById("1-1");
td1.append(rook1);

let rook2 = document.createElement("img");
rook2.src = "images/rook-b.svg";
rook2.width = 48;
rook2.height = 48;
let td2 = document.getElementById("1-8");
td2.append(rook2);

let rook3 = document.createElement("img");
rook3.src = "images/rook-w.svg";
rook3.width = 48;
rook3.height = 48;
let td3 = document.getElementById("8-1");
td3.append(rook3);

let rook4 = document.createElement("img");
rook4.src = "images/rook-w.svg";
rook4.width = 48;
rook4.height = 48;
let td4 = document.getElementById("8-8");
td4.append(rook4);

let knight1 = document.createElement("img");
knight1.src = "images/knight-b.svg";
knight1.width = 48;
knight1.height = 48;
let td5 = document.getElementById("1-2");
td5.append(knight1);

let knight2 = document.createElement("img");
knight2.src = "images/knight-b.svg";
knight2.width = 48;
knight2.height = 48;
let td6 = document.getElementById("1-7");
td6.append(knight2);

let knight3 = document.createElement("img");
knight3.src = "images/knight-w.svg";
knight3.width = 48;
knight3.height = 48;
let td7 = document.getElementById("8-2");
td7.append(knight3);

let knight4 = document.createElement("img");
knight4.src = "images/knight-w.svg";
knight4.width = 48;
knight4.height = 48;
let td8 = document.getElementById("8-7");
td8.append(knight4);

let bishop1 = document.createElement("img");
bishop1.src = "images/bishop-b.svg";
bishop1.width = 48;
bishop1.height = 48;
let td9 = document.getElementById("1-3");
td9.append(bishop1);

let bishop2 = document.createElement("img");
bishop2.src = "images/bishop-b.svg";
bishop2.width = 48;
bishop2.height = 48;
let td10 = document.getElementById("1-6");
td10.append(bishop2);

let bishop3 = document.createElement("img");
bishop3.src = "images/bishop-w.svg";
bishop3.width = 48;
bishop3.height = 48;
let td11 = document.getElementById("8-3");
td11.append(bishop3);

let bishop4 = document.createElement("img");
bishop4.src = "images/bishop-w.svg";
bishop4.width = 48;
bishop4.height = 48;
let td12 = document.getElementById("8-6");
td12.append(bishop4);

let queen1 = document.createElement("img");
queen1.src = "images/queen-b.svg";
queen1.width = 48;
queen1.height = 48;
let td13 = document.getElementById("1-4");
td13.append(queen1);

let queen2 = document.createElement("img");
queen2.src = "images/queen-w.svg";
queen2.width = 48;
queen2.height = 48;
let td14 = document.getElementById("8-4");
td14.append(queen2);

let king1 = document.createElement("img");
king1.src = "images/king-b.svg";
king1.width = 48;
king1.height = 48;
let td15 = document.getElementById("1-5");
td15.append(king1);

let king2 = document.createElement("img");
king2.src = "images/king-w.svg";
king2.width = 48;
king2.height = 48;
let td16 = document.getElementById("8-5");
td16.append(king2);

