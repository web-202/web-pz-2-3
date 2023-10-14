const bth_create_board = document.getElementById('btn-create-board')
const alphabet = ["", "A", "B", "C", "D", "E", "F", "G", "H"]

bth_create_board.addEventListener('click', () => {
    createDesk()
})


const createDesk = () => {
    board()
    let index = 9  

    for (let i = 0; i < 8; i++) {
        index--;
        row(i)
        const check = i % 2 == 0
        for (let j = 0; j < 9; j++) {      
            if(j != 0){
                const color = check ? j % 2 == 0 ? "white" : "gray" : j % 2 == 1 ? "white" : "gray"
                quadrate(color, i, j)
            }

            if(j == 0){
               createNumRows(index, i)
            }
        }
    }

    row(`alhabet`)
    for (let i = 0; i < alphabet.length; i++) {      
        createAlphabet(i)
    }

    setChess()
    
    bth_create_board.style.display = "none"
}


const createNumRows = (index, row_id) => {
     let rowNum = document.createElement("div")
     rowNum.innerText = index
     rowNum.id = `row_num_${index}`
     rowNum.style.width = "40px"
     rowNum.style.height = "40px"
     rowNum.style.textAlign = "right"
     document.getElementById(`row_${row_id}`).appendChild(rowNum)
}


const createAlphabet = (index) => {
    let rowAlphabet = document.createElement('div')
    rowAlphabet.innerText = alphabet[index]
    rowAlphabet.id = alphabet[index]
    rowAlphabet.style.width = "40px"
    rowAlphabet.style.height = "40px"
    document.getElementById(`row_alhabet`).appendChild(rowAlphabet)
} 

const board = () => {
    let board = document.createElement('div')
    board.style.width = "max-content"
    board.style.height = "max-content"
    board.id = 'board'
    board.style.margin = "auto"
    board.style.display = "block"

    document.body.appendChild(board);
}

const quadrate = (color, id, id_quadrat) => {
    let block = document.createElement('div')
    block.id = `quadrate_${id}_${id_quadrat}`
    block.style.width = "38px"
    block.style.height = "38px"
    block.style.backgroundColor = color
    block.style.border = "1px solid gray"    
    document.getElementById(`row_${id}`).appendChild(block);
} 

const row = (id, border) => {
    let row = document.createElement('div')
    row.id = `row_${id}`
    row.style.display = 'flex'
    row.style.width = "max-content"
    row.style.height = "max-content"
    row.style.margin = "0"
    row.style.padding = "0"

    if(border){
        row.style.border = "1px solid black"
    }
    document.getElementById('board').appendChild(row);
}



