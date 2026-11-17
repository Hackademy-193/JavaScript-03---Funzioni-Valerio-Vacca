// let somma = 10 + 20;
// let somma2 = 30 + 50;
// let somma3 = 1000 + 2000;

// console.log(somma);
// console.log(somma2);
// console.log(somma3);

// qui sto andando contro il principio D.R.Y. della programmazione -> don't repeat yourself
// SOC -> separation of concernes -> separazione delle responsabilità -> ogni linguaggio deve fare esattamente quello per cui è nato
// KISS -> keep it simple stupid



// FASE DI CREAZIONE
// function sommaTraDueNumeri(numero1, numero2){
//     let somma = numero1 + numero2;
//     return somma;
//     console.log('donato');
// }

// FASE DI INVOCAZIONE

// let sum = sommaTraDueNumeri(3, 10);
// console.log(sum);

// sommaTraDueNumeri(10, 50);
// sommaTraDueNumeri(1000, 2000);


// let n1 = Number(prompt("Inserisci il primo numero"));
// let n2 = Number(prompt("Inserisci il secondo numero"));

// FASE DI CREAZIONE
// function sommaTraDueNumeri(numero1, numero2){
    // controllo se i numeri inseriti sono dei numeri! Quindi non sono not a number
//     if(isNaN(numero1) || isNaN(numero2)){
//         alert("valori non corretti, devi inserire dei numeri");
//     }else{
//         let somma = numero1 + numero2;
//         return somma;
//     }
// }

// FASE DI INVOCAZIONE

// let sum = sommaTraDueNumeri(n1, n2);
// console.log(sum);


// let numeraccio = 5;
// console.log(typeof numeraccio);

// console.log(Number("ciao"));
// console.log(typeof Number("ciao"));

// IL NUMERO è pari o dispari? con funzione

// function pariDispari(numero){

//     if(numero % 2 == 0){
//         return 'Il numero è pari';
//     }else{
//         return 'Il numero é dispari';
//     }

// }

// let risultato = pariDispari(10);
// console.log(risultato);

// let risultato2 = pariDispari(55);
// console.log(risultato2);



// function somma(numero1, numero2){
//     let sommaccia = numero1 + numero2;
//     return sommaccia;
// }

// voglio astrarre la funzione e scriverla in maniera contratta
// sintassi con arrow function

// let somma = (numero1, numero2)=>{
//     return numero1 + numero2;
// }

// let sum1 = somma(10, 20);
// console.log(sum1);

// voglio astrarre ulteriormente questa sintassi. voglio farla con il return implicito
// quando si sfrutta il return implicito, si usa la sintassi con arrow function, ma vanno tolte anche le graffe

// let somma = (numero1, numero2)=> numero1 + numero2;


// let sum1 = somma(10,20);
// console.log(sum1);

// OPERATORE TERNARIO -> è un operatore che si usa nelle condizioni, perché altro non è che un if/else contratto.
// l'operatore ternario, essendo un if/else contratto, può essere usato solo in questo modo. Non esiste un if/else if/else contratto.


// let h  = 16;
// let dayTime = 12;

// if(h > dayTime){
//     console.log('afternoon');
// }else{
//     console.log('morning');
// }

// trasformiamo questa condizione in un operatore ternario

// let dayTime = (h > 12) ? 'afternoon' : 'morning';
// console.log(dayTime);

// stravolgiamo l'esercizio di pari/dispari con l'arrow function

// function pariDispari(numero){

//     if(numero % 2 == 0){
//         return 'Il numero è pari';
//     }else{
//         return 'Il numero é dispari';
//     }

// }

// let pariDispari = (numero)=>{
//     return (numero % 2 == 0) ? 'Il numero è pari' : 'Il numero é dispari';
// }

// let numero1 = pariDispari(999);
// let numero2 = pariDispari(20);

// console.log(numero1);
// console.log(numero2);

// sintassi con return implicito

let pariDispari = (numero)=> (numero % 2 == 0) ? 'Il numero è pari' : 'Il numero é dispari';

let numero1 = pariDispari(999);
let numero2 = pariDispari(20);

console.log(numero1);
console.log(numero2);