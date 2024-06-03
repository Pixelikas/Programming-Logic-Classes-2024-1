/* Na maioria das linguagens de programação, é possível contar caracteres de uma string (palavra, frase, etc). Criar um sistema no qual o usuário digite 5 palavras e ao final mostre o tamanho em número de caracteres, de cada uma delas. (Pesquisar sobre o comando length, para solução). */

let palavraDigitada
let listaFinal = '>>>>> Relatório das palavras <<<<<\n\n'

for(i=0; i < 5; i++){

    palavraDigitada= prompt('Digite a primeira palavra: ')
    
    listaFinal = listaFinal + `${palavraDigitada} = ${palavraDigitada.length} caracteres\n`

}

alert(listaFinal)
