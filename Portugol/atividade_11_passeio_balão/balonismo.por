/* 11 - Um festival de balonismo oferece passeios de balão. Para cada 5 minutos
de voo, são necessários 10m³ (metros cúbicos) de gás, sendo que o metro
cúbico de gás custa R$15 reais. No balão cabem no máximo 4 pessoas.
O cálculo do valor do passeio é feito somando o valor gasto em gás,
mais uma taxa de R$20 reais por pessoa. Criar um programa que pergunte
quantas pessoas vão no passeio e o tempo de passeio. Mostrar na tela o
total cobrado pelo passeio. */

programa
{
	
	funcao inicio()
	{

		// Declaração de variáveis
	 	real relMinutos = 5.00, relMetros = 10.00
	 	real relMinMetros = relMetros / relMinutos
	 	inteiro numPessoas, tempoMinVoo
	 	real taxaPessoa = 20.00
	 	real totalGas, totalPasseio, precoMetroGas = 15.00

		// Entrada de dados
		escreva("Quantas pessoas? ")
		leia(numPessoas)

		escreva("Quantos minutos? ")
		leia(tempoMinVoo)

		// Cálculos e lógica
		totalGas = relMinMetros * tempoMinVoo
		totalPasseio = totalGas * precoMetroGas

		totalPasseio = totalPasseio + (numPessoas * taxaPessoa)

		// Saída de dados
		escreva("\nTotal geral do passeio: R$" + totalPasseio)

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