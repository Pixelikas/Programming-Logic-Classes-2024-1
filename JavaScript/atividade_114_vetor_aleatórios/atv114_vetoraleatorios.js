/* Criar um programa que gere um vetor com 10 números inteiros aleatórios entre 0 e 20. Mostre o vetor na tela. (DESAFIO: O vetor não pode conter números repetidos) */

let vetorAleatorios = []
let vetorGerados = []
let numeroAleatorioGerado
let cont = 0

do{

    numeroAleatorioGerado = Math.floor(Math.random() * 21)
    vetorGerados.push(numeroAleatorioGerado)

    if(cont == 0){

        vetorAleatorios.push(numeroAleatorioGerado)
        cont++

    }
    
    if(!vetorAleatorios.includes(numeroAleatorioGerado)){

        vetorAleatorios.push(numeroAleatorioGerado)
        cont++
    }

}while(vetorAleatorios.length < 10)

alert(`Vetor dos gerados: ${vetorGerados}\nVetor de aleatórios: ${vetorAleatorios}`)