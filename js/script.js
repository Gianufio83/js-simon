// alert('Ciao');
// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

var arrayNumeriCasuali = []; // salviamo numeri casuali in array
while (arrayNumeriCasuali.length < 5) {
  var genera = getRandom(); // genera numeri
  // console.log(genera);
  var trovato = isInArray(arrayNumeriCasuali, genera) // true o false
  if (trovato == false) {
    arrayNumeriCasuali.push(genera);
  }
}
alert(arrayNumeriCasuali.sort()); // stampa numeri

alert('Tra 30 secondi devi inserire uno alla vota i numeri che hai visto precedentemente');//messaggio di avvio del timer





var number = 30;
var timer = setInterval(countdown, 1000)










// Funzioni
// funzione per generare numeri casuali

function getRandom() {
  return Math.floor(Math.random() * 10);
}
// funzione per controllare numeri in un array non siano uguali

function isInArray(array, element) {
  var i = 0;
  var risultato = false;
  while (i < array.length && risultato == false) {
    if (array[i] == element) {
      risultato = true;
    }
    i++;
  }
  return risultato;
}
// funzione per timer
function countdown() {
  if (number == 0){
    alert('Sei pronto?');
    clearInterval(timer);
  } else {
    number--;
  }
  console.log(timer, number);;
}
