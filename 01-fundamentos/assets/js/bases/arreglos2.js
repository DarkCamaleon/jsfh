let juegos = ['zelda', 'mario', 'metroid', 'chrono'];
console.log( 'largo:', juegos.length);

let primero = juegos[ 2 -2];
let ultimo = juegos[ juegos.length -1];

console.log({ primero, ultimo});

juegos.forEach( (elemento, indice, arr)=>{
    console.log({ elemento, indice, arr });
});

// metodo .push sirve para agregar un elemento al arreglo
let nuevaLongitud = juegos.push( 'F-zero');
console.log( { nuevaLongitud, juegos});

// metodo .unshift sirve para agregar un elemento al principio del arreglo
nuevaLongitud = juegos.unshift( 'fire emblem');
console.log( {nuevaLongitud, juegos} );

let juegoBorrado = juegos.pop();
console.log( { juegoBorrado, juegos })

let pos = 1;

console.log( juegos );
// el metodo .splice sirve para borrar elementos toma un valor inicial en este caso pos y el segundo
// paramentro cuantos elementos quiere eliminar
let juegosBorrados = juegos.splice( pos,2);
console.log({ juegosBorrados, juegos});

// el metodo .indexOf sirve para buscar un elemento y este devuelve su indice
// el elemento a buscar tiene que estar escrito de la misma forma
let metroidIndex= juegos.indexOf('Metroid');
console.log({ metroidIndex });

