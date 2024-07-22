/* Criar um sistema para compra de produtos + desconto, com HTML e JS.
O sistema deve deve seguir o layout anexo (imagem).

  - O usuário deverá informar dados de 4 produtos (descrição, quantidade e valor).
  - Um percentual de desconto deve ser informado.
  - Ao final deve ser mostrado o valor total da compra com o desconto.
*/

let qntdUm = document.getElementById("quantidadeUm")
let vlUm = document.getElementById("valorUm")

let qntdDois = document.getElementById("quantidadeDois")
let vlDois = document.getElementById("valorDois")

let qntdTres = document.getElementById("quantidadeTres")
let vlTres = document.getElementById("valorTres")

let qntdQuatro = document.getElementById("quantidadeQuatro")
let vlQuatro = document.getElementById("valorQuatro")

let descTotal = document.getElementById("descProdutos")
let totalGeral, totalGeralDesc

function Calcula(){

    totalGeral = ((Number(qntdUm.value * vlUm.value)) + (Number(qntdDois.value * vlDois.value)) + (Number(qntdTres.value * vlTres.value)) + (Number(qntdQuatro.value * vlQuatro.value))).toFixed(2)

    totalGeralDesc = (totalGeral * descTotal.value) / 100

    document.getElementById("resultado").value = "R$" + (totalGeral - totalGeralDesc)

}


