/* Criar um sistema clássico de jogos Tower Defense (Defesa de Torre) de acordo com a imagem disponibilizada. A Torre começa com estrutura em 100 e o usuário pode destruir ou construir, digitando valores nos campos e clicando nos botões de menos e mais. O valor de estrutura deve ser atualizado após destruir ou construir.

A situação da Torre começa como Ativa, mas caso sua estrutura chegue em zero ou abaixo, atualizar a situação para "Destruída". */

let elementoInputEstrutura = document.getElementById("inptEstrutura")
let elementoInputConstroi = document.getElementById("inptConstroi")
let elementoInputDestroi = document.getElementById("inptDestroi")
let elementoInputSituacao = document.getElementById("inptSituacao")
let vidaTorre = 100

function ConstroiTorre(){

    vidaTorre += Number(elementoInputConstroi.value)
    elementoInputEstrutura.value = vidaTorre

    if(vidaTorre > 0){

        elementoInputSituacao.value = 'Ativa'

    }

    elementoInputConstroi.value = ''

}

function DestroiTorre(){

    vidaTorre -= Number(elementoInputDestroi.value)

    if(vidaTorre <= 0){

        vidaTorre = 0
        elementoInputEstrutura.value = 0
        elementoInputSituacao.value = 'Destruída'
        elementoInputConstroi.disabled = true
        elementoInputDestroi.disabled = true


    }else{

        elementoInputEstrutura.value = vidaTorre

    }

    elementoInputDestroi.value = ''

}
