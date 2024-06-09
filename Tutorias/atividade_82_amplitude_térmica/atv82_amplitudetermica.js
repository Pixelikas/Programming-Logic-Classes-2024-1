/* Santa Catarina é conhecida por suas quatro estações bem definidas, o que o torna um estado com alta amplitude térmica (diferença entre a maior e a menor temperatura, registrada em um período). O INMET, Instituto Nacional de Meteorologia, pretende ter os dados de amplitude térmica de uma cidade ou estado. Desenvolva um programa que calcule e mostre os dados diários (segunda à sexta) e a média de amplitude térmica semanal, mostrando os resultados ao final. Exemplo: Digitar o nome da cidade ou estado, perguntar para os cinco dias da semana a maior temperatura do dia e a menor. Mostrar as amplitudes de cada dia e a média. */

let nomeCidadeEstado
let quantidadeDias = 5
let temperaturaMenor, temperaturaMaior
let amplitudeTermicaDia, somaAmplitudes = 0, mediaAmplitudes
let listaAmplitudes = `>>>> Amplitudes e Média <<<<\n\n`

nomeCidadeEstado = prompt('Digite o nome da cidade ou estado: ')

for(i=0; i < quantidadeDias; i++){

    temperaturaMenor = Number(prompt(`Qual foi a menor temperatura (Celsius) do dia ${i+1}? `))
    temperaturaMaior = Number(prompt(`Qual foi a maior temperatura (Celsius) do dia ${i+1}? `))
    amplitudeTermicaDia = temperaturaMaior - temperaturaMenor
    somaAmplitudes += amplitudeTermicaDia

    listaAmplitudes += `Dia ${i+1}: ${amplitudeTermicaDia} graus\n`

}

mediaAmplitudes = Number((somaAmplitudes / quantidadeDias).toFixed(2))
listaAmplitudes += `\nMédia das Amplitudes: ${mediaAmplitudes} graus`

alert(listaAmplitudes)