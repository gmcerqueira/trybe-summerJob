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
