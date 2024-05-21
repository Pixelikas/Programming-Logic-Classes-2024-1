/* Criar um programa que recebe o peso (kg) de um objeto no planeta Terra. Em seguida, apresentar a lista abaixo e pedir ao usuário para digitar o número desejado para escolher outros lugares do sistema solar. Ao final mostrar, o peso desse objeto no lugar selecionado. Lista de locais (lua e planetas) e gravidades relativas à Terra:

1 - 0,06 Plutão
2 - 0,17 Lua
3 - 0,38 Mercúrio
4 - 0,38 Marte
5 - 0,91 Vênus
6 - 0,92 Urano
7 - 1,06 Saturno
8 - 1,19 Netuno
9 - 2,34 Júpiter */

let pesoTerra, pesoRelativo
let opLugar

pesoTerra = Number(prompt('Digite o peso de um objeto na Terra (kg): '))

opLugar = Number(prompt('1 - Plutão (gravidade 0,06)\n2 - Lua (gravidade 0,17)\n3 - Mercúrio (gravidade 0,38)\n4 - Marte (gravidade 0,38)\n5 - Vênus (gravidade 0,91)\n6 - Urano (gravidade 0,92)\n7 - Saturno (gravidade 1,06)\n8 - Netuno (gravidade 1,19)\n9 - Júpiter (gravidade 2,34)'))

switch(opLugar){

    case 1:
        pesoRelativo = pesoTerra * 0.06
        alert('O peso do objeto em Plutão é de ' + pesoRelativo + 'kg.')
        break

    case 2:
        pesoRelativo = pesoTerra * 0.17
        alert('O peso do objeto na Lua é de ' + pesoRelativo + 'kg.')
        break

    case 3:
        pesoRelativo = pesoTerra * 0.38
        alert('O peso do objeto em Mercúrio é de ' + pesoRelativo + 'kg.')
        break

    case 4:
        pesoRelativo = pesoTerra * 0.38
        alert('O peso do objeto em Marte é de ' + pesoRelativo + 'kg.')
        break

    case 5:
        pesoRelativo = pesoTerra * 0.91
        alert('O peso do objeto em Vênus é de ' + pesoRelativo + 'kg.')
        break

    case 6:
        pesoRelativo = pesoTerra * 0.92
        alert('O peso do objeto em Urano é de ' + pesoRelativo + 'kg.')
        break
    
    case 7:
        pesoRelativo = pesoTerra * 1.06
        alert('O peso do objeto em Saturno é de ' + pesoRelativo + 'kg.')
        break

    case 8:
        pesoRelativo = pesoTerra * 1.19
        alert('O peso do objeto em Netuno é de ' + pesoRelativo + 'kg.')
        break

    case 9:
        pesoRelativo = pesoTerra * 2.34
        alert('O peso do objeto em Júpiter é de ' + pesoRelativo + 'kg.')
        break

    default:
        alert('Você digitou um número inválido!')

}