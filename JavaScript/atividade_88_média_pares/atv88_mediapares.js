/* Programar para que o usuário digite 5 números e caso sejam pares, mostre a média deles. Se algum número digitado não for par, ao final não será mostrada a média e sim uma mensagem “Um dos números digitados era ímpar”. */

let quantidadeNumeros = 5
let numeroDigitado
let somaNumeros = 0
let mediaPares
let temImpar = false

for(i=0; i < quantidadeNumeros; i++){

    numeroDigitado = Number(prompt('Digite um número: '))

    if(numeroDigitado % 2 == 0){

        somaNumeros += numeroDigitado

    }else{

        temImpar = true

    }

}

if(temImpar){

    alert('Um dos números digitados era ímpar! =~')

}else{

    mediaPares = somaNumeros / quantidadeNumeros
    alert('Média dos pares: ' + mediaPares)

}
