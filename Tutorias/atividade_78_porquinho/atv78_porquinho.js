/* Elaborar um sistema similar a um cofre "porquinho". O cofre aceita moedas de 1 centavo, 5 centavos, 10 centavos, 25 centavos e 50 centavos. O programa deve iniciar perguntando qual moeda deseja inserir no cofre e repetir o processo até que o usuário digite 0 (condição para encerrar). Após encerrar, deve-se mostrar a quantidade de cada tipo de moeda que foi inserida naquele dia e o total acumulado de economia. */

let valorMoeda
let contadorMoedaUm = 0, contadorMoedaCinco = 0, contadorMoedaDez = 0, contadorMoedaVinteCinco = 0, contadorMoedaCinquenta = 0
let totalMoedas = 0 

    while(valorMoeda != 0){

        valorMoeda = Number(prompt("Digite o valor da moeda (1, 5, 10, 25, 50), ou digite 0 para encerrar: "))

        switch(valorMoeda){

            case 1:

                totalMoedas += 1
                contadorMoedaUm++
                break

            case 5:

                totalMoedas += 5
                contadorMoedaCinco++
                break

            case 10:

                totalMoedas += 10
                contadorMoedaDez++
                break

            case 25:

                totalMoedas += 25
                contadorMoedaVinteCinco++
                break

            case 50:

                totalMoedas += 50
                contadorMoedaCinquenta++
                break

            case 0:
                alert('Tchauuuuuuuu! :D')
                break

            default:
                alert('Digite um valor de moeda válido! :B')

        }

    }

    alert(`>>>> Resumo do Dia - Cofrinho <<<<\n\nValor Total: R$${totalMoedas}\nMoedas de 1 centavo: ${contadorMoedaUm}\nMoedas de 5 centavos: ${contadorMoedaCinco}\nMoedas de 10 centavos: ${contadorMoedaDez}\nMoedas de 25 centavos: ${contadorMoedaVinteCinco}\nMoedas de 50 centavos: ${contadorMoedaCinquenta}`)
