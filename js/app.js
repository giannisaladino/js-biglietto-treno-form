// Dichiaro le variabili degli input

const inputNameElement = document.getElementById('name');
console.log(inputNameElement);

const inputDistanceElement = document.getElementById('distance');
console.log(inputDistanceElement);

const selectAgeElement = document.getElementById('select');
console.log(selectAgeElement);

const submitElement = document.getElementById('submit');
console.log(submitElement);

const credenziali = document.getElementById('credenziali');
const risultato = document.getElementById('risultato');

// aggiungo il listener del clic sul pulsante
submitElement.addEventListener('click', function () {

    name = inputNameElement.value; // string
    distanza = parseFloat(inputDistanceElement.value); // float
    eta = selectAgeElement.value; // string

    // 3 Calcolare il prezzo totale del viaggio in base all'età del passeggero
    const prezzo = 0.21; //number

    let total = distanza * 0.21; // float

    // SE il passeggero è minorenne avrà uno sconto del 20%

    let sconto;

    if (eta === 'minorenne') {
        credenziali.innerHTML = name;
        sconto = total * 0.20;
        total = total - sconto;
        risultato.innerHTML = 'Il costo del biglietto è: ' + total.toFixed(2);
    }

    // ALTRIMENTI SE il passeggero è un over 65 avrà uno sconto del 40%

    else if (eta === 'over') {
        credenziali.innerHTML = name;
        sconto = total * 0.40;
        total = total - sconto;
        risultato.innerHTML = 'Il costo del biglietto è: ' + total.toFixed(2);
    }

    // ALTRIMENTI stampa il prezzo fisso

    else {
        credenziali.innerHTML = name;
        risultato.innerHTML = 'Il costo del biglietto è: ' + total.toFixed(2);
    }

})
