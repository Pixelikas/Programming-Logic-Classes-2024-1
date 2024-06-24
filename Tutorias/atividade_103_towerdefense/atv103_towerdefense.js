/* Em um jogo de Tower Defense, o castelo (torre) tem um total de 500 de HP. Faça um programa no qual o usuário possa escolher entre 3 tipos de ataque e um de defesa: 

A) Ataque Bomba -100HP
B) Ataque Granada -80HP
C) Ataque Arqueiro -40HP
D) Defesa Escudo +20HP

Mostrar o HP do castelo atualizado a cada rodada. 
Caso o HP do castelo acabe, mostrar "Jogo encerrado, com X rodadas!" */

let casteloTotalHP = 500, casteloMinimoHP = 0, opRodada = 0, contagemRodadas = 0
let bombaAtaque = 100, granadaAtaque = 80, arqueiroAtaque = 40, escudoDefesa = 20

do{

    opRodada = prompt(`\n(((((( RODADA ${contagemRodadas+1} ))))))\n\nA) Ataque Bomba -100HP\nB) Ataque Granada -80HP\nC) Ataque Arqueiro -40HP\nD) Defesa Escudo +20HP\n\nOpção de Ação: `).toUpperCase()

    switch(opRodada){

        case 'A':

            casteloTotalHP -= bombaAtaque
            alert(`\nBOOM! Ataque de bomba, -${bombaAtaque}HP! >.<\nHP do Castelo -> ${casteloTotalHP}`)
            break
                  
        case 'B':

            casteloTotalHP -= granadaAtaque
            alert(`\nPOW! Ataque de granada, -${granadaAtaque}HP! >.<\nHP do Castelo -> ${casteloTotalHP}`)
            break

        case 'C':

            casteloTotalHP -= arqueiroAtaque
            alert(`\nFTH! Ataque de arqueiro, -${arqueiroAtaque}HP! >.<\nHP do Castelo -> ${casteloTotalHP}`)
            break

        case 'D':

            casteloTotalHP += escudoDefesa
            alert(`\nUON! Defesa com escudo, +${escudoDefesa}HP! :D\nHP do Castelo -> ${casteloTotalHP}`)
            break

        default:

            alert('Ação inválida! :(')

    }

    contagemRodadas++ 
    
}while(casteloTotalHP > casteloMinimoHP)
    
alert(`\n____________________________________\nGAME OVER!!! Castelo destruído... :(\nTotal de rodadas: ${contagemRodadas}.\n\n`)