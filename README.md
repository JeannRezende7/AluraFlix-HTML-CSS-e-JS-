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

