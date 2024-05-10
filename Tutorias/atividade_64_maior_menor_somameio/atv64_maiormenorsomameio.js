/* Faça um programa do qual o usuário digite quatro números e ao final mostre o maior número, o menor número, e a soma dos outros dois números (que não são o maior nem o menor). Caso existam números repetidos digitados, após o usuário digitar os quatro números, não mostrar maior, menor nem soma, mas sim uma mensagem "Você digitou números repetidos". */

let numeroUm, numeroDois, numeroTres, numeroQuatro
let maiorNumero, menorNumero, somaNumeros, somaMeio
let temRepetido = 'nao'

numeroUm = Number(prompt('Digite o primeiro número: '))

    maiorNumero = numeroUm
    menorNumero = numeroUm

numeroDois = Number(prompt('Digite o segundo número: '))

    if(numeroDois > maiorNumero){

        maiorNumero = numeroDois

    }

    if(numeroDois < menorNumero){

        menorNumero = numeroDois

    }

    if(numeroUm == numeroDois){

        temRepetido = 'sim'

    }

numeroTres = Number(prompt('Digite o terceiro número: '))

    if(numeroTres > maiorNumero){

        maiorNumero = numeroTres

    }

    if(numeroTres < menorNumero){

        menorNumero = numeroTres

    }

    if(numeroDois == numeroTres || numeroUm == numeroTres){

        temRepetido = 'sim'

    }

numeroQuatro = Number(prompt('Digite o quarto número: '))

    if(numeroQuatro > maiorNumero){

        maiorNumero = numeroQuatro

    }

    if(numeroQuatro < menorNumero){

        menorNumero = numeroQuatro

    }

    if(numeroQuatro == numeroTres || numeroQuatro == numeroDois || numeroQuatro == numeroUm){

        temRepetido = 'sim'

    }

somaNumeros = numeroUm + numeroDois + numeroTres + numeroQuatro
somaMeio = somaNumeros - maiorNumero - menorNumero

if(temRepetido == 'sim'){
    
    alert('Teve repetido!')

    
}else{
    
    alert('Maior: ' + maiorNumero)
    alert('Menor: ' + menorNumero)
    alert('Soma: ' + somaNumeros)
    alert('Soma Meio: '+ somaMeio)

}
