/* Criar um tradutor de números (De 1 a 5) de inglês para português, utilizando HTML e JS. O sistema deve seguir o modelo (imagem anexa). Um número um inglês deve ser selecionado no select e quando for clicado no botão "Traduzir" a tradução dele deve ser mostrada no input "Resultado", com uma mensagem em amarelo "Tradução efetuada. Caso nenhum número esteja selecionado, mostrar "Nenhuma opção escolhida". */

let inputResultado = document.getElementById("inptRes")
let selectNumeros = document.getElementById("slct")
let labelResultado = document.getElementById("lblRes")

function TraduzNumero(){

    switch(selectNumeros.value){

        case 'Empty':

	    inputResultado.value = ''
            labelResultado.innerHTML = "Nenhuma opção escolhida!"
            break

        case 'One':

            inputResultado.value = 'Um'
            labelResultado.innerHTML = "Aqui está a sua tradução! :D"
            break

        case 'Two':

            inputResultado.value = 'Dois'
            labelResultado.innerHTML = "Aqui está a sua tradução! :D"
            break

        case 'Three':

            inputResultado.value = 'Três'
            labelResultado.innerHTML = "Aqui está a sua tradução! :D"
            break

        case 'Four':

            inputResultado.value = 'Quatro'
            labelResultado.innerHTML = "Aqui está a sua tradução! :D"
            break

        case 'Five':

            inputResultado.value = 'Cinco'
            labelResultado.innerHTML = "Aqui está a sua tradução! :D"
            break  

    }

}