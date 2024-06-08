/* O acampamento base sul do Everest fica a cerca de 5.360m de altura. A partir dele, muitas expedições partem rumo ao cume que fica a 8.848m de altura, levando dias para chegar. Considerando a saída do acampamento base, faça um programa que pergunte ao usuário a altitude em metros escalada no dia. Caso seja atingida a marca de 8 dias e não tenha chegado ao cume, mostrar mensagem “Você deve voltar, pois corre risco de ficar sem oxigênio”. Se chegar ao cume em menos de 8 dias, mostrar a quantidade de dias que foram necessários para tal. */

const baseMontanha = 5360, cumeMontanha = 8848
let escaladaTotal = cumeMontanha - baseMontanha
let escaladaDia, escaladaAcumulada = 0, contagemDias = 0
let totalMaximoDias = 8

    while(escaladaAcumulada < escaladaTotal && contagemDias < totalMaximoDias){

        escaladaDia = Number(prompt("Altitude escalada no dia: "))
        escaladaAcumulada += escaladaDia

        alert(`Faltam ${escaladaTotal-escaladaAcumulada} metros para o cume!`)

        contagemDias++   

    }

    if (contagemDias == totalMaximoDias && escaladaAcumulada < escaladaTotal){

        alert("Volta, maluuuuco! Teu oxigênio vai acabar :(")

    }else{

        alert(`Você alcançou o cume em ${contagemDias} dias.`)

    }
