function criarParagrafo() {
    let para = document.createElement("p");
    para.textContent = "Você clicou no botão!";
    document.body.appendChild(para);
}

const botoes = document.querySelectorAll("button");

for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", criarParagrafo);
}

// defer -> Faz com que o navegador carregue na ordem de aparição.
//          Usado para quando os scripts js são dependentes.

// async -> Faz o navegador carregar de forma aleátoria.
//          Usado quando a página precisa do script o 
//          mais rápido possível.

// Os eventos são as ações que ocorrem no navegador, como um 
// um botão sendo clicado, ou uma página carregada, ou um vídeo
// tocando. Ações as quais podem ser repondidas adicionando 
// blocos de cógigo.
// Os construtores que monitoram os acontecimentos de eventos
// são chamados de event listeners, e os blocos de código executados
// em reposta ao acontecimento do evento são chamados de event handlers.

// O campo focus() serve para colocar automaticamente o cursor dentro do 
// campo de texto do <input> assim que a página carrega. 

// Em js tudo é um objeto. Um objeto é um coleção de funcionalidades
// relacionadas armazenadas em um único agrupamento.

// O metódo querySelector() pega um pedaço de informação - um seletor CSS
// que seleciona o a elemento ao qual vocÇe quer referenciar.

// Para mudar o texto dentro de um paragrafo a propriedade textContent se 
// fa necessária.
//      nome_variavel.textContent = "Outro texto."

// Para alterar os campos style na página com js basta usar o nome do campo com 
// a propriedade style e a estilização que quer fazer.
//      nome_variavel.style.backgroundColor = "red";

// console.log() serve para mostrar a saída do comando.