// register.js
import { successTemplate, participantTemplate } from "./templates.js";

let currentParticipants = 1;

// Adds a new participant section to the form
function addParticipant () {
    currentParticipants++;

    const newParticipantSection = participantTemplate(currentParticipants);

    document.getElementById("add").insertAdjacentHTML('beforebegin', newParticipantSection);
}

// Handles form submission
function submitForm(event) {
    event.preventDefault();

    const info = {
        name: event.target.adult_name.value,
        participants: document.querySelectorAll("[class^='participant']").length - 1,
        fee: totalFees(),
    }
    event.target.style.display = "none";

    document.getElementById('summary').innerHTML = successTemplate(info);
}

// Calculates the total fees
function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");

    feeElements = [...feeElements];

    let total = 0;

    feeElements.forEach(element => {
        total += parseFloat(element.value); 
    });
    
    return total;
}

// Event listeners for adding participants and form submission
document.getElementById("add").addEventListener("click", addParticipant);
document.querySelector("form").addEventListener("submit", submitForm);