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
var incorrectGuesses = [];
// var pcLetterText = [];


var pcChoice = pcLetter[Math.floor(Math.random() * pcLetter.length)];
console.log(pcChoice)

document.onkeyup = function (event) {

        var userLetter = event.key.toLowerCase();

        // for (var i = 0; i < pcLetter.length ; i++) {
        //         pcLetterText = pcLetter[i];
        // }

        if (userLetter === pcChoice) {
                wins++;
                winsText.textContent = wins;
                guessesLeft = 9;
                guessesLeftText.textContent = guessesLeft;
                incorrectGuesses = [];
                guessesSoFarText.textContent = incorrectGuesses.join(", ");
                pcChoice = pcLetter[Math.floor(Math.random() * pcLetter.length)];
                console.log(pcChoice);
        } else {
                guessesLeft--;
                guessesLeftText.textContent = guessesLeft;
                incorrectGuesses.push(userLetter);
                guessesSoFarText.textContent = incorrectGuesses.join(", ");
        }

        if (guessesLeft === 0) {
                losses++;
                lossesText.textContent = losses;
                guessesLeft = 9;
                guessesLeftText.textContent = guessesLeft;
                incorrectGuesses = [];
                guessesSoFarText.textContent = incorrectGuesses.join(", ");
                pcChoice = pcLetter[Math.floor(Math.random() * pcLetter.length)];
                console.log(pcChoice);
        }

        // userLetter.textContent = guessesSoFarText            
        // userLetterText.textContent = userLetter
        // pcLetterText.textContent = pcChoice
}