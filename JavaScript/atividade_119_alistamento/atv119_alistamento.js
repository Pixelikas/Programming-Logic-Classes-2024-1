/* Em cidades menores, o alistamento para o exército acontece esporadicamente ao longo dos anos. Criar um programa no qual pergunte ao usuário se houve alistamento dos anos 2000 a 2009, uma pergunta para cada ano. Se houve alistamento deve ser digitado “S” e se não houve alistamento “N”. Após digitar tudo, deve-se mostrar na tela o último ano que houve alistamento. Caso não tenha ocorrido alistamento, mostrar “Não houve alistamento nos últimos 10 anos” */

let vetorAlistamentos = []
let respostaAlistamento, ultimoAlistamento
let quantidadeAnos = 10

    for(i = 0; i < quantidadeAnos; i++){

        respostaAlistamento = prompt(`Houve alistamento no ano de 200${i}? (S/N)`)
        vetorAlistamentos.push(respostaAlistamento)

    }

    ultimoAlistamento = vetorAlistamentos.lastIndexOf('S')

    if(ultimoAlistamento == -1){

        alert(`Não houve alistamento nos últimos 10 anos!`)

    }else{

        alert(`O último ano com alistamento foi 200${ultimoAlistamento}!`)

    }





