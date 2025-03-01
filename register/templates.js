// templates.js

// Generates the HTML structure for a new participant section, using the participantNumber for unique IDs
export function participantTemplate(participantNumber) {
    return `
    <section class="participant${participantNumber}">
        <p>Participant ${participantNumber}</p>
        <div class="item">
            <label for="fname${participantNumber}"> First Name<span>*</span></label>
            <input id="fname${participantNumber}" type="text" name="fname" value="" required />
        </div>
        <div class="item activities">
            <label for="activity${participantNumber}">Activity #<span>*</span></label>
            <input id="activity${participantNumber}" type="text" name="activity" />
        </div>
        <div class="item">
            <label for="fee${participantNumber}">Fee ($)<span>*</span></label>
            <input id="fee${participantNumber}" type="number" name="fee" />
        </div>
        <div class="item">
            <label for="date${participantNumber}">Desired Date <span>*</span></label>
            <input id="date${participantNumber}" type="date" name="date" />
        </div>
        <div class="item">
            <label for="grade${participantNumber}">Grade<span>*</span></label>
            <select id="grade${participantNumber}" name="grade">
            <option selected value="" disabled selected></option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="5">5th</option>
            <option value="6">6th</option>
            <option value="7">7th</option>
            <option value="8">8th</option>
            <option value="9">9th</option>
            <option value="10">10th</option>
            <option value="11">11th</option>
            <option value="12">12th</option>
            </select>
        </div>
    </section>`;
}

// Generates a message with the name of the person registering, number of participants, and fee
export function successTemplate(info) {
    return `
        <p>Thank you ${info.name} for registering. 
        You have registered ${info.participants} participants and owe $${info.fee} in Fees.</p>
    `;
}
