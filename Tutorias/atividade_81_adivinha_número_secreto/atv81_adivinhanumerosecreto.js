/* Criar um jogo de adivinhação. O usuário deve digitar um número entre 0 e 100 (número secreto). Em seguida deve ser perguntado qual número imagina-se que seja o número secreto. A cada rodada, deve-se dar dicas após o palpite "o número digitado é menor" ou "o número digitado é maior". Quando o número for adivinhado, mostrar uma mensagem de parabéns e o número de tentativas realizadas. (DESAFIO: Gerar o número secreto randomicamente). */

let palpiteDigitado
let numeroSecreto
let minNumber = 0, maxNumber = 101
let contagemPalpites = 0

    numeroSecreto = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber)
    console.log(numeroSecreto)
    // numeroSecreto = Number(prompt('Digite o número secreto: '))

    while(palpiteDigitado != numeroSecreto){

        palpiteDigitado = Number(prompt("Qual seu palpite? "))

        if(palpiteDigitado < numeroSecreto){

            alert('Chutou baixo!')

        }else if(palpiteDigitado > numeroSecreto){

            alert('Chutou alto!')

        }

        contagemPalpites++
        
    }

alert(`Parabaaaains! Você acertou com ${contagemPalpites} palpites!`)

