/* Simulador de trânsito: Crie um programa que pergunte a idade do usuário e, se ele tiver idade suficiente para dirigir (por exemplo, 18 anos), exiba "Você pode dirigir"; caso contrário, exiba "Você ainda não pode dirigir". */

let idadePessoa
let idadePermitida = 18

idadePessoa = Number(prompt('Digite a sua idade: '))

if(idadePessoa >= idadePermitida){

    alert('Você pode dirigir! :D')

}else{

    alert('Você NÃO pode dirigir! :D')

}