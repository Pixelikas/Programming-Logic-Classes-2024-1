/* 08 - Desenvolver um programa que realize o cálculo de consumo de combustível por quilometragem,
para veículos (km por litro). Para isso, devem ser digitados os dados de distância total
percorrida (km) e total de combustível gasto (litros), mostrando o resultado ao final. */

programa {
  funcao inicio() {
    
    real distanciaPercorrida, combustivelGasto
    real consumoVeiculo

    escreva("Digite a distância percorrida (km): ")
    leia(distanciaPercorrida)

    escreva("Digite o total de combustível gasto (litros): ")
    leia(combustivelGasto)

    consumoVeiculo = distanciaPercorrida / combustivelGasto

    escreva("Consumo do veículo: ", consumoVeiculo, "km/litro")

  }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 8; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */