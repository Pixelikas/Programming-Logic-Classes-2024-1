/* Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas.
Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas. 
(DESAFIO: Mostrar na tela também o nome da pessoa com maior idade) */

programa
{
	cadeia nomePessoa, nomeMaior
	inteiro idadePessoa, contador = 0
	inteiro somaIdades = 0, idadeMaior = 0 
	real mediaIdades
	
	funcao inicio()
	{
	
		enquanto(contador < 5){

			escreva("Digite seu nome: ")
			leia(nomePessoa)
			escreva("Digite sua idade: ")
			leia(idadePessoa)

			se(idadePessoa > idadeMaior){

				idadeMaior = idadePessoa
				nomeMaior = nomePessoa
				
			}

			somaIdades = somaIdades + idadePessoa
			
			contador++
		}
			
		mediaIdades = somaIdades / 5
		
		escreva("Média das idades: ", mediaIdades, "\n")
		escreva("Maior idade: ", idadeMaior, "\n")
		escreva("Pessoa com maior idade: ", nomeMaior)

	}
}
