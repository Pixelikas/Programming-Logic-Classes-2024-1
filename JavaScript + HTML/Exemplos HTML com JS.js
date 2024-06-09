
let elementoInputUm = document.getElementById("inptNumeroUm")
let elementoInputDois = document.getElementById("inptNumeroDois")
let somaNumeros

function AbreJanela(){

    somaNumeros = Number(elementoInputUm.value) + Number(elementoInputDois.value)

    alert('Soma: ' + somaNumeros)

}