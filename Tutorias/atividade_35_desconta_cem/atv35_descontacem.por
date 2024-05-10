// Peça ao usuário que digite números que sejam subtraídos (descontados) de 100,
// mostrando o valor atualizado a cada número digitado. Quando o valor chegar a
// zero ou ficar negativo, encerrar o programa.

programa {
  funcao inicio() {
    
    inteiro numeroInicial = 100
    inteiro numeroSubtrai

    enquanto (numeroInicial > 0){

      escreva("Digite um número para subtrair: ")
      leia(numeroSubtrai)

      numeroInicial = numeroInicial - numeroSubtrai
      escreva("Número atualizado: ", numeroInicial, "\n")

    }

  }
}
