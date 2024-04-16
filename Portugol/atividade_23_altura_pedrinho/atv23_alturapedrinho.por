/* Joãozinho mede 1,75m de altura e cresce 1cm por ano, enquanto seu amigo Pedrinho
tem 1,60m de altura e cresce 3cm por ano. Faça um programa que calcule e mostre em
quantos anos Pedrinho será mais alto que Joãozinho. */

programa
{

	funcao inicio(){

		inteiro contagemAnos = 0
		real alturaJoaozinho = 1.75, alturaPedrinho = 1.60

		enquanto(alturaPedrinho < alturaJoaozinho){

			alturaJoaozinho = alturaJoaozinho + 0.01
			alturaPedrinho = alturaPedrinho + 0.03
			contagemAnos = contagemAnos + 1
				
		}

		escreva("Pedrinho levou ", contagemAnos, " anos, para ser mais alto que Joãozinho")

	}
}
