/* Supondo que a população de um país A seja da ordem de 80.000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200.000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento. */

let populacaoA = 80000, populacaoB = 200000
let percentualA = 3, percentualB = 1.5
let crescimentoA, crescimentoB
let contagemAnos = 0

while(populacaoA < populacaoB){

    crescimentoA = (populacaoA * percentualA) / 100
    populacaoA = populacaoA + crescimentoA

    crescimentoB = (populacaoB * percentualB) / 100
    populacaoB = populacaoB + crescimentoB

    contagemAnos++

}

alert('População A será igual ou maior à população B em ' + contagemAnos + ' anos.')