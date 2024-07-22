
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

    if(elementoInputNumeroUm.value % 2 == 0){

        elementoInputResultadoUm.value = 'PAR'

    }else{

        elementoInputResultadoUm.value = 'ÍMPAR'

    }

    if(elementoInputNumeroDois.value % 2 == 0){

        elementoInputResultadoDois.value = 'PAR'

    }else{

        elementoInputResultadoDois.value = 'ÍMPAR'

    }

    if(elementoInputNumeroTres.value % 2 == 0){

        elementoInputResultadoTres.value = 'PAR'

    }else{

        elementoInputResultadoTres.value = 'ÍMPAR'

    }

    if(elementoInputNumeroQuatro.value % 2 == 0){

        elementoInputResultadoQuatro.value = 'PAR'

    }else{

        elementoInputResultadoQuatro.value = 'ÍMPAR'

    }

    if(elementoInputNumeroCinco.value % 2 == 0){

        elementoInputResultadoCinco.value = 'PAR'

    }else{

        elementoInputResultadoCinco.value = 'ÍMPAR'

    }

}