# vue-youtube-ticketmaster-search

## Descrição

Esta aplicação foi desenvolvida com o intuito de realizar a comunicação com duas APIs, buscando eventos e vídeos sobre bandas e artistas.

APIs utilizadas:
[TicketMaster](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/) e
[Youtube](https://developers.google.com/youtube/v3/getting-started).

Como processos de desenvolvimentos, inicialmente, para um rápido desenvolvimento e assertividade foi desenvolvido um [protótipo](https://xd.adobe.com/view/a426d671-4c93-4b2d-bf1e-4ec8a8a0cdac-f175/), utilizando a ferramenta adobeXD, na qual foi formado a ui e ux do da interface, utilizando padrões de uso e leis de aproximação.

Para o desenvolvimento desta aplicação foi utilizado primeiramente o framework Vue CLI, utilizando também das tecnologias axios, como cliente HTTP para realizar as requisições nas API’s, HTML5 e CSS3 (lvl 4 selectors), para a estruturação e estilização da interface.

Durante o desenvolvimento foram priorizados métodos utilizando components e, do quais garantem a abstração dos códigos. Todo o CSS utilizado foi desenvolvido manualmente, sem o uso de nenhuma biblioteca. assim utilizando media queries para atualização dos styles de acordo com a resolução do dispositvo.

## Observações 
  Devidos aos atributos e método de funcionamento da propriedade Attraction Search, da API da TicketMaster, toda requisição vazia, inválida ou que não tem resultado. Assume automáticamente o resultado da requisição anteiror (caso exista), pois isto está ligado a busca indexada ao local do pesquisa, onde a ticketmaster busca apresentar pssíveis informações desejadas pelo usuário.
  
## Conclusão
  O projeto foi concluído com sucesso, dentro das adversidades apresentadas. A interface tem grande fidelidade, algumas alterações foram realizadas durante o desenvolvimento para garantir a melhor experiência para o usuário.
  

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Acess
```
http://localhost:8080/
```

### Customize configuration
Vue.js CLI [Configuration Reference](https://cli.vuejs.org/config/).
