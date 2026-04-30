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

        caixaDeErro('erro');
        return true;
    }

    return false;
}

const closeMessageBox = ()=>{
    const jsMessageBox = document.querySelector('.jsMessageBox');
    jsMessageBox.classList.add('hiden');
}

const confirmarInclusao = ()=>{

    const verificacao = verificandoCampos();

    if(verificacao){
        verificandoCampos();
        return;
    }

    caixaDeErro('confirmacao');

}

const caixaDeErro = (mensagem)=>{

    const jsMessage = document.querySelector('.jsMessage');
    const jsMessageBox = document.querySelector('.jsMessageBox');
    const jsCloseError = document.querySelector('.jsCloseError');
    const jsMessageButtons = document.querySelector('.jsMessageButtons');
    let message;

    if(mensagem === 'erro'){
        message = 'Todos os campos precisam ser preenchidos';

        jsMessageButtons.classList.add('hiden');
        jsMessageBox.classList.remove('hiden');
        jsMessage.innerText = message;
    } else if (mensagem === 'confirmacao'){
        message = 'Tem certeza que deseja adicionar o produto?'

        jsCloseError.classList.add('hiden');
        jsMessageBox.classList.remove('hiden');
        jsMessageButtons.classList.remove('hiden');
        jsMessage.innerText = message;
    }
}

const jsCloseError = document.querySelector('.jsCloseError');


jsAdicionarBtn.addEventListener('click', confirmarInclusao);

jsLimparBtn.addEventListener('click', limparCampos);

jsCloseError.addEventListener('click', closeMessageBox);

