import { adicionarItem } from "../data/data.js";
import { closeMessageBox, caixaDeErro } from "./utils/messagesBox.js";

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

const verificandoCampos = ()=>{

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

    const verificacao = verificandoCampos();

    if(verificacao){
        verificandoCampos();
        return;
    }

    caixaDeErro('confirmacaoCadastro');

    const confirmacao = await confirmarInclusao();

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


    } else{
        console.log('Deu certo 2');
    }

}

function confirmarInclusao(){
    return new Promise((resolve)=>{

    const jsMessageBox = document.querySelector('.jsMessageBox');
    const jsConfirmarBtt = document.querySelector('.jsConfirmarBtt');
    const jsNegarBtt = document.querySelector('.jsNegarBtt');

    const confirmar = ()=>{
        jsMessageBox.classList.add('hiden');
        resolve(true);
        cleanUp();
    };

    const cancelar = ()=>{
        jsMessageBox.classList.add('hiden');
        resolve(false);
        cleanUp();
    }

    function cleanUp(){
        jsConfirmarBtt.removeEventListener('click', confirmar)
        jsNegarBtt.removeEventListener('click', cancelar)
    }

    jsConfirmarBtt.addEventListener('click', confirmar );

    jsNegarBtt.addEventListener('click', cancelar);
    })
}



const jsCloseError = document.querySelector('.jsCloseError');


jsAdicionarBtn.addEventListener('click', caixaDeDialogo);

jsLimparBtn.addEventListener('click', limparCampos);

jsCloseError.addEventListener('click', closeMessageBox);

