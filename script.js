//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//FUNZIONE

function esserePalindomo (parola) {
    let isPalindromo = true;
    for (i=0; i < parola.length / 2 && isPalindromo; i++){
    const inizio = parola[i];
    const fine = parola[parola.length - 1 - i];  
    
     if (inizio !== fine) {
            isPalindromo = false;
        }
    }

     if (isPalindromo) {
        return true;
    } else {
        return false;
    }
}

//MAIN