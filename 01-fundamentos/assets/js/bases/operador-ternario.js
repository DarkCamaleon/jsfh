

// dias de semana abrimos a las 11,
// pero los fines de semana abrimos a las 9

// entra a un sitio web , para consultar si esta abierto....

const dia = 2;
const horaActual = 10;

let horaApertura;
let mensaje; // esta abierto, esta cerrado , hoy abrimos a las XX

// if ( dia === 0 || dia === 6 ){
// if ( [0,6].includes( dia )) {
//   console.log('fin de semana');
//   horaApertura = 9;
// }else{
//   console.log(' dia de semana');
//   horaApertura = 11;
// }

// console.log( { horaApertura });

horaApertura = ([ 0, 6].includes( dia )) ? 9 : 11; //operador ternario se escribe con ? en el cual revise 2 parametros
// de respuesta -- si es verdad : o si es falso

// if ( horaActual >= horaApertura ){
//   mensaje = 'esta abierto';

// }else{
  // mensaje = 'esta cerrado , hoy abrimos a las ' + horaApertura;
//  mensaje = `esta cerrado , hoy abrimos a las ${ horaApertura }` // al usar back tick ``podemos usar
  // ${ } para expresiones validas de js
//}

mensaje = ( horaActual >= horaApertura )? 'esta abierto': `esta cerramos , hoy abrimos ${ horaApertura }`;

console.log({ horaApertura, mensaje  });