/* Crie um programa que solicite a senha de um usuário e depois, peça pra digitar novamente até que as duas senhas sejam correspondentes. */

let senhaUser
let senhaRepete

senhaUser = prompt('Digite uma senha: ')

do{

    senhaRepete = prompt('Repita a senha: ')

    if(senhaUser != senhaRepete){

        alert('Senha não confere. Digite novamente! =~')

    }

}while(senhaUser != senhaRepete)

alert('Ok, senha validada! :D')
