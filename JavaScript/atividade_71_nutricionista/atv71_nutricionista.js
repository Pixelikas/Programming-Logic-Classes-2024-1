/* Um nutricionista precisa controlar a dieta para pacientes celíacos (intolerantes à glúten) e pacientes com intolerância à lactose. Criar um programa onde o paciente deve digitar seu nome e em seguida responder se é celíaco (primeira pergunta) e se é intolerante à lactose (segunda pergunta). Validar as respostas de SIM e NÃO para letras maiúsculas e minúsculas. Em seguida coletar os dados de 3 alimentos, sendo digitado o nome do alimento, se ele contém glúten ou não e se ele contém lactose ou não. Ao final, informar se o paciente pode comer os 3 alimentos digitados "Dieta adequada!" ou não pode "Dieta inadequada, contém alimentos aos quais o paciente é intolerante!". */

let nomePaciente, intoleranciaGluten, intoleranciaLactose
let respostaAlimentoGluten, respostaAlimentoLactose
let alimentoProibido = false

nomePaciente = prompt('Digite o seu nome: ')
intoleranciaGluten = prompt('Intolerante à glúten? (SIM/NÃO): ').toUpperCase()
intoleranciaLactose = prompt('Intolerante à lactose? (SIM/NÃO): ').toUpperCase()

prompt('Digite o primeiro alimento: ')
respostaAlimentoGluten = prompt('Alimento 1 possui glutén? (SIM/NÃO): ').toUpperCase()
respostaAlimentoLactose = prompt('Alimento 1 possui lactose? (SIM/NÃO): ').toUpperCase()

    if(respostaAlimentoGluten == 'SIM' && intoleranciaGluten == 'SIM' || respostaAlimentoLactose == 'SIM' && intoleranciaLactose == 'SIM'){

        alimentoProibido = true

    }

prompt('Digite o segundo alimento: ')
respostaAlimentoGluten = prompt('Alimento 2 possui glutén? (SIM/NÃO): ').toUpperCase()
respostaAlimentoLactose = prompt('Alimento 2 possui lactose? (SIM/NÃO): ').toUpperCase()

    if(respostaAlimentoGluten == 'SIM' && intoleranciaGluten == 'SIM' || respostaAlimentoLactose == 'SIM' && intoleranciaLactose == 'SIM'){

        alimentoProibido = true

    }

prompt('Digite o terceiro alimento: ')
respostaAlimentoGluten = prompt('Alimento 3 possui glutén? (SIM/NÃO): ').toUpperCase()
respostaAlimentoLactose = prompt('Alimento 3 possui lactose? (SIM/NÃO): ').toUpperCase()

    if(respostaAlimentoGluten == 'SIM' && intoleranciaGluten == 'SIM' || respostaAlimentoLactose == 'SIM' && intoleranciaLactose == 'SIM'){

        alimentoProibido = true

    }

if(alimentoProibido == true){

    alert('Dieta inadequada, contém alimentos aos quais o paciente é intolerante!')
    
}else{

    alert('Dieta adequada!')

}