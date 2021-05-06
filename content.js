const promise = new Promise((resolve, reject) => {
  const resolvida = false;

  if (resolvida === true) {
    resolve("Promise resolvida");
  } else {
    reject("Promise rejeita... =´(");
  }
})
  .then(response => `${response} com sucesso!`)
  .then(response => console.log(response))
  .catch(error=>console.log(error))
