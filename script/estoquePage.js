import { produtos } from "../data/data.js";

const jsProdutosContainer = document.querySelector('.jsProdutosContainer');

let produtosHTML = '';

produtos.forEach((produto)=>{

   produtosHTML+= `
   <div class="produtos-box">
            <img class="close-icon icon" class="" src="./assets/close-icon.svg" alt="close-icon">
            <img class="edit-icon icon" src="./assets/edit-icon.svg" alt="edit-icon">
                <span>Nome: <span class="produto nome">${produto.nome}</span></span>
                <span>Quantidade: <span class="produto quantidade">${produto.quantidade}</span></span>
                <span>Localização: <span class="produto localizacao">${produto.localizacao}</span></span>
                <span>Data Entrada: <span class="produto data">${produto.dataEntrada}</span></span>
    </div>
   `;
})

jsProdutosContainer.innerHTML = produtosHTML;