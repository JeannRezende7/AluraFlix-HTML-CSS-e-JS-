var ListaFilmes = [];

function adicionarFilme() {
  var filmeImput = document.getElementById("filme").value;
  if (filmeImput.endsWith(".jpg")) {
    listarFilmesNaTela(filmeImput);
  } else {
    alert("Endereço de filme inválido");
  }
  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filmeImput) {
  var elementoFilme = "<img src= " + filmeImput + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilme;
}

var listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/thumb/1/14/Spide-Man_Poster.jpg/250px-Spide-Man_Poster.jpg",
  "https://img.elo7.com.br/product/zoom/26776B4/big-poster-filme-homem-aranha-2-2004-lo01-tamanho-90x60-cm-marvel.jpg",
  "https://img.elo7.com.br/product/zoom/2677953/big-poster-filme-homem-aranha-3-2007-lo02-tamanho-90x60-cm-homem-aranha.jpg",
  "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_.jpg",
  "https://i.pinimg.com/736x/4c/bd/eb/4cbdebda6ca9fec0b893eafc0910bd4c--man-movies-movies-free.jpg",
  "https://hqcafe.com.br/wp-content/uploads/2020/07/critica-homem-aranha-de-volta-7023049.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/0/04/Spider-man-far-from-home-poster.jpg",
  "https://ogimg.infoglobo.com.br/in/25277816-5b3-952/FT450A/WhatsApp-Image-2021-11-15-at-16.38.05-1.jpeg.jpg"
];
for (var i = 0; i < listaFilmes.length; i++) {
  var elementoLista = "<img src= " + listaFilmes[i] + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoLista;
}