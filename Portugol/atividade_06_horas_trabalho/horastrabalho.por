/* Um(a) programador(a) deseja, ao final do mês, saber quantas horas por
semana em média estudou programação. Crie um programa no qual seja
digitado a quantidade de horas de cada semana do mês e no final mostre
a média de horas por semana naquele mês. */

programa
{
	
	funcao inicio()
	{

		// Declaração de variáveis
		real hSemanaUm, hSemanaDois, hSemanaTres, hSemanaQuatro
		real mediaHoras

		// Entrada de dados
		escreva("Horas da semana 1: ")
		leia(hSemanaUm)

		escreva("Horas da semana 2: ")
		leia(hSemanaDois)

		escreva("Horas da semana 3: ")
		leia(hSemanaTres)

		escreva("Horas da semana 4: ")
		leia(hSemanaQuatro)

		// Cálculos e lógica
		mediaHoras = (hSemanaUm + hSemanaDois + hSemanaTres + hSemanaQuatro) / 4

		// Saída de dados
		escreva("\nMédia de horas por semana, no mês: " + mediaHoras)
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 264; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */