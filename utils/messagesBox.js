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
        message = 'All fields must be filled in';

        jsMessageButtons.classList.add('hiden');
        jsMessageBox.classList.remove('hiden');
        jsCloseError.classList.remove('hiden');
        jsMessage.innerText = message;
    } else if(tipo === 'quantidadeInválida') {
        message = 'Please enter a valid quantity!';

        jsMessageButtons.classList.add('hiden');
        jsMessageBox.classList.remove('hiden');
        jsCloseError.classList.remove('hiden');
        jsMessage.innerText = message;
    }
     else if (tipo === 'confirmacaoCadastro'){
        message = 'Are you sure you want to add the product?'

        jsCloseError.classList.add('hiden');
        jsMessageBox.classList.remove('hiden');
        jsMessageButtons.classList.remove('hiden');
        jsMessage.innerText = message;
    } else if(tipo === 'confirmarEnrada'){
        message = 'Are you sure you want to give entry to the product?'

        jsCloseError.classList.add('hiden');
        jsMessageBox.classList.remove('hiden');
        jsMessageButtons.classList.remove('hiden');
        jsMessage.innerText = message;
    } else if(tipo === 'confirmarSaida'){
        message = 'Are you sure you want to give exit to the product?'

        jsCloseError.classList.add('hiden');
        jsMessageBox.classList.remove('hiden');
        jsMessageButtons.classList.remove('hiden');
        jsMessage.innerText = message;
        
    } else if (tipo === 'exclusaoProduto') {
        message = 'Are you sure you want to delete the product?'

        jsCloseError.classList.add('hiden');
        jsMessageBox.classList.remove('hiden');
        jsMessageButtons.classList.remove('hiden');
        jsMessage.innerText = message;
    } else if(tipo === 'quantidadeInválida'){
        message = 'Please enter a valid quantity!'

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
        message = 'Product added successfully!';
        jsMessageTwo.innerText = message;
    } else if(mensagem === 'entradaSucesso'){
        message = 'Entry completed successfully!';;
        jsMessageTwo.innerText = message;
    } else if (mensagem === 'saidaSucesso' ){
        message = 'Exit completed successfully!';
        jsMessageTwo.innerText = message;
    } else if (mensagem === 'editadoSucesso'){
        message = 'Product edited successfully!';
        jsMessageTwo.innerText = message;
    }

    jsMessageBoxTwo.classList.remove('hiden');

    setTimeout(()=>{
        jsMessageBoxTwo.classList.add('hiden');
    }, 3000);

}