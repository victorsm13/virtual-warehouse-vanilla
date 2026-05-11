import { historico } from "../data/historico.js";
import { produtos } from "../data/data.js";

const jsHistoricoContainer = document.querySelector('.js-historico-container ');

let historicoHTML = ``;

historico.forEach((his)=>{

    let matchingProduct;

    produtos.forEach((produto)=>{

        if(produto.id === his.id){
            console.log('Olá')
            matchingProduct = produto;
        }
    });

    historicoHTML+= `
    <div class="historico-grid">
            <span>Produto: <span class="var">${matchingProduct.nome}</span></span>
            <span>Movimentação:  <span class="var">${his.modificacao}</span></span>
            <span>Valor:  <span class="var">${his.valor}</span></span>
            <span>Data <span class="var">${his.data}</span></span>
        </div>
    `
});

jsHistoricoContainer.innerHTML = historicoHTML;