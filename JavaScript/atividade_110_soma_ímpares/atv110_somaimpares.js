/* Cria um programa onde o usuário digite 5 números inteiros. Ao terminar de digitar os números, mostrar uma lista somente com números ímpares digitados e a soma desses números. */

let numeroDigitado
let somaImpares = 0
let listaImpares = []
let tamanhoVetor = 5

for(i=0; i < tamanhoVetor; i++){

    numeroDigitado = Number(prompt('Digite um número: '))

    if(numeroDigitado % 2 != 0){

        somaImpares += numeroDigitado
        listaImpares.push(numeroDigitado)

    }

}

alert(`Soma dos ímpares: ${somaImpares}\nLista dos ímpares: ${listaImpares}`)