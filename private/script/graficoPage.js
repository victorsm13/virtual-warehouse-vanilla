import { produtos } from "../data/data.js";

let produtoHTML = '';

const jsProduto = document.querySelector('.jsProduto');

produtos.forEach((produto)=>{
    produtoHTML += `
    <option value="${produto.nome}">${produto.nome}</option>
    `
});

jsProduto.innerHTML = produtoHTML;

const jsButtonGrafico = document.querySelector('.jsButtonGrafico');

function gerarGrafico(){
    const dataInicial = document.querySelector('.jsDataInicial').value;
    const dataFinal = document.querySelector('.jsDataFinal').value;
    const produtoSelecionado = document.querySelector('.jsProduto').value;
    const tipoMovimentacao = document.querySelector('.jsTipoMovimentacao').value;

    if(dataInicial.trim() === '' || dataFinal.trim() === '' || produtoSelecionado.trim() === '' || tipoMovimentacao.trim() === ''){
        alert('Preencha todos os campos para gerar o gráfico.');
        return;
    } else{
    };
}

jsButtonGrafico.addEventListener('click', gerarGrafico);

