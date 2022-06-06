let a = 10;
let b = a;

console.log({ a,b});

let juan = { nombre: 'juan'};
// para crear una copia de un objeto usamos {} y para separar propiedades y valores usamos el decorador spread ...
let ana = { ...juan };

ana.nombre = 'ana';
// todos los objecto son pasados por referencia y todos los primitivos por valor
console.log({ juan, ana });
// si usamos ... en el parametro de la funcion se considera ... como el operador ress
// y quiere decir une todos los argumentos en una sola variable y transformalo en un arreglo
const cambiarNombre = ( { ...persona })=>{
  persona.nombre = 'tony';
  return persona;
};

let peter = { nombre : 'peter'};
let tony =cambiarNombre( peter );

console.log ({ peter, tony });


// arreglos

const frutas = ['manzana', 'pera', 'piña'];
// const otrasFrutas = [...frutas];
console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');




otrasFrutas.push('mango');

console.table({ frutas, otrasFrutas});


