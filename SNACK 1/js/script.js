// Snack 1
// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.


// 1 Creare un array di numeri compresi tra 2 valori compresi tra 1 e 10
const newArray = [
    {
        name: 'Michele',
        number: 1
    },
    {
        name: 'Fabio',
        number: 2
    },
    {
        name: 'Roberto',
        number: 3
    },
    {
        name: 'Giovanni',
        number: 4
    },
    {
        name: 'Simone',
        number: 5
    },
    {
        name: 'Chiara',
        number: 6
    }
]


// 2 Eseguire questo esercizio con il forEach
newArray.forEach((element, index, array) => {
    const text = `${element.name} ha il numero ${element.number}`;
    console.log(text)
}
)

// 3 Eseguire questo esercizio con il filter