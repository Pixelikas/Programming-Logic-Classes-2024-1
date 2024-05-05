/* Verificador de idade para desconto no cinema: Escreva um programa que pergunte a idade do usuário e, se ele tiver menos de 12 anos, conceda um desconto de 50% no ingresso do cinema; se ele tiver entre 12 e 18 anos, conceda um desconto de 25%; caso contrário, não conceda nenhum desconto. */

let idadePessoa

idadePessoa = Number(prompt('Digite a sua idade: '))

if(idadePessoa < 12){

    alert('Desconto de 50%')

}else if(idadePessoa >= 12 && idadePessoa < 18){

    alert('Desconto de 25%')

}else if(idadePessoa >= 18){

    alert('Sem desconto')

}