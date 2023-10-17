const alp = ["A", "B", "C", "D", "E", "F", "G", "H"]

const createDashboard = () => {
    const dashboard = document.createElement('div')
    dashboard.id = "dashboard"
    dashboard.style.display = "flex"
    document.body.appendChild(dashboard)

    let index = 9

    for (let i = 0; i < 9; i++) {
        const column = document.createElement('div')
        column.id = `column_${i}`
        column.style.width = "auto"
        const check = i % 2 == 0
        document.getElementById("dashboard").appendChild(column)
        for (let j = 0; j < 10; j++) {
            const block = document.createElement(`div`)
        
            if(i == 0){
                if(j < 8){
                    block.innerText = j + 1
                }

                block.style.textAlign = "right"
                block.id = `block_index_${index}`
                block.style.width = "41px"
                block.style.height = "41px"
            }

            if(j > 0 && i != 0){
              const color = check ? j % 2 == 0 ? "white" : "gray" : j % 2 == 1 ? "white" : "gray"    
              block.id = `block_${i}_${j}`
              block.className = "block"
              block.style.backgroundColor = color
   
              block.style.width = "40px"
              block.style.height = "40px"
              if(j == 9){
                block.innerHTML = alp[i-1]
                block.id = `block_${i}_${j}`
                block.className = "none"
                block.style.backgroundColor = "white"
              }
            }
            document.getElementById(`column_${i}`).appendChild(block)
        }
    }
}

const setChess = () => {
    for (let i = 1; i < 9; i++) {
      const img_w = document.createElement('img')
      img_w.src = './img/pawn-w.png'
      document.getElementById(`block_${i}_2`).appendChild(img_w)

      const img_b = document.createElement('img')
      img_b.src = './img/pawn-b.png'
      document.getElementById(`block_${i}_7`).appendChild(img_b)
    }   

    const img_rook_w_l = document.createElement('img')
    img_rook_w_l.src = './img/rook-w.png'
    document.getElementById(`block_1_1`).appendChild(img_rook_w_l)

    const img_rook_w_r = document.createElement('img')
    img_rook_w_r.src = './img/rook-w.png'
    document.getElementById(`block_8_1`).appendChild(img_rook_w_r)


    const img_rook_b_l = document.createElement('img')
    img_rook_b_l.src = './img/rook-b.png'
    document.getElementById(`block_1_8`).appendChild(img_rook_b_l)

    const img_rook_b_r = document.createElement('img')
    img_rook_b_r.src = './img/rook-b.png'
    document.getElementById(`block_8_8`).appendChild(img_rook_b_r)


    const img_knight_w_l = document.createElement('img')
    img_knight_w_l.src = './img/knight-w.png'
    document.getElementById(`block_7_1`).appendChild(img_knight_w_l)

    const img_knight_w_r = document.createElement('img')
    img_knight_w_r.src = './img/knight-w.png'
    document.getElementById(`block_2_1`).appendChild(img_knight_w_r)

    const img_knight_b_l = document.createElement('img')
    img_knight_b_l.src = './img/knight-b.png'
    document.getElementById(`block_7_8`).appendChild(img_knight_b_l)

    const img_knight_b_r = document.createElement('img')
    img_knight_b_r.src = './img/knight-b.png'
    document.getElementById(`block_2_8`).appendChild(img_knight_b_r)


    const img_bishop_w_l = document.createElement('img')
    img_bishop_w_l.src = './img/bishop-w.png'
    document.getElementById(`block_6_1`).appendChild(img_bishop_w_l)

    const img_bishop_w_r = document.createElement('img')
    img_bishop_w_r.src = './img/bishop-w.png'
    document.getElementById(`block_3_1`).appendChild(img_bishop_w_r)


    const img_bishop_b_l = document.createElement('img')
    img_bishop_b_l.src = './img/bishop-b.png'
    document.getElementById(`block_6_8`).appendChild(img_bishop_b_l)

    const img_bishop_b_r = document.createElement('img')
    img_bishop_b_r.src = './img/bishop-b.png'
    document.getElementById(`block_3_8`).appendChild(img_bishop_b_r)


    const img_king_w = document.createElement('img')
    img_king_w.src = './img/king-w.png'
    document.getElementById(`block_4_1`).appendChild(img_king_w)

    const img_king_b = document.createElement('img')
    img_king_b.src = './img/king-b.png'
    document.getElementById(`block_4_8`).appendChild(img_king_b)


    const img_queen_w = document.createElement('img')
    img_queen_w.src = './img/queen-w.png'
    document.getElementById(`block_5_1`).appendChild(img_queen_w)

    const img_queen_b = document.createElement('img')
    img_queen_b.src = './img/queen-b.png'
    document.getElementById(`block_5_8`).appendChild(img_queen_b)



}

createDashboard()   

setChess()