/* Palíndromo é aquele elemento que, se lido de trás para frente e de frete para trás, é o mesmo. Exemplos: 616, 2112 2442, 87655678. Criar um vetor onde deve-se digitar 6 números e verificar se o vetor é palíndromo. (DESAFIO: fazer com 7 números e com palavras). */

// Palíndromo para número com vetor (número digitado dígito por dígito)

let vetorPalindromo = []
let tamanhoVetor = 6
let numeroAdd, palindromoOk = true

for(i = 0; i < tamanhoVetor; i++){
    
    numeroAdd = Number(prompt("Digite um número: "))
    vetorPalindromo.push(numeroAdd)
    
}

let j = vetorPalindromo.length-1

for(i = 0; i < vetorPalindromo.length/2; i++){

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



