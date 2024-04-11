/* Criar um programa que simule o login de um roteador. O nome de usuário (username) é "admin"
e a senha (password) "123". Pedir ao usuário para digitar username e password. Caso os dados
estejam corretos, mostrar uma mensagem "Login efetuado!", caso contrário "Login falhou!".
(DESAFIO: Mostrar mensagens específicas para erro de username, de password ou de ambos). */

programa {
  funcao inicio() {
    
    cadeia userRoteador = "admin"
    cadeia passwordRoteador = "123"
    cadeia userDigitado, passwordDigitado

    escreva("Digite o nome de usuário: ")
    leia(userDigitado)

    escreva("Digite a senha: ")
    leia(passwordDigitado)

    se(userDigitado == userRoteador e passwordDigitado == passwordRoteador){

      escreva("Login efetuado!")

    }
    
    se(userDigitado != userRoteador e passwordDigitado == passwordRoteador){

      escreva("Login falhou! Digita o usuário certo aí pô...")

    }
    
    se(userDigitado == userRoteador e passwordDigitado != passwordRoteador){

      escreva("Login falhou! Digita a senha certa aí pô...")

    }
    
    se(userDigitado != userRoteador e passwordDigitado != passwordRoteador){

      escreva("Login falhou! Tudo errado...")

    }

  }
}
