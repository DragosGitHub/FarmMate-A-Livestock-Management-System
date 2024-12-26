// Welcome message and sign-in functionality
const signInButton = document.getElementById("sign-in-btn");
const welcomeMessage = document.getElementById("welcome-message");

signInButton.addEventListener("click", () => {
    const userName = prompt("Enter your name:");
    if (userName) {
        welcomeMessage.textContent = `Welcome Back, ${userName}`;
    }
});

// Data counts
let totalAnimals = 0;
let cows = 0;
let sheep = 0;
let buffalo = 0;
let pregnant = 0;
let nonPregnant = 0;
let sick = 0;
let needsCare = 0;
let abnormalSymptoms = 0;

// Data Entries Array
const dataEntries = [];

// Add Data Button functionality
const addDataButton = document.getElementById("add-data-btn");
addDataButton.addEventListener("click", () => {
    const animalType = prompt("Enter the type of animal (Cow, Sheep, Buffalo):").toLowerCase();
    const location = prompt("Enter the location:");
    const status = prompt(
        "Enter the status of the animal (Pregnant, Non-Pregnant, Sick, Needs Care, Abnormal Symptoms):"
    ).toLowerCase();
    const showingSince = prompt("Since when is this activity being shown? (Enter date in YYYY-MM-DD format):");

    if (!animalType || !location || !status || !showingSince) {
        alert("All fields are mandatory!");
        return;
    }

    if (animalType === "cow") cows++;
    else if (animalType === "sheep") sheep++;
    else if (animalType === "buffalo") buffalo++;
    else {
        alert("Invalid animal type!");
        return;
    }

    totalAnimals++;
    if (status === "pregnant") pregnant++;
    else if (status === "non-pregnant") nonPregnant++;
    else if (status === "sick") sick++;
    else if (status === "needs care") needsCare++;
    else if (status === "abnormal symptoms") abnormalSymptoms++;
    else {
        alert("Invalid status!");
        return;
    }

    // Add data to entries array
    dataEntries.push({ animalType, location, status, showingSince });

    // Update UI
    updateCounts();
    updateDataEntries();
});

// Update counts in the UI
function updateCounts() {
    document.getElementById("total-animals-count").textContent = totalAnimals;
    document.getElementById("cows-count").textContent = cows;
    document.getElementById("sheep-count").textContent = sheep;
    document.getElementById("buffalo-count").textContent = buffalo;
    document.getElementById("pregnant-count").textContent = pregnant;
    document.getElementById("non-pregnant-count").textContent = nonPregnant;
    document.getElementById("sick-count").textContent = sick;
    document.getElementById("needs-care-count").textContent = needsCare;
    document.getElementById("abnormal-symptoms-count").textContent = abnormalSymptoms;
}

// Update data entries in the UI
function updateDataEntries() {
    const dataEntriesSection = document.getElementById("data-entries");
    if (dataEntries.length === 0) {
        dataEntriesSection.innerHTML = "<p>No data entries yet. Use the Add Data button to start adding information.</p>";
        return;
    }

    dataEntriesSection.innerHTML = "<ul>";
    dataEntries.forEach((entry, index) => {
        dataEntriesSection.innerHTML += `
            <li>
                <strong>Animal:</strong> ${entry.animalType} |
                <strong>Location:</strong> ${entry.location} |
                <strong>Status:</strong> ${entry.status} |
                <strong>Since:</strong> ${entry.showingSince}
            </li>
        `;
    });
    dataEntriesSection.innerHTML += "</ul>";
}
