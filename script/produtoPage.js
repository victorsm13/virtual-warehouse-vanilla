import { produtos, atualizarProduto, excluirProduto } from "../data/data.js";
import { caixaDeErro, closeMessageBox, monstrarMensagemSucesso } from "../utils/messagesBox.js";
import { confirmarMovimentação } from "../utils/confirmarPromise.js"
import { movimentacaoProduto, historico } from "../data/historico.js";

renderProducts();

function renderProducts(){

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


let historicoProduto;


for(let i = 0; i < historico.length ; i++){
    if(matchingProduct.id === historico[i].id){
        historicoProduto = historico[i].data;
        break;
    } else {
        historicoProduto = 'Sem histórico';
    }
};



produtoHTML = `
        <img class="product-icon" src="./assets/product-icon.svg" alt="product-icon">
         <div class="product-informations-box">
                <div>Nome: <span class="produto nome">${matchingProduct.nome}</span><input class="js-edit-nome hiden inputProduto" type="text"> <img class="icon" data-edit="nome" src="./assets/edit-icon-black.svg" alt=""> </div>
                <div>Categoria: <span class="produto categoria">${matchingProduct.categoria}</span><select class="js-edit-categoria hiden inputProduto" name="cateforia" id="categoria">
                    <option value="escritorio">Materias de escritório</option>
                    <option value="TI">Equipamentos de TI</option>
                    <option value="eletrico">Materias elétricos</option>
                    <option value="Limpeza">Limpeza e manutenção</option>
                    <option value="producao">Materias de produção</option>
                    <option value="geral">Geral</option>
                </select> <img class=" icon" data-edit="categoria" src="./assets/edit-icon-black.svg" alt=""></div>
                <div>Quantidade: <span class="produto quantidade">${matchingProduct.quantidade}</span><input class="js-edit-quantidade hiden inputProduto" data-edit="quantidade" type="number"> <img class=" icon" data-edit="quantidade" src="./assets/edit-icon-black.svg" alt=""></div>
                <div>Estoque Mínimo: <span class="produto estoqueMinimo">${matchingProduct.estoqueMinimo}</span><input class="js-edit-estoqueMinimo hiden inputProduto" type="number"> <img class=" icon" data-edit="estoqueMinimo" src="./assets/edit-icon-black.svg" alt=""></div>
                <div>Localização: <span class="produto prateleira">${matchingProduct.localizacao}</span><select class="js-edit-prateleira hiden inputProduto" name="localizacao" id="localizacao">
                    <option value="prateleiraUm">Prateleira 1</option>
                    <option value="prateleiraDois">Prateleria 2</option>
                    <option value="prateleiraTres">Prateleira 3</option>
                    <option value="prateleiraQuatro">Prateleira 4</option>
                    <option value="prateleiraCinco">Prateleira 5</option>
                    <option value="prateleiraSeis">Prateleira 6</option>
                </select> <img class=" icon" data-edit="prateleira" src="./assets/edit-icon-black.svg" alt=""></div>
                <div>Fornecedor: <span class="produto fornecedor">${matchingProduct.fornecedor}</span><input class="js-edit-fornecedor hiden inputProduto" type="text"> <img class="icon" data-edit="fornecedor" src="./assets/edit-icon-black.svg" alt=""></div>
                <div>Data de entradada: <span class="produto dataEntrada">${matchingProduct.dataEntrada}</span><input class="js-edit-dataEntrada hiden inputProduto" type="date"> <img class=" icon" data-edit="dataEntrada" src="./assets/edit-icon-black.svg" alt=""></div>
                <div>Última movimentação: <span class="produto">${historicoProduto}</span></div>   
        </div>
        <div class="buttonsBox">
            <button class="jsConfirmarEdicao hiden editBtn">Confirmar Edição</button>
            <button class="jsCancelarEdicao hiden editBtn">Cancelar Edição</button>
            <button class="js-excluir-btn button" id="excluir">excluir produto <img class="icon" src="./assets/close-icon.svg" alt=""></button>
        </div>
`;



function editarCampo(nome){

    const jsInputEdit = document.querySelector(`.js-edit-${nome}`);

    const jsSpanElement = document.querySelector(`.${nome}`);

    const jsButtonsBox = document.querySelector('.buttonsBox');

    const jsEditBtns = document.querySelectorAll('.editBtn');
    const jsExcluirBtn = document.querySelector('.js-excluir-btn');

    const jsCancelarEdicao = document.querySelector('.jsCancelarEdicao');
    const jsConfirmarEdicao = document.querySelector('.jsConfirmarEdicao');

    jsButtonsBox.classList.add('buttonsBoxEdit');
    jsExcluirBtn.classList.add('hiden');
    
    jsEditBtns.forEach((editBtn)=>{
        editBtn.classList.remove('hiden');
    });

    if(nome === 'nome'){
        jsSpanElement.classList.add('hiden');
        jsInputEdit.classList.remove('hiden');

        jsConfirmarEdicao.addEventListener('click', ()=>{
            if(jsInputEdit.value.trim() === ''){
                caixaDeErro('campoVazioCadastro');
                return;
            } else {
                atualizarProduto('nome', matchingProduct.id, jsInputEdit.value);
                movimentacaoProduto(matchingProduct.id, 'edicaoNome', jsInputEdit.value);
                jsInputEdit.value = '';

                removerCampoEdicao(nome);
                renderProducts();
                monstrarMensagemSucesso('editadoSucesso');
            };
        });
        
    } else if(nome === 'categoria'){
        jsSpanElement.classList.add('hiden');
        jsInputEdit.classList.remove('hiden');

        jsConfirmarEdicao.addEventListener('click', ()=>{
            if(jsInputEdit.value.trim() === ''){
                caixaDeErro('campoVazioCadastro');
            } else {
                atualizarProduto('categoria', matchingProduct.id, jsInputEdit.value);
                movimentacaoProduto(matchingProduct.id, 'edicaoCategoria', jsInputEdit.value);
                jsInputEdit.value = '';

                removerCampoEdicao(nome);
                renderProducts();
                monstrarMensagemSucesso('editadoSucesso');
            }
        });
    } else if (nome === 'quantidade'){
        jsSpanElement.classList.add('hiden');
        jsInputEdit.classList.remove('hiden');

        jsConfirmarEdicao.addEventListener('click', ()=>{
            if(jsInputEdit.value.trim() === ''){
                caixaDeErro('campoVazioCadastro');
            } else {
                atualizarProduto('quantidade', matchingProduct.id, jsInputEdit.value);
                movimentacaoProduto(matchingProduct.id, 'entrada', jsInputEdit.value);
                jsInputEdit.value = '';
                removerCampoEdicao(nome);
                renderProducts();
                monstrarMensagemSucesso('editadoSucesso');
            }
        });
    } else if (nome === 'estoqueMinimo'){
         jsSpanElement.classList.add('hiden');
        jsInputEdit.classList.remove('hiden');

        jsConfirmarEdicao.addEventListener('click', ()=>{
            if(jsInputEdit.value.trim() === ''){
                caixaDeErro('campoVazioCadastro');
            } else {
                atualizarProduto('estoqueMinimo', matchingProduct.id, jsInputEdit.value);
                movimentacaoProduto(matchingProduct.id, 'edicaoEstoqueMinimo', jsInputEdit.value);
                jsInputEdit.value = '';
                removerCampoEdicao(nome);
                renderProducts();
                monstrarMensagemSucesso('editadoSucesso');
            }
        });
    } else if (nome === 'prateleira'){
        jsSpanElement.classList.add('hiden');
        jsInputEdit.classList.remove('hiden');

        jsConfirmarEdicao.addEventListener('click', ()=>{
            if(jsInputEdit.value.trim() === ''){
                caixaDeErro('campoVazioCadastro');
            } else {
                atualizarProduto('prateleira', matchingProduct.id, jsInputEdit.value);
                movimentacaoProduto(matchingProduct.id, 'edicaoPrateleira', jsInputEdit.value);
                jsInputEdit.value = '';
                removerCampoEdicao(nome);
                renderProducts();
                monstrarMensagemSucesso('editadoSucesso');
            }
        });
    } else if (nome === 'fornecedor'){
        jsSpanElement.classList.add('hiden');
        jsInputEdit.classList.remove('hiden');

        jsConfirmarEdicao.addEventListener('click', ()=>{
            if(jsInputEdit.value.trim() === ''){
                caixaDeErro('campoVazioCadastro');
            } else {
                atualizarProduto('fornecedor', matchingProduct.id, jsInputEdit.value);
                movimentacaoProduto(matchingProduct.id, 'edicaoFornecedor', jsInputEdit.value);
                jsInputEdit.value = '';
                removerCampoEdicao(nome);
                renderProducts();
                monstrarMensagemSucesso('editadoSucesso');
            }
        });
    } else {
        jsSpanElement.classList.add('hiden');
        jsInputEdit.classList.remove('hiden');

        jsConfirmarEdicao.addEventListener('click', ()=>{
            if(jsInputEdit.value.trim() === ''){
                caixaDeErro('campoVazioCadastro');
                return;
            } else {
                atualizarProduto('dataEntrada', matchingProduct.id, jsInputEdit.value);
                movimentacaoProduto(matchingProduct.id, 'edicaoData', jsInputEdit.value);
                jsInputEdit.value = '';
                removerCampoEdicao(nome);
                renderProducts();
                monstrarMensagemSucesso('editadoSucesso');
            }
        });
    }

        jsCancelarEdicao.addEventListener('click', ()=>{

        jsEditBtns.forEach((editBtn)=>{
        editBtn.classList.add('hiden');
    });

    jsButtonsBox.classList.remove('buttonsBoxEdit');

    jsExcluirBtn.classList.remove('hiden');

    removerCampoEdicao(nome);
    }
    );
};

function removerCampoEdicao(nome){

    const jsInputEdit = document.querySelector(`.js-edit-${nome}`);
    const jsSpanElement = document.querySelector(`.${nome}`)
      
        jsSpanElement.classList.remove('hiden');
        jsInputEdit.classList.add('hiden');
        
}

jsProdutoBox.innerHTML = produtoHTML;

const jsEditarBtn = document.querySelector('.js-editar-btn');

const jsEditName = document.querySelector('.js-edit-name');

const editBtns = document.querySelectorAll('.icon');

editBtns.forEach((editBtn)=>{

    editBtn.addEventListener('click', ()=>{

        const buttonNome = editBtn.dataset.edit;

        editarCampo(buttonNome);
       }
    );
})

const jsCloseError = document.querySelector('.jsCloseError');

jsCloseError.addEventListener('click', closeMessageBox);

const jsExcluirBtn = document.querySelector('.js-excluir-btn');


jsExcluirBtn.addEventListener('click', async ()=>{

    caixaDeErro('exclusaoProduto');

    const resposta = await confirmarMovimentação();

    if(resposta){
        movimentacaoProduto(matchingProduct.nome, 'Excluído', '-');
        excluirProduto(matchingProduct.id);
        return;
    } 

})

};