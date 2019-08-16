// defines p elements as variables
var game  = document.getElementById("game");
var winsText  = document.getElementById("winsText");
var loseText  = document.getElementById("loseText");
var guessText = document.getElementById("guessText");
var userGuessText = document.getElementById("userGuessText");

// array
var computerChoices = ["square", "circle", "triangle"];



// variables to store wins, losses, and number of attempts remaining
var wins = 0;
var losses = 0;
var guessAtmpt = 12;


// array storing key presses
var userGuessLetters = []

// variable deciding the "word"
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// display the "word" in the console
console.log(computerGuess);

document.onkeyup = function(event) {
  
// variable of user key press
  var userGuess = event.key;

  // if a key pressed is already in the array do nothing
  if (userGuessLetters.includes(userGuess)) {
;
  }
  // else, store the key pressed in the array
  else {
    userGuessLetters.push(userGuess);
  }

// if the "word" contains the key pressed, display success in the console
if (computerGuess.includes(userGuess)) {
  console.log("success");
}
// if the "word" does not contain the key pressed, display "else success" in the console
else {
  console.log("else success");
}



// display the contents of userGuessLetters in the console
console.log(userGuessLetters);






}


