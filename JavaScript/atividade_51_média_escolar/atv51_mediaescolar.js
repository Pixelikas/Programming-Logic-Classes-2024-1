/* Calculadora de média escolar: Faça um programa que solicite ao usuário as notas de três provas e, em seguida, calcule e exiba a média. Se a média for maior ou igual a 7, exiba "Aprovado"; senão, exiba "Reprovado" */

let notaUm, notaDois, notaTres
let somaNotas, mediaFinal
let quantidadeNotas = 3
let mediaAprovado = 7

notaUm = Number(prompt('Digite a primeira nota: '))
notaDois = Number(prompt('Digite a segunda nota: '))
notaTres = Number(prompt('Digite a terceira nota: '))

somaNotas = notaUm + notaDois + notaTres
mediaFinal = Number((somaNotas / quantidadeNotas).toFixed(2))

alert('Média Final: ' + mediaFinal)

if(mediaFinal >= mediaAprovado){

    alert('Aprovado! :D')

}else{

    alert('Reprovado! :(')

}