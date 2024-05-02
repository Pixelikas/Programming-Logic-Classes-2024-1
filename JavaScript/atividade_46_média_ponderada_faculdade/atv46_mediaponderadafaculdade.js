/* Criar um programa que realize o cálculo de uma média da faculdade. A média é composta por três notas: Atividade Individual (peso 1), Seminário em Equipe (peso 1), Projeto final (peso 3). O usuário deve digitar as três notas e a média deve ser mostrada na tela. */

let notaUm, notaDois, notaTres
let pesoUm = 1, pesoDois = 1, pesoTres = 3
let somaNotasPesos, somaPesos, mediaFinal

notaUm = Number(prompt('Digite a primeira nota: '))
notaDois = Number(prompt('Digite a segunda nota: '))
notaTres = Number(prompt('Digite a terceira nota: '))

somaNotasPesos = (notaUm * pesoUm) + (notaDois * pesoDois) + (notaTres * pesoTres)
somaPesos = pesoUm + pesoDois + pesoTres

mediaFinal = Number((somaNotasPesos / somaPesos).toFixed(2))

alert('Sua média final é: ' + mediaFinal)