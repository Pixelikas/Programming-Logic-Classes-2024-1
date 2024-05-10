/* Em um determinado e-commerce, o frete para produtos possui o valor fixo de R$12,50. A loja possui benefícios para assinantes em três categorias: 1) Assinante Premium, ganha 20% de desconto e frete grátis 2) Assinante Gold, ganha 20% de desconto mas paga frete 3) Assinante Silver, ganha 10% de desconto mas paga frete. 4) Não assinante, sem benefícios. Faça um programa que solicite o valor da compra e a categoria de assinante (1, 2, 3 ou 4). Mostrar na tela o valor da compra de acordo com a opção escolhida. */

let freteFixo = 12.50
let percentualPremium = 20
let percentualGold = 20
let percentualSilver = 10
let valorCompra, valorComBeneficios
let valorDesconto
let categoriaAssinatura

valorCompra = Number(prompt('Qual o valor da compra (R$): '))
categoriaAssinatura = Number(prompt('1) Assinante Premium\n2) Assinante Gold\n3) Assinante Silver\n4) Não assinante\n\nPlano de assinatura: '))

switch(categoriaAssinatura){

    case 1:
        valorDesconto = (valorCompra * percentualPremium) / 100
        valorComBeneficios = valorCompra - valorDesconto
        alert('Valor a pagar R$' + valorComBeneficios)
        break

    case 2:
        valorDesconto = (valorCompra * percentualGold) / 100
        valorComBeneficios = valorCompra - valorDesconto  + freteFixo
        alert('Valor a pagar R$' + valorComBeneficios)
        break

    case 3:
        valorDesconto = (valorCompra * percentualSilver) / 100
        valorComBeneficios = valorCompra - valorDesconto + freteFixo
        alert('Valor a pagar R$' + valorComBeneficios)
        break

    case 4:
        valorComBeneficios = valorCompra + freteFixo
        alert('Valor a pagar R$' + valorComBeneficios)
        break

    default:
        alert('Você não digitou uma opção válida!')

}




