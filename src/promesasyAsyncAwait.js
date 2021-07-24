// function pagarConTarjeta(precio) {
//   const limite = 10000;
//   console.log("Conectando...");
//   setTimeout(() => {
//     if (precio < limite) console.log("Compra Aprobada");
//     else console.log("Compra rechazada");
//   }, 2000);
// }
// pagarConTarjeta(1000);

//****Ejemplo con promesas ****//
//Estados:pendiente,resuelta y rechazada

// const pagarConTarjeta = (precio) =>
//   new Promise((resolve, reject) => {
//     const limite = 10000;
//     if (precio < limite) resolve("Compra Aprobada");
//     else reject("Compra Rechazada");
//   });
// console.log(pagarConTarjeta(100).then((respuesta)=>{
//   console.log(respuesta);
// })
// .catch((error)=>console.log(error)));
// console.log("otra tarea");

//****Async Await ****//
// const pagarConTarjeta = (precio, isConected) =>
//   new Promise((resolve, reject) => {
//     const limite = 10000;
//     console.log("Procesando el pago");
//     if (!isConected) return;
//     setTimeout(() => {
//       if (precio <= limite) resolve("Compra Aprobada");
//       else reject("Compra rechazada");
//     }, 3000);
//   });

// async function procesarPago() {
//   try {
//     const respuesta = await pagarConTarjeta(100000, true);
//     console.log(respuesta);
//   } catch (error) {
//     console.log(error);
//   }
// }

// procesarPago();
