/* Os números primos possuem várias aplicações dentro da Computação, por exemplo, na criptografia. Um número primo é aquele que é divisível apenas por um e por ele mesmo. Faça um programa que peça ao usuário para digitar cinco números inteiros e mostre na tela se são primos ou não. */

let numeroDigitado
let contadorPrimo = 1
let contadorNumeros = 0
let numeroPrimo = true

while(contadorNumeros < 5){
    
    numeroDigitado = Number(prompt('Digite um número: '))
    numeroPrimo = true
    
    while(contadorPrimo <= numeroDigitado){

        if(contadorPrimo > 1 && contadorPrimo < numeroDigitado){

            if(numeroDigitado % contadorPrimo == 0){

                numeroPrimo = false
        
            }
            
        }

        contadorPrimo++
        
    }

    if(!numeroPrimo || numeroDigitado == 1){

        alert('Número não é primo!')

    }else{

        alert('Número é primo!')

    }

    contadorNumeros++

}