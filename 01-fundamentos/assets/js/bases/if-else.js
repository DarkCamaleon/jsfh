
let a = 10;

if ( a > 10){
  console.log('A es mayor a 10');
}else{
  console.log(' A no es mayor a 10');
};

console.log('fin del programa');

const hoy = new Date();

console.log( hoy );

let dia = hoy.getDate(); //0: domingo, 1:lunes, 2: martes

console.log ({ dia });

if (dia === 0){
  console.log('domingo');
}else if ( dia === 1){
  console.log('lunes');
}else if (dia === 2){
  console.log('martes');
}else{
  console.log('no es lunes,martes o domingo');
}
// else{
//   if (dia === 1){
//     console.log(' lunes');
//   }else{
//     console.log('no es lunes ni domingo');
//   };
// };


