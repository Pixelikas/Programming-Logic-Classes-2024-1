/* Faça um programa no qual o usuário digite a cor que está no semáforo (verde, amarelo, vermelho). Caso seja digitado verde, mostre na tela "Pode seguir!", se for digitado amarelo, mostre "Alerta, pare!" e se for digitado vermelho, mostre "Pare imediatamente!". */

let corSemaforo

corSemaforo = prompt('Digite a cor do semáforo: ').toUpperCase()

if(corSemaforo == 'VERDE'){

    alert('Pode seguir!')

}else if(corSemaforo == 'AMARELO'){

    alert('Alerta, pare!')

}else if (corSemaforo == 'VERMELHO'){

    alert('Pare imediatamente!')

}