/*  Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos. Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental. Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) existem dentre esse total e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos.*/

let areaSolteiro = 320
let areaCasal = 400
let totalFemeas = 9
let totalMachos = 5
let totalGeralIndividuos
let quantidadeCasais
let quantidadeSolteiros
let areaTotalSolteiros, areaTotalCasais
let totalGeralArea

totalGeralIndividuos = totalMachos + totalFemeas

quantidadeCasais = Number(prompt('Digite o número de casais: '))
quantidadeSolteiros = totalGeralIndividuos - (quantidadeCasais * 2)

areaTotalSolteiros = quantidadeSolteiros * areaSolteiro
areaTotalCasais = quantidadeCasais * areaCasal

totalGeralArea = areaTotalSolteiros + areaTotalCasais

alert(`>>>> Relatório de campo Leões Baios <<<<\n\nTotal de leões: ${totalGeralIndividuos}\nTotal de Casais: ${quantidadeCasais}\nTotal de solteiros: ${quantidadeSolteiros}\nÁrea total solteiros: ${areaTotalSolteiros}km²\nÁrea total casais: ${areaTotalCasais}km²\nÁREA TOTAL GERAL: ${totalGeralArea}km²`)
