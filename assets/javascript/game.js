// -----------------

var pcLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
for (var i = 0; i < pcLetter.length; i++)

// Global Variables
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guesses-left");
var guessesSoFarText = document.getElementById("guesses-so-far");
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userLetterText = [];
var pcLetterText = [];

document.onkeyup = function(event) {

        var userLetter = event.key.toLowerCase();
        var pcChoice = pcLetter[Math.floor(Math.random() * pcLetter.length)];
        
        if (userLetter === pcChoice) {
        winsText++;
        winsText.textContent = wins;
        return;
        } else {
        losses++;
        lossesText.textContent = losses;
        guessesLeft--;
        guessesLeftText.textContent = guessesLeft;
        } 
            
        userLetterText.textContent = userGuess
        pcLetterText.textContent = pcChoice
}