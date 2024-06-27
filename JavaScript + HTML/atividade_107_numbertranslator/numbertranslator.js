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