/* Fazer um programa que simule uma fila de lotérica. Começa vazia, escolhe A) Entrou pessoa (final da fila) B) Saiu pessoa (início da fila). Se a fila acumular 5 pessoas, finaliza. */

let filaLoterica = []
let capacidadeMaxima = 5
let opDigitada

do{

    opDigitada = prompt(`>>>> Lotérica <<<<\n(Capacidade máxima 5 pessoas)\n\nA) Entrou pessoa\nB) Saiu pessoa\n\nOpção`).toUpperCase()

    switch(opDigitada){

        case 'A':
            filaLoterica.push(1)
            alert(`Entrou pessoa, fila atual tem ${filaLoterica.length} pessoas.`)
            break
        
        case 'B':
            filaLoterica.shift()
            alert(`Entrou pessoa, fila atual tem ${filaLoterica.length} pessoas.`)
            break

        default:
            alert('Você não digitou uma opção válida! :(')
        
    }


}while(filaLoterica.length < capacidadeMaxima)

alert('Lotérica atingiu a capacidade máxima de atendimento! =~')