// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari
const numbersList = [
    1,
    11,
    42,
    44,
    53,
    67,
    77,
    83,
    86,
    93
]
let somma = 0;

for (i = 0; i < numbersList.length; i++) {
    // console.log('somma 1 ' + somma);
    if (i % 2 != 0) {
        somma += numbersList[i]
        // console.log('somma 2 ' + somma);
    }
}
const numbersListEl = document.getElementById('numbersList');
numbersListEl.innerHTML = ` il tuo array di numeri è:  ${numbersList}`

const sommaEl = document.getElementById('somma')
sommaEl.innerHTML = `La somma dei numeri in posizione dispari è ${somma}`