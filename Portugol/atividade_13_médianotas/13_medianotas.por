 /* Crie um programa que peça ao usuário para digitar três notas 
 individualmente (uma por vez), faça a média e caso a média seja 
 igual ou maior que 7, mostre uma mensagem "Aprovado!" e a média. 
 Caso seja menor que 7, mostre uma mensagem "Reprovado!" e a média.*/

programa
{
	
	funcao inicio()
	{
		
		real notaUm, notaDois, notaTres
		real somaNotas, mediaNotas
		real mediaAprovacao = 7
		real numeroTotalNotas = 3

		escreva("Digite a nota um: ")
		leia(notaUm)		

		escreva("Digite a nota dois: ")
		leia(notaDois)		

		escreva("Digite a nota três: ")
		leia(notaTres)	

		somaNotas = notaUm + notaDois + notaTres
		mediaNotas = somaNotas / numeroTotalNotas

		escreva("Sua média: " , mediaNotas, "\n")

		se(mediaNotas >= mediaAprovacao){

			escreva("YESSSS! Você foi aprovado =D")
			
		}senao{

			escreva("NOUSSS! Você foi reprovado =~")
			
		}
	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 865; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */