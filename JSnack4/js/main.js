// Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

const numbersList1 = [1, 11, 42, 44, 53, 67, 77, 83, 86, 93];
const numbersList2 = [41, 83, 16, 93, 85, 2];

let Arraylength1 = numbersList1.length;
let Arraylength2 = numbersList2.length;
let moreElementList;
let lessElementList;
if (Arraylength1 > Arraylength2) {
  moreElementList = numbersList1;
  lessElementList = numbersList2;
} else {
  moreElementList = numbersList2;
  lessElementList = numbersList1;
}
const numbersLengtDiff = moreElementList.length - lessElementList.length;

for (let i = 0; i < numbersLengtDiff; i++) {
  lessElementList.push(Math.floor(Math.random() * 100) + 1);
}
