/* Escreva um programa que leia dois vetores com 3 elementos cada e gere um terceiro vetor de 6 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores. Ao final o programa deverá mostrar os dois vetores originais e o terceiro vetor com os valores intercalados. */

let vetorUm = []
let vetorDois = []
let vetorIntercalado = []
let numeroAdd

    for(i = 0; i < 6; i++){

        numeroAdd = Number(prompt("Digite um número: "))

        if(i < 3){

            vetorUm.push(numeroAdd)

        }else{

            vetorDois.push(numeroAdd)

        }

    }

    for(j = 0; j < 3; j++){

        vetorIntercalado.push(vetorUm[j]) // Pega do vetor Um
        vetorIntercalado.push(vetorDois[j]) // Pega do vetor Dois

    }

    alert(vetorIntercalado)
