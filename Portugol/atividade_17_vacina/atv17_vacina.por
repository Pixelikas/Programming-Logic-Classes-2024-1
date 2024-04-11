/* Criar um programa que pergunte o nome e a idade da pessoa, e se tem comorbidade (S ou N).
Mostrar mensagem "Pode se vacinar!" caso a idade seja maior ou igual a 60 ou tenha comorbidade.
Caso contrário, mostrar mensagem "Não pode se vacinar!". */

programa {
  funcao inicio() {

    cadeia nomePessoa
    inteiro idadePessoa
    cadeia comorbidade
    inteiro idadeLimiteVacina = 60

    escreva("Digite o seu nome: ")
    leia(nomePessoa)
    
    escreva("Digite a sua idade: ")
    leia(idadePessoa)

    escreva("Possui comorbidade? (Sim/Não)")
    leia(comorbidade)

    se(idadePessoa >= idadeLimiteVacina ou comorbidade == "Sim"){

      escreva("Pode se vacinar!")

    }senao{

      escreva("Não pode se vacinar!")

    }

  }
}
