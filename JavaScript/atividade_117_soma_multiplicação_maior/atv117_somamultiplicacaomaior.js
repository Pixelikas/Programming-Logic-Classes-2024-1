/* Faça um programa que solicite ao usuário digitar 5 números e mostre a soma da multiplicação dos números pelo maior número digitado. Exemplo: pegar os 4 números digitados que não são o maior e multiplicá-los individualmente pelo maior. Mostrar a soma das multiplicações. */

let listaNumeros = []
let numeroAdd, maiorNumero, multiplicaNumero
let somaMultiplicacoes = 0
let tamanhoLista = 5

    for(i=0; i < tamanhoLista; i++){

        numeroAdd = Number(prompt("Digite um número: "))
        listaNumeros.push(numeroAdd)

        if(i > 0){

            if(numeroAdd > maiorNumero){
    
                maiorNumero = numeroAdd
    
            }

        }else{

            maiorNumero = numeroAdd
            
        }

    }

    for(i=0; i < listaNumeros.length; i++){

        if(listaNumeros[i] != maiorNumero){

            multiplicaNumero = listaNumeros[i] * maiorNumero
            somaMultiplicacoes = somaMultiplicacoes + multiplicaNumero

        }

    }

alert(`Lista: ${listaNumeros}\nMaior número: ${maiorNumero}\nSoma da multiplicações: ${somaMultiplicacoes}`)
