// SELECIONAR UL DE OPÇOES
const listaOpcoes = document.querySelector(".secaoDetalhesConta_opcoesTransacoes")


//ADICIONANDO ESCUTADOR DE EVENTOS
listaOpcoes.addEventListener("click", indentificadorOpcoes)


//EXECUTANDO AÇAO DEPOIS DO CLIQUE
function indentificadorOpcoes(event){


    //IDENTIFICANDO ONDE OCORREU O CLIQUE    
    const li = event.target


    //VERIFICANDO SE É UM LI
    if(li.tagName == "LI"){

        //RECUPERANDO O ID
        const id = li.id
    }


}