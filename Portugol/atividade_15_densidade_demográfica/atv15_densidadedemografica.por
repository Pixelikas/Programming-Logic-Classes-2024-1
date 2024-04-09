/* Criar um programa para calcular a densidade demográfica (habitantes por 
quilômetro quadrado) de uma região. Sendo, densidade igual a população
(total de habitantes) dividida pela área (metros quadrados). Mostrar
mensagens para densidade alta (maior ou igual a 100) ou baixa (menor que 100).*/

programa
{
	
	funcao inicio()
	{

		inteiro totalHabitantes
		real totalArea, densidadeDemografica

		escreva("Total de habitantes da região: ")
		leia(totalHabitantes)

		escreva("Total de área da região (m²): ")
		leia(totalArea)

		densidadeDemografica = totalHabitantes / totalArea 

		escreva("Densidade demográfica: ", densidadeDemografica, " hab/m²")

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 652; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */