/* Faça um programa que crie um vetor vazio. Esse programa deve perguntar qual opção o usuário deseja (1, 2, 3, 0) e as opções devem executar as tarefas abaixo. Criar as mensagens e a forma de pesquisa / lista, da forma que achar melhor.

======== MENU ========
1- Cadastrar nome
2- Excluir um nome
3- Editar um nome
4- Pesquisar se um nome está cadastrado
5- Listar todos os nomes cadastrados
0- Sair do programa*/

let opEscolhida
let vetorNomes = []
let nomeAdd, nomePesquisa, nomeExcluir, nomeEditar
let posicaoNome, nomeNovo

    do{

        opEscolhida = Number(prompt(`======== MENU ========\n\n1 - Cadastrar nome\n2 - Excluir um nome\n3 - Editar um nome\n4 - Pesquisar se um nome está cadastrado\n5 - Listar todos os nomes cadastrados\n0 - Sair do programa\n`))
    
        switch(opEscolhida){
    
            case 0:
    
                alert("Saindo...")
                break
    
            case 1:
    
                nomeAdd = prompt("Digite o nome: ")
                vetorNomes.push(nomeAdd)
                alert("Cadastrado realizado!")
                break
    
            case 2:
    
                nomeExcluir = prompt("Digite o nome a excluir: ")
                posicaoNome = vetorNomes.indexOf(nomeExcluir)
                vetorNomes.splice(posicaoNome, 1)
                alert("Nome excluído!")
                break
    
            case 3:
    
                nomeEditar = prompt("Digite o nome a editar: ")
                nomeNovo = prompt("Digite o nome novo: ")
                posicaoNome = vetorNomes.indexOf(nomeEditar)
                vetorNomes[posicaoNome] = nomeNovo
                
                // vetorNomes.splice(posicaoNome, 1, nomeNovo)

                alert("Nome Editado!")
                break
    
            case 4:
    
                nomePesquisa = prompt("Digite o nome a pesquisar: ")
                vetorNomes.includes(nomePesquisa)
                
                if(vetorNomes.includes(nomePesquisa)){

                    alert("Nome existe na lista! :)")
                    
                }else{
                    
                    alert("Nome não existe na lista! :(")
                    
                }
 
                break
    
            case 5:
    
                alert(`>>>> Nomes Cadastrados <<<<\n\n${vetorNomes}`)
                break
    
            default:
    
                alert("Opção inválida!")
        
        }

    }while(opEscolhida != 0)
