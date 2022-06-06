

let dia = 3;

let diasDeLaSemana = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];

console.log( diasDeLaSemana[dia]);

let diaSemanal = {
  0:'domingo',
  1: 'lunes',
  2:'martes',
  3:'miercoles',
  4:'jueves',
  5:'viernes',
  6:'sabado',
};

console.log( diaSemanal[dia] || 'dia no definido ');