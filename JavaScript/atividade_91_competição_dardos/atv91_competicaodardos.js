/* Em uma competição de dardos, os competidores se classificam para a próxima fase caso consigam 75% ou mais da pontuação total, que é 60 pontos. Caso consiga 50% ou mais, porém abaixo de 75%, vai para a repescagem. Menos que isso, é eliminado. Cada arremesso pode marcar de 0 a 10 pontos, dependendo da precisão. Criar um programa para armazenar a pontuação dos 6 arremessos de um competidor e ao final mostrar uma mensagem com sua pontuação, seu desempenho (percentual) e se ele está classificado, se foi para a repescagem ou se está desclassificado. */

let pontuacaoArremesso
let pontuacaoMaxima = 60
let numeroArremessos = 6
let pontuacaoTotal = 0
let percentualDesempenho
let percClassificado = 75
let percRepescagem = 50

for(i=0; i < numeroArremessos; i++){

    pontuacaoArremesso = Number(prompt(`Digite a pontuação (De 0 a 10) do arremesso ${i+1}: `))
    pontuacaoTotal += pontuacaoArremesso

}

percentualDesempenho = Number(((pontuacaoTotal * 100) / pontuacaoMaxima).toFixed(2))

switch(true){

    case percentualDesempenho >= percClassificado:
        alert(`Pontuação Total: ${pontuacaoTotal} pontos\nPercentual Desempenho: ${percentualDesempenho}%\nCLASSIFICADO! :D`)
        break

    case percentualDesempenho >= percRepescagem && percentualDesempenho < percClassificado:
        alert(`Pontuação Total: ${pontuacaoTotal} pontos\nPercentual Desempenho: ${percentualDesempenho}%\nREPESCAGEM! :|`)
        break

    case percentualDesempenho < percRepescagem:
        alert(`Pontuação Total: ${pontuacaoTotal} pontos\nPercentual Desempenho: ${percentualDesempenho}%\nDESCLASSIFICADO! :(`)
        break

    case percentualDesempenho < 0 || percentualDesempenho > 100:
        alert('Algum valor de pontuação não está correto!')
        break

}
