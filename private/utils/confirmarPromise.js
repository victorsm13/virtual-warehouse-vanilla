export function confirmarMovimentação(){
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