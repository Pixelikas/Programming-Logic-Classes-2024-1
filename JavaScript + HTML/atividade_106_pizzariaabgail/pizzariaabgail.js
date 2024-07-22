/* Criar um sistema utilizando HTML e JS, para a Pizzaria da Abgail. Deve conter um título, a mensagem de promoção com 15% de desconto para pedidos acima de R$50 um menu select com 4 sabores, onde um deles custa menos que R$50, outro exatamente R$50, outros dois acima de R$50. Após selecionar o sabor, ao clicar no botão de comprar, devem ser mostrados em dois inputs: o valor do pedido e o valor com desconto se for acima de R$50. */

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