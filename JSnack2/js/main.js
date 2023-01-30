// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
const numbersList = [1, 11, 42, 44, 53, 67, 77, 83, 86, 93];

let oddNumbersEl = document.getElementById('oddNumbers').innerHTML;
let evenNumbersEl = document.getElementById('evenNumbers').innerHTML;
let oddNumbers ="I numeri dispari sono: ";
let evenNumbers ="I numeri pari sono: ";
console.log(evenNumbers);
console.log(oddNumbers);

for(let i=0; i<numbersList.length; i++) {
  
  if (numbersList[i] % 2 == 0) {
    evenNumbers += numbersList[i]+", ";
  } else {
    oddNumbers += numbersList[i]+", ";
  } 
}
document.getElementById('oddNumbers').innerHTML = oddNumbers;
document.getElementById('evenNumbers').innerHTML = evenNumbers;
