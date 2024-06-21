/*  Desenvolva um programa que o usuário digite 10 números positivos e inteiros, ao final mostre o valor do resultado do somatório da primeira metade dos números menos o somatório da segunda metade. (Somatório da primeira metade - Somatório da segunda metade) */

let vetorNumeros = []
let primeiraMetade = []
let segundaMetade = []
let addNumero, tamanhoVetor = 10
let somaPrimeira = 0, somaSegunda = 0

    for(i=0; i < tamanhoVetor; i++){

        addNumero = Number(prompt("Digite um número: "))
        vetorNumeros.push(addNumero)

        if(i < tamanhoVetor/2){

            primeiraMetade.push(addNumero)
            somaPrimeira += addNumero

        }else{

            segundaMetade.push(addNumero)
            somaSegunda += addNumero

        }

    }

    alert(`Vetor: ${vetorNumeros}\nPrimeira metade: ${primeiraMetade}\nSegunda metade: ${segundaMetade}.\nA subtração das metades é: ${somaPrimeira - somaSegunda}`)
