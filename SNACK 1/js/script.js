// Snack 1
// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

const newArray = []
const min = 1;
const max = 5;

// 2 Eseguire questo esercizio con il forEach
myArray.forEach((element, index, array) => {
    if (index > 1 && index < 5) {
        newArray.push (element)
        console.log(newArray)
    }
})


// Usiamo adesso il filter

const newMyArray = myArray.filter ((element, index, array) => {
    let result;
    if (index > 1 && index < 5) {
       result = true;
    }else {
        result = false;
    }
    return result
} ) 
console.log(newMyArray)