/* Desenvolva um programa onde o nadador digite a sua idade e mostre na tela a qual categoria ele pertence.
 
  - "Infantil A" de 5 a 7 anos de idade
  - "Infantil B" de 8 a 10 anos de idade
  - "Juvenil A" de 11 a 13 anos de idade
  - "Juvenil B" de 14 a 17 anos de idade
  - "Senior" com 18 anos de idade ou mais */

  let idadeNadador

  idadeNadador = Number(prompt('Nadador, por favor, digite a sua idade: '))

  switch(true){

    case idadeNadador >= 5 && idadeNadador < 8:
        alert('Categoria Infantil A!')
        break

    case idadeNadador >= 8 && idadeNadador < 11:
        alert('Categoria Infantil B!')
        break

    case idadeNadador >= 11 && idadeNadador < 14:
        alert('Categoria Juvenil A!')
        break

    case idadeNadador >= 14 && idadeNadador < 18:
        alert('Categoria Juvenil B!')
        break

    case idadeNadador >= 18:
        alert('Categoria Sênior!')
        break

    deafult:
        alert('Não se enquadra em nenhuma categoria!')

  }