/* Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit. Mostrar o resultado na tela. */

let temperaturaCelsius, temperaturaFahrenheit

temperaturaCelsius = Number(prompt("Digite a temperatura em °C: "))

temperaturaFahrenheit = (temperaturaCelsius * 1.8) + 32

alert("Temperatura em Fahrenheit: " + temperaturaFahrenheit + "°F")