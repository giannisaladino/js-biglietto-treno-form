// Dichiaro le variabili degli input

const inputDistanceElement = document.getElementById('distance');
console.log(inputDistanceElement);

const inputAgeElement = document.getElementById('age');
console.log(inputAgeElement);

const submitElement = document.getElementById('submit');
console.log(submitElement);


// aggiungo il listener del clic sul pulsante
submitElement.addEventListener('click', function () {

    distanza = inputDistanceElement.value 
    eta = inputAgeElement.value

 // 3 Calcolare il prezzo totale del viaggio in base all'età del passeggero
const prezzo = 0.21; //number

let total = distanza * 0.21; //number

// SE il passeggero è minorenne avrà uno sconto del 20%

let sconto;

if(eta < 18) {
    sconto = total * 0.20;
    total = total - sconto;
    console.log(total.toFixed(2));
}

// ALTRIMENTI SE il passeggero è un over 65 avrà uno sconto del 40%

 else if(eta > 65) {
    sconto = total * 0.40;
    total = total - sconto;
    console.log(total.toFixed(2));
 }

// ALTRIMENTI stampa il prezzo fisso

 else {
    console.log(total.toFixed(2));
 }

})
