/* Uma feira está realizando promoção na compra de ovos. Os ovos custam 40 centavos cada, se forem comprados até 12 (uma dúzia), 30 centavos cada, se forem comprados de 13 a 24 (até duas dúzias) e 25 centavos cada, caso sejam comprados mais que duas dúzias. Faça um programa que leia o número de ovos comprados, calcule e mostre na tela o valor total da compra.*/ 

let valorDuzia = 0.40, valorDuasDuzias = 0.30, valorMaisDuzias = 0.25
let quantidadeOvos
let valorPagamento

quantidadeOvos = Number(prompt('Quantidade de ovos comprados: '))

if(quantidadeOvos < 13){

    valorPagamento = Number((quantidadeOvos * valorDuzia).toFixed(2))
    alert('Valor a pagar: R$' + valorPagamento)

}else if (quantidadeOvos >= 13 && quantidadeOvos < 25){

    valorPagamento = Number((quantidadeOvos * valorDuasDuzias).toFixed(2))
    alert('Valor a pagar: R$' + valorPagamento)

}else{

    valorPagamento = Number((quantidadeOvos * valorMaisDuzias).toFixed(2))
    alert('Valor a pagar: R$' + valorPagamento)

}