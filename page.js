function pesquisar(){
    
    //console.log(dados); 
    let section = document.getElementById("resultados-pesquisa")
/* section.innerHTML = ''; */
console.log(section);
let resultados = ""
for (let dado of dados) {
    
    resultados += `
     <div class="item-resultado">
     <h2> <a href="#" target="_blank">${dado.item}</a><img src="${dado.img}" alt=""></h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}">Mais informações</a> 
                    </div>
                    
                    `
                }
                
                section.innerHTML = resultados
            }