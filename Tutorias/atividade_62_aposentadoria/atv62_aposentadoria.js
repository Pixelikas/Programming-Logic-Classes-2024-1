/* Elabore um programa que leia a idade e o tempo de serviço de um trabalhador e escreva se ele pode ou nao se aposentar. As condições para aposentadoria são:

a) Ter pelo menos 65 anos.
b) Ter trabalhado pelo menos 30 anos.
c) Ter pelo menos 60 anos e ter trabalhado pelo menos 25 anos */

let idadePessoa, tempoServicoPessoa

idadePessoa = Number(prompt('Digite a sua idade: '))
tempoServicoPessoa = Number(prompt('Digite o tempo de serviço: '))

if(idadePessoa >= 65){

    alert('Pode se aposentar!')

}else if(tempoServicoPessoa >= 30){

    alert('Pode se aposentar!')

}else if(idadePessoa >= 60 && tempoServicoPessoa >= 25){

    alert('Pode se aposentar!')

}else{

    alert('NÃO pode se aposentar!')

}