// SELECIONAR UL DE OPÇOES
const listaOpcoes = document.querySelector(".secaoDetalhesConta_opcoesTransacoes")


//ADICIONANDO ESCUTADOR DE EVENTOS
listaOpcoes.addEventListener("click", indentificadorOpcoes)


//EXECUTANDO AÇAO DEPOIS DO CLIQUE
function indentificadorOpcoes(event){


    //IDENTIFICANDO ONDE OCORREU O CLIQUE    
    const li = event.target //target ele traz o elemento exato que aconteceu o click


    //VERIFICANDO SE É UM LI
    if(li.tagName == "LI"){

        //RECUPERANDO O ID
        const id = li.id

        //SELECIONANDO UMA SEÇAO UTILIZANDO UMA ID(ESCOLHA DO USUARIO)
        const secaoEscolha =document.querySelector(`div[data-id="${id}"]`)
        
        //REMOVENDO CLASSE MOSTRAR
        removeClasseMostrar()

        //ADICIONAR UMA CLASSE
        secaoEscolha.classList.add("mostrar")
    }
 }

 //FUNÇAO PARA REMOVER AS CLASSES DAS DIVS:
 function removeClasseMostrar(){
     const divs = document.querySelectorAll(".secaoTranzacao .container div")

     for(let i = 0; i < divs.length; i++){
         divs[i].classList.remove("mostrar")
     }
 }