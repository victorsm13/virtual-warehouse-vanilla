import { produtos } from "../data/data.js";
import { historico } from "../data/historico.js";   

let produtoHTML = '';

const jsProduto = document.querySelector('.jsProduto');

produtos.forEach((produto)=>{
    produtoHTML += `
    <option value="${produto.id}">${produto.nome}</option>
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

        const chartJs = document.getElementById('grafico');

        let quantidade = 0;

        const copiaHistorico = [...historico]; 
        const copiaProdutos = [...produtos];

        const datas = gerarDatas(dataInicial, dataFinal);

        console.log(datas);

        let nomeProduto;

        produtos.forEach((produto)=>{
            if(produto.id === produtoSelecionado){
                nomeProduto = produto.nome;
            }
        });

        copiaHistorico.forEach((produto)=>{
            if(produto.id === produtoSelecionado && produto.modificacao === tipoMovimentacao && datas.includes(produto.data)){
                console.log('OLá');
                quantidade += Number(produto.valor);
            };
        });


    };
}

function gerarDatas(inicio, fim){

    const datas = [];
    const dataAtual = new Date(inicio);
    const dataFinal = new Date(fim);

    while(dataAtual <= dataFinal){
        const ano = dataAtual.getUTCFullYear();
        const mes = String(dataAtual.getUTCMonth() + 1).padStart(2, '0');
        const dia = String(dataAtual.getUTCDate()).padStart(2, '0');
        const dataFormatada = `${ano}-${mes}-${dia}`;
        datas.push(dataFormatada);
        dataAtual.setUTCDate(dataAtual.getUTCDate() + 1);
    }

    return datas;

};

jsButtonGrafico.addEventListener('click', gerarGrafico);

