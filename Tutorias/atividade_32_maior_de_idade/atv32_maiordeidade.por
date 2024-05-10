// Solicite a idade do usuário e informe se é maior de 18 anos.

programa {
  funcao inicio() {
    
    inteiro idadePessoa

    escreva("Digite a sua idade: ")
    leia(idadePessoa)

    se(idadePessoa > 18){

      escreva("Pessoa é maior de idade!")

    }senao{

      escreva("Pessoa é menor de idade!")

    }

  }
}
