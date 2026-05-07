export const produtos = JSON.parse(localStorage.getItem("produtos")) || [
  // 📎 Materiais de escritório
  {
    id: "1",
    nome: "Papel A4",
    categoria: "escritorio",
    quantidade: 100,
    estoqueMinimo: 20,
    localizacao: "prateleiraUm",
    fornecedor: "Papelaria Brasil",
    dataEntrada: "2026-04-20"
  },
  {
    id: "2",
    nome: "Caneta azul/preta",
    categoria: "escritorio",
    quantidade: 200,
    estoqueMinimo: 50,
    localizacao: "prateleiraUm",
    fornecedor: "BIC",
    dataEntrada: "2026-04-20"
  },
  {
    id: "3",
    nome: "Lápis",
    categoria: "escritorio",
    quantidade: 150,
    estoqueMinimo: 30,
    localizacao: "prateleiraUm",
    fornecedor: "Faber-Castell",
    dataEntrada: "2026-04-20"
  },
  {
    id: "4",
    nome: "Borracha",
    categoria: "escritorio",
    quantidade: 80,
    estoqueMinimo: 20,
    localizacao: "prateleiraUm",
    fornecedor: "Faber-Castell",
    dataEntrada: "2026-04-20"
  },
  {
    id: "5",
    nome: "Grampeador",
    categoria: "escritorio",
    quantidade: 20,
    estoqueMinimo: 5,
    localizacao: "prateleiraUm",
    fornecedor: "Maped",
    dataEntrada: "2026-04-20"
  },
  {
    id: "6",
    nome: "Grampos",
    categoria: "escritorio",
    quantidade: 300,
    estoqueMinimo: 50,
    localizacao: "prateleiraUm",
    fornecedor: "Acc",
    dataEntrada: "2026-04-20"
  },
  {
    id: "7",
    nome: "Pastas",
    categoria: "escritorio",
    quantidade: 60,
    estoqueMinimo: 15,
    localizacao: "prateleiraUm",
    fornecedor: "Dello",
    dataEntrada: "2026-04-20"
  },
  {
    id: "8",
    nome: "Clips",
    categoria: "escritorio",
    quantidade: 500,
    estoqueMinimo: 100,
    localizacao: "prateleiraUm",
    fornecedor: "Acc",
    dataEntrada: "2026-04-20"
  },
  {
    id: "9",
    nome: "Post-it",
    categoria: "escritorio",
    quantidade: 120,
    estoqueMinimo: 30,
    localizacao: "prateleiraUm",
    fornecedor: "3M",
    dataEntrada: "2026-04-20"
  },
  {
    id: "10",
    nome: "Marcador de texto",
    categoria: "escritorio",
    quantidade: 90,
    estoqueMinimo: 20,
    localizacao: "prateleiraUm",
    fornecedor: "Stabilo",
    dataEntrada: "2026-04-20"
  },

  // 🖥️ TI
  {
    id: "11",
    nome: "Mouse",
    categoria: "TI",
    quantidade: 15,
    estoqueMinimo: 5,
    localizacao: "prateleiraDois",
    fornecedor: "Logitech",
    dataEntrada: "2026-04-20"
  },
  {
    id: "12",
    nome: "Teclado",
    categoria: "TI",
    quantidade: 10,
    estoqueMinimo: 3,
    localizacao: "prateleiraDois",
    fornecedor: "Microsoft",
    dataEntrada: "2026-04-20"
  },
  {
    id: "13",
    nome: "Monitor",
    categoria: "TI",
    quantidade: 8,
    estoqueMinimo: 2,
    localizacao: "prateleiraDois",
    fornecedor: "Samsung",
    dataEntrada: "2026-04-20"
  },
  {
    id: "14",
    nome: "Cabo HDMI",
    categoria: "TI",
    quantidade: 25,
    estoqueMinimo: 5,
    localizacao: "prateleiraDois",
    fornecedor: "Multilaser",
    dataEntrada: "2026-04-20"
  },
  {
    id: "15",
    nome: "Cabo de rede (RJ45)",
    categoria: "TI",
    quantidade: 40,
    estoqueMinimo: 10,
    localizacao: "prateleiraDois",
    fornecedor: "Intelbras",
    dataEntrada: "2026-04-20"
  },
  {
    id: "16",
    nome: "Adaptador USB",
    categoria: "TI",
    quantidade: 30,
    estoqueMinimo: 8,
    localizacao: "prateleiraDois",
    fornecedor: "TP-Link",
    dataEntrada: "2026-04-20"
  },
  {
    id: "17",
    nome: "Pendrive",
    categoria: "TI",
    quantidade: 50,
    estoqueMinimo: 10,
    localizacao: "prateleiraDois",
    fornecedor: "Kingston",
    dataEntrada: "2026-04-20"
  },
  {
    id: "18",
    nome: "HD externo",
    categoria: "TI",
    quantidade: 12,
    estoqueMinimo: 4,
    localizacao: "prateleiraDois",
    fornecedor: "Seagate",
    dataEntrada: "2026-04-20"
  },

  // 🔌 Elétricos
  {
    id: "19",
    nome: "Extensão elétrica",
    categoria: "eletrico",
    quantidade: 20,
    estoqueMinimo: 5,
    localizacao: "prateleiraTres",
    fornecedor: "Tramontina",
    dataEntrada: "2026-04-20"
  },
  {
    id: "20",
    nome: "Filtro de linha",
    categoria: "eletrico",
    quantidade: 18,
    estoqueMinimo: 5,
    localizacao: "prateleiraTres",
    fornecedor: "Clamper",
    dataEntrada: "2026-04-20"
  },
  {
    id: "21",
    nome: "Tomada",
    categoria: "eletrico",
    quantidade: 60,
    estoqueMinimo: 15,
    localizacao: "prateleiraTres",
    fornecedor: "Schneider",
    dataEntrada: "2026-04-20"
  },
  {
    id: "22",
    nome: "Interruptor",
    categoria: "eletrico",
    quantidade: 50,
    estoqueMinimo: 10,
    localizacao: "prateleiraTres",
    fornecedor: "Schneider",
    dataEntrada: "2026-04-20"
  },
  {
    id: "23",
    nome: "Lâmpada LED",
    categoria: "eletrico",
    quantidade: 70,
    estoqueMinimo: 20,
    localizacao: "prateleiraTres",
    fornecedor: "Philips",
    dataEntrada: "2026-04-20"
  },
  {
    id: "24",
    nome: "Disjuntor",
    categoria: "eletrico",
    quantidade: 25,
    estoqueMinimo: 5,
    localizacao: "prateleiraTres",
    fornecedor: "Siemens",
    dataEntrada: "2026-04-20"
  },

  // 🧹 Limpeza
  {
    id: "25",
    nome: "Álcool",
    categoria: "Limpeza",
    quantidade: 40,
    estoqueMinimo: 10,
    localizacao: "prateleiraQuatro",
    fornecedor: "Ypê",
    dataEntrada: "2026-04-20"
  },
  {
    id: "26",
    nome: "Detergente",
    categoria: "Limpeza",
    quantidade: 35,
    estoqueMinimo: 10,
    localizacao: "prateleiraQuatro",
    fornecedor: "Ypê",
    dataEntrada: "2026-04-20"
  },
  {
    id: "27",
    nome: "Desinfetante",
    categoria: "Limpeza",
    quantidade: 30,
    estoqueMinimo: 8,
    localizacao: "prateleiraQuatro",
    fornecedor: "Veja",
    dataEntrada: "2026-04-20"
  },
  {
    id: "28",
    nome: "Papel toalha",
    categoria: "Limpeza",
    quantidade: 60,
    estoqueMinimo: 15,
    localizacao: "prateleiraQuatro",
    fornecedor: "Scott",
    dataEntrada: "2026-04-20"
  },
  {
    id: "29",
    nome: "Luvas",
    categoria: "Limpeza",
    quantidade: 50,
    estoqueMinimo: 10,
    localizacao: "prateleiraQuatro",
    fornecedor: "Volk",
    dataEntrada: "2026-04-20"
  },
  {
    id: "30",
    nome: "Vassoura",
    categoria: "Limpeza",
    quantidade: 15,
    estoqueMinimo: 5,
    localizacao: "prateleiraQuatro",
    fornecedor: "Condor",
    dataEntrada: "2026-04-20"
  },
  {
    id: "31",
    nome: "Pano de limpeza",
    categoria: "Limpeza",
    quantidade: 70,
    estoqueMinimo: 20,
    localizacao: "prateleiraQuatro",
    fornecedor: "Condor",
    dataEntrada: "2026-04-20"
  },

  // 🏭 Produção
  {
    id: "32",
    nome: "Parafusos",
    categoria: "producao",
    quantidade: 500,
    estoqueMinimo: 100,
    localizacao: "prateleiraCinco",
    fornecedor: "Vonder",
    dataEntrada: "2026-04-20"
  },
  {
    id: "33",
    nome: "Porcas",
    categoria: "producao",
    quantidade: 400,
    estoqueMinimo: 80,
    localizacao: "prateleiraCinco",
    fornecedor: "Vonder",
    dataEntrada: "2026-04-20"
  },
  {
    id: "34",
    nome: "Arruelas",
    categoria: "producao",
    quantidade: 450,
    estoqueMinimo: 90,
    localizacao: "prateleiraCinco",
    fornecedor: "Vonder",
    dataEntrada: "2026-04-20"
  },
  {
    id: "35",
    nome: "Buchas",
    categoria: "producao",
    quantidade: 300,
    estoqueMinimo: 60,
    localizacao: "prateleiraCinco",
    fornecedor: "Fischer",
    dataEntrada: "2026-04-20"
  },
  {
    id: "36",
    nome: "Ferramentas básicas",
    categoria: "producao",
    quantidade: 20,
    estoqueMinimo: 5,
    localizacao: "prateleiraCinco",
    fornecedor: "Tramontina",
    dataEntrada: "2026-04-20"
  }
];

