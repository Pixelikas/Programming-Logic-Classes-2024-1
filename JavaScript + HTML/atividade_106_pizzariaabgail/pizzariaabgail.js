
elementoSelect = document.getElementById('slct')
elementoInputValor = document.getElementById('inptValor')
elementoInputValorFinal = document.getElementById('inptValorFinal')

let percentualDesconto = 15
let limiteDesconto = 50
let valorPizza
let valorDesconto
let valorFinal

function CalculaValor(){
    
    valorPizza = Number(elementoSelect.value)

    if(valorPizza > limiteDesconto){

        valorDesconto = (valorPizza * percentualDesconto) / 100
        valorFinal = valorPizza - valorDesconto
        elementoInputValor.value = `R$${valorPizza}`
        elementoInputValorFinal.value = `R$${valorFinal}`

    }else{

        elementoInputValor.value = `R$${valorPizza}`
        elementoInputValorFinal.value = `R$${valorPizza}`

    }

}