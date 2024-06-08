/* Um hotel possui 130 leitos no total, mas devido a problemas, está atendendo somente com capacidade de 50% leitos, sendo que desses, 25 estão ocupados pelas próximas semanas. Faça um programa que o usuário digite o número de pessoas que entra (com números positivos) e o número de pessoas que saem (com números negativos). Caso a capacidade de 50% seja ultrapassada, mostrar mensagem “não é possível pois ultrapassa a capacidade em X leitos”, sendo X o número a mais de hóspedes que ficariam sem leito. (DESAFIO: Criar condição para não aceitar abrir novas vagas digitando número negativo caso já estejam as 40 vagas livres). */ 

let leitosTotal = 130, leitosIndisponiveis = 130/2, limitacao = 25
let leitosDisponiveis = leitosTotal - leitosIndisponiveis - limitacao
let entradaSaida, leitosMaximo = 40

    while(leitosDisponiveis >= 0){

        entradaSaida = Number(prompt("Quantos hóspedes entram ou saem: "))

        if(entradaSaida >= 0){

            leitosDisponiveis = leitosDisponiveis - entradaSaida

        }else{

            if(leitosDisponiveis == leitosMaximo){

                alert("Não pode abrir vagas!")

            }else{

                leitosDisponiveis = leitosDisponiveis - entradaSaida

            }

        }

    }

    alert(`Não é possível pois excede o número de leitos em ${(leitosDisponiveis*(-1))}.`)

    