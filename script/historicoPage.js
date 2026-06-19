import { historico } from "../data/historico.js";
import { produtos } from "../data/data.js";

const jsHistoricoContainer = document.querySelector('.js-historico-container');
const jsPaginacaoContainer = document.querySelector('.js-paginacao')


const itensPorPagina = 10;
let paginaAtual = 1;

function renderizarHistorico(){

    jsHistoricoContainer.innerHTML = '';

    const inicio = (paginaAtual - 1) * itensPorPagina;
    const fim = inicio + itensPorPagina;

    const historicoPagina = historico.slice(inicio, fim);

    let historicoHTML = '';

    historicoPagina.forEach((historicoProduto)=>{

        historicoHTML+= `
        <div class="historico-grid">
            <span>Produto: <span class="var">${historicoProduto.nome}</span></span>
            <span>Movimentação:  <span class="var">${historicoProduto.modificacao}</span></span>
            <span>Valor:  <span class="var">${historicoProduto.valor}</span></span>
            <span>Data <span class="var">${historicoProduto.data}</span></span>
        </div>
        `;
    });

    jsHistoricoContainer.innerHTML = historicoHTML;

};

function rederizacaoPagina(){
    jsPaginacaoContainer.innerHTML = '';

    const totalPaginas = Math.ceil(historico.length / itensPorPagina);

    for(let  i = 1; i <= totalPaginas; i++){

        const botao = document.createElement('button');
        botao.innerText = i;
        botao.classList.add('botao-paginacao');
        
        if(i === paginaAtual){
            botao.classList.add('ativo');
        }
        
        botao.addEventListener('click', ()=>{

            document.querySelectorAll('.botao-paginacao').forEach((btn)=>{
                btn.classList.remove('ativo');
            });

            botao.classList.add('ativo');

            paginaAtual = i;
            renderizarHistorico();
        });
    
    jsPaginacaoContainer.appendChild(botao);
    }
};

renderizarHistorico();
rederizacaoPagina();