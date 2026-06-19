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
    } else if(tipo === 'confirmarEnrada'){
        message = 'Tem certeza que deseja dar entrada no produto?'

        jsCloseError.classList.add('hiden');
        jsMessageBox.classList.remove('hiden');
        jsMessageButtons.classList.remove('hiden');
        jsMessage.innerText = message;
    } else if(tipo === 'confirmarSaida'){
        message = 'Tem certeza que deseja dar saída no produto?'

        jsCloseError.classList.add('hiden');
        jsMessageBox.classList.remove('hiden');
        jsMessageButtons.classList.remove('hiden');
        jsMessage.innerText = message;
        
    } else if (tipo === 'exclusaoProduto') {
        message = 'Tem certeza que deseja excluir o produto?'

        jsCloseError.classList.add('hiden');
        jsMessageBox.classList.remove('hiden');
        jsMessageButtons.classList.remove('hiden');
        jsMessage.innerText = message;
    } else if(tipo === 'quantidadeInválida'){
        message = 'Quantidade inválida!'

        jsCloseError.classList.add('hiden');
        jsMessageBox.classList.remove('hiden');
        jsMessageButtons.classList.remove('hiden');
        jsMessage.innerText = message;
    }
}

export function monstrarMensagemSucesso(mensagem){
    const jsMessageBoxTwo = document.querySelector('.jsMessageBoxTwo');
    const jsMessageTwo = document.querySelector('.jsMessageTwo');

    let message;

    if(mensagem === 'cadastroSucesso'){
        message = 'Produto adicionado com sucesso!';
        jsMessageTwo.innerText = message;
    } else if(mensagem === 'entradaSucesso'){
        message = 'Entrada realizada com sucesso!';;
        jsMessageTwo.innerText = message;
    } else if (mensagem === 'saidaSucesso' ){
        message = 'Saída realizada com sucesso!';
        jsMessageTwo.innerText = message;
    } else if (mensagem === 'editadoSucesso'){
        message = 'Produto editado com sucesso!';
        jsMessageTwo.innerText = message;
    }

    jsMessageBoxTwo.classList.remove('hiden');

    setTimeout(()=>{
        jsMessageBoxTwo.classList.add('hiden');
    }, 3000);

}