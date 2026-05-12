export let historico = JSON.parse(localStorage.getItem('historico')) || [];

export function movimentacaoProduto(id, tipo, valor){

    const data = new Date();
    let ano = data.getFullYear();
    let mes = data.getMonth() + 1;
    let dia = data.getDate();
    let dataString = `${ano}-${ mes < 10 ? '0'+ mes : mes }-${dia < 10 ? '0' + dia : dia}`;

    historico.unshift({
        id: id,
        modificacao: tipo,
        valor: valor,
        data: dataString
    });

    saveToStorage();

}

function saveToStorage(){
    localStorage.setItem('historico', JSON.stringify(historico));
}



