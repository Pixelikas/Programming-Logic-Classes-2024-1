/*Fazer um programa no qual o usuário deve digitar um número e o expoente dele. 
Mostrar na tela o resultado do cálculo. (Não é permitido usar o operador **).*/

programa
{
	real numeroBase, numeroExpoente, resultado = 1
	inteiro contador = 1

	funcao inicio()
	{
		escreva("Digite um número base: ")
		leia(numeroBase)

		escreva("Digite o seu expoente: ")
		leia(numeroExpoente)

		enquanto(contador <= numeroExpoente){

			resultado = resultado * numeroBase
			contador = contador + 1
			
		}
		
		escreva("O resultado é : " , resultado)
	
	}
}
