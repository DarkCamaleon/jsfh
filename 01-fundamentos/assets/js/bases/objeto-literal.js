let personaje = {
  nombre : 'tony stark',
  codeName: 'ironman',
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.70,
  },
  trajes: ['mark I', 'mark v', 'hulkbuster'],
  direccion:{
    zip: '10880, 90265',
    ubicacion: 'malibu, california',
  },
  'ultima-pelicula': 'infinity war',
};

console.log( personaje );
console.log('nombre', personaje.nombre);
console.log('nombre', personaje['nombre']);
console.log('edad', personaje.edad);

console.log('coors', personaje.coords);
console.log('lat', personaje.coords.lat);

console.log('No.Trajes', personaje.trajes.length);
console.log('ultimo traje', personaje.trajes[personaje.trajes.length -1]);

const x = 'vivo';
console.log('vivo:', personaje[x]);

console.log('ultima pelicula: ', personaje['ultima-pelicula']);

// para borrar una propiedad del objecto
delete personaje.edad;
console.log( personaje);

personaje.casado = true;

// el metodo entries devuelve un array o convierte el objecto en un array
const entriesPares = Object.entries(personaje);
console.log ( entriesPares);

// object . freeze congela los valores del objecto pero no a los sub objecto de este como direccion
Object.freeze( personaje);

personaje.dinero = 10000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'costa rica';
console.log( personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({ propiedades , valores});