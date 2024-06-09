/* Um determinado restaurante trabalha com limite de lotação de 50 pessoas. Porém, mesmo com esse limite, o restaurante pode encerrar seu atendimento antes do horário por falta de insumos para produção das refeições. Criar um programa que receba os dados da quantidade de pessoas que chegam ao restaurante (repetidamente) e se os insumos estão "ok" ou "insuficientes". Caso alguma das duas possibilidades aconteça, encerrar o programa e mostrar ao final o motivo do encerramento (atingiu limite de pessoa ou faltaram insumos). */

let capacidadeMaxima = 50
let entradaPessoas
let quantidadePessoas = 0
let verificaInsumos

do{

    entradaPessoas = Number(prompt('Quantas pessoas estão entrando?'))
    quantidadePessoas += entradaPessoas

    verificaInsumos = prompt('Como estão os insumos (ok ou insuficientes)?')

}while(quantidadePessoas < capacidadeMaxima && verificaInsumos == "ok")


if(quantidadePessoas >= capacidadeMaxima && verificaInsumos == 'ok'){

    alert('Encerrou pois atingiu a capacidade máxima!')

}else if(quantidadePessoas < capacidadeMaxima && verificaInsumos == 'insuficientes'){

    alert('Encerrou pois faltaram insumos!')

}else if(quantidadePessoas >= capacidadeMaxima && verificaInsumos == 'insuficientes'){

    alert('Encerrou pois atingiu a capacidade máxima e faltaram insumos!')

}