/* Faça um programa que leia um valor inteiro e mostre na tela a tabuada de 1 a 10 do valor lido. */

let numeroDigitado
let tabuadaFinal = ''

numeroDigitado = Number(prompt('Digite um número e veja a sua tabuada: '))

for(i=1; i <= 10; i++){

    tabuadaFinal += `${numeroDigitado} x ${i} = ${numeroDigitado * i}\n`

}

alert(`>>>> Tabuada de ${numeroDigitado} <<<<\n\n${tabuadaFinal}`)
