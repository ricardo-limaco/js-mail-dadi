let utente = Math.floor(Math.random()*6) + 1;
console.log("Numero dadi utente:",utente);

let cpu = Math.floor(Math.random()*6) + 1;
console.log("Numero dadi cpu:",cpu);

if(utente > cpu){
    alert("Hai vinto")
} else {
    alert("Hai perso")
}








/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/