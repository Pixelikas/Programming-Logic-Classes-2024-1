/* Fazer um programa no qual o usuário deve digitar um número e o expoente dele. Mostrar na tela o resultado do cálculo. (Não é permitido usar o operador **). */

let base
let expoente
let resultado

base = Number(prompt('Digite o número base: '))
expoente = Number(prompt('Digite o seu expoente: '))

// resultado = base ** expoente

resultado = base

for(i=0; i < expoente-1; i++){

    resultado = resultado * base

}

if(expoente == 0){

    alert('Resultado: ' + 1)

}else{

    alert('Resultado: ' + resultado)
    
}
