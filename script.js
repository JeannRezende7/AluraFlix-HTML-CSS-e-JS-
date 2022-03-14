var ListaFilmes = [];

function adicionarFilme() {
  var filmeImput = document.getElementById("filme").value;
  if (filmeImput.endsWith(".jpg")) {
    listarFilmesNaTela(filmeImput);
  } else {
    console.error("Endereço de filme inválido");
  }
  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filmeImput) {
  var elementoFilme = "<img src= " + filmeImput + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilme;
}