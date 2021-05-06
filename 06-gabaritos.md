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
