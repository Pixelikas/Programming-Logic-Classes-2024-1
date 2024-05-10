/* Numa competição de arremesso de peteca, o competidor tem direito a 3 arremessos para que a peteca caia em um alvo com áreas e pontuações de 0 a 5, sendo 5 no centro e 0 fora do alvo. Faça um programa que pergunte a pontuação de cada arremesso e ao final mostre o resultado (soma dos pontos) e a classifição: 15 pontos (deus da peteca), de 14 a 10 (petequeiro profissa), de 9 a 5 (petequeiro de final de semana), de 4 a 1 (pseudo-petequeiro) e 0 pontos (nunca petequeiro). */

let pontosArremessoUm, pontosArremessoDois, pontosArremessoTres
let somaPontos

pontosArremessoUm = Number(prompt('Quantos pontos no arremesso 1: '))
pontosArremessoDois = Number(prompt('Quantos pontos no arremesso 2: '))
pontosArremessoTres = Number(prompt('Quantos pontos no arremesso 3: '))

somaPontos = pontosArremessoUm + pontosArremessoDois + pontosArremessoTres

alert(`Sua pontuação:  ${somaPontos} pontos\n\nAremesso 1: ${pontosArremessoUm}\nAremesso 2: ${pontosArremessoDois}\nAremesso 3: ${pontosArremessoTres}`)

switch(true){

    case somaPontos === 15:
        alert('Você é o deus da peteca! :D')
        break
    
    case somaPontos >= 10 && somaPontos < 15:
        alert('Você é um petequeiro profissa! :)')
        break

    case somaPontos >= 5 && somaPontos < 10:
        alert('Você é um petequeiro de final de semana! :}')
        break

    case somaPontos >= 1 && somaPontos < 5:
        alert('Você é um pseudo-petequeiro! :)')
        break

    case somaPontos === 0:
        alert('Você é um nunca petequeiro! :)')
        break

    default:
        alert('Você digitou algo errado!')

}