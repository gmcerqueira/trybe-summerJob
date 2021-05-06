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
  