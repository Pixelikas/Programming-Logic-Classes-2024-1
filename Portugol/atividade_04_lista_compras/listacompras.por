
/* 04 - Na sua lista de compras do mercado, constam apenas 3 itens: arroz, 
batata palha e um suco de garrafa. Porém, você possui apenas uma nota
de R$100 para pagar. Faça um programa no qual sejam digitados os valores
dos itens e mostre na tela valor que você deve receber (troco).*/

programa
{
	
	funcao inicio()

	{

		// Declaração de variáveis
		real valorArroz, valorBatata, valorSuco
		real dinheiro = 100.00
		real valorTotal, troco

		// Entrada de dados
		escreva("Digite o valor do arroz: ")
		leia(valorArroz)

		escreva("Digite o valor da batata: ")
		leia(valorBatata)

		escreva("Digite o valor do suco: ")
		leia(valorSuco)

		// Cálculos e lógica
		valorTotal = valorArroz + valorBatata + valorSuco
		troco = dinheiro - valorTotal

		// Saída de dados
		escreva("\nO troco da sua compra é: R$" + troco)

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 9; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */