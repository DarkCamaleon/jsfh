// forma actual
// function crearPersona(nombre, apellido) {
//   return {
//     nombre : nombre,
//     apellido: apellido,
//   }
// };

// forma vieja
// function crearPersona(nombre, apellido){
//   return {
//     nombre,
//     apellido,
//   }
// };
// cuando la variable es la misma que la propiedad se puede evitar poner la propiedad

const crearPersona = (nombre, apellido)=> ({nombre,apellido});

const persona = crearPersona('fernando', 'herrera');

console.log(persona);

function imprimeArgumentos(){
  console.log( arguments );
};

// ... indica un parametro rest que le dice todos los argumentos que sean enviados a
// imprimeArgumentos2 create un arreglo con cada uno de ellos
// parametro rest 2 consideraciones
// 1- no puede ir ningun otro imprimeArgumentos despues

// const imprimeArgumentos2 = ( ...args ) =>{
//   console.log ( args );
// }
// 2- si deseo un valor en concreto lo declaro aparte
const imprimeArgumentos2 = ( edad, ...args) => {
  // console.log({edad , args});
  // console.log( edad, args );
  return args;
}

const argumentos = imprimeArgumentos2(10, true, false, 'fernando', 'hola');
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'fernando', 'hola');
console.log({ casado, vivo, nombre, saludo});

const { apellido } = crearPersona('fernando', 'herrera');
const { apellido: nuevoApellido } = crearPersona('fernando', 'herrera');

console.log({nuevoApellido});

// destructuracion de argumentos

let tony = {
  nombre: 'tony stark',
  codeName: 'ironman',
  vivo: false,
  edad: 40,
  trajes: ['mark I', 'mark v', 'hulkbuster'],
  'ultima-pelicula': 'infinity war',
};

// const imprimePropiedades = (personaje )=>{
//   console.log( personaje.nombre );
//   console.log(personaje.codeName);
//   console.log(personaje.vivo);
//   console.log(personaje.edad);
//   console.log(personaje.trajes);
// };

const imprimePropiedades = ({nombre, codeName, vivo,edad = 15, trajes}) => {
  console.log({nombre});
  console.log({codeName});
  console.log({vivo});
  console.log({edad});
  console.log({trajes});
};

imprimePropiedades( tony );