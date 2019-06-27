// -----------------

var pcLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


document.onkeyup = function(event) {
    var userLetter = event.key;
    var pcLetter = pcChoice[Math.floor(Math.random() * pcChoice.length)];

    if (userLetter === pcLetter) {
        wins++;
    } else {
        loses++;
    }
}