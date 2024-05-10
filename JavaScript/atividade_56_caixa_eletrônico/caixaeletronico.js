/* Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo de operação a ser realizada: 1) Saldo 2) Depósito 3) Saque. Nas opções de depósito e saque, perguntar o valor a ser depositado ou sacado e mostrar o saldo atualizado na tela. Na opção saldo, apenas mostrar o saldo atual na tela. Considere que um saque só pode ser realizado caso haja saldo suficiente. Criar uma variável com um valor que represente o saldo inicial. */

let contaBancaria
let saldoBancario = 10
let operacaoDesejada
let valorDeposito, valorSaque

contaBancaria = prompt('Digite a sua conta bancária (xxxx-x): ')
operacaoDesejada = Number(prompt('1) Saldo\n2) Depósito\n3) Saque\n\nOperação: '))

switch(operacaoDesejada){

    case 1:
        alert('Seu saldo: R$' + saldoBancario)
        break

    case 2:
        valorDeposito = Number(prompt('Qual o valor do depósito? (R$): '))
        saldoBancario = saldoBancario + valorDeposito
        alert('Seu saldo: R$' + saldoBancario)
        break

    case 3:
        valorSaque = Number(prompt('Qual o valor do saque? (R$): '))

        if(valorSaque <= saldoBancario){

            saldoBancario = saldoBancario - valorSaque
            alert('Seu saldo: R$' + saldoBancario)
            
        }else{

            alert('Tá sem grana miserávellllll!')

        }

        break

    default:
        alert('Você não digitou uma opção válida!')

}
