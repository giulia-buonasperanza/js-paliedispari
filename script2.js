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

function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function evenOddNumber (number){
        let evenNumber = true;
        if(number%2 === 0){
            evenNumber = true;
        } else {
            evenNumber = false;
        }
        return evenNumber;
}