import { produtos } from "../data/data.js";

const jsTableContainer = document.querySelector('.jsTableContainer');

let produtosHTML = `
<tr class="produtos-header cell-grid">
                    <th class="header-name">NOME</th>
                    <th class="header-quantity">QUANTIDADE</th>
                    <th class="header-localizacao">LOCALIZAÇÃO</th>
</tr>
`;;


produtos.forEach((produto)=>{

   produtosHTML+= `
   <tr class="produtos-box jsProdutoBox cell-grid" data-produto-id="${produto.id}">
            <td class="nome-produto">${produto.nome}</td>
            <td class="quantidade-produto">${produto.quantidade}</td>
            <td class="prateleira-produto">${produto.localizacao}</td>
  </tr>
   `;
});

jsTableContainer.innerHTML = produtosHTML;


const jsProdutoBox = document.querySelectorAll('.jsProdutoBox');

jsProdutoBox.forEach((produtoBox)=>{
 produtoBox.addEventListener('click', ()=>{

   let matchingProduct;

   const produtoId = produtoBox.dataset.produtoId;

   produtos.forEach((produto)=>{

      if(produto.id === produtoId){
         matchingProduct = produto;
      }
   });

   window.location.href=`produtoPage.html?produtoNome=${matchingProduct.nome}&produtoId=${matchingProduct.id}`;
 })  
})