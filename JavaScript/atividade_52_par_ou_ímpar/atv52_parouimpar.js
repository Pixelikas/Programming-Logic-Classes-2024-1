/* Verificador de número par ou ímpar: Faça um programa que peça ao usuário para inserir um número e determine se é par ou ímpar. */

let numeroDigitado

numeroDigitado = Number(prompt('Digite um número: '))

if(numeroDigitado % 2 == 0){

    alert('É par! :D')

}else{

    alert('É ímpar! :}')

}