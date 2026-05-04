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
                <div>Nome: <span class="produto">${matchingProduct.nome}</span><input class="js-produto-nome hiden inputProduto" type="text"> <img class="js-edit-name icon" src="./assets/edit-icon-black.svg" alt=""> </div>
                <div>Categoria: <span class="produto">${matchingProduct.categoria}</span><select class="js-categoria hiden inputProduto" name="cateforia" id="categoria">
                    <option value="escritorio">Materias de escritório</option>
                    <option value="TI">Equipamentos de TI</option>
                    <option value="eletrico">Materias elétricos</option>
                    <option value="Limpeza">Limpeza e manutenção</option>
                    <option value="producao">Materias de produção</option>
                    <option value="geral">Geral</option>
                </select> <img class="icon" src="./assets/edit-icon-black.svg" alt=""></div>
                <div>Quantidade: <span class="produto">${matchingProduct.quantidade}</span><input class="js-quantidade hiden inputProduto" type="number"> <img class="icon" src="./assets/edit-icon-black.svg" alt=""></div>
                <div>Estoque Mínimo: <span class="produto">${matchingProduct.estoqueMinimo}</span><input class="js-estoque-minimo hiden inputProduto" type="number"> <img class="icon" src="./assets/edit-icon-black.svg" alt=""></div>
                <div>Localização: <span class="produto">${matchingProduct.localizacao}</span><select class="jsLocalizacao hiden inputProduto" name="localizacao" id="localizacao">
                    <option value="prateleiraUm">Prateleira 1</option>
                    <option value="prateleiraDois">Prateleria 2</option>
                    <option value="prateleiraTres">Prateleira 3</option>
                    <option value="prateleiraQuatro">Prateleira 4</option>
                    <option value="prateleiraCinco">Prateleira 5</option>
                    <option value="prateleiraSeis">Prateleira 6</option>
                </select> <img class="icon" src="./assets/edit-icon-black.svg" alt=""></div>
                <div>Fornecedor: <span class="produto">${matchingProduct.fornecedor}</span><input class="js-fornecedor hiden inputProduto" type="text"> <img class="icon" src="./assets/edit-icon-black.svg" alt=""></div>
                <div>Data de entradada: <span class="produto">${matchingProduct.dataEntrada}</span><input class="js-data-produto hiden inputProduto" type="date"> <img class="icon" src="./assets/edit-icon-black.svg" alt=""></div>
                <div>Última moviemntação: <span class="produto"></span></div>   
        </div>
        <div class="buttonsBox">
        <button class="jsConfirmarEdicao hiden editBtn">Confirmar Edição</button>
        <button class="jsCancelarEdicao hiden editBtn">Cancelar Edição</button>
            <button class="js-editar-btn button" id="editar">editar <img class="icon" src="./assets/edit-icon.svg" alt=""></button>
            <button class="js-excluir-btn button" id="excluir">excluir <img class="icon" src="./assets/close-icon.svg" alt=""></button>
        </div>
`;

jsProdutoBox.innerHTML = produtoHTML;

const jsEditarBtn = document.querySelector('.js-editar-btn');

const jsEditName = document.querySelector('.js-edit-name');


jsEditarBtn.addEventListener('click', ()=>{
    editarProduto();
})