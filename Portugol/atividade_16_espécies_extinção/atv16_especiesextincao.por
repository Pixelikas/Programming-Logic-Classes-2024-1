/* Elaborar um programa que alerte sobre os riscos de animais em extinção. O usuário
deve digitar o nome da espécie e a sua população (total de indivíduos). Populações entre
200 e 500 indivíduos, são classificadas como "Espécie criticamente em perigo", populações
entre 500 e 1000 indivíduos, são classificadas como "Espécie em perigo" e populações entre
1000 e 5000 indivíduos, são classificadas como "Espécie vulnerável!" */

programa {
  funcao inicio() {
    
    cadeia nomeEspecie
    inteiro populacaoEspecie

    escreva("Digite o nome da espécie: ")
    leia(nomeEspecie)

    escreva("Digite a população da espécie: ")
    leia(populacaoEspecie)

    se(populacaoEspecie >= 200 e populacaoEspecie < 500){

      escreva("Espécie criticamente em perigo!")

    }senao se(populacaoEspecie >= 500 e populacaoEspecie < 1000){

      escreva("Espécie em perigo!")

    }senao se(populacaoEspecie >= 1000 e populacaoEspecie < 5000){

      escreva("Espécie vulnerável!")

    }

  }
}
