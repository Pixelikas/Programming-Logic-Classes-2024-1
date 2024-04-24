/* Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela, com 3 casas depois da vírgula. */ 

let pesoPessoa, alturaPessoa, imcPessoa

pesoPessoa = Number(prompt("Digite o seu peso :"))
alturaPessoa = Number(prompt("Digite a sua altura :"))

imcPessoa = Number((pesoPessoa / (alturaPessoa * alturaPessoa)).toFixed(2))

alert("IMC: " + imcPessoa)