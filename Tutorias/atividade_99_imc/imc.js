
let elementoInputPeso = document.getElementById('inptPeso')
let elementoInputAltura = document.getElementById('inptAltura')
let elementoInputImc = document.getElementById('inptImc')
let elementoInputResultado = document.getElementById('inptResultado')

let imcResultado

function CalculaImc(){

    imcResultado = Number((Number(elementoInputPeso.value) / (Number(elementoInputAltura.value) * Number(elementoInputAltura.value))).toFixed(2))

    elementoInputImc.value = imcResultado

    switch(true){

        case imcResultado < 15:
            elementoInputResultado.value = 'Muito abaixo do peso!'
            break

        case imcResultado >= 15 && imcResultado < 18:
            elementoInputResultado.value = 'Abaixo do peso!'
            break

        case imcResultado >= 18 && imcResultado < 25:
            elementoInputResultado.value = 'Peso adequado!'
            break

        case imcResultado >= 25 && imcResultado < 28:
            elementoInputResultado.value = 'Acima do peso!'
            break

        case imcResultado >= 28:
            elementoInputResultado.value = 'Muito acima do peso!'
            break

    }

}