// Pergunte ao usuário o salário bruto e calcule o salário líquido, considerando um desconto de 20% para impostos.

programa {
  funcao inicio() {
    
    real salarioBruto, salarioLiquido
    real valorDesconto, percentualDesconto = 20

    escreva("Digite o seu salário bruto (R$): ")
    leia(salarioBruto)

    valorDesconto = salarioBruto * percentualDesconto / 100
    salarioLiquido = salarioBruto - valorDesconto

    escreva("Salário Líquido: R$", salarioLiquido)

  }
}
