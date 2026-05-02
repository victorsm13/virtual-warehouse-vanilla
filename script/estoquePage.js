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
    <tr class="produtos-box cell-grid">
         <td class="nome-produto">${produto.nome}</td>
         <td class="quantidade-produto">${produto.quantidade}</td>
         <td class="prateleira-produto">${produto.localizacao}</td>
   </tr>
   `;
})

jsTableContainer.innerHTML = produtosHTML;
