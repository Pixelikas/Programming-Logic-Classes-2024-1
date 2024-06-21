/* Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar?”. Quando for adicionado a cereja, finalizar com a frase “Sua salada de frutas está pronta!”. Mostrar a lista das frutas. (DESAFIO: Mostrar também a quantidade de cada fruta)*/

let listaFrutas = []
let addFruta
let frutaFinal = 'cereja'

    do{

        addFruta = prompt("Digite uma fruta: ").toLowerCase()
        listaFrutas.push(addFruta)

    }while(addFruta != frutaFinal)

alert(`Sua salada de frutas contém: ${listaFrutas}.`)


    
