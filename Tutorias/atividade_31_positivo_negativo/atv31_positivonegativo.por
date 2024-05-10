// Solicite um número ao usuário e informe se é positivo ou negativo.

programa {
  funcao inicio() {
    
    real numeroDigitado

    escreva("Digite um número: ")
    leia(numeroDigitado)

    se(numeroDigitado >= 0){

      escreva("Número digitado é positivo!")

    }senao{

      escreva("Número digitado é negativo!")

    }

  }
}
