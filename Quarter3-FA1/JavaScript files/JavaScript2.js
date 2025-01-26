let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let birthYear = parseInt(prompt("Enter your birth year:"));

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

document.getElementById("output").innerText = `"Hello ${firstName} ${lastName}! How does it feel to be ${age} years old?"`;
    
