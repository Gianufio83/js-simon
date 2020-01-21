// alert('Ciao');
// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

var arrayNumeriCasuali =[]; // salviamo numeri casuali in array
var arrayNumeriDigitati = []; // salviamo numeri digitati dall'utente in array
var punteggio = 0;
var arrayNumeriVincenti = []; // salviamo numeri esatti in array
$(document).ready(
  function (){
    // var arrayNumeriCasuali = [];
    while (arrayNumeriCasuali.length < 5) {
      var genera = getRandomIntInclusive(1, 100); // genera numeri
      // console.log(genera);
      var trovato = isInArray(arrayNumeriCasuali, genera) // true o false
      if (trovato == false) {
        arrayNumeriCasuali.push(genera);
      }
    }
    console.log(arrayNumeriCasuali);
    // Un alert espone 5 numeri casuali.
    alert(arrayNumeriCasuali.sort());
    // Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
    setTimeout(getUserNumber, 3000);
    // console.log(arrayNumeroDigitati);

    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
  }
);
// Funzione generazione numero casuale
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
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

// funzione che parte per inserire 5 numeri
function getUserNumber() {
  while (arrayNumeriDigitati.length < 5) {
    var numeroInserito = parseInt(prompt('Inserisci un numero da 1 a 100: '));
    if (arrayNumeriDigitati.includes(numeroInserito) == false) {
      arrayNumeriDigitati.push(numeroInserito);
    }
  }
  for (var i = 0; i < arrayNumeriCasuali.length; i++) {
    if (arrayNumeriCasuali[i] == arrayNumeriDigitati[i]) {
      punteggio++;
      arrayNumeriVincenti.push(arrayNumeriDigitati[i]);
    }
  }
  console.log('hai totaliazzato: ',punteggio);
  console.log('i numeri che hai indovinato sono: ',arrayNumeriVincenti);
};
































// var arrayNumeriCasuali = []; // salviamo numeri casuali in array
// while (arrayNumeriCasuali.length < 5) {
//   var genera = getRandom(); // genera numeri
//   // console.log(genera);
//   var trovato = isInArray(arrayNumeriCasuali, genera) // true o false
//   if (trovato == false) {
//     arrayNumeriCasuali.push(genera);
//   }
// }
// alert('I numeri estratti sono: ' + arrayNumeriCasuali[0] + '' + arrayNumeriCasuali[0] + '' + arrayNumeriCasuali[2] + '' + arrayNumeriCasuali[3] + '' + arrayNumeriCasuali[4] + '' + arrayNumeriCasuali[5] ); // stampa numeri
//
// alert('Tra 30 secondi devi inserire uno alla volta i numeri che hai visto precedentemente');//messaggio di avvio del timer

// var number = 30; // numero di secondi da cui partire
// var timer = setTimeout(countdown, 3000) // attivazione funzione timer

// In seguito deve chiedere all’utente di inserire uno alla volta i numeri comparsi precedentemente

// var i = 0;
// var numRicomparso = false;
// while (i < 5 ) {
//   var numeroUtente = parseInt(prompt('Inserisci uno alla volta i numeri che ti sono comparsi inizialemente'));
//   for (var j = 0; j < arrayNumeriCasuali.length; j++) {
//     if (numeroUtente == arrayNumeriCasuali[j]) {
//       numRicomparso = true;
//       console.log(numRicomparso);
//     }
//   }
//   i++;
// }
// un array per i numeri generati dall'utente
// var numbersUser = [];
// var numeroUtente = true;
// if(isInArray(numbersUser, numeroUtente) == true) {
//   numbersUser.push(numeroUtente);
//
// };
// alert(numbersUser.sort());
//


// Funzioni
// funzione per generare numeri casuali

// function getRandom() {
//   return Math.floor(Math.random() * 10);
// }
// funzione per controllare numeri in un array non siano uguali

// function isInArray(array, element) {
//   var i = 0;
//   var risultato = false;
//   while (i < array.length && risultato == false) {
//     if (array[i] == element) {
//       risultato = true;
//     }
//     i++;
//   }
//   return risultato;
// }
// funzione per timer
// function gioca() {
//
//
//   }
//   console.log(timer, 'conto alla rovescia' number);;
// }
