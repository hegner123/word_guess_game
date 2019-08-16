// defines p elements as variables
var game  = document.getElementById("game");
var winsText  = document.getElementById("winsText");
var loseText  = document.getElementById("loseText");
var guessText = document.getElementById("guessText");
var userGuessText = document.getElementById("userGuessText");

// array
var computerChoices = ["square", "circle", "triangle"];

// array to be used to store guessed letters
var userGuessLetters = []

// variables to store wins, losses, and number of attempts remaining
var wins = 0;
var losses = 0;
var guessAtmpt = 12;


document.onkeyup = function(event) {
 
 
  
// variable of user key press
var userGuess = event.key;

userGuessLetters.push(userGuess);

// variable to choose which word is being used in the game
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



console.log(userGuessLetters);


}


