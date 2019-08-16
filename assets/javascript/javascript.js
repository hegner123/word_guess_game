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

var userGuessLetters = []

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function(event) {
  
// variable of user key press
  var userGuess = event.key;
// array to be used to store guessed letters
  

  if (userGuessLetters.includes(userGuess)) {
;
  }
  else {
    userGuessLetters.push(userGuess);
  }


if (computerGuess.includes(userGuess)) {
  console.log("success");
}
else {
  console.log("else success");
}

console.log(computerGuess);

  // userGuessLetters.push(userGuess);



// variable to choose which word is being used in the game







}


