// funcion tradicional

function saludar(nombre){
  console.log( arguments );
  console.log( 'hola' + nombre );
}

// funcion anonima

const saludar2 = function ( nombre ){
  console.log('hola' + nombre);
}

// funcion flecha

const saludarFlecha = ()=>{
  console.log('hola flecha');
}

const saludarFlecha2 = ( nombre ) => {
  console.log('hola '+ nombre);
}

saludar ('fernando', 40, true, 'costa rica');

saludarFlecha();
saludarFlecha2('melissa');

const numeroAleatorio = ()=> Math.random();
console.log(numeroAleatorio());

function sumar (a,b){
  return a + b;
}

const sumar2 = (a,b)=> a+b;

console.log(sumar(1,3));
console.log(sumar2(5, 3));
