/* Palíndromo é aquele elemento que, se lido de trás para frente e de frete para trás, é o mesmo. Exemplos: 616, 2112 2442, 87655678. Criar um vetor onde deve-se digitar 6 números e verificar se o vetor é palíndromo. (DESAFIO: fazer com 7 números e com palavras). */

// Palíndromo para frase

let vetorPalindromo
let palavraAdd, palindromoOk = true
let indicesVazios = []

    palavraAdd = prompt("Digite uma palavra: ")
    vetorPalindromo = palavraAdd.split("")

    for(i = 0; i < vetorPalindromo.length; i++){

        if(vetorPalindromo[i] == ' '){

            vetorPalindromo.splice(i, 1)

        }

    }

    let j = vetorPalindromo.length - 1

    for(i = 0; i < vetorPalindromo.length; i++){

        if(vetorPalindromo[i] != vetorPalindromo[j]){

            palindromoOk = false

        }

        j--

    }

    if(palindromoOk){

        alert("É palíndromo! :D")

    }else{

        alert("Não é palíndromo! :~")

    }