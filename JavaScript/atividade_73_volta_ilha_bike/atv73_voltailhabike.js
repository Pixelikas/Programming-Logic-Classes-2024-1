/* Você é um ciclista profissional e pretende participar da competição "Volta à Ilha de Bike", revezamento em equipes, com equipes de 4 integrantes. O percurso tem um total de 140km, sendo dividido em 4 partes: Trecho 1 Av. Beira-Mar até Cachoeira do Bom Jesus (30km), Trecho 2 Cachoeira do Bom Jesus até Lagoa da Conceição (45km), Trecho 3 Lagoa da Conceição até Pântano do Sul (30km), Trecho 4 Pântano do Sul até Av. Beira-Mar (35km). Criar um programa que recebe o nome da equipe, em seguida o nome de cada um dos 4 integrantes e o tempo em horas que gastou pedalando o seu trecho. Ao final mostrar a velocidade média de cada trecho e a velocidade média geral (total dos 4 trechos) com duas casas após a vírgula. Se a velocidade média geral ficar abaixo de 15km/h mostrar uma mensagem "Desempenho pode melhorar bastante!", caso a velocidade média fique de 15 a 18km/h mostrar uma mensagem "Desempenho bom, mas ainda pode melhorar!" e se a média ficar acima de 18km/h mostrar uma mensagem "Desempenho excelente. Parabéns!" */

let nomeEquipe
let nomeParticipanteUm, nomeParticipanteDois, nomeParticipanteTres, nomeParticipanteQuatro
let tempoTrechoUm, tempoTrechoDois, tempoTrechoTres, tempoTrechoQuatro
let kmTrechoUm = 30, kmTrechoDois = 45, kmTrechoTres = 30, kmTrechoQuatro = 35, kmTotal
let mediaTrechoUm, mediaTrechoDois, mediaTrechoTres, mediaTrechoQuatro, mediaTotal
let totalTrechos = 4

nomeEquipe = prompt('Digite o nome da equipe: ')

nomeParticipanteUm = prompt('Nome do participante 1: ')
tempoTrechoUm = Number(prompt('Tempo (em horas) do trecho 1:'))
mediaTrechoUm = Number((kmTrechoUm / tempoTrechoUm).toFixed(2))

nomeParticipanteDois = prompt('Nome do participante 2: ')
tempoTrechoDois = Number(prompt('Tempo (em horas) do trecho 2:'))
mediaTrechoDois = Number((kmTrechoDois / tempoTrechoDois).toFixed(2))

nomeParticipanteTres = prompt('Nome do participante 3: ')
tempoTrechoTres = Number(prompt('Tempo (em horas) do trecho 3:'))
mediaTrechoTres = Number((kmTrechoTres / tempoTrechoTres).toFixed(2))

nomeParticipanteQuatro = prompt('Nome do participante 4: ')
tempoTrechoQuatro = Number(prompt('Tempo (em horas) do trecho 4:'))
mediaTrechoQuatro = Number((kmTrechoQuatro / tempoTrechoQuatro).toFixed(2))

kmTotal = kmTrechoUm + kmTrechoDois + kmTrechoTres + kmTrechoQuatro
mediaTotal = Number(((mediaTrechoUm + mediaTrechoDois + mediaTrechoTres + mediaTrechoQuatro) / totalTrechos).toFixed(2))

alert(`Velocidade média Trecho 1: ${mediaTrechoUm}km/h\nVelocidade média Trecho 2: ${mediaTrechoDois}km/h\nVelocidade média Trecho 3: ${mediaTrechoTres}km/h\nVelocidade média Trecho 4: ${mediaTrechoQuatro}km/h\n\nVelocidade média GERAL: ${mediaTotal}km/h`)

switch(true){

    case mediaTotal < 15:
        alert('Desempenho pode melhorar bastante!')
        break

    case mediaTotal >= 15 && mediaTotal <= 18:
        alert('Desempenho bom, mas ainda pode melhorar!')
        break

    case mediaTotal > 18:
        alert('Desempenho excelente. Parabéns!')
        break
}