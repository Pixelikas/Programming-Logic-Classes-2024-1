/* Desenvolver um programa que peça ao usuário o número de doenças a cadastrar, no qual ele deve cadastrar o nome da doença e se ela é transmitida por vírus, bactéria ou por ambos. Ao final, mostrar quatro listas: doenças transmitidas por vírus, doenças transmitidas por bactérias, doenças transmitidas por ambos, lista com todas doenças. */

let quantidadeDoencas, nomeDoenca, formaTransmissao
let listaVirus = [], listaBacterias = [], listaAmbos = [], listaTotal = []

    quantidadeDoencas = Number(prompt("Quantas doenças deseja cadastrar? "))

    for(i=0; i < quantidadeDoencas; i++){

        nomeDoenca = prompt("Nome da doença? ")
        formaTransmissao = prompt("Forma de transmissão(vírus/bactéria/ambos)? ").toLowerCase()

        listaTotal.push(nomeDoenca)

        if(formaTransmissao == 'vírus'){

            listaVirus.push(nomeDoenca)
            

        }else if (transmissao == 'bactéria'){

            listaBacterias.push(nomeDoenca)

        }else{

            listaAmbos.push(nomeDoenca)

        }

    }

alert(`Vírus: ${listaVirus}\nBactérias: ${listaBacterias}\nAmbos: ${listaAmbos}\nTodos: ${listaTotal}`)