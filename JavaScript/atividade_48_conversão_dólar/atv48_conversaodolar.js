/* Conversor de moedas: Escreva um programa que converta uma quantidade de dólares em reais. Mostre a conversão na tela. Se o valor do dólar estiver acima de 5 reais, exiba uma mensagem informando que está caro, senão exiba uma mensagem de que está barato. */

let quantidadeDolares, cotacaoDolar
let valorConvertidoReais
let faixaDolar = 5

quantidadeDolares = Number(prompt('Quantos dólares pretende converter?'))
cotacaoDolar = Number(prompt('Qual a cotação atual do dólar?'))

valorConvertidoReais = Number((quantidadeDolares * cotacaoDolar).toFixed(3))

alert('Conversão em reais: R$' + valorConvertidoReais)

if(cotacaoDolar > faixaDolar){

    alert('Dólar alto!')

}else{

    alert('Dólar baixo!')

}