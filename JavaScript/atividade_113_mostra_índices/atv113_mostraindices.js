/* Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. Caso exista, o programa deve mostrar todos os índices que ele se encontra. */

//                  0  1  2  3  4  5  6  7  8  9
let vetorNumeros = [1, 2, 4, 2, 5, 6, 7, 2, 2, 3]
let numeroPesquisa
let vetorIndices = []

numeroPesquisa = Number(prompt('Qual número deseja pesquisar no vetor: '))

for(i=0; i < vetorNumeros.length; i++){

    if(numeroPesquisa == vetorNumeros[i]){

        vetorIndices.push(i)

    }

}

if(vetorNumeros.includes(numeroPesquisa) == true){

    alert(`O número pesquisado foi encontrado nos índices ${vetorIndices}.`)

}else{

    alert('Número pesquisado não foi encontrado.')

}
