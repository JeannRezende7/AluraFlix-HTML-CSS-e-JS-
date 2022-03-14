# AluraFlix-HTML-CSS-e-JS-

# Exemplo de vetor simples :
```
var listaFilmes = ["Os Vingadores","Homem Aranha 2","Toy Story"]
```
Exibir passando o indice igual no java:  (nesse caso eu usei direto no CSS a tag ```<p>``` pois não tinha nada no HTML,então ele ja cria automaticamente no HTML o parágrafo.

```
document.write("<p>" + listaFilmes[0] + "</p>");
document.write("<p>" + listaFilmes[1] + "</p>");
document.write("<p>" + listaFilmes[2] + "</p>");
```
Posso adicionar novos itens ao vetor usando o comando ```.push``` por exemplo :
``` listaFilmes.push("Novo Filme a ser Adicionado"); ```

Documentação sobre array com alguns outros comandos : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

Para exibir mais facil nao esquecer do For simples: (um pequeno detalhe é que normalmente no java usamos o for int, aqui usamos o for var)
```
for (var i = 0; i < listaFilmes.length; i++)  {
document.write("<p>" + listaFilmes[i] + "</p>");
}
``` 
# .endsWith
Posso usar o comando ```.endsWith```para verifiar se a informação termina com tal coisa,por exemplo:
```
if (filmeImput.endsWith(".jpg")) {
``` 
Ele vai verificar se o filmeImput termina com ".jpg"

# Passar uma variavel de uma função para outra
Basta colocar entre os () na função de destino,por exemplo:
``function adicionarFilme() {
  var filmeImput = document.getElementById("filme").value;
  }
  
  function listarFilmesNaTela(filmeImput) {}``
  Nesse exemplo foi passado a variavel filme imput que estava na função adicionarFilme para  afunção listarFilmesNaTela
  
  # CSS Anotar
  
  ``
  margin: 5px;
  max-height: 250px;
  height: 315px;
  width: 185px;
  border: 1px solid #dbdbdb;
  font-family: "Verdana";
  color: #ff0000;
  margin: 0 0 5px;
  font-weight: bold;
  ``
  
