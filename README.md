# O que vamos aprender?

No último bloco vimos que as _callbacks_ são bastante utilizadas para nos auxiliar na execução e tratamento de respostas de um código, sendo bem sucedido ou não. Apesar de ser amplamente utilizada no JavaScript, sua implementação pode se tornar pouco legível conforme evoluímos nosso código. Em junho de 2015, com o lançamento do EcmaScript [ES6 (ES2015)](https://medium.com/iclinic/es6-es2015-o-que-mudou-c22d9308f52d) foi introduzido o conceito de [**Promises**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise) que iremos aprender agora.

# Você será capaz de:

* Entender o funcionamento de uma Promise
* Tratar as resposta retornadas
* Aplicar o retorno de API externa em suas aplicações

# Por que isso é importante?

A implementação de **Promises** irá tornar seu código mais legível e também nos ajudar a trabalharmos com códigos assíncronos.

No dia a dia de uma pessoa desenvolvedora você irá notar que o uso de Promises é praticamente padrão, como por exemplo no uso de **APIs**.

Hoje será seu primeiro contato com esta ferramenta que a partir de agora será vista e praticada mais e mais conforme iremos avançando no curso.

# Conteúdos

## APIs

### O que é uma API?

De acordo com o site [Canal Tech](https://canaltech.com.br/software/o-que-e-api/#:~:text=API%20%C3%A9%20um%20conjunto%20de,Interface%20de%20Programa%C3%A7%C3%A3o%20de%20Aplicativos%22.):
>API é um conjunto de rotinas e padrões de programação para acesso a um aplicativo de software ou plataforma baseado na Web. A sigla API refere-se ao termo em inglês "Application Programming Interface" que significa em tradução para o português "Interface de Programação de Aplicativos".

### Realmente útil?

**Vamos imaginar um cenário:** você está desenvolvendo sua página de portfólio e quer adicionar um vídeo que mostra o funcionamento de um de suas aplicações que foi postado no YouTube.

Para isso, você envia um email ao gerente do site, solicitando um link que traga informações como total de visualizações, data de postagem e número de likes. Mas existe um problema, essas informações são estáticas no link, ou seja, toda a vez que quiser atualizar o número de visualizações por exemplo você terá que repetir todo o processo!

![Socorro!](https://media2.giphy.com/media/tymAL1JjdqfPxq59cd/200w.webp?cid=ecf05e472gd5te6qloroawwzknp64qtbladx0smntzvv5end&rid=200w.webp&ct=g)
>Fonte: [Giphy](https://giphy.com/e)

### Facilitando nossa vida

Com o cenário apresentado anteriormente você já deve entender o por que as ***APIS*** são tão comuns e necessárias na sua vida como pessoa desenvolvedora.

Sua implementação agrega facilidades, simplicidade e agilidade além claro da automação de requisições web.

### Seu funcionamento

Uma **API** funciona através do back-end de um servidor, fazemos o ***request***(requisição) das informações que queremos e ela nos retorna uma ***response***(resposta) com os dados que pedimos no formato JSON geralmente.

![Funcionamento de uma API](https://marquesfernandes.com/wp-content/uploads/2020/04/como-api-funciona.jpg)
>Fonte: [Marques Fernandes](https://marquesfernandes.com/tecnologia/o-que-e-uma-api-e-para-que-serve/)

### Mas o que é um JSON?

**JSON** ou ***J***ava ***S***cript ***O***bject ***N***otation é um formato de dados representados como objetos Javascript adotado amplamente pelas comunidades de programação de diferentes linguagens.

```JSON
// https://viacep.com.br/ws/01001000/json/

{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "ibge": "3550308",
  "gia": "1004",
  "ddd": "11",
  "siafi": "7107"
}
```

>Fonte: [ViaCEP](https://viacep.com.br/)

Veja como sua leitura é intuitiva. Nesta requisição foi feita a consulta de um cep e recebemos como resposta um objeto trazendo as informações referente a ele.

Copie e abra o link comentado no código no seu navegador. Teste seu cep trocando o **01001000** no link pelo o seu e veja o retorno das informações.

***DICA:*** para melhor visualizar arquivos JSON no navegador utilize plugins de formatação, por exemplo:

* Para *Chrome* instale [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en-US).
* Para *Firefox* instale [Basic JSON Formatter](https://addons.mozilla.org/en-US/firefox/addon/basic-json-formatter/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search).

### Fluxo síncrono

Vimos anteriormente que a execução de funções no JavaScript são feitas de cima para baixo e que a execução de uma função precisa aguardar a execução e retorno da função anterior. Isso lembra bastante uma fila, não é mesmo?

### Fluxo assíncrono

Quando uma função assíncrona é lida pelo *JavaScript* ela é colocada em uma espaço reservado para essas funções e a fila normal continua seguindo sua execução. Aṕos a função assíncrona termina sua execução, ela retorna novamente ao fluxo síncrono para entregar seu resultado.

Mas existe um porém, diferente do fluxo síncrono que possui uma ordem de execução, o fluxo assíncrono retorna as funções conforme elas finalizam sua execução.

Isso quer dizer que não necessariamente a primeira função neste espaço será a primeira a ser retornada. Veja o exemplo do segundo quadro, a `função 4` irá retornar primeiro que a `função 3`

![Fluxos de execução](https://i.redd.it/lpf0u9nbj7w41.jpg)
>Fonte: [Reddit](https://www.reddit.com/r/learnjavascript/comments/gboy8r/async_vs_sync/)

## Fluxo síncrono X Fluxo assíncrono

Bem, como resolvemos o problema de ordem na execução de funções assíncronas?

Desenvolvedores começaram a fazer o uso de `callbacks` para contornar essa falta de ordenação.

Para códigos simples essa estratégia funciona. Mas como dito anteriormente, conforme a complexidade do código aumenta essa cadeia de `callbacks` tornando o entendimento cada vez mais difícil e temos vários nomes para isso, como *Callback Hell* ou **Hadouken Code**

![Hadouken!](https://miro.medium.com/max/1442/0*NymDlpf07hHmE9ms.jpg)
>Fonte: [Bruno Michels](https://medium.com/@BrunoLM7/using-async-await-in-typescript-javascript-e93cd69c7363)

Para a nossa salvação e para melhorar a organização existe a **Promise**!

![Promise](https://media4.giphy.com/media/26BRxBeok96wnAwpy/giphy.gif?cid=ecf05e47x11d34l568fcb5piljspecfoehtunnppjqeapxx9&rid=giphy.gif&ct=g)
>Fonte: [Giphy](https://giphy.com/gifs/ashvsevildead-starz-ash-vs-evil-dead-26BRxBeok96wnAwpy)

## PROMISE

O objeto `Promisse` é exatamente a sua tradução: uma promessa de que ele tentará executar o código passado e retornar o resultado da solicitação
, seja em caso de sucesso ou falha.

### Criando uma **Promise**

Para criarmos nossa primeira **Promise** usamos o construtor `Promise` juntamente como o operador `new`. Com isso estamos dizendo que vamos instanciar um *novo* objeto a partir da classe *Promise*.

```js
const promessa = new Promise();
```

Não precisa se preocupar com classes e construtores, estes temas serão abordados mais à frente.

### Estados de Promise

A Promise possui três estados:

* Pending (Pendente)
* Resolved (Resolvida)
* Rejected (Rejeitada)

Ao ser instanciada, a Promise automaticamente irá para o estado *pending* e aguarda o retorno da função passada para ela com o auxílio de  2 parâmetros: *resolve e reject*.

* Se o retorno for um sucesso seu estado passa a ser *resolved*.

* Se ocorre algum erro seu estado passa a ser *rejected*

```js
const promise = new Promise((resolve, reject) => {
  const resolvida = true;

  if (resolvida === true) {
    resolve(console.log("Promise resolvida"));
  } else {
    reject(console.log("Promise rejeita... =´("));
  }
});

```

Execute o programa e depois troque o valor de `resolvida` e veja a diferença de resultados.

Você deve estar se perguntando: qual a diferença disso para o uso de uma `callback`? E o por que o retorno de `reject` traz uma mensagem maior do que está no `console.log`?

A diferença está na gestão do fluxo e o Promise possui 2 ferramentas para isso.

### .then()

O método `.then` faz o tratamento através da função que passamos recebendo como parâmetro retorno da *promise* quando resolvida.

Note que podemos encadear vários `.then`, sendo que cada um recebe como argumento o retorno do anterior.

Com isso controlamos nosso fluxo e não temos mais o problema com o **Hadouken**.

```js
const promise = new Promise((resolve, reject) => {
  const resolvida = true;

  if (resolvida === true) {
    resolve("Promise resolvida");
  } else {
    reject("Promise rejeita... =´(");
  }
})
  .then(response=>`${response} com sucesso!`)
  .then(response => console.log(response))
```

Mas e o erro retornado de `reject`? Calma pequeno gafanhoto, para isso existe o `.catch`!

### .catch()

O método `.catch` faz o tratamento de erros que ocorrem a ***qualquer*** momento na execução do código.

```js
const promise = new Promise((resolve, reject) => {
  const resolvida = false;

  if (resolvida === true) {
    resolve("Promise resolvida");
  } else {
    reject("Promise rejeita... =´(");
  }
})
  .then(response=>`${response} com sucesso!`)
  .then(response => console.log(response))
  .catch(error=>console.log(error))
```

# Mãos na massa

Vamos colocar na página o nome de um herói ou vilão da cultura pop em nossa página utilizando uma API.

* Iremos utilizar a ***superhero-api***, de uma olhada na [documentação](https://akabab.github.io/superhero-api/api/). Não se preocupe, vamos fazer juntos!
  
* Utilize os arquivos `html` e `js` abaixo como ponto de partida, no primeiro momento vamos editar somente o `js`

```html
<!-- character.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Character Info</title>
    <script src="./characterScript.js"></script>
      <style>
    *{
      margin: 0;
      padding: 0;
    }
    body {
      align-items: center;
      display: flex;
      flex-flow: column;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      margin: 30px;
    }
    .character {
      text-align: center;
      border: 1px solid rgb(180, 180, 180);
      border-radius: 15px;
      margin-top: 25px;
      overflow: hidden;
      width: fit-content;
    }

    .character-name,
    .character-side {
      background-color: rgb(117, 117, 117);
      color: rgb(255, 255, 255);
      font-size: 24px;
      margin: 00;
      padding: 15px 30px;
      text-align: center;
      text-transform: capitalize;
    }

    .character-img {
      border-radius: 50%;
      margin: 30px 50px;
    }
  </style>
  </head>
  <body>
    <h1>Personagem</h1>
    <section class="character">
      <h2 id="character-name"></h2>
    </section>
  </body>****
</html>
```

```js
// characterScript.js
function characterName() {
  const API_URL = "https://akabab.github.io/superhero-api/api/id/1.json";
  // Adicione sua lógica aqui
}

window.onload = () => characterName();
```

Iremos fazer nossa requisição utilizando a função `fetch`. Ela recebe dois parâmetros:

* Primeiro o endereço ao qual será feito a requisição que é obrigatório.
* Segundo é um objeto com as especificações da requisição, mas para a **API** que utilizaremos esse parâmetro não é necessário. Se quiser saber mais sobre, veja a documentação da [Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch).

```js
// characterScript.js
function characterName() {
  const API_URL = "https://akabab.github.io/superhero-api/api/id/1.json";

  fetch(API_URL);
}

window.onload = () => characterName();
```

Como vimos anteriormente, por ser uma **Promise**, trataremos a resposta da função `fetch` encadeando nossos controladores de fluxo `.then` e `.catch`. Vamos ver no console a estrutura que nossa requisição recebe de resposta da **API**.

```js
// characterScript.js
function characterName() {
  const API_URL = "https://akabab.github.io/superhero-api/api/id/1.json";

  fetch(API_URL)
   .then(response => console.log(response));
}

window.onload = () => characterName();
```

Mas e agora, como usar as informações fornecidas pela estrutura?

![Travolta perdido](https://media.giphy.com/media/x6q2SEFflggiQ/giphy.gif)

Lembra do tal ***JSON***?

Precisamos transformar essa estrutura em um objeto `JSON` e para isso usaremos o método `.json()` na `response` da API que retorna uma outra **Promise** que quando bem sucedida irá retornar um `JSON`.

Consegue perceber que o funcionamento e tratamento de uma **Promise** é bem sintático?

```js
// characterScript.js
function characterName() {
  const API_URL = "https://akabab.github.io/superhero-api/api/id/527.json";
  fetch(API_URL)
    .then(response => response.json())
    .then(response => console.log(response));
}

window.onload = () => characterName();
```

Podemos ver no console que agora temos um objeto bem mais simples de entender certo?

Vamos agora trabalhar com essas informações:

1 -  Adicione o nome do personagem a tag responsável por ele.

2 - Crie uma nova tag no `html` que mostre o imagem do personagem e adicione a imagem fornecida pelo objeto a ela.

3 - Adicione a informação se o personagem é um herói ou um vilão.

* Estude o objeto retornado para ver aonde essas informações se encontram.
* Utilize os seletores do *DOM* para adicionar as informações às tags.
  
*DICA:* Utilize os nomes de classes já fornecidos no `html` para estilização, e apesar de não ser o foco no momento, fique a vontade para estilizar a página do seu jeito.

Muito legal ver as informações aparecendo na tela! Mas sempre recebemos o mesmo personagem...

![Chato](https://media.giphy.com/media/xT5LMEcHRXKXpIHCCI/giphy.gif)

4 - Acesse o [glossário](https://akabab.github.io/superhero-api/api/glossary.html) da **API** para ver os vários personagens disponíveis, e altere o *id* na **API_URL** na função `characterName` para um novo personagem aparecer na página.

## Bônus

1 - Crie uma função que crie um *id* aleatório(dentro do número total de personagens) para que toda a vez que a página for carregada ela trás um personagem diferente. Após sua implementação, recarregue a página algumas vezes e veja o console.

2 - Depois de criar o *id* aleatório, reparou que algumas vezes acontece um erro na requisição e o personagem não carrega? Isso ocorre porque o glossário não possui todos os números no intervalo de 1 a 731(último personagem). Faça o teste com o *id*=50. Trate esse erro com o método `.catch()` para mostrar uma mensagem mais semântica no console.

3 - Mostre a mensagem de erro na página.

# Gabarito

1 -  Adicione o nome do personagem a tag responsável por ele.

2 - Crie uma nova tag no `html` que mostre o imagem do personagem e adicione a imagem fornecida pelo objeto a ela.

3 - Adicione a informação se o personagem é um herói ou um vilão.

* Estude o objeto retornado para ver onde essas informações se encontram.
* Utilize os seletores do *DOM* para adicionar as informações às tags.

```html
<!-- character.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Character Info</title>
    <script src="./characterScript.js"></script>
  </head>
  <style>
    *{
      margin: 0;
      padding: 0;
    }
    body {
      align-items: center;
      display: flex;
      flex-flow: column;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      margin: 30px;
    }
    .character {
      text-align: center;
      border: 1px solid rgb(180, 180, 180);
      border-radius: 15px;
      margin-top: 25px;
      overflow: hidden;
      width: fit-content;
    }

    .character-name,
    .character-side {
      background-color: rgb(117, 117, 117);
      color: rgb(255, 255, 255);
      font-size: 24px;
      margin: 00;
      padding: 15px 30px;
      text-align: center;
      text-transform: capitalize;
    }

    .character-img {
      border-radius: 50%;
      margin: 30px 50px;
    }
  </style>
  <body>
    <h1>Personagem</h1>
    <span class="error"></span>
    <section class="character">
      <h2 class="character-name"></h2>
      <img class="character-img" src="" alt="Personagem">
      <p class="character-side"></p>
    </section>
  </body>
</html>
```

```js
// characterScript.js
function characterName() {
  const API_URL = "https://akabab.github.io/superhero-api/api/id/1.json";

  fetch(API_URL)
    .then(response => response.json())
    .then(response => {
      const name = document.querySelector('.character-name');
      const img = document.querySelector('.character-img');
      const side = document.querySelector('.character-side');

      name.innerHTML = response.name;
      img.src = response.images.sm;
      side.innerHTML = response.biography.alignment;
    })
}

window.onload = () => characterName();
```

4 - Acesse o [glossário](https://akabab.github.io/superhero-api/api/glossary.html) da **API** para ver os vários personagens disponíveis, e altere o *id* na **API_URL** na função `characterName` para um novo personagem aparecer na página.

```js
// characterScript.js
function characterName() {
  const API_URL = "https://akabab.github.io/superhero-api/api/id/354.json";

  fetch(API_URL)
    .then(response => response.json())
    .then(response => {
      const name = document.querySelector('.character-name');
      const img = document.querySelector('.character-img');
      const side = document.querySelector('.character-side');

      name.innerHTML = response.name;
      img.src = response.images.sm;
      side.innerHTML = response.biography.alignment;
}

window.onload = () => characterName();
```

## Bônus

1 - Crie uma função que crie um *id* aleatório(dentro do número total de personagens) para que toda a vez que a página for carregada ela trás um personagem diferente. Após sua implementação, recarregue a página algumas vezes e veja o console.

```js
// characterScript.js
const randomCharacter = () => {
  return (Math.random() * 731).toFixed()
}

function characterName() {
  const randomID = randomCharacter();
  const API_URL = `https://akabab.github.io/superhero-api/api/id/${randomID}.json`;
  
  fetch(API_URL)
    .then(response => response.json())
    .then(response => {
      const name = document.querySelector('.character-name');
      const img = document.querySelector('.character-img');
      const side = document.querySelector('.character-side');

      name.innerHTML = response.name;
      img.src = response.images.sm;
      side.innerHTML = response.biography.alignment;
    })
}

window.onload = () => characterName();
```

2 - Depois de criar o *id* aleatório, reparou que algumas vezes acontece um erro na requisição e o personagem não carrega? Isso ocorre porque o glossário não possui todos os números no intervalo de 1 a 731(último personagem). Faça o teste com o *id*=50. Trate esse erro com o método `.catch()` para mostrar uma mensagem mais semântica no console.

```js
// characterScript.js
const randomCharacter = () => {
  return (Math.random() * 731).toFixed()
}

function characterName() {
  const randomID = randomCharacter();
  const API_URL = `https://akabab.github.io/superhero-api/api/id/${randomID}.json`;
  
  fetch(API_URL)
    .then(response => response.json())
    .then(response => {
      const name = document.querySelector('.character-name');
      const img = document.querySelector('.character-img');
      const side = document.querySelector('.character-side');

      name.innerHTML = response.name;
      img.src = response.images.sm;
      side.innerHTML = response.biography.alignment;
    })
    .catch(error => console.log(`O personagem de id=${randomID} não existe na lista. Erro:${error}`));
}

window.onload = () => characterName();
```

3 - Mostre a mensagem de erro na página.

```js
const randomCharacter = () => {
  return (Math.random() * 731).toFixed()
}

function characterName() {
  const randomID = randomCharacter();
  const API_URL = `https://akabab.github.io/superhero-api/api/id/${randomID}.json`;
  
  fetch(API_URL)
    .then(response => response.json())
    .then(response => {
      const name = document.querySelector('.character-name');
      const img = document.querySelector('.character-img');
      const side = document.querySelector('.character-side');
      
      name.innerHTML = response.name;
      img.src = response.images.sm;
      side.innerHTML = response.biography.alignment;
    })
    .catch(error => {
      const errorText = `O personagem de id=${randomID} não existe na lista.`
      const errorTag = document.querySelector('.error');

      errorTag.innerHTML = errorText
      console.log(errorText, error)
    });
}

window.onload = () => characterName();
```

# Recursos adicionais

* [Código Fonte - Desvendando Promises](https://www.youtube.com/watch?v=nRJhc6vXyK4&ab_channel=C%C3%B3digoFonteTV)
* [Trabalhando Com Promises Em Javascript](https://blog.matheuscastiglioni.com.br/trabalhando-com-promises-em-javascript/)
* [JavaScript: Promise com exercícios](https://www.devmedia.com.br/javascript-promise/41205)
* [Entendendo Promises de uma vez por todas](https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2)
* [Async/Await and Promises Explained](https://www.freecodecamp.org/news/async-await-and-promises/)
