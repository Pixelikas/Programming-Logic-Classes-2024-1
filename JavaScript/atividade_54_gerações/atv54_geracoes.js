/* Criar um programa onde o usuário digite o ano do seu nascimento e retorne a geração a qual ele pertence:

Sem Geração (até 1945)
Baby Boomers (nascidos entre 1946 e 1964)
Geração X (1965-1980)
Geração Y ou Millennials (1981-1996)
Geração Z (1997-2010)
Geração Alfa (a partir de 2011)*/

let anoNascimento

anoNascimento = Number(prompt('Digite o ano do seu nascimento: '))

switch(true){

    case anoNascimento < 1946: 
        alert('Sem geração! :O')
        break

    case anoNascimento >= 1946 && anoNascimento < 1965:
        alert('Baby Boomer! >.<')
        break

    case anoNascimento >= 1965 && anoNascimento < 1981:
        alert('Geração X! =D')
        break
    
    case anoNascimento >= 1981 && anoNascimento < 1997:
        alert('Geração Y! =D')
        break

    case anoNascimento >= 1997 && anoNascimento < 2011:
        alert('Geração Z! =D')
        break

    case anoNascimento >= 2011:
        alert('Geração Alfa! =D')
        break

    default:
        alert('Olha môqueridu, digita algo certo aí! :)')

}