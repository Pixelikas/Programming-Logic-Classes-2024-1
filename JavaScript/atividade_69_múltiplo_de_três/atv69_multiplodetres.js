/* Desenvolver um programa que receba um número inteiro e verifique se ele é múltiplo de 3. Após digitar o número, mostrar uma das seguintes mensagens na tela “É múltiplo de 3!” ou “Não é múltiplo de 3”. */

let numeroDigitado
let divisorMultiplo = 3

numeroDigitado = Number(prompt('Digite um número inteiro: '))

if(numeroDigitado % divisorMultiplo == 0){

    alert('É múltiplo de 3!')

}else{

    alert('Não é múltiplo de 3!')

}