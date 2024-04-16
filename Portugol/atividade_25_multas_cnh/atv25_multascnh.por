/* Desenvolver um programa no qual o usuário digite o número de multas que deseja
cadastrar e para cada multa deve colocar o valor em reais e os pontos perdidos na
carteira de habilitação. Ao final, mostrar o somatório das multas e dos pontos,
caso os pontos alcancem 21 ou mais, exibir a mensagem "Você está irregular",
senão, exibir "Você está regular". */
		

programa
{
	
	inteiro contador = 0
	inteiro quantidadeMultas
	inteiro valorPonto
	inteiro somaPontos = 0
	real valorMulta, somaMultas = 0

	funcao inicio()
	{

		escreva("Digite o número de multas que deseja cadastrar: ")
		leia(quantidadeMultas)

		enquanto(contador < quantidadeMultas){

			escreva("Digite o valor das multa (R$): ")
			leia(valorMulta)

			escreva("Digite os pontos perdidos nessa multa: ")
			leia(valorPonto)

			somaMultas = somaMultas + valorMulta
			somaPontos = somaPontos + valorPonto
			contador++			
			
			}

			escreva("Valor total das multas: R$", somaMultas, "\n")
			escreva("Total de pontos na carteira: ", somaPontos, "\n")

			se(somaPontos >= 21)
			{

				escreva("Você está irregular! =S")

			}senao{

				escreva("Você está regular! :D")

			}
	}
}
