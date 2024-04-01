/* Uma pousada cobra R$280 reais a diária por quarto e R$15 reais o café por pessoa por dia. Você pretende passar um
tempo com alguns amigos nessa pousada, sendo que todos ficarão no mesmo quarto. Informar a quantidade de pessoas,
o número de diárias e quantas pessoas do grupo vão querer café diário. Mostrar na tela o total a pagar. */

programa
{
	
	funcao inicio()
	{

		// Declaração de variáveis
		real valorDiaria = 280.00
		real valorCafe = 15.00
		inteiro quantidadePessoas, numeroDiarias, pessoasCafe
		real valorTotalDiarias, valorTotalCafes, valorTotalPagar

		// Entrada de dados
		escreva("Quantas pessoas? ")
		leia(quantidadePessoas)

		escreva("Quantas diárias? ")
		leia(numeroDiarias)

		escreva("Quantas pessoas vão querer café diário? ")
		leia(pessoasCafe)

		// Cálculos e lógica
		valorTotalDiarias = numeroDiarias * valorDiaria
		valorTotalCafes = pessoasCafe * valorCafe * numeroDiarias
		valorTotalPagar = valorTotalDiarias + valorTotalCafes

		// Saída de dados
		escreva("Total geral a pagar: R$" + valorTotalPagar)


	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 372; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */