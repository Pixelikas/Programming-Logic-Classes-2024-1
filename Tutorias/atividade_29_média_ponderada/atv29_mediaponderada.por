// Solicite ao usuário três notas e seus respectivos pesos, e calcule a média ponderada.

programa {
  funcao inicio() {
    
    real notaUm, notaDois, notaTres, pesoUm, pesoDois, pesoTres
    real somaNotas, somaPesos, mediaNotas

    escreva("Digite a nota um: ")
    leia(notaUm)

    escreva("Digite o peso da nota um: ")
    leia(pesoUm)
    
    escreva("Digite a nota dois: ")
    leia(notaDois)

    escreva("Digite o peso da nota dois: ")
    leia(pesoDois)

    escreva("Digite a nota três: ")
    leia(notaTres)

    escreva("Digite o peso da nota três: ")
    leia(pesoTres)

    somaNotas = (notaUm * pesoUm) + (notaDois * pesoDois) + (notaTres * pesoTres)
    somaPesos = pesoUm + pesoDois + pesoTres

    mediaNotas = somaNotas / somaPesos

    escreva("Média ponderada das notas: ", mediaNotas)

  }
}