export function adicionarItem(nome, categoria, quantidade, estoqueM, localizacao, fornecedor, data){

  const id = produtos.length + 1;

  produtos.push({
    id: String(id),
    nome: nome,
    categoria: categoria,
    quantidade: quantidade,
    estoqueMinimo: estoqueM,
    localizacao: localizacao,
    fornecedor: fornecedor,
    dataEntrada: data
  });

  console.log(produtos);

  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem("produtos", JSON.stringify(produtos));
}

export function entradaProdutoQuantidade(id, quantidade){

  let matchingProduct;

  produtos.forEach((produto)=>{
    if(produto.id === id){
      matchingProduct = produto
    }
  });

  console.log(matchingProduct.quantidade)

  matchingProduct.quantidade += quantidade;

  saveToStorage();

}

export function saidaProdutoQuantidade(id, quantidade){
   let matchingProduct;

  produtos.forEach((produto)=>{
    if(produto.id === id){
      matchingProduct = produto
    }
  });

  matchingProduct.quantidade -= quantidade;

  saveToStorage();
}

export function atualizarProduto(nome, id, valor){
  let matchingProduct;

   if(nome === 'nome'){

        produtos.forEach((produto)=>{

          if(produto.id === id){
            matchingProduct = produto;
          }
        });

        matchingProduct.nome = valor;

        saveToStorage();
      } else if(nome === 'categoria'){
        produtos.forEach((produto)=>{

          if(produto.id === id){
            matchingProduct = produto;
          }
        });

        matchingProduct.categoria = valor;

        saveToStorage();
         
      } else if (nome === 'quantidade'){
           produtos.forEach((produto)=>{

          if(produto.id === id){
            matchingProduct = produto;
          }
        });

        matchingProduct.quantidade = valor;

        saveToStorage();
      } else if (nome === 'estoqueMinimo'){
         produtos.forEach((produto)=>{

          if(produto.id === id){
            matchingProduct = produto;
          }
        });

        matchingProduct.estoqueMinimo = valor;

        saveToStorage();
          
      } else if (nome === 'prateleira'){
         produtos.forEach((produto)=>{

          if(produto.id === id){
            matchingProduct = produto;
          }
        });

        matchingProduct.localizacao = valor;

        saveToStorage();
         
      } else if (nome === 'fornecedor'){
         produtos.forEach((produto)=>{

          if(produto.id === id){
            matchingProduct = produto;
          }
        });

        matchingProduct.fornecedor = valor;

        saveToStorage();
      } else {
         produtos.forEach((produto)=>{

          if(produto.id === id){
            matchingProduct = produto;
          }
        });

        matchingProduct.dataEntrada = valor;

        saveToStorage();

      }

}