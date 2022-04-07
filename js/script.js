/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
L'output va stampato nella pagina HTML.*/

// Chiedere al passeggero età e km necessari
const kmPrice = 0.21;
const travelDistance = parseInt(prompt("Quanti chilometri devi percorrere?"));
const passengerAge = parseInt(prompt("Quanti anni hai?"));
console.log(travelDistance, typeof(travelDistance), passengerAge, typeof(passengerAge));

// Calcola prezzo biglietto standard
const ticketPrice = travelDistance * kmPrice;
console.log(ticketPrice);

// Calcola lo sconto per minorenni
const juniorDiscount = ((ticketPrice * 20)/100);
console.log(juniorDiscount);
const juniorTicketPrice = ticketPrice - juniorDiscount;
console.log(juniorTicketPrice);

// Calcola lo sconto senior
const seniorDiscount = ((ticketPrice * 40)/100);
console.log(seniorDiscount);
const seniorTicketPrice = ticketPrice - seniorDiscount;
console.log(seniorTicketPrice);

// Determina se il passeggero ha diritto ad uno sconto
let finalPrice;

if (passengerAge < 18) {
    finalPrice = juniorTicketPrice;
} else if (passengerAge >= 65) {
    finalPrice = seniorTicketPrice;
} else {
    finalPrice = ticketPrice;
}

let roundedFinalPrice = finalPrice.toFixed(2);
console.log(roundedFinalPrice);

// output
document.getElementById('ticket-price').innerHTML = roundedFinalPrice;