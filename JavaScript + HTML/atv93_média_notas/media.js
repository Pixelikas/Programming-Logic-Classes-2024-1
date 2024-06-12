
let elementoInputNotaUm = document.getElementById("inptUm")
let elementoInputNotaDois = document.getElementById("inptDois")
let elementoInputNotaTres = document.getElementById("inptTres")
let mediaNotas

function CalculaMedia(){

    mediaNotas = ((Number(elementoInputNotaUm.value) + Number(elementoInputNotaDois.value) + Number(elementoInputNotaTres.value)) / 3).toFixed(2)

    alert(`Média Notas: ${mediaNotas}`)

}