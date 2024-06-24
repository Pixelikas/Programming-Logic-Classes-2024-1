/* Palíndromo é aquele elemento que, se lido de trás para frente e de frete para trás, é o mesmo. Exemplos: 616, 2112 2442, 87655678. Criar um vetor onde deve-se digitar 6 números e verificar se o vetor é palíndromo. (DESAFIO: fazer com 7 números e com palavras). */

let vetorPalavra, palavraDigitada
let palindromoOk = true

    palavraDigitada = prompt("Digite uma palavra: ")

    vetorPalavra = palavraDigitada.split("")

    let j = vetorPalavra.length-1

    for(i = 0; i < vetorPalavra.length / 2; i++){

        if(vetorPalavra[i] != vetorPalavra[j]){

            palindromoOk = false

        }

        j--

    }

    if(palindromoOk){

        alert("SIMMMMMMMMMM!")

    }else{

        alert("Não! :(")

    }