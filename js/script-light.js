// Chiedere al passeggero età e km necessari
const kmPrice = 0.21;
const travelDistance = parseInt(prompt("Quanti chilometri devi percorrere?"));
const passengerAge = parseInt(prompt("Quanti anni hai?"));
console.log(travelDistance, typeof(travelDistance), passengerAge, typeof(passengerAge));

// Calcola prezzo biglietto standard
let ticketPrice;
ticketPrice = travelDistance * kmPrice;
console.log(ticketPrice);

// Determina se il passeggero ha diritto ad uno sconto e applicalo
if (passengerAge < 18) {
    const juniorTicketPrice = ticketPrice - ((ticketPrice * 20)/100);
    console.log(juniorTicketPrice);
    ticketPrice = juniorTicketPrice;
} else if (passengerAge >= 65) {
    const seniorTicketPrice = ticketPrice - ((ticketPrice * 40)/100);
    console.log(seniorTicketPrice);
    ticketPrice = seniorTicketPrice;
}

// Arrotonda il prezzo
let roundedticketPrice = ticketPrice.toFixed(2);
console.log(roundedticketPrice);

// output
document.getElementById('ticket-price').innerHTML = roundedticketPrice;