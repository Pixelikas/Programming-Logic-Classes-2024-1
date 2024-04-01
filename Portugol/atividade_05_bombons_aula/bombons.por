/* 05 - Na volta as aulas cada aluno(a) ganhará 2 bombons (1 para si e 1 para os pais)
além de 1 bombom para o(a) professor(a). Faça um programa no qual seja digitado
a quantidade de alunos da turma e mostrando quantos bombons no total devem ser comprados.*/

programa {
  funcao inicio() {
    
    inteiro quantidadeAlunos, totalBombons
    inteiro bombonsAluno = 2
    inteiro bombonsProf = 1

    escreva("Número de alunos na turma: ")
    leia(quantidadeAlunos)

    totalBombons = quantidadeAlunos * bombonsAluno + bombonsProf

    escreva("Total de bombons: ", totalBombons)

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