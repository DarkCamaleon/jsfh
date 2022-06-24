/*

*2c = two of clubs
*2d = two of diamonds
*2h = two of hearts
*2s = two of spades

*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K']

const btnPedir = document.querySelector('#btnPedir');
// console.log( btnPedir )
let puntosJugador = 0, puntosComputadora = 0;
const puntosHtml = document.querySelectorAll('small');

const crearDeck = ()=> {

    for (let i = 2; i <=10; i++){
        for (let tipo of tipos){
            deck.push( i + tipo);
        }
    }

    for (let tipo of tipos){
        for (let esp of especiales){
            deck.push( esp + tipo )
        }
    }

    console.log( deck );
    deck = _.shuffle( deck );
    console.log(deck);
    return deck;
}

crearDeck();

const pedirCarta = ()=>{

    if ( deck.length === 0 ){
        throw 'No hay cartas en el deck'
    }
    const carta  = deck.shift()
    console.log(carta)
    console.log(deck.length);
    
    return carta;
}

const valorCarta = ( carta )=>{
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN ( valor ) ) ? ( valor === 'A') ? 11 : 10 : valor * 1;
}

const valor = valorCarta( pedirCarta())
console.log({ valor })

//  queryselector sirve para manipular el primer elemento queryselectorall sirve para manipular todos
document.querySelector('.titulo').innerText = 'Alejandro Venegas';

//  eventos

btnPedir.addEventListener('click', ()=>{
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta (carta);
    console.log( puntosJugador);
    puntosHtml[0].innerText = puntosJugador;

});