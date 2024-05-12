/* Elabore um programa que leia três lados de um triângulo e mostre na tela se ele é equilátero, isósceles ou escaleno. Quando os três lados forem iguais trata-se de um triângulo equilátero, dois lados iguais é um triângulo isósceles e os três lados diferentes é um triângulo escaleno. */

let ladoUm, ladoDois, ladoTres

ladoUm = Number(prompt('Digite o tamanho do primeiro lado: '))
ladoDois = Number(prompt('Digite o tamanho do segundo lado: '))
ladoTres = Number(prompt('Digite o tamanho do terceiro lado: '))

if(ladoUm == ladoDois && ladoDois == ladoTres){

    alert('Triângulo equilátero! :D')

}else if(ladoUm != ladoDois && ladoDois != ladoTres && ladoUm != ladoTres){

    alert('Triângulo escaleno! :)')

}else{

    alert('Triângulo isósceles! :P')

}