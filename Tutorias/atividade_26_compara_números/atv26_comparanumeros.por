/* Peça dois números ao usuário e informe qual é o maior e qual é o menor, ou se são iguais.*/
		
programa
{
	
	inteiro numeroUm, numeroDois

	funcao inicio()
	{

		escreva("Digite o primeiro número: ")
		leia(numeroUm)

		escreva("Digite o segundo número: ")
		leia(numeroDois)

		se (numeroUm < numeroDois){

			escreva("Primeiro número é menor que o segundo!")

		}senao se (numeroUm > numeroDois){

			escreva("Segundo número é menor que o primeiro!")

		}senao{

			escreva("Os números são iguais!")

		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 98; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */