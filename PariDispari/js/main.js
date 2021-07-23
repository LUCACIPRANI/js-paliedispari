// PariDispari

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

console.log(IsNotUneven(numeroUtente));


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function numeroPC(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

console.log("numero pc " + numeroPC(1,6));

// // Sommiamo i due numeri (con funzione);

function somma(numeroUtente, numeroPC){
    risultato=numeroUtente + numeroPC;
    return risultato;
}
  
// // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione);

function pariDispari(somma) {
    if(somma % 2 == 0) {
        console.log("La Somma è pari");
        return pari;
    } else {
        console.log("La Somma è dispari");
        return dispari;
    }
}

// Dichiariamo chi ha vinto;