const setChess = () => {
    const id_white_row = 1
    const id_black_row = 6
    
    for (let i = 1; i < 9; i++) {
        let img_pawn_b = document.createElement('img')
        img_pawn_b.src = './task_3/img/pawn-b.png'
        img_pawn_b.style.width = "38px"
        img_pawn_b.style.height = "38px"
        document.getElementById(`quadrate_${id_white_row}_${i}`).appendChild(img_pawn_b)
       

        let img_pawn_w = document.createElement('img')
        img_pawn_w.src = './task_3/img/pawn-w.png'
        img_pawn_w.style.width = "38px"
        img_pawn_w.style.height = "38px"
        document.getElementById(`quadrate_${id_black_row}_${i}`).appendChild(img_pawn_w)
    }


    let img_rook_b_l = document.createElement('img')
    img_rook_b_l.src = './task_3/img/rook-b.png'
    img_rook_b_l.style.width = "38px"
    img_rook_b_l.style.height = "38px"
    document.getElementById(`quadrate_0_1`).appendChild(img_rook_b_l)       
    
    
    let img_rook_b_r = document.createElement('img')  
    img_rook_b_r.src = './task_3/img/rook-b.png'
    img_rook_b_r.style.width = "38px"
    img_rook_b_r.style.height = "38px"
    document.getElementById(`quadrate_0_8`).appendChild(img_rook_b_r)         


    let img_rook_w_l = document.createElement('img')  
    img_rook_w_l.src = './task_3/img/rook-w.png'
    img_rook_w_l.style.width = "38px"
    img_rook_w_l.style.height = "38px"
    document.getElementById(`quadrate_7_1`).appendChild(img_rook_w_l)         
    

    let img_rook_w_r = document.createElement('img')  
    img_rook_w_r.src = './task_3/img/rook-w.png'
    img_rook_w_r.style.width = "38px"
    img_rook_w_r.style.height = "38px"
    document.getElementById(`quadrate_7_8`).appendChild(img_rook_w_r)         


    let img_knight_w_r = document.createElement('img')  
    img_knight_w_r.src = './task_3/img/knight-w.png'    
    img_knight_w_r.style.width = "38px"
    img_knight_w_r.style.height = "38px"
    document.getElementById(`quadrate_7_7`).appendChild(img_knight_w_r)     
    
    
    let img_knight_b_r = document.createElement('img')  
    img_knight_b_r.src = './task_3/img/knight-b.png'    
    img_knight_b_r.style.width = "38px"
    img_knight_b_r.style.height = "38px"
    document.getElementById(`quadrate_0_7`).appendChild(img_knight_b_r)         


    let img_knight_w_l = document.createElement('img')  
    img_knight_w_l.src = './task_3/img/knight-w.png'    
    img_knight_w_l.style.width = "38px"
    img_knight_w_l.style.height = "38px"
    document.getElementById(`quadrate_7_2`).appendChild(img_knight_w_l)     
    
    
    let img_knight_b_l = document.createElement('img')  
    img_knight_b_l.src = './task_3/img/knight-b.png'    
    img_knight_b_l.style.width = "38px"
    img_knight_b_l.style.height = "38px"
    document.getElementById(`quadrate_0_2`).appendChild(img_knight_b_l)      
    
    
    let img_bishop_b_l = document.createElement('img')  
    img_bishop_b_l.src = './task_3/img/bishop-b.png'    
    img_bishop_b_l.style.width = "38px"
    img_bishop_b_l.style.height = "38px"
    document.getElementById(`quadrate_0_3`).appendChild(img_bishop_b_l)     


    let img_bishop_b_r = document.createElement('img')  
    img_bishop_b_r.src = './task_3/img/bishop-b.png'    
    img_bishop_b_r.style.width = "38px"
    img_bishop_b_r.style.height = "38px"
    document.getElementById(`quadrate_0_6`).appendChild(img_bishop_b_r)         


    let img_bishop_w_l = document.createElement('img')  
    img_bishop_w_l.src = './task_3/img/bishop-w.png'    
    img_bishop_w_l.style.width = "38px"
    img_bishop_w_l.style.height = "38px"
    document.getElementById(`quadrate_7_3`).appendChild(img_bishop_w_l)     


    let img_bishop_w_r = document.createElement('img')  
    img_bishop_w_r.src = './task_3/img/bishop-w.png'    
    img_bishop_w_r.style.width = "38px"
    img_bishop_w_r.style.height = "38px"
    document.getElementById(`quadrate_7_6`).appendChild(img_bishop_w_r)         


    let img_queen_w_r = document.createElement('img')  
    img_queen_w_r.src = './task_3/img/queen-w.png'    
    img_queen_w_r.style.width = "38px"
    img_queen_w_r.style.height = "38px"
    document.getElementById(`quadrate_7_5`).appendChild(img_queen_w_r)         


    let img_queen_b_r = document.createElement('img')  
    img_queen_b_r.src = './task_3/img/queen-b.png'    
    img_queen_b_r.style.width = "38px"
    img_queen_b_r.style.height = "38px"
    document.getElementById(`quadrate_0_5`).appendChild(img_queen_b_r)         


    let img_king_w = document.createElement('img')  
    img_king_w.src = './task_3/img/king-w.png'    
    img_king_w.style.width = "38px"
    img_king_w.style.height = "38px"
    document.getElementById(`quadrate_7_4`).appendChild(img_king_w)         


    let img_king_b = document.createElement('img')  
    img_king_b.src = './task_3/img/king-b.png'    
    img_king_b.style.width = "38px"
    img_king_b.style.height = "38px"
    document.getElementById(`quadrate_0_4`).appendChild(img_king_b)         
}
