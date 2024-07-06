/* Uma sorveteria possui um sistema de self-service de sorvetes no qual o cliente pode montar seu sorvete com até 4 bolas (sabores). Criar um programa que simule esse sistema.

1- Adicionar sabor
2- Remover sabor
3- Visualizar sorvete
4- Finalizar pedido

======== MENSAGENS e VALIDAÇÕES ========
Opção 1-> “Sabor adicionado!” OU “Limite de sabores atingido, remova um sabor!”
Opção 2-> “Sabor removido!” OU “Não existem sabores adicionados!”
Opção 3-> “"Camada 1 - Sabor X, Camada 2 - Sabor Y, etc.” OU “Seu sorvete não possui sabores!”
Opção 4-> “Pedido realizado!” OU “Adicione pelo menos um sabor!” */

// Cria variáveis e vetor
let saboresSorvete = []
let opDigitada, addSabor
let maximoSabores = 4
let podeSair = false
let caxquinha = 0

do{

        opDigitada = Number(prompt(`>>>> Bem-vindo ao IceCREAM Self-Service <<<<\n\n1 - Adicionar sabor\n2 - Remover o último sabor\n3 - Visualizar\n4 - Finalizar pedido\n\nEscolha uma opção: `))

        switch(opDigitada){

                case 1: 

                        if(saboresSorvete.length >= maximoSabores){

                                alert("Impossíveeeeel, remova um sabor!")

                        }else{

                                addSabor = prompt("Digite o sabor a ser adicionado: ")
                                saboresSorvete.push(addSabor)
                                alert("Sabor adicionado! =]~")

                        }

                        break

                case 2: 

                        if(saboresSorvete.length == caxquinha){

                                alert("Imposíveeeeel, só tem a caxquinha! =~~")

                        }else{


                                saboresSorvete.pop()
                                alert("Último sabor removido! =[~")

                        }

                        break

                case 3: 

                        if(saboresSorvete.length == caxquinha){

                        alert("Sabor caxquinha! =~~")
                        
                        // Senão
                        }else{

                        alert(`Sabores: ${saboresSorvete}.`)

                        }
                        
                        break


                case 4: 

                        if(saboresSorvete.length > caxquinha){

                        alert("Pedido finalizado! :DDDDDD")
                        podeSair = true
                
                        }else{

                        alert("Adicione ao menos um sabor! :)")

                        }

                        break

                default:

                        alert("Opcão inválida!")

        }

}while(!podeSair)

