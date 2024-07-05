/* 1) Faça um programa em que o usuário digite o nome de 5 produtos e seus preços (“Digite o produto” / “Digite o seu preço”) e armazene esses nomes e preços em dois vetores separados. O programa deve calcular e mostrar:

a) A quantidade de produtos com preço inferior a R$50;
b) O nome dos produtos com preço entre R$50 e R$100;
c) A média dos preços dos produtos com preço superior a R$100.*/

let nomeProduto = []
let precoProduto = []
let addNome, addPreco
let quantidadeMenorCinquenta = 0
let nomesEntreCinquentaCem = []
let somaPrecos = 0, quantidadeMaiorCem = 0, mediaPrecos
let quantidadeProdutos = 5, faixaPrecoBaixa = 50, faixaPrecoAlta = 100

    for(i=0; i < quantidadeProdutos; i++){

        addNome = prompt(`Nome do produto ${i+1}: ` )
        nomeProduto.push(addNome)
        
        addPreco = Number(prompt(`Preco do produto ${i+1}: ` ))
        precoProduto.push(addPreco)

        if(addPreco < faixaPrecoBaixa){

            quantidadeMenorCinquenta++

        }

        if(addPreco >= faixaPrecoBaixa && addPreco <= faixaPrecoAlta){

            nomesEntreCinquentaCem.push(addNome)

        }

        if(addPreco > faixaPrecoAlta){

            somaPrecos += addPreco
   	    
            quantidadeMaiorCem++

        }

    }

mediaPrecos = (somaPrecos / quantidadeMaiorCem).toFixed(2)

alert(`Quantidade dos produtos inferiores a R$50: ${quantidadeMenorCinquenta}\nNomes dos produtos entre R$50 e R$100: ${nomesEntreCinquentaCem}\nMédia dos produtos superiores a R$100: ${mediaPrecos}`)