/* Criar um programa que simule um jogo de cartas, onde inicialmente deve-se perguntar o nome do jogador 1 e o nome do jogador 2. Cada jogador tem 5 cartas para jogar. Inicia pelo jogador 1, em seguida o jogador 2, e assim segue alternando até que cada jogador tenha "jogado" suas 5 cartas. Os valores das cartas devem se digitados. Vence o jogador que tiver a maior soma. Ao final mostrar o nome do jogador vencedor e a sua soma. Caso tenha dado empate, mostrar mensagem na tela "O jogo empatou!". (DESAFIO: Aceitar somente cartas com valores entre 1 e 13, como no baralho OU gerar as cartas aleatoriamente nesse intervalo numérico). */

let cartaJogadorUm, cartaJogadorDois
let somaJogadorUm = 0, somaJogadorDois = 0
let nomeJogadorUm, nomeJogadorDois
let menorCarta = 1, maiorCarta = 13
let quantidadeCartas = 5

    nomeJogadorUm = prompt("Jogador 1, identifique-se: ")
    nomeJogadorDois = prompt("Jogador 2, identifique-se: ")

    for(i=0; i < quantidadeCartas; i++){

        do{

            cartaJogadorUm = Number(prompt(`${nomeJogadorUm}, digite um carta: `))
            
            if(cartaJogadorUm < menorCarta || cartaJogadorUm > maiorCarta){
                
                alert("Carta inválida, digite uma carta entre 1 e 13!")
            }

        }while(cartaJogadorUm < menorCarta || cartaJogadorUm > maiorCarta)
    
        somaJogadorUm += cartaJogadorUm
       
        do{

            cartaJogadorDois = Number(prompt(`${nomeJogadorDois}, digite um carta: `))
            
            if(cartaJogadorDois< menorCarta || cartaJogadorDois > maiorCarta){
                
                alert("Carta inválida, digite uma carta entre 1 e 13!")
            }

        }while(cartaJogadorDois < menorCarta || cartaJogadorDois > maiorCarta)

        somaJogadorDois += cartaJogadorDois

    }

    if(somaJogadorUm > somaJogadorDois){

        alert(`${nomeJogadorUm} ganhou com ${somaJogadorUm} pontos.\n${nomeJogadorDois} perdeu com ${somaJogadorDois}.`)

    }else if (somaJogadorUm < somaJogadorDois){

        alert(`${nomeJogadorDois} ganhou com ${somaJogadorDois} pontos.\n${nomeJogadorUm} perdeu com ${somaJogadorUm}.`)

    }else{

        alert("EMPATOU, malucos!")

    }