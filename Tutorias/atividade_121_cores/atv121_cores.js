/*Fazer um programa no qual o usuário deve digitar as três cores primárias (amarelo, vermelho, azul) e armazenar em um vetor. Solicitar três vezes “Digite uma cor primária: ”. Em seguida deve digitar as três cores secundárias (laranja, verde, violeta) e armazenar em outro vetor. Solicitar três vezes “Digite uma cor secundária: ”. Um novo vetor deve ser criado com cores primárias + secundárias (amarelo, vermelho, azul, laranja, verde, violeta). No início dessa lista deve-se adicionar preto e no final branco. Perguntar “Adicionar no início da lista: ” e “Adicionar ao final da lista: ”. Mostrar na tela a sequência completa, incluindo preto e branco.*/

let corAdd
let vetorPrimarias = []
let vetorSecundarias = []
let vetorPrimariasSecundarias = []
let vetorFinal = []
let tamanhoVetorCores = 3

    for(i=0; i < ((tamanhoVetorCores*2)+1); i++){

        if(i < tamanhoVetorCores){

            corAdd = prompt("Digite uma cor primaria: ")
            vetorPrimarias.push(corAdd)
            vetorPrimariasSecundarias.push(corAdd)

        }else if(i < (tamanhoVetorCores*2)){

            corAdd = prompt("Digite uma cor secundaria: ")
            vetorSecundarias.push(corAdd)
            vetorPrimariasSecundarias.push(corAdd)

        }else{

            vetorFinal = vetorPrimarias.concat(vetorSecundarias)

            corAdd = prompt("Adicionar cor no início da lista")
            vetorFinal.unshift(corAdd)

            corAdd = prompt("Adicionar cor no final da lista")
            vetorFinal.push(corAdd)

        }
        
    }

alert(`Vetor Primárias: ${vetorPrimarias}\nVetor Secundárias: ${vetorSecundarias}\nVetor Primárias e Secundárias: ${vetorPrimariasSecundarias}\n Vetor Final: ${vetorFinal}`)