// -----------------

var pcLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


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
        console.log(pcChoice)
        for (var i = 0; i < 10  ; i++) {
                ;
        }
        
        if (userLetter === pcLetter) {
        winsText++;
        winsText.textContent = wins;
        } else {
        guessesLeft--;
        guessesLeftText.textContent = guessesLeft;
        } 

        if (guessesLeft === 0) {
        losses++;
        lossesText.textContent = losses;
        ;
        }
        userLetter.textContent = guessesSoFarText            
        userLetterText.textContent = userLetter
        pcLetterText.textContent = pcChoice
}