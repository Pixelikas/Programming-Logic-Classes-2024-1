/* Criar uma mini-calculadora SIMPLES, com HTML e JS.
A calculadora deve ter:

-> Título, duas labels, dois inputs e quatro botões.
-> Utilizar os 2 valores dos inputs para realizar a operação do botão clicado.
-> Mostra o resultado em um alert. */

let elementoInputUm = document.getElementById("inptNumeroUm")
let elementoInputDois = document.getElementById("inptNumeroDois")
let somaNumeros, subtraiNumeros, multiplicaNumeros, divideNumeros

function Somar(){

    somaNumeros = Number(elementoInputUm.value) + Number(elementoInputDois.value)
    alert(somaNumeros)

}

function Subtrair(){

    subtraiNumeros = Number(elementoInputUm.value) - Number(elementoInputDois.value)
    alert(subtraiNumeros)

}

function Multiplicar(){

    multiplicaNumeros = Number(elementoInputUm.value) * Number(elementoInputDois.value)
    alert(multiplicaNumeros)

}

function Dividir(){

    divideNumeros = Number(elementoInputUm.value) / Number(elementoInputDois.value)
    alert(divideNumeros)

}

function LimparDados(){

    elementoInputUm.value = ''
    elementoInputDois.value = ''

}