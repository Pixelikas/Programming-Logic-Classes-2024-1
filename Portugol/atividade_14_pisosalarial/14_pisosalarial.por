/* Faça um programa para ler o salário anual de um funcionário 
e o piso salarial mensal da sua categoria. Mostrar o salário mensal
do funcionário e dizer se ele recebe de acordo com o piso (maior ou igual
o piso da categoria) ou se recebe abaixo do piso. */

programa
{
	
	funcao inicio()
	{

		real salarioAnual, pisoSalarial, salarioMensal
		inteiro numeroMesesAno = 12

		escreva("Seu salário anual (R$): ")
		leia(salarioAnual)

		escreva("Piso salarial da sua categoria (R$): ")
		leia(pisoSalarial)

		salarioMensal = salarioAnual / numeroMesesAno

		se(salarioMensal >= pisoSalarial){

			escreva("Seu salário está de acordo com o piso! :D")
			
		}senao{

			escreva("Seu salário está abaixo do piso! :~")
			
		}
	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 580; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */