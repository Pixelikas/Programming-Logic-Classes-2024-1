/* Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores). Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.*/

let totalVotos, votosX, votosY, votosBrancos, votosNulos
let percVotosX, percVotosY, percVotosBrancos, percVotosNulos

totalVotos = Number(prompt("Total de eleitores: "))

votosX = Number(prompt("Total votos X: "))
votosY = Number(prompt("Total votos Y: "))
votosBrancos = Number(prompt("Total votos brancos: "))
votosNulos = Number(prompt("Total votos nulos: "))

percVotosX = (votosX * 100) / totalVotos
percVotosY = (votosY * 100) / totalVotos
percVotosBrancos = (votosBrancos * 100) / totalVotos
percVotosNulos = (votosNulos * 100) / totalVotos

alert(`>>>>> Relatório de Apuração dos Votos <<<<<\n\nTotal votos: ${totalVotos}\nPercentual X: ${percVotosX}%\nPercentual Y: ${percVotosY}%\nPercentual Brancos: ${percVotosBrancos}%\nPercentual Nulos: ${percVotosNulos}%\n`)




