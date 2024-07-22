/* Criar um sistema (de acordo com a imagem) onde o usuário digite seu peso e altura, seja calculado o IMC (peso / altura * altura). Mostrar no campo de IMC o valor do IMC com duas casas após a vírgula, e no campo resultado o resultado de acordo com a tabela abaixo.

IMC menor que 15 -> "Muito abaixo do Peso"
IMC igual ou maior que 15 e menor que 18 -> "Abaixo do Peso"
IMC igual ou maior que 18 e menor que 25 -> "Peso Adequado"
IMC igual ou maior que 25 e menor que 28 -> "Acima do Peso"
IMC igual ou maior que 28 -> "Muito acima do Peso"
*/

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