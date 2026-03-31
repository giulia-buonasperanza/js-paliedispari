/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


//prompt in cui l'utente deve scegliere se vuole pari o dispari.
//prompt per fargli scegliere un numero da 1 a 5.
//creo una funzione che mi genera un numero random da 1 a 5.
//numeroIserito + numeroRandom
//creo una funzione che mi dica se un numero è pari o dispari
//se il risultato è uguale a quello che ha scelto l'utente all'inizio è uguale, allora ha vinto. 
//altrimenti ha perso.

//FUNZIONI

//funzione per generare un numero random tra un minimo e un massimo
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//funzione per capire se un numero è pari o dispari
function evenOddNumber(number) {
    let evenNumber = true;
    if (number % 2 === 0) {
        evenNumber = true;
    } else {
        evenNumber = false;
    }
    return evenNumber;
}
//un po' prolissa come forma, ma mi aiuta a visulizzare la funzione


//MAIN

//prompt per scegliere se l'utente vuole pari o dispari.
let userChoiceIsEven = true;
let chooseEvenOdd = prompt('scegli tra pari o dispari');

if (chooseEvenOdd.toLowerCase() === 'pari') {
    userChoiceIsEven = true;
}else {
    userChoiceIsEven = false;
}

//prompt per far scegliere all'utente un numero tra 1 e 5
let myNumber = prompt('scegli un numero tra 1 e 5');

if ( parseInt(myNumber) >= 1 && parseInt(myNumber) <= 5 && !isNaN(parseInt(myNumber))) {
    console.log('Il tuo numero è:', myNumber);
} else {
    console.error('inserisci un numero valido');
}

//inserisco la funzione per generare un numero random per il computer
const minNumber = 1;
const maxNumber = 5;

let randomNumberCpu = randomNumber(minNumber, maxNumber);
console.log('Il numero del tuo avversario è:', randomNumberCpu);

//sommo il numero casuale dell'utente e il numero casuale del computer
let sumNumbers = Number(myNumber) + randomNumberCpu;
console.log('la somma è:', sumNumbers);


