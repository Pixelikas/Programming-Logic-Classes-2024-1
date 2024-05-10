/* Em um jogo o seu personagem tem 100 de HP (vida). Criar um programa onde o usuário digite o valor de um dano (ataque sofrido pelo personagem). Caso a vida do personagem chegue a zero ou negativo, mostrar na tela "Game Over". Se a vida ficar de 1 a 20, mostrar "Dano crítico, quase sem vida", se a vida ficar de 21 a 50, mostrar "Dano moderado, vida estável" e se a vida ficar entre 51 a 100, mostrar "Dano leve, vida boa!". */

let vidaPersonagem = 100
let danoCausado

danoCausado = Number(prompt('Qual o valor (De 1 a 100) do dano?'))
vidaPersonagem = vidaPersonagem - danoCausado

switch (true){

    case vidaPersonagem < 1:
        alert('Vida: ' + vidaPersonagem)
        alert('Game Over! :(')
        break

    case vidaPersonagem >= 1 && vidaPersonagem <= 20:
        alert('Vida: ' + vidaPersonagem)
        alert('Dano crítico, quase sem vida! :T')
        break

    case vidaPersonagem >= 21 && vidaPersonagem <= 50:
        alert('Vida: ' + vidaPersonagem)
        alert('Dano moderado, vida estável! :|')
        break

    case vidaPersonagem >= 51 && vidaPersonagem <= 100:
        alert('Vida: ' + vidaPersonagem)
        alert('Dano leve, vida boa! :D')
        break

    default:
        alert('Você digitou um dano inválido!')

}