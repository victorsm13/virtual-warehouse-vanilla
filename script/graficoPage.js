import { produtos } from "../data/data.js";
import { historico } from "../data/historico.js";   

let produtoHTML = '';

const jsProduto = document.querySelector('.jsProduto');

produtos.forEach((produto)=>{
    produtoHTML += `
    <option value="${produto.nome}">${produto.nome}</option>
    `
});

jsProduto.innerHTML = produtoHTML;

const jsButtonGrafico = document.querySelector('.jsButtonGrafico');

let instanciaGrafico = null;

function gerarGrafico(){
    const dataInicial = document.querySelector('.jsDataInicial').value;
    const dataFinal = document.querySelector('.jsDataFinal').value;
    const produtoSelecionado = document.querySelector('.jsProduto').value;
    const tipoMovimentacao = document.querySelector('.jsTipoMovimentacao').value;

    if(dataInicial.trim() === '' || dataFinal.trim() === '' || produtoSelecionado.trim() === '' || tipoMovimentacao.trim() === ''){
        alert('Preencha todos os campos para gerar o gráfico.');
        return;
    } else{

        let quantidade = [];
        let valor = 0;

        const copiaHistorico = [...historico]; 
        const copiaProdutos = [...produtos];

        const datas = gerarDatas(dataInicial, dataFinal);

        console.log(datas);

        let nomeProduto = [];

        produtos.forEach((produto)=>{
            if(produto.id === produtoSelecionado){
                nomeProduto.push(produto.nome);
            }
        });

        copiaHistorico.forEach((produto)=>{
            if(produto.nome === produtoSelecionado && produto.modificacao === tipoMovimentacao && datas.includes(produto.data)){
                console.log('OLá');
                valor += Number(produto.valor);
            };
        });

        quantidade.push(valor);

    const chartJs = document.getElementById('grafico');

    if(instanciaGrafico){
        instanciaGrafico.destroy();
    }

    instanciaGrafico = new Chart(chartJs, {
        type: 'doughnut',
        data: {
        labels: nomeProduto,
        datasets: [{
            label: tipoMovimentacao === 'entrada' ? 'Entradas' : 'Saídas',
            data: quantidade,
            backgroundColor: 'orange',
            borderWidth: 1
        }]
        },
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
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

