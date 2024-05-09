// Peça três números ao usuário e os exiba em ordem crescente.

programa {
  funcao inicio() {
    
    real numeroUm, numeroDois, numeroTres

    escreva("Digite o primeiro número: ")
    leia(numeroUm)

    escreva("Digite o segundo número: ")
    leia(numeroDois)
    
    escreva("Digite o terceiro número: ")
    leia(numeroTres)

    se(numeroUm < numeroDois e numeroDois < numeroTres){

      escreva("Ordem crescente dos números: ", numeroUm,", ", numeroDois,", ", numeroTres)

    }senao se(numeroUm < numeroDois e numeroUm < numeroTres e numeroTres < numeroDois){

      escreva("Ordem crescente dos números: ", numeroUm,", ", numeroTres,", ", numeroDois)

    }senao se(numeroDois < numeroUm e numeroUm < numeroTres){

      escreva("Ordem crescente dos números: ", numeroDois,", ", numeroUm,", ", numeroTres)

    }senao se(numeroDois < numeroUm e numeroDois < numeroTres e numeroTres < numeroUm){

      escreva("Ordem crescente dos números: ", numeroDois,", ", numeroTres,", ", numeroUm)

    }senao se(numeroTres < numeroDois e numeroDois < numeroUm){

      escreva("Ordem crescente dos números: ", numeroTres,", ", numeroDois,", ", numeroUm)

    }senao se(numeroTres < numeroDois e numeroTres < numeroUm e numeroUm < numeroDois){

      escreva("Ordem crescente dos números: ", numeroTres,", ", numeroUm,", ", numeroDois)

    }

  }
}
