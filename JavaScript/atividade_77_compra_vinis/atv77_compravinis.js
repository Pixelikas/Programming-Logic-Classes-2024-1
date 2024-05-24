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
let mediaPreco
let maiorValor, menorValor

while(valorTotal <= dinheiroCarteira){

    nomeVinil = prompt('Nome do vinil: ')
    valorVinil = Number(prompt('Valor do vinil: '))
    
    valorTotal += valorVinil
    
    if(quantidadeVinis > 0){
        
        if(valorTotal <= dinheiroCarteira){
            
            if(valorVinil > maiorValor){
                
                maiorValor = valorVinil
                
            }
            
            if(valorVinil < menorValor){
                
                menorValor = valorVinil
                
            }
            
        }
        
    }else{
        
        maiorValor = valorVinil
        menorValor = valorVinil
        
    }
    
    quantidadeVinis++

}


valorTotal -= valorVinil
quantidadeVinis--

mediaPreco = Number((valorTotal / quantidadeVinis).toFixed(2))
valorTroco = dinheiroCarteira - valorTotal

alert(`Valor Total: R$${valorTotal}\nTroco: R$${valorTroco}\nQuantidade: ${quantidadeVinis}\nMédia de preço: R$${mediaPreco}\nMais caro: R$${maiorValor}\nMais barato: R$${menorValor}`)
