/* Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp. Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou. Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos. Ao final, mostrar a média de litros bebidos por pessoa na festa. */

let numeroConvidados = 45
let totalLitrosChopp = 300
let mediaLitrosPessoa
let choppDesperdicado, choppSobra
let choppBebido

choppDesperdicado = Number(prompt('Quanto de chopp foi desperdiçado? (litros) '))
choppSobra = Number(prompt('Quanto de chopp sobrou? (litros) '))

choppBebido = totalLitrosChopp - choppDesperdicado - choppSobra
mediaLitrosPessoa = Number((choppBebido / numeroConvidados).toFixed(3))

alert(`>>>> Dados da Festa <<<<\n\nTotal de chopp: ${totalLitrosChopp} litros.\nDesperdicío: ${choppDesperdicado} litros.\nSobra: ${choppSobra} litros.\nChopp bebido: ${choppBebido} litros.\nMédia chopp por pessoa: ${mediaLitrosPessoa} litros.`)
