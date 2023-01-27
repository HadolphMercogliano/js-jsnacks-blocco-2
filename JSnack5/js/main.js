// Dato un array contenente i risultati di una squadra (vittorie, pareggi e sconfitte) [W, W, L, X, X, W, L, X], stampare a video il numero di vittorie, il numero di pareggi ed il numero di sconfitte.

const resultArray = ["W", "W", "L", "X", "X", "W", "L", "X"];

let win = 0;
let lose = 0;
let par = 0;

for (i = 0; i < resultArray.length; i++) {
  if (resultArray[i] == "W") {
    win += 1;
  } else if (resultArray[i] == "X") {
    lose += 1;
  } else {
    par += 1;
  }
}
document.getElementById('result').innerHTML = `vittorie: ${win} sconfitte: ${lose} pareggi: ${par}`;
// console.log("win " + win);
// console.log("lose " + lose);
// console.log("par " + par);
