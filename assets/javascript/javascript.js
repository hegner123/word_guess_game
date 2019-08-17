// wait till the window has loaded before doing anything;
window.onload = function() {

// defines p elements as variables
var game  = document.getElementById("game");
var winsText  = document.getElementById("winsText");
var loseText  = document.getElementById("loseText");
var guessText = document.getElementById("guessText");
var userGuessText = document.getElementById("userGuessText");
var guessedLetters = document.getElementById("array");
var winningWordText = document.getElementById("winningWord");

// pre-defined choices of winning words
var computerChoices = ["square", "circle", "triangle"];


// variables to store wins, losses, and number of attempts remaining
var wins = 0;
var losses = 0;
var guessAtmpt = 12;
// displays the guess attempts
guessText.textContent = guessAtmpt;
// array storing key presses; code displaying the guessed letters
var userGuessLetters = []
guessedLetters.textContent = userGuessLetters;
// variable deciding the "word"
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// array storing the key presses of the winning word
var winningWord = [];




// THE MAIN PROGRAM
document.onkeyup = function(event) {
  
// variable of user key press
  var userGuess = event.key;

// if key pressed matches winning word, and doesn't match an entry, push into winning word array;
  if ((computerGuess.includes(userGuess)) && (winningWord.includes(userGuess) == false)) {
    winningWord.push(userGuess);
// otherwise, if key pressed doesn't match an entry in guessed letters, push into guess array and minus one guess attmpt;
  }    else if ((userGuessLetters.includes(userGuess) == false) && (computerGuess.includes(userGuess)) == false) {
    userGuessLetters.push(userGuess);
    guessAtmpt-- ;
// if anything else happens do nothing;
   } else  {
    ;
   } 
  
 
// display stuff
  guessedLetters.textContent = "Guessed Letters  " + userGuessLetters;
  guessText.textContent = "Guesses Remaining  " + guessAtmpt;
  winningWordText.textContent = "Winning Word  " + winningWord;







}
















}