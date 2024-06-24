/* Criar uma lista com 6 notas, ao final realizar a média das notas descartando a primeira e a última. Mostra na tela a média. */

let listaNotas = [5, 9, 10, 7, 8, 6]
let somaNotas = 0, mediaNotas

for(i=0; i < listaNotas.length; i++){

    if(i > 0 && i < listaNotas.length-1){

        somaNotas += listaNotas[i]

    }

}

mediaNotas = Number((somaNotas / (listaNotas.length-2)).toFixed(2))
alert('Média das notas (com descarte da primeira e última: ' + mediaNotas)