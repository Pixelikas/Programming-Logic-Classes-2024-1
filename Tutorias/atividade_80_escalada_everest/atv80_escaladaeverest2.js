/* O acampamento base sul do Everest fica a cerca de 5.360m de altura. A partir dele, muitas expedições partem rumo ao cume que fica a 8.848m de altura, levando dias para chegar. Considerando a saída do acampamento base, faça um programa que pergunte ao usuário a altitude em metros escalada no dia. Caso seja atingida a marca de 8 dias e não tenha chegado ao cume, mostrar mensagem “Você deve voltar, pois corre risco de ficar sem oxigênio”. Se chegar ao cume em menos de 8 dias, mostrar a quantidade de dias que foram necessários para tal. */

let baseMontanha = 5360
let cumeMontanha = 8848
let totalMaximoDias = 8
let escaladaDia

    for(i=0; i < totalMaximoDias; i++){

        escaladaDia = Number(prompt("Altitude escalada no dia: "))

        baseMontanha += escaladaDia

        if(baseMontanha >= cumeMontanha){

            alert(`Você alcançou o cume em ${i+1} dias.`)
            break

        }

    }

    if (i == totalMaximoDias){

        alert("Volta, maluuuuco! :(")

    }
