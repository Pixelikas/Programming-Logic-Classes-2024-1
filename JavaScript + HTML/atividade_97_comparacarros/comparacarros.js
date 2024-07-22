/* Criar um sistema de comparação de carros, de acordo com a imagem. Devem ser digitadas notas de 0 a 10 para os 3 critérios (conforto, economia, design) de cada carro, o que irá gerar uma média com duas casas após a vírgula. Ao clicar em comparar, devem ser mostradas a médias de cada carro e o melhor carro (carro com melhor média) nos respectivos campos. */

let elementoInputUmConforto = document.getElementById('inptConfortoUm')
let elementoInputDoisConforto = document.getElementById('inptConfortoDois')
let elementoInputTresConforto = document.getElementById('inptConfortoTres')

let elementoInputUmEconomia = document.getElementById('inptEconomiaUm')
let elementoInputDoisEconomia = document.getElementById('inptEconomiaDois')
let elementoInputTresEconomia = document.getElementById('inptEconomiaTres')

let elementoInputUmDesign= document.getElementById('inptDesignUm')
let elementoInputDoisDesign = document.getElementById('inptDesignDois')
let elementoInputTresDesign = document.getElementById('inptDesignTres')

let elementoInputUmMedia = document.getElementById('inptMediaUm')
let elementoInputDoisMedia = document.getElementById('inptMediaDois')
let elementoInputTresMedia = document.getElementById('inptMediaTres')

let elementoInputResultado = document.getElementById('inptResultado')

let mediaCarroUm, mediaCarroDois, mediaCarroTres

function ComparaCarros(){

    elementoInputUmMedia.value = Number(((Number(elementoInputUmConforto.value) + Number(elementoInputUmEconomia.value) + Number(elementoInputUmDesign.value)) / 3).toFixed(2))

    elementoInputDoisMedia.value = Number(((Number(elementoInputDoisConforto.value) + Number(elementoInputDoisEconomia.value) + Number(elementoInputDoisDesign.value)) / 3).toFixed(2))

    elementoInputTresMedia.value = Number(((Number(elementoInputTresConforto.value) + Number(elementoInputTresEconomia.value) + Number(elementoInputTresDesign.value)) / 3).toFixed(2))

    mediaCarroUm = Number(elementoInputUmMedia.value)
    mediaCarroDois= Number(elementoInputDoisMedia.value)
    mediaCarroTres = Number(elementoInputTresMedia.value)

    if(mediaCarroUm > mediaCarroDois && mediaCarroUm > mediaCarroTres){

        elementoInputResultado.value = 'Carro 1'

    }else if(mediaCarroUm > mediaCarroDois && mediaCarroUm < mediaCarroTres){

        elementoInputResultado.value = 'Carro 3'

    }else if(mediaCarroUm < mediaCarroDois && mediaCarroTres < mediaCarroDois){

        elementoInputResultado.value = 'Carro 2'

    }

}