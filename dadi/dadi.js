let utente = Math.floor(Math.random()*6) + 1;
console.log("Numero dadi utente:",utente);

let cpu = Math.floor(Math.random()*6) + 1;
console.log("Numero dadi cpu:",cpu);

if(utente > cpu){
    alert("Hai vinto");
} else {
    alert("Hai perso");
} 