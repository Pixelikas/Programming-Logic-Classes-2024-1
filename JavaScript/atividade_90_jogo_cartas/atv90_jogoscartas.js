/* Criar um programa que simule um jogo de cartas, onde inicialmente deve-se perguntar o nome do jogador 1 e o nome do jogador 2. Cada jogador tem 5 cartas para jogar. Inicia pelo jogador 1, em seguida o jogador 2, e assim segue alternando até que cada jogador tenha "jogado" suas 5 cartas. Os valores das cartas devem se digitados. Vence o jogador que tiver a maior soma. Ao final mostrar o nome do jogador vencedor e a sua soma. Caso tenha dado empate, mostrar mensagem na tela "O jogo empatou!". (DESAFIO: Aceitar somente cartas com valores entre 1 e 13, como no baralho). */

let nomeJogadorUm, nomeJogadorDois
let cartaDigitada
let somaCartasJogadorUm = 0, somaCartasJogadorDois = 0

nomeJogadorUm = prompt('Digite o seu nome, jogador 1: ')
nomeJogadorDois = prompt('Digite o seu nome, jogador 2: ')

for(i=0; i < 5; i++){

    cartaDigitada = Number(prompt('Digite o valor da carta: '))
    somaCartasJogadorUm += cartaDigitada

    cartaDigitada = Number(prompt('Digite o valor da carta: '))
    somaCartasJogadorDois += cartaDigitada

}

if(somaCartasJogadorUm > somaCartasJogadorDois){

    alert(`Nome: ${nomeJogadorUm}\nSoma: ${somaCartasJogadorUm}`)

}else if(somaCartasJogadorUm < somaCartasJogadorDois){

    alert(`Nome: ${nomeJogadorDois}\nSoma: ${somaCartasJogadorDois}`)

}else{

    alert(`EMPATE, HAHAHAHA!`)

}