

const regresaTrue = ()=>{
  console.log('Regresa True');
  return true;
}

const regresaFalse = ()=>{
  console.log('regresa false');
  return false;
}

console.warn('not o la negacion')
console.log( true ); // resultado en consola true
console.log( !true ); // resultado en consola false
console.log( !false); // resultado en consola true

console.log( !regresaFalse() ); //true

console.warn(' and ') // true si todos los valores son verdaderos
console.log( true && true ); // true
console.log( true && false ); // false
console.log(true && !false); // false

console.log('==============');

console.log( regresaFalse() && regresaTrue() ); //false
// ejecuta la primera funcion llamada regresa false

console.log( regresaTrue() && regresaFalse() ); // false
// ejecuta ambas funciones pero regresa false

console.log (' ====== && =======');
console.log(' 4 condiciones ',true && true && true && false); //  false

regresaFalse() && regresaTrue();

console.warn('or'); // regresa true si uno es verdadero
console.log( true || false); // true
console.log( false || false); // false

console.log ( regresaTrue() || regresaFalse() );
console.log(' 4 condiciones ', true || true || true || false); //  true

console.warn(' asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'hola mundo' && 150;
const a2 = 'hola' && 'mundo' && soyFalso && true;
const a3 = soyFalso || 'ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'ya no soy falso denuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'ya no soy falso de nuevo' || true;

console.log( {a1, a2, a3, a4, a5});

if ( regresaFalse() && regresaTrue() && (true || false || true)){
  console.log('hacer algo');
}else {
  console.log('hacer otra cosa');
}
