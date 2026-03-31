//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//FUNZIONE

function esserePalindromo (parola) { //dichiarazione della funzione
    let isPalindromo = true;
    for (i=0; i < parola.length / 2 && isPalindromo; i++){
    const inizio = parola[i];
    const fine = parola[parola.length - 1 - i];  
    
     if (inizio !== fine) {
            isPalindromo = false;
        }
    }
    //restituzione dei valori
     if (isPalindromo) {
        return true;
    } else {
        return false;
    }
}

//MAIN


 //chiedo all'utente di inserire una parola
const parolaInserita = prompt('Inserisci un possibile palindromo');

if (parolaInserita === '') {//controllo l'inserimento della parola
    console.error('Hai inserito una stringa vuota');
} else { //
    console.log (esserePalindromo(parolaInserita)); //invocazione della funzione e risultato
}



