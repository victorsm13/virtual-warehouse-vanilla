import { produtos, entradaProdutoQuantidade, saidaProdutoQuantidade } from "../data/data.js";
import { closeMessageBox, caixaDeErro } from "./utils/messagesBox.js";
import { confirmarMovimentação } from "./utils/confirmarPromise.js";

randerProducts();

function randerProducts(){

const jsProdutosContainer = document.querySelector('.jsProdutosContainer');


let produtosHTML = ``;


produtos.forEach((produto)=>{

   produtosHTML+= `
    <div class="produtos-box">
                <span class="js-atencao-${produto.id} atencao ${estiloEstoqueBaixo(produto.id)}">ATENÇÃO: ESTOQUE BAIXO</span>
                <a href="/produtoPage.html?produtoNome=${produto.nome}&produtoId=${produto.id}"><img id="page-icon" src="./assets/page-icon.svg" alt="page-icon"></a>
                <div>Nome: <span class="nome-produto produto">${produto.nome}</span></div>
                <div>Quantidade: <span class="js-quantidade-${produto.id} quantidade-produto produto ${estiloQuantidade(produto.id)}">${produto.quantidade}</span></div>
                <input class="js-movimentacao-${produto.id} movimentacao" type="number">
                <div class="buttons-box">
                    <button class="jsEntradaBtt" data-produto-id="${produto.id}" id="entrada-produto">Entrada</button>
                    <button class="jsSaidaBtt" data-produto-id="${produto.id}" id="saida-produto">Saída</button>
                </div>
            </div>
   `;
});

jsProdutosContainer.innerHTML = produtosHTML;


const  entradaProduto = async (id) => {
   const valor = document.querySelector(`.js-movimentacao-${id}`);

   const resultado = verificarCampo(id);

   if(resultado){
      caixaDeErro('confirmarEnrada');
   }

   const confirmacao = await confirmarMovimentação();

   if(confirmacao){
      entradaProdutoQuantidade(id, Number(valor.value));
      valor.value = '';
      randerProducts();
   } 

}

const  saidaProduto = async (id) => {
   const valor = document.querySelector(`.js-movimentacao-${id}`);

   const resultado = verificarCampo(id);

   if(resultado){
      caixaDeErro('confirmarEnrada');
   }
   
   const confirmacao = await confirmarMovimentação();

   if(confirmacao){
      saidaProdutoQuantidade(id, Number(valor.value));
      valor.value = '';
      randerProducts();
   } 

}

function verificarCampo(id){
   const valor = document.querySelector(`.js-movimentacao-${id}`);

   if(valor.value.trim() === ''){
      caixaDeErro('quantidadeInválida');
      return false;
   }

   return true;

}

function estiloQuantidade(id){

   const jsQuantidade = document.querySelector(`.js-quantidade-${id}`);

   let matchingProduct;

   produtos.forEach((produto)=>{

      if(produto.id === id){
         matchingProduct = produto;
      }
   });

   if(matchingProduct.quantidade < matchingProduct.estoqueMinimo){
      return 'red'
   } else{
      return 'green'
   }
}

function estiloEstoqueBaixo(id){
   const jsAtencao = document.querySelector(`.js-atencao-${id}`);

   let matchingProduct;

   produtos.forEach((produto)=>{

      if(produto.id === id){
         matchingProduct = produto;
      }
   });

   if(matchingProduct.quantidade < matchingProduct.estoqueMinimo){
      return '';
   } else{
      return 'hiden';
   }
}

const jsCloseError = document.querySelector('.jsCloseError');

const jsEntradaBtt = document.querySelectorAll(".jsEntradaBtt");
const jsSaidaBtt = document.querySelectorAll(".jsSaidaBtt");

jsEntradaBtt.forEach((button)=>{

   button.addEventListener('click', ()=>{
      const buttonId = button.dataset.produtoId;

      entradaProduto(buttonId);
   })
});

jsSaidaBtt.forEach((button)=>{

   button.addEventListener('click', ()=>{
      const buttonId = button.dataset.produtoId;

      saidaProduto(buttonId);
   })
});

jsCloseError.addEventListener('click', closeMessageBox);

const pesquisarProduto = ()=>{

   let produtosFiltradosHTML = '';

   const jsSearchInput = document.querySelector('.js-search-input');
   const jsSearchInputValue = jsSearchInput.value.toUpperCase();

   let produtosFiltrados = [];
   
   produtos.forEach((produto)=>{

      if(produto.nome.toUpperCase().includes(jsSearchInputValue)){
         produtosFiltrados.push(produto);
      } 
   });

   if(produtosFiltrados.length > 0){

       produtosFiltrados.forEach((produto)=>{

            produtosFiltradosHTML+= `
            <div class="produtos-box">
                  <span class="js-atencao-${produto.id} atencao ${estiloEstoqueBaixo(produto.id)}">ATENÇÃO: ESTOQUE BAIXO</span>
                  <a href="/produtoPage.html?produtoNome=${produto.nome}&produtoId=${produto.id}"><img id="page-icon" src="./assets/page-icon.svg" alt="page-icon"></a>
                  <div>Nome: <span class="nome-produto produto">${produto.nome}</span></div>
                  <div>Quantidade: <span class="js-quantidade-${produto.id} quantidade-produto produto ${estiloQuantidade(produto.id)}">${produto.quantidade}</span></div>
                  <input class="js-movimentacao-${produto.id} movimentacao" type="number">
                  <div class="buttons-box">
                     <button class="jsEntradaBtt" data-produto-id="${produto.id}" id="entrada-produto">Entrada</button>
                     <button class="jsSaidaBtt" data-produto-id="${produto.id}" id="saida-produto">Saída</button>
                  </div>
               </div>
      `;

      });

      };

   jsProdutosContainer.innerHTML = '';
   jsProdutosContainer.innerHTML = produtosFiltradosHTML;

   jsSearchInput.value = '';
}

const jsSearchIcon = document.querySelector('.js-search-icon');

jsSearchIcon.addEventListener('click', pesquisarProduto);

};

