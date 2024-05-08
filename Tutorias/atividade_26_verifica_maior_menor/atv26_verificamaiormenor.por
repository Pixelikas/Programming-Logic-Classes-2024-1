// Peça dois números ao usuário e informe qual é o maior e qual é o menor, ou se são iguais.

programa {
  funcao inicio() {
    
    inteiro numeroUm, numeroDois

    escreva("Digite o primeiro número: ")
    leia(numeroUm)

    escreva("Digite o segundo número: ")
    leia(numeroDois)

    se(numeroUm > numeroDois){

      escreva("Primeiro número é maior que o segundo!")

    }senao se(numeroUm < numeroDois){

      escreva("Primeiro número é menor que o segundo!")

    }senao{

      escreva("Os números são iguais!")

    }

  }
}
