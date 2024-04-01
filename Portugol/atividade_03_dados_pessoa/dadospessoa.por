// 03 - Criar um programa que receba o nome, idade e endereço de uma pessoa e mostre na tela esses dados.

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

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 8; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */