/* Fazer um programa que calcule o fatorial de um número. Fatorial é a multiplicação do próprio número por todos abaixo dele até 1. (Exemplo do fatorial de 5 seria: 5x4x3x2x1 = 120. Fatorial de 5 é 120) */

let numeroDigitado
let resultadoFatorial

numeroDigitado = Number(prompt('Digite o número a ser fatorado: '))

resultadoFatorial = numeroDigitado

for(i=numeroDigitado-1; i > 0; i--){

    resultadoFatorial = resultadoFatorial * i

}

alert('Resultado: ' + resultadoFatorial)