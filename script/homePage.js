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

    const message = 'Todos os campos precisam ser preenchidos';

    const jsMessage = document.querySelector('.jsMessage');
    const jsMessageBox = document.querySelector('.jsMessageBox');

    const jsNomeProduto = document.querySelector('.jsNomeProduto');
    const jsCategoria = document.querySelector('.jsCategoria');
    const jsQuantidadeInicial = document.querySelector('.jsQuantidadeInicial');
    const jsQuantidadeMinima = document.querySelector('.jsQuantidadeMinima');
    const jsLocalizacao = document.querySelector('.jsLocalizacao');
    const jsFornecedor = document.querySelector('.jsFornecedor');
    const jsDataEntrada = document.querySelector('.jsDataEntrada');

    if(jsNomeProduto.value.trim() === '' || jsCategoria.value.trim() === '' || jsQuantidadeInicial.value.trim() === '' || jsQuantidadeMinima.value.trim() === '' || jsLocalizacao.value.trim() === '' || jsFornecedor.value === '' || jsDataEntrada.value.trim() === ''){

        jsMessageBox.classList.remove('hiden');
        jsMessage.innerText = message;
        return;
    }
}

const closeMessageBox = ()=>{
    const jsMessageBox = document.querySelector('.jsMessageBox');
    jsMessageBox.classList.add('hiden');
}

const jsCloseError = document.querySelector('.jsCloseError');


jsAdicionarBtn.addEventListener('click', verificandoCampos);

jsLimparBtn.addEventListener('click', limparCampos);

jsCloseError.addEventListener('click', closeMessageBox);

