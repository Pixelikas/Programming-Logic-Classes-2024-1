/* Faça um programa que gera uma lista dos números primos existentes entre 1 e um número inteiro digitado pelo usuário. */

let numeroLimite
let numeroAtual = 2
let contadorPrimo
let numeroPrimo = true
let listaPrimos = ''

numeroLimite = Number(prompt('Digite um número limite: '))

while(numeroAtual < numeroLimite){
    
    contadorPrimo = 1

    while(contadorPrimo <= numeroAtual){

         if(contadorPrimo > 1 && contadorPrimo < numeroAtual){

            if(numeroAtual % contadorPrimo == 0){

                numeroPrimo = false
        
            }
            
        }

        contadorPrimo++
        
    }

    if(numeroPrimo == false){

        //alert(`Número ${numeroAtual} não é primo!`)
        numeroPrimo = true

    }else{

        //alert(`Número ${numeroAtual} é primo!`)
        listaPrimos = listaPrimos + ` ${numeroAtual}`

    }

    numeroAtual++

}

alert(`Números primos entre 1 e ${numeroLimite}: ${listaPrimos}`)