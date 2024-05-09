// Solicite ao usuário um valor em horas e converta para minutos e segundos.

programa {
  funcao inicio() {
    
    real quantidadeHoras, converteMinutos, converteSegundos
    real multiplicadorMinutosSegundos = 60

    escreva("Digite uma quantidade de horas: ")
    leia(quantidadeHoras)

    converteMinutos = quantidadeHoras * multiplicadorMinutosSegundos
    converteSegundos = converteMinutos * multiplicadorMinutosSegundos

    escreva("Horas em convertidas em minutos: ", converteMinutos, " minutos\n")
    escreva("Horas em convertidas em segundos: ", converteSegundos, " segundos\n")

  }
}
