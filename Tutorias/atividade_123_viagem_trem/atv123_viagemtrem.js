/* Você está fazendo um mochilão pela Europa e precisa saber qual a distância que vai percorrer em determinada viagem ou trecho da viagem, utilizando trem. De Bruxelas até Berlim são 764km e de Berlim até Praga são 350km. De Praga até Viena são mais 292km. De Viena até Budapeste, são outros 242km. Faça um sistema no qual o usuário digite a cidade de origem, em seguida a cidade de destino. Mostrar na tela a distância total (km) da viagem.

Bruxelas <-> Berlim = 764km
Berlim <-> Praga = 350km
Praga <-> Viena = 292km
Viena <-> Budapeste = 242km */

//                0            1         2         3         4 
let listaCidades = ['Bruxelas',  'Berlim', 'Praga',  'Viena', 'Budapeste']
let distanciasCidades = [0, 764, 350, 292, 242]
let cidadeOrigem, cidadeDestino, distanciaTotal = 0
let posicaoOrigem, posicaoDestino

    cidadeOrigem = prompt("Qual a cidade de origem: ")
    cidadeDestino = prompt("Qual a cidade de destino: ")

    posicaoOrigem = listaCidades.indexOf(cidadeOrigem)
    posDestino = listaCidades.indexOf(cidadeDestino)

    for(i = posicaoOrigem; i <= posicaoDestino; i++){
    
            distanciaTotal += distanciasCidades[i]
    
    }


alert(`Distância TOTAL: ${distanciaTotal}km.`)

