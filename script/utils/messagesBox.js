export const closeMessageBox = ()=>{
    const jsMessageBox = document.querySelector('.jsMessageBox');
    jsMessageBox.classList.add('hiden');
}

export const caixaDeErro = (tipo)=>{

    const jsMessage = document.querySelector('.jsMessage');
    const jsMessageBox = document.querySelector('.jsMessageBox');
    const jsCloseError = document.querySelector('.jsCloseError');
    const jsMessageButtons = document.querySelector('.jsMessageButtons');
    let message;

    if(tipo === 'campoVazioCadastro'){
        message = 'Todos os campos precisam ser preenchidos';

        jsMessageButtons.classList.add('hiden');
        jsMessageBox.classList.remove('hiden');
        jsCloseError.classList.remove('hiden');
        jsMessage.innerText = message;
    } else if(tipo === 'quantidadeInválida') {
        message = 'Digite um valor válido!';

        jsMessageButtons.classList.add('hiden');
        jsMessageBox.classList.remove('hiden');
        jsCloseError.classList.remove('hiden');
        jsMessage.innerText = message;
    }
     else if (tipo === 'confirmacaoCadastro'){
        message = 'Tem certeza que deseja adicionar o produto?'

        jsCloseError.classList.add('hiden');
        jsMessageBox.classList.remove('hiden');
        jsMessageButtons.classList.remove('hiden');
        jsMessage.innerText = message;
    }
}