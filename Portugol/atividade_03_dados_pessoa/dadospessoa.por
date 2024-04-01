// Criar um programa que receba o nome, idade e endereço de uma pessoa e mostre na tela esses dados.

programa {
  funcao inicio() {
    
    cadeia nomePessoa, enderecoPessoa
    inteiro idadePessoa

    escreva("Digite o seu nome: ")
    leia(nomePessoa)

    escreva("Digite a sua idade: ")
    leia(idadePessoa)

    escreva("Digite o seu endereço: ")
    leia(enderecoPessoa)

    escreva("Nome: ", nomePessoa, " Idade: ", idadePessoa, " Endereço: ", enderecoPessoa)

  }
}
