export let produtos = JSON.parse(localStorage.getItem("produtos")) || [
  // 📎 Materiais de escritório
{
  id: "A7K9X2M4P8Q1L5N3R6T0V2Y8B4C1D7E9",
  nome: "Papel A4",
  categoria: "escritorio",
  quantidade: 100,
  estoqueMinimo: 20,
  localizacao: "prateleiraUm",
  fornecedor: "Papelaria Brasil",
  dataEntrada: "2026-04-20"
},
{
  id: "F3J8L1Q5S9U2W6X0Z4A7C3E8G1H5K9M",
  nome: "Caneta azul/preta",
  categoria: "escritorio",
  quantidade: 200,
  estoqueMinimo: 50,
  localizacao: "prateleiraUm",
  fornecedor: "BIC",
  dataEntrada: "2026-04-20"
},
{
  id: "N2P7R4T8V1Y5B9D3F6H0J2L7Q4S8U1W",
  nome: "Lápis",
  categoria: "escritorio",
  quantidade: 150,
  estoqueMinimo: 30,
  localizacao: "prateleiraUm",
  fornecedor: "Faber-Castell",
  dataEntrada: "2026-04-20"
},
{
  id: "X5Z1C6E9G3K7M0P4R8T2V5Y1B6D9F3H",
  nome: "Borracha",
  categoria: "escritorio",
  quantidade: 80,
  estoqueMinimo: 20,
  localizacao: "prateleiraUm",
  fornecedor: "Faber-Castell",
  dataEntrada: "2026-04-20"
},
{
  id: "J4L8N2Q7S1U5W9X3Z6A0C4E8G2K7M1P",
  nome: "Grampeador",
  categoria: "escritorio",
  quantidade: 20,
  estoqueMinimo: 5,
  localizacao: "prateleiraUm",
  fornecedor: "Maped",
  dataEntrada: "2026-04-20"
},
{
  id: "R5T9V3Y7B1D6F0H4J8L2N5Q9S3U7W1X",
  nome: "Grampos",
  categoria: "escritorio",
  quantidade: 300,
  estoqueMinimo: 50,
  localizacao: "prateleiraUm",
  fornecedor: "Acc",
  dataEntrada: "2026-04-20"
},
{
  id: "Z2A6C9E4G8K1M5P0R3T7V2Y6B9D4F8H",
  nome: "Pastas",
  categoria: "escritorio",
  quantidade: 60,
  estoqueMinimo: 15,
  localizacao: "prateleiraUm",
  fornecedor: "Dello",
  dataEntrada: "2026-04-20"
},
{
  id: "L1N7Q3S8U2W5X9Z4A6C1E7G3K8M2P5R",
  nome: "Clips",
  categoria: "escritorio",
  quantidade: 500,
  estoqueMinimo: 100,
  localizacao: "prateleiraUm",
  fornecedor: "Acc",
  dataEntrada: "2026-04-20"
},
{
  id: "T4V0Y6B1D8F3H7J2L5N9Q4S0U6W1X8Z",
  nome: "Post-it",
  categoria: "escritorio",
  quantidade: 120,
  estoqueMinimo: 30,
  localizacao: "prateleiraUm",
  fornecedor: "3M",
  dataEntrada: "2026-04-20"
},
{
  id: "C3E7G1K5M9P2R6T0V4Y8B3D7F1H5J9L",
  nome: "Marcador de texto",
  categoria: "escritorio",
  quantidade: 90,
  estoqueMinimo: 20,
  localizacao: "prateleiraUm",
  fornecedor: "Stabilo",
  dataEntrada: "2026-04-20"
},
{
  id: "Q2S6U0W4X8Z1A5C9E3G7K2M6P0R4T8V",
  nome: "Mouse",
  categoria: "TI",
  quantidade: 15,
  estoqueMinimo: 5,
  localizacao: "prateleiraDois",
  fornecedor: "Logitech",
  dataEntrada: "2026-04-20"
},
{
  id: "Y1B5D9F4H8J2L6N0Q3S7U1W5X9Z4A8C",
  nome: "Teclado",
  categoria: "TI",
  quantidade: 10,
  estoqueMinimo: 3,
  localizacao: "prateleiraDois",
  fornecedor: "Microsoft",
  dataEntrada: "2026-04-20"
},
{
  id: "E2G6K0M5P9R3T7V1Y4B8D2F6H0J5L9N",
  nome: "Monitor",
  categoria: "TI",
  quantidade: 8,
  estoqueMinimo: 2,
  localizacao: "prateleiraDois",
  fornecedor: "Samsung",
  dataEntrada: "2026-04-20"
},
{
  id: "S4U8W2X7Z1A6C0E5G9K3M7P1R4T8V2Y",
  nome: "Cabo HDMI",
  categoria: "TI",
  quantidade: 25,
  estoqueMinimo: 5,
  localizacao: "prateleiraDois",
  fornecedor: "Multilaser",
  dataEntrada: "2026-04-20"
},
{
  id: "D3F7H1J6L0N4Q8S2U5W9X3Z7A1C6E0G",
  nome: "Cabo de rede (RJ45)",
  categoria: "TI",
  quantidade: 40,
  estoqueMinimo: 10,
  localizacao: "prateleiraDois",
  fornecedor: "Intelbras",
  dataEntrada: "2026-04-20"
},
{
  id: "K2M8P4R9T1V5Y0B3D7F2H8J4L9N1Q6S",
  nome: "Adaptador USB",
  categoria: "TI",
  quantidade: 30,
  estoqueMinimo: 8,
  localizacao: "prateleiraDois",
  fornecedor: "TP-Link",
  dataEntrada: "2026-04-20"
},
{
  id: "W5X1Z6A9C3E7G0K4M8P2R5T1V6Y9B3D",
  nome: "Pendrive",
  categoria: "TI",
  quantidade: 50,
  estoqueMinimo: 10,
  localizacao: "prateleiraDois",
  fornecedor: "Kingston",
  dataEntrada: "2026-04-20"
},
{
  id: "H4J8L2N7Q1S5U9W3X6Z0A4C8E2G7K1M",
  nome: "HD externo",
  categoria: "TI",
  quantidade: 12,
  estoqueMinimo: 4,
  localizacao: "prateleiraDois",
  fornecedor: "Seagate",
  dataEntrada: "2026-04-20"
},
{
  id: "P5R9T3V8Y1B6D0F4H7J2L5N9Q3S8U1W",
  nome: "Extensão elétrica",
  categoria: "eletrico",
  quantidade: 20,
  estoqueMinimo: 5,
  localizacao: "prateleiraTres",
  fornecedor: "Tramontina",
  dataEntrada: "2026-04-20"
},
{
  id: "A2C6E0G5K9M3P7R1T4V8Y2B6D0F5H9J",
  nome: "Filtro de linha",
  categoria: "eletrico",
  quantidade: 18,
  estoqueMinimo: 5,
  localizacao: "prateleiraTres",
  fornecedor: "Clamper",
  dataEntrada: "2026-04-20"
},
{
  id: "B7D1F6H9J3L8N0Q4S7U2W6X1Z5A9C3E",
  nome: "Tomada",
  categoria: "eletrico",
  quantidade: 60,
  estoqueMinimo: 15,
  localizacao: "prateleiraTres",
  fornecedor: "Schneider",
  dataEntrada: "2026-04-20"
},
{
  id: "G4K8M2P7R1T5V9Y3B6D0F4H8J2L7N1Q",
  nome: "Interruptor",
  categoria: "eletrico",
  quantidade: 50,
  estoqueMinimo: 10,
  localizacao: "prateleiraTres",
  fornecedor: "Schneider",
  dataEntrada: "2026-04-20"
},
{
  id: "U5W9X3Z8A1C6E0G4K7M2P5R9T3V8Y1B",
  nome: "Lâmpada LED",
  categoria: "eletrico",
  quantidade: 70,
  estoqueMinimo: 20,
  localizacao: "prateleiraTres",
  fornecedor: "Philips",
  dataEntrada: "2026-04-20"
},
{
  id: "F2H6J0L5N9Q3S7U1W4X8Z2A6C0E5G9K",
  nome: "Disjuntor",
  categoria: "eletrico",
  quantidade: 25,
  estoqueMinimo: 5,
  localizacao: "prateleiraTres",
  fornecedor: "Siemens",
  dataEntrada: "2026-04-20"
},
{
  id: "M4P8R2T7V1Y6B0D3F7H2J8L4N9Q1S5U",
  nome: "Álcool",
  categoria: "Limpeza",
  quantidade: 40,
  estoqueMinimo: 10,
  localizacao: "prateleiraQuatro",
  fornecedor: "Ypê",
  dataEntrada: "2026-04-20"
},
{
  id: "X5Z9A3C8E1G6K0M4P7R2T5V9Y3B8D1F",
  nome: "Detergente",
  categoria: "Limpeza",
  quantidade: 35,
  estoqueMinimo: 10,
  localizacao: "prateleiraQuatro",
  fornecedor: "Ypê",
  dataEntrada: "2026-04-20"
},
{
  id: "H2J7L1N6Q0S4U8W2X5Z9A3C7E1G6K0M",
  nome: "Desinfetante",
  categoria: "Limpeza",
  quantidade: 30,
  estoqueMinimo: 8,
  localizacao: "prateleiraQuatro",
  fornecedor: "Veja",
  dataEntrada: "2026-04-20"
},
{
  id: "R4T8V2Y7B1D5F9H3J6L0N4Q8S2U7W1X",
  nome: "Papel toalha",
  categoria: "Limpeza",
  quantidade: 60,
  estoqueMinimo: 15,
  localizacao: "prateleiraQuatro",
  fornecedor: "Scott",
  dataEntrada: "2026-04-20"
},
{
  id: "C5E9G3K8M1P6R0T4V7Y2B5D9F3H8J1L",
  nome: "Luvas",
  categoria: "Limpeza",
  quantidade: 50,
  estoqueMinimo: 10,
  localizacao: "prateleiraQuatro",
  fornecedor: "Volk",
  dataEntrada: "2026-04-20"
},
{
  id: "N2Q6S0U5W9X4Z8A1C5E2G6K0M5P9R3T",
  nome: "Vassoura",
  categoria: "Limpeza",
  quantidade: 15,
  estoqueMinimo: 5,
  localizacao: "prateleiraQuatro",
  fornecedor: "Condor",
  dataEntrada: "2026-04-20"
},
{
  id: "V4Y8B2D7F1H6J0L3N7Q2S8U4W9X1Z5A",
  nome: "Pano de limpeza",
  categoria: "Limpeza",
  quantidade: 70,
  estoqueMinimo: 20,
  localizacao: "prateleiraQuatro",
  fornecedor: "Condor",
  dataEntrada: "2026-04-20"
},
{
  id: "E5G9K3M8P1R6T0V4Y7B2D5F9H3J8L1N",
  nome: "Parafusos",
  categoria: "producao",
  quantidade: 500,
  estoqueMinimo: 100,
  localizacao: "prateleiraCinco",
  fornecedor: "Vonder",
  dataEntrada: "2026-04-20"
},
{
  id: "Q2S7U1W6X0Z4A8C2E5G9K3M7P1R6T0V",
  nome: "Porcas",
  categoria: "producao",
  quantidade: 400,
  estoqueMinimo: 80,
  localizacao: "prateleiraCinco",
  fornecedor: "Vonder",
  dataEntrada: "2026-04-20"
},
{
  id: "B4D8F2H7J1L5N9Q3S6U0W4X8Z2A7C1E",
  nome: "Arruelas",
  categoria: "producao",
  quantidade: 450,
  estoqueMinimo: 90,
  localizacao: "prateleiraCinco",
  fornecedor: "Vonder",
  dataEntrada: "2026-04-20"
},
{
  id: "K5M9P3R8T1V6Y0B4D7F2H5J9L3N8Q1S",
  nome: "Buchas",
  categoria: "producao",
  quantidade: 300,
  estoqueMinimo: 60,
  localizacao: "prateleiraCinco",
  fornecedor: "Fischer",
  dataEntrada: "2026-04-20"
},
{
  id: "W2X6Z0A5C9E4G8K1M5P2R6T0V5Y9B3D",
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


  produtos.push({
    id: crypto.randomUUID(),
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

export function excluirProduto(id){

  console.log(id);

  let newProducts = [];

  produtos.forEach((produto)=>{

    if(produto.id !== id){
      newProducts.push(produto);
    }
  });

  console.log('Deu certo');
  
  produtos = newProducts;

  saveToStorage();

  window.location.href = ("../estoquePage.html");

}