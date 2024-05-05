/* Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos. O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento. Digitar os valores (em metros) da largura e comprimento que deseja a piscina. Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago, sendo que uma caixa de azulejo com 60 unidades custa R$45,50. */

let comprimentoPiscina, larguraPiscina
let areaTotalPiscina
let valorCaixaAzulejo = 45.50
let azulejosPorMetro = 120
let azulejosPorCaixa = 60
let valorPorMetro
let quantidadeTotalAzulejos
let quantidadeCaixasComprar
let valorTotalPiscina

comprimentoPiscina = Number(prompt('Digite o comprimento da piscina (metros): '))
larguraPiscina = Number(prompt('Digite a largura da piscina (metros): '))

areaTotalPiscina = comprimentoPiscina * larguraPiscina
valorPorMetro = (azulejosPorMetro / azulejosPorCaixa) * valorCaixaAzulejo

quantidadeTotalAzulejos = areaTotalPiscina * azulejosPorMetro
quantidadeCaixasComprar = quantidadeTotalAzulejos / azulejosPorCaixa

valorTotalPiscina = valorPorMetro * areaTotalPiscina

alert(`>>>> Relatório da Piscina <<<<\n\nÁrea da piscina: ${areaTotalPiscina}m²\nQuantidade Caixas: ${quantidadeCaixasComprar} caixas.\nTotal Geral: R$${valorTotalPiscina}`)


