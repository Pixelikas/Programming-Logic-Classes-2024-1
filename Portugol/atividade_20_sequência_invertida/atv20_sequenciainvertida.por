// Faça um programa no qual o usuário deve digitar a sequência de números de 1 a 10, invertida.
// Caso digite algum número fora da sequência, interromper e mostrar uma mensagem "Você errou
// a sequência". Do contrário, ao final mostrar uma mensagem "Você terminou a sequência
// corretamente".

programa
{
	
	funcao inicio()
	{

	inteiro contador = 10
	inteiro numeroDigitado

		enquanto(contador > 0){

			escreva("Digite o número da sequência: ")
			leia(numeroDigitado)

			se(numeroDigitado != contador){

				escreva("Errouuuuuuuu!")
				pare
				
			}

			contador--
			
		}

		se(contador == 0){

			escreva("PARABÃINSSSSS! :D")

		}
		
	}
		
}
