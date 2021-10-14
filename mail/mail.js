const mailUtente = prompt("Inserisci la tua Mail:");
console.log("mail utente:", mailUtente);

const indiceMail = ["mario@hotmail.it", "luca@hotmail.it", "giovanni@hotmail.it", "riccardo@hotmail.it", "federico@hotmail.it",];
console.log(indiceMail);



let mailEsiste = false;

for (let i = 0; i < indiceMail.length; i++) {
    const emailCorrente = indiceMail[i];

    if (emailCorrente.toLowerCase() === mailUtente.toLowerCase()) {
        mailEsiste = true;
        alert("La tua email è autorizzate ad accedere.");
    }
}

if (mailEsiste === false) {
    alert("Email non autorizzate ad accedere.");
}