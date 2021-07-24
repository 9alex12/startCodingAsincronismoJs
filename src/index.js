import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Asincronismo en JS</h1>
<h3>Javascript es sincronico solo ejecuta una tarea a la vez</h3>
`;

// console.log("Primero");
// for(let index=0;index<100;index++){
//   console.log(index);
// }
// console.log("Despues del for")

// console.log("Me despierto");
// console.log("Me lavo la cara");
// for (let time = 120; time >= 0; time--) {
//   console.log(time);
//   if (time === 0) console.log("El cafe esta listo");
// }
// console.log("Desayuno");
// console.log("Me siento a trabajar");

// console.log("Me despierto");
// console.log("Me lavo la cara");
// setTimeout(()=>{
//   console.log("El cafe esta listo")
// },5000)
// console.log("Desayuno");
// console.log("Me siento a trabajar");

//****Ejemplo 1 ****//
// console.log("Mario");
// console.log("Juan");
// console.log("Pedro");

//****Ejemplo 2 ****//
// setTimeout(() => console.log("Mario"), 1000);
// console.log("Juan");
// console.log("Pedro");

//****Ejemplo 3 ****//
// setTimeout(() => console.log("Mario"), 0);
// console.log("Juan");
// console.log("Pedro");

//****Ejemplo 4 ****//
// setTimeout(() => console.log("Mario"), 0);
// for (let index = 0; index <= 5000; index++) {
//   if (index === 5000) console.log("Juan");
// }
// console.log("Pedro");
