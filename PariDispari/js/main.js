// PARIDISPARI

// L’utente sceglie pari o dispari

var choice = prompt("Scegli PARI o DISPARI");

function IsNotUneven(numero) {

    if (isNaN(numero) == false) {
        return (numero %2 == 1 ?  true : false);
    }
    else {
        return null;
    }
}

// e inserisce un numero da 1 a 5.

var numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log("Numero scelto dall'utente " + numeroUtente);

        // controllo se numero è pari o dispari;
console.log(IsNotUneven(numeroUtente));

//  Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function numeroPC(min, max) {
    var OutNumPC = Math.floor(Math.random() * (max - min) ) + min;
    return OutNumPC;
}

        // estraggo risultato del numero generato da pc;
var OutNumPC = numeroPC(1,6);

        // stampo numero da pc;
console.log("numero pc " + OutNumPC);

// Sommiamo i due numeri (con funzione);

        // unisco la somma utente e somma pc nella funzione;
function somma(numeroUtente, OutNumPC) {
    var risultato = numeroUtente + OutNumPC;
    return risultato;
}
        //somma funzione;
console.log("La somma è " + somma(numeroUtente, OutNumPC));

        // accorpo il risultato in una variabile;
var results = somma(numeroUtente, OutNumPC);

// //  Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione);

if(results % 2 == 0) {
    console.log("la somma è pari");
} else {
    console.log("la somma è dispari");
}

// var sommatotale = somma(numeroUtente, OutNumPC);

// function pariDispari(sommatotale) {

//     if(sommatotale % 2 == 0) {
//         console.log(pariDispari(sommatotale));
//     } else {
//         console.log(pariDispari(sommatotale));
//     }
// }
// pariDispari(sommatotale);


// Dichiariamo chi ha vinto;

