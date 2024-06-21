/* Escreva um programa que leia dois vetores com 3 elementos cada e gere um terceiro vetor de 6 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores. Ao final o programa deverá mostrar os dois vetores originais e o terceiro vetor com os valores intercalados.*/

let vetorUm = []
let vetorDois = []
let vetorIntercalado = []
let numeroAdd
let tamanhoVetores = 3

for(i=0; i < tamanhoVetores; i++){

    numeroAdd = Number(prompt('Digite um número para o vetor 1: '))
    vetorUm.push(numeroAdd)
    
}

for(i=0; i < tamanhoVetores; i++){

    numeroAdd = Number(prompt('Digite um número par ao vetor 2: '))
    vetorDois.push(numeroAdd)
    
}

for(i=0; i < tamanhoVetores; i++){

    vetorIntercalado.push(vetorUm[i])
    vetorIntercalado.push(vetorDois[i])
    
}

alert(`Vetor Um: ${vetorUm}\nVetor Dois: ${vetorDois}\nVetor Intercalado: ${vetorIntercalado}`)