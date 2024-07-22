
let elementoInputNumeroUm = document.getElementById('inptNumeroUm')
let elementoInputResultadoUm = document.getElementById('inptResultadoUm')

let elementoInputNumeroDois = document.getElementById('inptNumeroDois')
let elementoInputResultadoDois = document.getElementById('inptResultadoDois')

let elementoInputNumeroTres = document.getElementById('inptNumeroTres')
let elementoInputResultadoTres = document.getElementById('inptResultadoTres')

let elementoInputNumeroQuatro = document.getElementById('inptNumeroQuatro')
let elementoInputResultadoQuatro = document.getElementById('inptResultadoQuatro')

let elementoInputNumeroCinco = document.getElementById('inptNumeroCinco')
let elementoInputResultadoCinco = document.getElementById('inptResultadoCinco')

function VerificaParImpar(){

    if(elementoInputNumeroUm.value == ''){

        elementoInputResultadoUm.value = 'Indefinido'

    }else if(elementoInputNumeroUm.value % 2 == 0){

        elementoInputResultadoUm.value = 'PAR'

    }else if(elementoInputNumeroUm.value % 2 == 1){

        elementoInputResultadoUm.value = 'ÍMPAR'

    }

    if(elementoInputNumeroDois.value == ''){

        elementoInputResultadoDois.value = 'Indefinido'

    }else if(elementoInputNumeroDois.value % 2 == 0){

        elementoInputResultadoDois.value = 'PAR'

    }else if(elementoInputNumeroDois.value % 2 == 1){

        elementoInputResultadoDois.value = 'ÍMPAR'

    }

    if(elementoInputNumeroTres.value == ''){

        elementoInputResultadoTres.value = 'Indefinido'

    }else if(elementoInputNumeroTres.value % 2 == 0){

        elementoInputResultadoTres.value = 'PAR'

    }else if(elementoInputNumeroTres.value % 2 == 1){

        elementoInputResultadoTres.value = 'ÍMPAR'

    }

    if(elementoInputNumeroQuatro.value == ''){

        elementoInputResultadoQuatro.value = 'Indefinido'

    }else if(elementoInputNumeroQuatro.value % 2 == 0){

        elementoInputResultadoQuatro.value = 'PAR'

    }else if(elementoInputNumeroQuatro.value % 2 == 1){

        elementoInputResultadoQuatro.value = 'ÍMPAR'

    }

    if(elementoInputNumeroCinco.value == ''){

        elementoInputResultadoCinco.value = 'Indefinido'

    }else if(elementoInputNumeroCinco.value % 2 == 0){

        elementoInputResultadoCinco.value = 'PAR'

    }else if(elementoInputNumeroCinco.value % 2 == 1){

        elementoInputResultadoCinco.value = 'ÍMPAR'

    }

}