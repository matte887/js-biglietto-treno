/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
L'output va stampato nella pagina HTML.*/

// Chiedere al passeggero età e km necessari
const travelDistance = parseInt(prompt("Quanti chilometri devi percorrere?"));
console.log(travelDistance, typeof(travelDistance));

const passengerAge = parseInt(prompt("Quanti anni hai?"));
console.log(passengerAge, typeof(passengerAge));

// Calcola prezzo biglietto standard

// Calcola lo sconto per minorenni

// Calcola lo sconto senior



