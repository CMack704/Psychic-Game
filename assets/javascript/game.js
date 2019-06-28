// -----------------

var pcLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


// Global Variables
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guesses-left");
var guesseSoFarText = document.getElementById("guesses-so-far");
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var


        var userLetter = event.key;
        var pcLetter = pcChoice[Math.floor(Math.random() * pcChoice.length)];
        if (userLetter === pcLetter) {
        winsText++;
        winsText.textContent = wins;
        } else {
        loses++;
        lossesText.textContent = losses;
        }
    