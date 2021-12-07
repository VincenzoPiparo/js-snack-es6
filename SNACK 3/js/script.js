// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM

// 1 [x] Creation a const:

const bikes =
[
    {
        name: 'Dirty',
        weight: 10
    }, 

    {
        name: 'Northwave',
        weight: 13
    },

    {
        name: 'Pinarello',
        weight: 6
    }
];

// 2 [x] Use the first element by array

let bikeLight = bikes [0];

// 3 [] With cycle for 

for(let i = 0; i < bikes.length; i++) {

    const thisBike = bikes[i];

    // we scroll through each bicycle, when the lighter one comes out we save it in bikeLight
    // Use the IF
    if(thisBike.weight < bikeLight.weight) {
        bikeLight = thisBike;
    }
}

console.log(bikeLight);

// We display the lightest bike on the screen

const {name, weight} = bikeLight;

const bikesDOM = `
<p> The Bike more light is ${name} your weight is ${weight} kg </p>
`;

document.getElementById('bicycle').innerHTML = bikesDOM