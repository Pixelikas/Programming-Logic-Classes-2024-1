<<<<<<< HEAD
/* Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais. */

let relKgPlastico = 10, relValorPlastico = 2
let relKgPapel = 30, relValorPapel = 3
let relKgMetal = 50, relValorMetal = 5

let valorKgPlastico, valorKgPapel, valorKgMetal
let quantidadePlastico, quantidadePapel, quantidadeMetal
let valorPlastico, valorPapel, valorMetal
let totalGeral

valorKgPlastico = relValorPlastico / relKgPlastico
valorKgPapel = relValorPapel / relKgPapel
valorKgMetal = relValorMetal / relKgMetal

quantidadePlastico = Number(prompt('Digite a quantidade de plástico (kg):'))
quantidadePapel= Number(prompt('Digite a quantidade de papel (kg):'))
quantidadeMetal = Number(prompt('Digite a quantidade de metal (kg):'))

valorPlastico = valorKgPlastico * quantidadePlastico
valorPapel = valorKgPapel * quantidadePapel
valorMetal = valorKgMetal * quantidadeMetal

totalGeral = valorPlastico + valorPapel + valorMetal

alert('TOTAL: R$ ' + totalGeral)
=======
/* Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais. */

let relKgPlastico = 10, relValorPlastico = 2
let relKgPapel = 30, relValorPapel = 3
let relKgMetal = 50, relValorMetal = 5

let valorKgPlastico, valorKgPapel, valorKgMetal
let quantidadePlastico, quantidadePapel, quantidadeMetal
let valorPlastico, valorPapel, valorMetal
let totalGeral

valorKgPlastico = relValorPlastico / relKgPlastico
valorKgPapel = relValorPapel / relKgPapel
valorKgMetal = relValorMetal / relKgMetal

quantidadePlastico = Number(prompt('Digite a quantidade de plástico (kg):'))
quantidadePapel= Number(prompt('Digite a quantidade de papel (kg):'))
quantidadeMetal = Number(prompt('Digite a quantidade de metal (kg):'))

valorPlastico = valorKgPlastico * quantidadePlastico
valorPapel = valorKgPapel * quantidadePapel
valorMetal = valorKgMetal * quantidadeMetal

totalGeral = valorPlastico + valorPapel + valorMetal

alert('TOTAL: R$ ' + totalGeral)
>>>>>>> 8cdd91cbaa486605b890eb899918604ac3f3786e
