let resultado = document.getElementsByClassName("result-block")
let show = document.getElementById("result")

function Calcular(){
    let adultos = document.getElementById("adultos").value == "" ? 0 : document.getElementById("adultos").value
    let criancas = document.getElementById("criancas").value == "" ? 0 : document.getElementById("criancas").value
    let duracao = document.getElementById("duracao").value == "" ? 0 : document.getElementById("duracao").value
    
    let qntCarne = (CarnePP(duracao) * adultos + (CarnePP(duracao) / 2 * criancas))

    let qntCerveja = duracao > 5 ? adultos * 12 : adultos * 8

    let qntBebidas = duracao > 5 ? Math.ceil(adultos * 1 + criancas * 0.5) : Math.ceil(adultos * 0.5 + criancas * 0.25)
    
    resultado[0].children[1].innerHTML = `${qntCarne.toFixed(2)}Kg de Carne`
    resultado[1].children[1].innerHTML = `${qntCerveja} Latões de Ceva`
    resultado[2].children[1].innerHTML = `${qntBebidas} Garrafas de Bebida`

    show.style.display = "block"
}

function CarnePP(duracao){
    return duracao > 5 ? 0.65 : 0.45
}