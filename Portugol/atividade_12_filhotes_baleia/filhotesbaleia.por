/* As baleias da Groenlândia estão entre os animais que vivem mais tempo na Terra, em média 200 anos. 
A reprodução se dá a cada 4 anos, tendo somente 1 filhote por vez. Programar um sistema que calcule 
o total de filhotes ao longo da vida e a média de filhotes de uma baleia dessa espécie por década. */

programa {
  funcao inicio() {
    
    inteiro tempoVidaBaleia = 200
    inteiro anosGestacao = 4
    inteiro numeroFilhotes = 1
    real totalFilhotes, filhotesDecada

    totalFilhotes = tempoVidaBaleia / anosGestacao
    filhotesDecada = 10 / anosGestacao

    escreva("Total de filhotes: ", totalFilhotes, " Média de filhotes por década: ", filhotesDecada)

  }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 405; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */