/* Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas. */

let anoAtual, anoNascimento
let idadeAnos, idadeMeses, idadeSemanas, idadeDias
let diasAno = 365, semanasAno = 54, mesesAno = 12

anoAtual = Number(prompt("Digite o ano atual: "))
anoNascimento = Number(prompt("Digite o ano do seu nascimento: "))

idadeAnos = anoAtual - anoNascimento
idadeMeses = idadeAnos * mesesAno
idadeSemanas = idadeAnos * semanasAno
idadeDias = idadeAnos * diasAno

alert(`>>>>> Conversão da sua Idade <<<<<\n\nIdade em anos: ${idadeAnos} anos.\nIdade em meses: ${idadeMeses} meses.\nIdade em semanas: ${idadeSemanas} semanas.\nIdade em dias: ${idadeDias} dias.`)