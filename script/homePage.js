import { adicionarItem } from "../data/data.js";
import { closeMessageBox, caixaDeErro, monstrarMensagemSucesso } from "../utils/messagesBox.js";
import { confirmarMovimentação } from "../utils/confirmarPromise.js";

const jsAdicionarBtn = document.querySelector('.jsAdicionarBtn');
const jsLimparBtn = document.querySelector('.jsLimparBtn');

const limparCampos = ()=>{
    const jsNomeProduto = document.querySelector('.jsNomeProduto');
    const jsCategoria = document.querySelector('.jsCategoria');
    const jsQuantidadeInicial = document.querySelector('.jsQuantidadeInicial');
    const jsQuantidadeMinima = document.querySelector('.jsQuantidadeMinima');
    const jsLocalizacao = document.querySelector('.jsLocalizacao');
    const jsFornecedor = document.querySelector('.jsFornecedor');
    const jsDataEntrada = document.querySelector('.jsDataEntrada');

    jsNomeProduto.value = '';
    jsCategoria.value = '';
    jsQuantidadeInicial.value = '';
    jsQuantidadeMinima.value = '';
    jsLocalizacao.value = '';
    jsFornecedor.value = '';
    jsDataEntrada.value = '';
}

const verificarCampos = ()=>{

    const jsNomeProduto = document.querySelector('.jsNomeProduto');
    const jsCategoria = document.querySelector('.jsCategoria');
    const jsQuantidadeInicial = document.querySelector('.jsQuantidadeInicial');
    const jsQuantidadeMinima = document.querySelector('.jsQuantidadeMinima');
    const jsLocalizacao = document.querySelector('.jsLocalizacao');
    const jsFornecedor = document.querySelector('.jsFornecedor');
    const jsDataEntrada = document.querySelector('.jsDataEntrada');

    if(jsNomeProduto.value.trim() === '' || jsCategoria.value.trim() === '' || jsQuantidadeInicial.value.trim() === '' || jsQuantidadeMinima.value.trim() === '' || jsLocalizacao.value.trim() === '' || jsFornecedor.value === '' || jsDataEntrada.value.trim() === ''){

        caixaDeErro('campoVazioCadastro');
        return true;
    }

    return false;
}


const caixaDeDialogo = async ()=>{

    const verificacao = verificarCampos();

    if(verificacao){
        verificarCampos();
        return;
    }

    caixaDeErro('confirmacaoCadastro');

    const confirmacao = await confirmarMovimentação('entrada');

    if(confirmacao){

    const jsNomeProduto = document.querySelector('.jsNomeProduto');
    const jsCategoria = document.querySelector('.jsCategoria');
    const jsQuantidadeInicial = document.querySelector('.jsQuantidadeInicial');
    const jsQuantidadeMinima = document.querySelector('.jsQuantidadeMinima');
    const jsLocalizacao = document.querySelector('.jsLocalizacao');
    const jsFornecedor = document.querySelector('.jsFornecedor');
    const jsDataEntrada = document.querySelector('.jsDataEntrada');

    adicionarItem(jsNomeProduto.value, jsCategoria.value, jsQuantidadeInicial.value, jsQuantidadeInicial.value, jsLocalizacao.value, jsFornecedor.value, jsDataEntrada.value);


    jsNomeProduto.value = '';
    jsCategoria.value = '';
    jsQuantidadeInicial.value = '';
    jsQuantidadeMinima.value = '';
    jsLocalizacao.value = '';
    jsFornecedor.value = '';
    jsDataEntrada.value = '';

    monstrarMensagemSucesso('cadastroSucesso');


    } else{
        console.log('Deu certo 2');
    }

}

const jsCloseError = document.querySelector('.jsCloseError');


jsAdicionarBtn.addEventListener('click', caixaDeDialogo);

jsLimparBtn.addEventListener('click', limparCampos);

jsCloseError.addEventListener('click', closeMessageBox);

