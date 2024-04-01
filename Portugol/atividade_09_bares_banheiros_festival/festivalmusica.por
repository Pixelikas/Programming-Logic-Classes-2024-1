/* 09 - Um festival de música está terceirizando a montagem da estrutura. A empresa contratada 
necessita saber uma estimativa de público para calcular a quantidade de bares e banheiros.
O cálculo utilizado é de 1 banheiro para cada 50 pessoas e 1 bar para cada 150 pessoas. 
Criar um programa onde seja digitado o público esperado e mostrar na tela em média quantos
banheiros e bares seriam necessários. */

programa
{
	
	funcao inicio()
	{

		// Declaração de variáveis
		inteiro publicoEstimado
		real mediaBares
		real mediaBanheiros
		real relBar = 150.00
		real relBanheiro = 50.00

		// Entrada de dados
  		escreva("Qual o público estimado: ")
  		leia(publicoEstimado)

		// Cálculos e lógica
		mediaBares = publicoEstimado / relBar
		mediaBanheiros = publicoEstimado / relBanheiro

		// Saída de dados
  		escreva("\nMédia de Bares: " + mediaBares)
  		escreva("\nMédia de Banheiros: " + mediaBanheiros)

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