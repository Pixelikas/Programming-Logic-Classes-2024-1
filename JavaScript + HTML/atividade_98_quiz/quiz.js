/* Criar um Quiz com 3 perguntas, cada qual contendo uma resposta correta e as outras incorretas (select). A resposta correta soma pontos, as incorretas não. Selecionar a forma na qual será mostrada ALERT, INPUT ou DIV a pontuação (configurar os radios para que o usuário consiga selecionar somente um). Ao clicar no botão de resultado, o resultado (total de pontos) deve ser mostrado da forma escolhida somente se o checkbox estiver marcado, caso contrário, mostrar mensagem para o usuário avisando que deve marcar o checkbox. */

let elementoSelectUm = document.getElementById('slctPerguntaUm')
let elementoSelectDois = document.getElementById('slctPerguntaDois')
let elementoSelectTres = document.getElementById('slctPerguntaTres')

let elementoRadioAlert = document.getElementById('inptAlert')
let elementoRadioInput = document.getElementById('inptInput')
let elementoRadioLabel = document.getElementById('inptLabel')
let elementoCheckbox = document.getElementById('inptCheck')

let elementoInputResultado = document.getElementById('inptResInput')
let elementoLabelResultado = document.getElementById('inptResLabel')

let pontosUm, pontosDois, pontosTres, somaPontos

function MostraResultado(){

    somaPontos = 0

    if(elementoCheckbox.checked){

        switch(elementoSelectUm.value){

            case '0':

                pontosUm = 0
                break

            case '1':

                pontosUm = 1
                break

        }

        switch(elementoSelectDois.value){

            case '0':

                pontosDois = 0
                break

            case '1':

                pontosDois = 1
                break

        }

        switch(elementoSelectTres.value){

            case '0':

                pontosTres = 0
                break

            case '1':

                pontosTres = 1
                break

        }

        somaPontos = pontosUm + pontosDois + pontosTres

        if(elementoSelectUm.value != 2 && elementoSelectDois.value != 2 && elementoSelectTres.value != 2){

            if(elementoRadioAlert.checked){

                alert('Sua pontuação: ' + somaPontos + ' pontos! :D')
                elementoSelectUm.value = 2
                elementoSelectDois.value = 2
                elementoSelectTres.value = 2

            }else if(elementoRadioInput.checked){

                elementoInputResultado.value = somaPontos + ' pontos! :D'
                elementoLabelResultado.innerHTML = 'Label para resultado'
                elementoSelectUm.value = 2
                elementoSelectDois.value = 2
                elementoSelectTres.value = 2

            }else if(elementoRadioLabel.checked){

                elementoLabelResultado.innerHTML = 'Pontos: '+ somaPontos + ' pontos :D'
                elementoInputResultado.value = ''
                elementoSelectUm.value = 2
                elementoSelectDois.value = 2
                elementoSelectTres.value = 2

            }

        }else{

            alert('Alguma resposta não foi selecionada! =~')

        }

    }else{

        alert('Você deve marcar o checkbox para ver o seu resultado! :D')

    }

}
