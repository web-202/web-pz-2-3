const chessboard = document.getElementById("chessboard");

function createChessboardWithImages() {
    const imageFiles = [
        "a1.jpg", "b1.jpg", "c1.jpg", "d1.jpg", "e1.jpg", "f1.jpg", "g1.jpg", "h1.jpg",
        "a2.jpg", "b2.jpg", "a2.jpg", "b2.jpg", "a2.jpg", "b2.jpg", "a2.jpg", "b2.jpg", 
        "a3.jpg", "a4.jpg", "a3.jpg", "a4.jpg", "a3.jpg", "a4.jpg", "a3.jpg", "a4.jpg",
        "a4.jpg", "a3.jpg", "a4.jpg", "a3.jpg", "a4.jpg", "a3.jpg", "a4.jpg", "a3.jpg",
        "a3.jpg", "a4.jpg", "a3.jpg", "a4.jpg", "a3.jpg", "a4.jpg", "a3.jpg", "a4.jpg",
        "a4.jpg", "a3.jpg", "a4.jpg", "a3.jpg", "a4.jpg", "a3.jpg", "a4.jpg", "a3.jpg",
        "a7.jpg", "b7.jpg", "a7.jpg", "b7.jpg", "a7.jpg", "b7.jpg", "a7.jpg", "b7.jpg",
        "a8.jpg", "b8.jpg", "c8.jpg", "d8.jpg", "e8.jpg", "f8.jpg", "g8.jpg", "h8.jpg",
    ];

    let imageIndex = 0;

    for (let i = 8; i >= 1; i--) {
        for (let j = 'A'; j <= 'H'; j = String.fromCharCode(j.charCodeAt(0) + 1)) {
            const square = document.createElement("div");
            square.className = "square";
            const image = document.createElement("img");
            image.src = `img/${imageFiles[imageIndex]}`;
            image.width = "52";
            image.height = "52"; 
            square.appendChild(image);
            chessboard.appendChild(square);
            imageIndex++;
        }
    }
}

createChessboardWithImages();
