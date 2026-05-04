import { produtos } from "../data/data.js";
import { closeMessageBox, caixaDeErro } from "./utils/messagesBox.js";
import { confirmarMovimentação } from "./utils/confirmarPromise.js";

const jsTableContainer = document.querySelector('.jsProdutosContainer');


let produtosHTML = ``;


produtos.forEach((produto)=>{

   produtosHTML+= `
    <div class="produtos-box">
                <a href="/produtoPage.html?produtoNome=${produto.nome}&produtoId=${produto.id}"><img id="page-icon" src="./assets/page-icon.svg" alt="page-icon"></a>
                <div>Nome: <span class="nome-produto produto">${produto.nome}</span></div>
                <div>Quantidade: <span class="quantidade-produto produto">${produto.quantidade}</span></div>
                <input class="js-movimentacao-${produto.id} movimentacao" type="number">
                <div class="buttons-box">
                    <button class="jsEntradaBtt" data-produto-id="${produto.id}" id="entrada-produto">Entrada</button>
                    <button class="jsSaidaBtt" data-produto-id="${produto.id}" id="saida-produto">Saída</button>
                </div>
            </div>
   `;
});

jsTableContainer.innerHTML = produtosHTML;




const  entradaProduto = async (id) => {
   const valor = document.querySelector(`.js-movimentacao-${id}`);

   const resultado = verificarCampo(id);

   if(resultado){
      caixaDeErro('confirmarEnrada');
   }

   const confirmacao = await confirmarMovimentação();

   if(confirmacao){
      console.log('EntradaeSaída');
      valor.value = '';
   } else{
      console.log('Não confirmado!');
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
      console.log('EntradaeSaída');
      valor.value = '';
   } else{
      console.log('Não confirmado!');
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