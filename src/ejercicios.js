//****Ejercicio 1  ****//
////vuelta 1 MARIO,MARTIN,JUAN
// setTimeout(() => console.log("Juan"), 0);
// console.log("Mario");
// console.log("Martin");
// ////vuelta 2 JUAN,MARTIN,MARIO;
// setTimeout(() => console.log("Juan"), 0);
// setTimeout(() => console.log("Mario"),2);
// setTimeout(() => console.log("Martin"),1);
// ////vuelta 3 Martin,juan, mario
// setTimeout(() => console.log("Juan"), 1);
// setTimeout(() => console.log("Mario"),2);
// setTimeout(() => console.log("Martin"),0);
////vuelta 4 Mario,juan,martin
// setTimeout(() => console.log("Juan"), 1);
// setTimeout(() => console.log("Mario"),0);
// setTimeout(() => console.log("Martin"),2);

//**** Ejercicio 2 ****//
//crear funcion que actue como temporizador con setTimeout
// const timeout = (second) => {
//   setTimeout(() => {
//     if (second < 0) return;
//     console.log(second);
//     timeout(second - 1);
//   }, 1000);
// };

// timeout(10);

//****Ejecicio 3 ****//
//utilizando Api de github;
// const baseUrl = "https://api.github.com";
// const traerData = async () => {
//   const respuesta = await fetch(`${baseUrl}/repositories`);
//   const jsonResponse = await respuesta.json();
//   console.log(jsonResponse);
//   return jsonResponse;
// };

// const getOwnersNames = async () => {
//   const repositories = await traerData();
//   const namesArray = repositories.map((repo) => repo.owner.login);
//   console.log(namesArray);
// };

// getOwnersNames();

// const getRepositoriesFromOwner = async () => {
//   const repositories = await traerData();
//   const firstRepositorie = repositories[0];
//   const reposEndpoint = firstRepositorie.owner.repos_url;
//   const reposResponse = await fetch(reposEndpoint);
//   const jsonReposResponse = await reposResponse.json();
//   console.log(jsonReposResponse);
// };

// getRepositoriesFromOwner();
