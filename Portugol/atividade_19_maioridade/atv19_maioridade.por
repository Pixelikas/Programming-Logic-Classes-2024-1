/* Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas.
Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas. 
(DESAFIO: Mostrar também o nome da pessoa com a maior idade).*/

programa {
  funcao inicio() {
    
    cadeia nomeUm, nomeDois, nomeTres, nomeQuatro, nomeCinco
    inteiro idadeDigitada
    real somaIdades = 0, mediaIdades

    escreva("Digite o seu nome: ")
    leia(nomeUm)

    escreva("Digite a sua idade: ")
    leia(idadeDigitada)

    somaIdades = somaIdades + idadeDigitada

    escreva("Digite o seu nome: ")
    leia(nomeDois)

    escreva("Digite a sua idade: ")
    leia(idadeDigitada)

    somaIdades = somaIdades + idadeDigitada

    escreva("Digite o seu nome: ")
    leia(nomeTres)

    escreva("Digite a sua idade: ")
    leia(idadeDigitada)

    somaIdades = somaIdades + idadeDigitada

    escreva("Digite o seu nome: ")
    leia(nomeQuatro)

    escreva("Digite a sua idade: ")
    leia(idadeDigitada)

    somaIdades = somaIdades + idadeDigitada

    escreva("Digite o seu nome: ")
    leia(nomeCinco)

    escreva("Digite a sua idade: ")
    leia(idadeDigitada)

    somaIdades = somaIdades + idadeDigitada

    mediaIdades = somaIdades / 5

    escreva("Soma: ", somaIdades, "\n")
    escreva("Média: ", mediaIdades)


  }
}
