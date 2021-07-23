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

console.log(IsNotUneven(numeroUtente));


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function numeroPC(min, max) {
    var OutNumPC = Math.floor(Math.random() * (max - min) ) + min;
    return OutNumPC;
}

var OutNumPC = numeroPC(1,6);

console.log("numero pc " + OutNumPC);

// Sommiamo i due numeri (con funzione);

function somma(numeroUtente, OutNumPC) {
    var risultato = numeroUtente + OutNumPC;
    return risultato;
}

console.log("La somma è " + somma(numeroUtente, OutNumPC));

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione);

var sommatotale = somma(numeroUtente, OutNumPC);

function pariDispari(sommatotale) {

    if(sommatotale % 2 == 0) {
        console.log("la somma è pari" + pariDispari);
    } else {
        console.log("la somma è dispari" + pariDispari);
    }
}

// Dichiariamo chi ha vinto;