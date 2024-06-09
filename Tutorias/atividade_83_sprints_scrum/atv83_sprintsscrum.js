/* SCRUM é uma metodologia ágil de gerenciamento de projetos muito utilizada na área da tecnologia. Dentro do SCRUM, o planejamento é realizado através de 'sprints' que normalmente variam de 15 a 30 dias. Criar um programa onde o usuário deve digitar o tempo total do projeto em dias e o período das sprints. Após calculado o número de sprints (média), cadastrar para cada sprint um título e um objetivo.*/ 

let tempoTotalDias
let periodoSprint, quantidadeSprints
let tituloSprint, objetivoSprint

tempoTotalDias = Number(prompt('Qual o tempo total (em dias) do projeto?'))
periodoSprint = Number(prompt('Qual o tempo (em dias) de cada sprint?'))

quantidadeSprints = tempoTotalDias / periodoSprint

alert(`O seu projeto possui ${quantidadeSprints} sprints.`)

for(i=0; i < quantidadeSprints; i++){

    tituloSprint = prompt(`Titulo da sprint ${i+1}: `)
    objetivoSprint = prompt(`Objetivo da sprint ${i+1}: `)

}
