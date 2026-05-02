import { produtos } from "../data/data.js";

const url = new URL (window.location.href);

const produtoId = url.searchParams.get("produtoId");

let produtoHTML = '';

const jsProdutoBox = document.querySelector('.jsProdutoBox');

let matchingProduct;


produtos.forEach((produto)=>{

    if(produto.id === produtoId){
        matchingProduct = produto
    };
});


produtoHTML = `
        <img class="product-icon" src="./assets/product-icon.svg" alt="product-icon">
         <div class="product-informations-box">
                <div>Nome: <span class="produto">${matchingProduct.nome}</span></div>
                <div>Categoria: <span class="produto">${matchingProduct.categoria}</span></div>
                <div>Quantidade: <span class="produto">${matchingProduct.quantidade}</span></div>
                <div>Estoque Mínimo: <span class="produto">${matchingProduct.estoqueMinimo}</span></div>
                <div>Localização: <span class="produto">${matchingProduct.localizacao}</span></div>
                <div>Fornecedor: <span class="produto">${matchingProduct.fornecedor}</span></div>
                <div>Data de entradada: <span class="produto">${matchingProduct.dataEntrada}</span></div>
                <div>Última moviemntação: <span class="produto"></span></div>   
        </div>
        <div class="buttonsBox">
            <button id="editar">editar <img class="icon" src="./assets/edit-icon.svg" alt=""></button>
            <button id="excluir">excluir <img class="icon" src="./assets/close-icon.svg" alt=""></button>
        </div>
`;

jsProdutoBox.innerHTML = produtoHTML;
