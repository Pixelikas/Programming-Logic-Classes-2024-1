/* Você vai assistir a um filme no cinema e decide comprar algumas guloseimas antes de entrar para a sessão. O cinema oferece pipoca por 6 reais a unidade, chocolate por 3 reais a unidade e refrigerante por 8,50 reais a unidade. Faça um programa que pergunte quantos tipos de guloseimas você vai querer (1, 2 ou 3) e que após isso pergunte qual a guloseima e a quantidade (unidades). Ao final deve ser mostrado o valor total. (Exemplo: Digitei que quero 2 guloseimas, o programa me pergunta qual guloseima, eu digito “pipoca” e em seguida ele pergunta a quantidade, eu digito 2. Em seguida ele pergunta qual a segunda guloseima, eu digito refrigerante, quantidade 1. Nesse caso o total seria 2 x 6,00 + 1 x 8,50 = R$20,50.) */

let valorPipoca = 6, valorChocolate = 3, valorRefrigerante = 8.5
let tiposGuloseimas, guloseimaResposta, quantidadeGuloseima
let totalPagar = 0
let listaPedido = '>>>> Lista de Pedidos <<<<\n'

tiposGuloseimas = Number(prompt('Quantos tipos de guloseimas (1, 2, 3) vai querer?'))
listaPedido += `Você pediu ${tiposGuloseimas} tipos de guloseimas!\n\n`

    for(i=0; i < tiposGuloseimas; i++){
        
        guloseimaResposta = prompt(`Qual a guloseima número ${i+1}? (pipoca, chocolate, refrigerante)?`).toLowerCase()
        quantidadeGuloseima = Number(prompt('Qual a quantidade dessa guloseima?'))

        switch(guloseimaResposta){

            case 'pipoca':

                totalPagar += quantidadeGuloseima * valorPipoca
                listaPedido += `Pipoca (R$6,00) x ${quantidadeGuloseima}\n`
                break 
            
            case 'chocolate':

                totalPagar += quantidadeGuloseima * valorChocolate
                listaPedido += `Chocolate (R$3,00) x ${quantidadeGuloseima}\n`
                break 

            case 'refrigerante':

                totalPagar += quantidadeGuloseima * valorRefrigerante
                listaPedido += `Refrigerante (R$8,50) x ${quantidadeGuloseima}\n`
                break 

            default:
                alert('Você digitou uma guloisema inexistente!')

        }

    }

listaPedido += `\nTotal a pagar: R$ ${totalPagar}.`
alert(listaPedido)

