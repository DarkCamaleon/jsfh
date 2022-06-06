

const carros = ['ford', 'mazda', 'honda', 'toyota'];

let i = 0;

// while ( i < carros.length){
//   console.log( carros[i]);
//   // i = i + 1 ;
//   i++;
// }

// console.log(i)
// console.log({ i })

console.warn('while')
// while se cumple si la condicion es verdadera
// while considera false si el resultado es :
// 1- undefined
// 2- null
// 3- false

while( carros[i] ){
  if( i === 1 ){
    i++;
    console.log(' paso por aqui');
    continue; // sirve para repetir la misma condicion sin salir del ciclo if
  }
  console.log( carros[i] )
  i++;
}

console.warn('do while');

let j = 0;

do{
  console.log(carros[j]);
  console.log(' por aqui toy pasando')
  j++;
}while( carros [j]){
  console.log(' aqui toy usando ?')
};