document.addEventListener('DOMContentLoaded', () =>{
    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.addEventListener('click', HandleClick)
    })
})

async function HandleClick(event){
    let gameOver = HandelMove(event.target.id)
    await UpdateSquares()

    if (gameOver)
        setTimeout(() => {
            ShowWinner()
        }, 10)
}

function UpdateSquares(){
    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        let position = square.id
        let symbol = board[position]

        if (symbol != '')
            square.innerHTML = `<div class="${symbol}"></div>`
    })
}

function ShowWinner() {
    alert(`O jogador "${symbols[playerTime]}" ganhou!`)
}

let restart = document.getElementById("restart")

restart.addEventListener("click", function() {
    location.reload()
})