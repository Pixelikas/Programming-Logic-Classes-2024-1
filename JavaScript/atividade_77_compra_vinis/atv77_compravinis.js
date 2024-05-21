/* Você é um colecionador de vinis e resolveu ir ao sebo para comprar alguns vinis raros. Porém, você tem apenas R$200 para gastar. Faça um programa que pergunte o nome do vinil e o valor, repetidamente. Caso o valor ultrapasse R$200, encerrar (desconsiderando o último vinil). Mostrar na tela:
a) O total gasto em reais dos vinis.
b) O valor que sobrou em dinheiro.
c) Quantos vinis foram comprados.
d) A média de preço dos vinis.
e) O vinil mais caro e o mais barato. */

let dinheiroCarteira = 200
let nomeVinil, valorVinil
let valorTotal = 0
let valorTroco
let quantidadeVinis = 0
let mediaPrecoVinis
let maiorVinil, menorVinil
let contador = 0

while (valorTotal <= 200){

    nomeVinil = prompt('Digite o nome do vinil: ')
    valorVinil = Number(prompt('Digite o valor do vinil (R$): '))

    if(contador == 0){

        maiorVinil = valorVinil
        menorVinil = valorVinil
        contador++

    }else if(valorVinil > maiorVinil){

        maiorVinil = valorVinil

    }else if(valorVinil < menorVinil){

        menorVinil = valorVinil

    } 

    valorTotal += valorVinil
    quantidadeVinis++

}

quantidadeVinis--
valorTotal = valorTotal - valorVinil
valorTroco = dinheiroCarteira - valorTotal
mediaPrecoVinis = valorTotal / quantidadeVinis

alert(`Valor Total: R$${valorTotal}\nTroco: R$${valorTroco}\nQuantidade de vinis: ${quantidadeVinis}\nMédia de preço: ${mediaPrecoVinis}\nVinil com maior preço: R$${maiorVinil}\nVinil com menor preço: R$${menorVinil}.`)