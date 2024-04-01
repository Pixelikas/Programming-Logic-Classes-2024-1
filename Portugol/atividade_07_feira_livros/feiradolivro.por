/* 07 - Uma feira de livros está fazendo promoção onde na compra de 3 livros,
o(a) comprador(a) ganha 15% de desconto. Criar um programa que receba
os valores dos 3 livros e mostra na tela o total dos livros sem desconto
e com desconto. */

programa
{
	
	funcao inicio()
	{

		// Declaração de variáveis
		real valorLivroUm, valorLivroDois, valorLivroTres
		real valorSemDesconto, valorComDesconto, valorDesconto
		real percentualDesconto = 15.00

		// Entrada de dados
		escreva("Valor do livro um: ")
		leia(valorLivroUm)

		escreva("Valor do livro dois: ")
		leia(valorLivroDois)
		
		escreva("Valor do livro três: ")
		leia(valorLivroTres)

		// Cálculos e lógica
		valorSemDesconto = valorLivroUm + valorLivroDois + valorLivroTres
		valorDesconto = valorSemDesconto * percentualDesconto / 100

		valorComDesconto = valorSemDesconto - valorDesconto

		// Saída de dados
		escreva("\nValor sem desconto: " + valorSemDesconto)
		escreva("\nValor com desconto: " + valorComDesconto)
		
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