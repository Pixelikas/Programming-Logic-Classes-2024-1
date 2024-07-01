let inputValorUm = document.getElementById ("inptValorUm")
let inputValorDois = document.getElementById ("inptValorDois")
let inputValorTres = document.getElementById ("inptValorTres")

let inputHorasUm = document.getElementById ("inptHoraUm")
let inputHorasDois = document.getElementById ("inptHoraDois")
let inputHorasTres = document.getElementById ("inptHoraTres")

let divResultado = document.getElementById('divResultado')

let valorProjetoUm, valorProjetoDois, valorProjetoTres
let valorTotal

function CalculaProjetos() {

    valorProjetoUm = Number(inputValorUm.value * inputHorasUm.value)
    valorProjetoDois = Number(inputValorDois.value * inputHorasDois.value)
    valorProjetoTres = Number(inputValorTres.value * inputHorasTres.value)
    
    valorTotal = valorProjetoUm + valorProjetoDois + valorProjetoTres

    divResultado.innerHTML = '>>>> DADOS DOS PROJETOS <<<<' + '<br><br>' + 'Projeto 1 - R$' + valorProjetoUm + '<br>' + 'Projeto 2 - R$' + valorProjetoDois + '<br>' + 'Projeto 3 - R$' + valorProjetoTres + '<br><br>' + 'TOTAL = R$' + valorTotal

}
