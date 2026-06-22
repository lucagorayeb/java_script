var Algo = function (elemento) {
  this.nome = "Algo bom";
  this.onclick1 = function (evento) {
    console.log(this.nome); // indefinido, porque this é a função de escuta do clique
  };
  this.onclick2 = function (evento) {
    console.log(this.nome); // 'Algo bom', porque this está como objeto Algo através do bind
  };
  elemento.addEventListener("click", this.onclick1, false);
  elemento.addEventListener("click", this.onclick2.bind(this), false); // Truque de bind
};

var Algo2 = function (elemento) {
  this.nome = "Algo bom";
  this.handleEvent = function (evento) {
    console.log(this.nome); // 'Algo bom', porque this é o objeto Algo
    switch (evento.type) {
      case "click":
        // seu codigo aqui...
        break;
      case "dblclick":
        // seu codigo aqui...
        break;
    }
  };
  elemento.addEventListener("click", this, false); // Não this.handleEvent, só this
  elemento.addEventListener("dblclick", this, false); // Não this.handleEvent, só this
};