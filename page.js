function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    

    //Aqui faz com que quando o botão de pesquisar for apertado sem escrever nada no input, ele retorna a frase "nenhum resultado"
    if (!campoPesquisa){
        section.innerHTML = "<p class='retorno'>Nenhum resultado ⚠ <p/>";
        return
    }

    //Independente do usuário escrever com letra minúscula uo maiúscula, vai funcionar
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let item = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        item = dado.item.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        descricao = dado.tags.toLowerCase()
        
        if (item.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            //cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href=${dado.linksite} target="_blank">${dado.item}</a>
                    <img src=${dado.img} alt="">
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
        
    }
    
    if(!resultados){
     resultados = "<p class='retorno'>Esse item não existe na base de dados ⚠</p>" ;
    } 
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}