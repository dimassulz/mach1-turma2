/* 
1 - Validar se todos os campos do formulário estão preenchidos
4 - Criar um objeto produto com as propriedades descritas no form
5 - Ao clicar no cadastrar, preencher uma posição no array com o objeto produto
 e exibir uma mensagem de produto cadastrado com sucesso
6 - Limpar o formulário após a inserção do dado no array
7 - Ao clicar no concluir cadastramento, escoder o form e exibir a lista
8 - Percorrer o array e injetar todos os registros no HTML


Atividade secundária
1 - Limitar quantidade de caracteres do nome e descrição (maxlength)
2 - Realmente quer concluir o cadastramento
3 - Validar se o código digitado já existe
*/

/* Identificar os elementos no html através do ID */
let codigoProduto = document.getElementById("codigo-produto");
let nomeProduto = document.querySelector("#nome-produto");
let descricaoProduto = document.getElementById("descricao-produto");
let precoProduto = document.querySelector("#preco-produto");
let botaoSalvar = document.getElementById("botao-salvar");
let botaoConcluir = document.getElementById("botao-concluir");
let sectionCadastramento = document.getElementById("cadastramento-produtos");
let sectionListaProdutos = document.getElementById("listagem-produtos");
let formulario = document.querySelector("form");
let mensagemSucesso = document.querySelector("#mensagemSucesso");
let mensagemErro = document.querySelector("#mensagemErro");
let listaProdutosCadastrados = document.querySelector("#lista-produtos tbody");
let botaoVoltar = document.querySelector("#voltar");

/* Variaveis de armazenamento */
let produto = {
  codigo: 0,
  nome: "",
  descricao: "",
  preco: 0,
};

//Lista de produtos vazia
let listaProdutos = [];

/* Verificar se todos os campos do form estão preenchidos */
function camposPreenchidos() {
  // Sim ou não // True or False
  if (
    codigoProduto.value !== "" &&
    nomeProduto.value !== "" &&
    descricaoProduto.value !== "" &&
    precoProduto.value !== ""
  ) {
    // Campos preenchidos
    return true;
  } else {
    // Senao
    return false;
  }
}

/* Fazendo do jeito pedreiro master  fins didáticos*/
function liparFormulario() {
  codigoProduto.value = "";
  nomeProduto.value = "";
  descricaoProduto.value = "";
  precoProduto.value = "";
}

function salvarProduto() {
  // Crio uma cópia do modelo do objeto  produto
  let produtoCriado = { ...produto };
  // Atribuo valor as propriedades desse objeto
  produtoCriado.codigo = codigoProduto.value;
  produtoCriado.nome = nomeProduto.value;
  produtoCriado.descricao = descricaoProduto.value;
  produtoCriado.preco = precoProduto.value;

  // Enviando pro array que armazena os produtos
  listaProdutos.push(produtoCriado);
  // Limpando o form
  formulario.reset(); // Forma fácil de fazer se souber pesquisar antes do professor ensinar
  //liparFormulario() // Pedreiro master fins didáticos
  exibirMensagemSucesso();
}

function exibirMensagemSucesso() {
  mensagemErro.style.display = "none";
  mensagemSucesso.style.display = "block";
  mensagemSucesso.innerHTML = `Produto salvo com sucesso!`;
}

function exibirMensagemErro() {
  mensagemSucesso.style.display = "none";
  mensagemErro.style.display = "block";
  mensagemErro.innerHTML = `Campos não preenchidos!`;
}

/*
ocultar o formulario
inserir na lista os produtos
mostrar a lista
*/
const concluirCadastramento = () => {
  listaProdutosCadastrados.innerHTML = ""; //limpar toda a lista
  for (let produto of listaProdutos) {
    listaProdutosCadastrados.innerHTML += `
    <tr>
      <td>${produto.codigo}</td>
      <td>${produto.nome}</td>
      <td>${produto.descricao}</td>
      <td>${produto.preco}</td>
    </tr>
    `;
  }
  mostrarListaDeProdutos();
};

const mostrarListaDeProdutos = () => {
  sectionCadastramento.style.display = "none"; //ocultar o form
  sectionListaProdutos.style.display = "block"; //mostrando a lista
};

const mostrarFormulario = () => {
  sectionCadastramento.style.display = "block"; //mostrar o form
  sectionListaProdutos.style.display = "none"; //ocultando a lista
};

botaoSalvar.onclick = () => {
  if (camposPreenchidos()) {
    // Se for true
    salvarProduto();
  } else {
    // senao
    exibirMensagemErro();
  }
};

botaoConcluir.onclick = () => {
  concluirCadastramento();
};

botaoVoltar.onclick = () => {
  mostrarFormulario();
};
