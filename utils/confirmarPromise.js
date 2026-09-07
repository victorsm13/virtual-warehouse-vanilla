export function confirmarMovimentação(mensagem){
   return new Promise((resolve)=>{

    const jsMessage = document.querySelector('.jsMessage');

    const message = mensagem === 'entrada' ? 'Are you sure you want to add the product?' : 'Are you sure you want to remove the product?';

    jsMessage.innerText = message;


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