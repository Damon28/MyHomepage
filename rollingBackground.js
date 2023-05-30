// script.js

// Function to generate a random number between min (inclusive) and max (exclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Function to set the background image for the body element
function setRandomBackground() {
    var randomNumber = getRandomNumber(0, 69); // Generate a random number between 1 and 5 (change the range as per your image names)

    // Construct the URL for the image based on the random number
    var imageUrl = "cp (" + randomNumber + ").jpg";

    // Set the background image for the body element
    document.body.style.backgroundImage = "url('./Backgrounds/" + imageUrl + "')";
}

// Call the setRandomBackground function when the page loads
window.addEventListener("load", setRandomBackground);
