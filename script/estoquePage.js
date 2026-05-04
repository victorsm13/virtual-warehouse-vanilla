import { produtos } from "../data/data.js";

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




function entradaProduto (id){
   const valor = document.querySelector(`.js-movimentacao-${id}`);

   console.log(valor.value);
   
   valor.value = '';
}

function saidaProduto (id){
   const valor = document.querySelector(`.js-movimentacao-${id}`);

   console.log(valor.value);

   valor.value = '';
}


const jsEntradaBtt = document.querySelectorAll(".jsEntradaBtt");
const jsSaidaBtt = document.querySelectorAll(".jsSaidaBtt");

jsEntradaBtt.forEach((button)=>{

   button.addEventListener('click', ()=>{
      const buttonId = button.dataset.produtoId;

      entradaProduto(buttonId);
   })
})

jsSaidaBtt.forEach((button)=>{

   button.addEventListener('click', ()=>{
      const buttonId = button.dataset.produtoId;

      saidaProduto(buttonId);
   })
})