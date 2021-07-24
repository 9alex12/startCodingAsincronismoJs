//Protocolo http

//GET, POST, PUT, DELETE

//GET => Solicitar datos e informacion al servidor;
//POST => Enviar Informacion al servidor
//PUT => Modificar informacion en el servidor
//Delete => Borrar informacion del servidor

//GET
// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then((response) => response.json())
// .then((json) => console.log(json));

//POST

//PUT
// fetch("https://jsonplaceholder.typicode.com/todos/1", {
//   method: "PUT",
//   body: JSON.stringify({
//     id: 1,
//     title: "foo",
//     body: "bar",
//     userId: 1
//   }),
//   headers: {
//     "Content-type": "application/json; charset-UTF-8"
//   }
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// //DELETE
// fetch("https://jsonplaceholder.typicode.com/todos/1", {
//   method: "Delete"
// });
