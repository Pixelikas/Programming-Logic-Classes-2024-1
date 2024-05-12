/* Criar um programa no qual o usuário digite o motivo da sua saída em uma empresa e o valor do seus FGTS. Para motivo "Justa causa" o valor a receber é o valor do FGTS somado a uma multa de R$4.000,00. Para motivo "Sem justa causa" o valor a receber é o valor do FGTS com desconto de 15%. Ao final mostrar o valor a receber. */

let motivoSaida
let valorFgts
let valorMulta = 4000
let percentualDesconto = 15
let valorDesconto

motivoSaida = prompt('Digite o motivo da sua saída (justa causa / sem justa causa): ').toUpperCase()
valorFgts = Number(prompt('Digite o valor do FGTS (R$): '))

if(motivoSaida == 'JUSTA CAUSA'){

    valorFgts = valorFgts + valorMulta
    alert('Valor a receber: R$' + valorFgts)

}else if(motivoSaida == 'SEM JUSTA CAUSA'){

    valorDesconto = valorFgts * percentualDesconto / 100
    valorFgts = valorFgts - valorDesconto
    alert('Valor a receber: R$' + valorFgts)

}