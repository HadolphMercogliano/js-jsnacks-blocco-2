// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
let userNumber = parseInt(prompt('scrivi un numero'));
console.log(userNumber);
if (userNumber % 2 == 0) {
    document.getElementById('resultNumber').innerHTML = `Il tuo numero (${userNumber}) è pari.`;
} else {
    document.getElementById('resultNumber').innerHTML = `il numero pari successivo a quello inserito è ${userNumber + 1}.`;
}