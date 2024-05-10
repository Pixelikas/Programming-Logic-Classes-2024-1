// Solicite o salário e os anos de serviço de um funcionário. 
// Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário.

programa {
  funcao inicio() {
    
    real salarioFuncionario
    inteiro anosServicoFuncionario
    real percentualBonus = 5
    real bonusSalario

    escreva("Digite o seu salário (R$): ")
    leia(salarioFuncionario)

    escreva("Digite o tempo de serviço: ")
    leia(anosServicoFuncionario)

    se(anosServicoFuncionario > 5){

      bonusSalario = salarioFuncionario * percentualBonus /100
      salarioFuncionario = salarioFuncionario + bonusSalario
      escreva("Seu salário com bônus: R$", salarioFuncionario)

    }senao{

      escreva("Seu salário sem bônus: R$", salarioFuncionario)

    }


  }
}
