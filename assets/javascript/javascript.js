// wait till the window has loaded before doing anything;
window.onload = function() {


// defines p elements as variables

var winsText = document.getElementById("winsText");
var loseText = document.getElementById("loseText");
var guessText = document.getElementById("guessText");
var guessedLetters = document.getElementById("guessedLetters");
var gameScreen = document.getElementById("gameScreen");

// pre-defined arrays of winning word arrays;
var square = ["s","q","u","a","r","e"];
var circle = ["c","i","r","c","l","e"];
var triangle = ["t","r","i","a","n","g","l","e"];
var computerChoices = [square, circle, triangle];

// array for GAMESCREENLOOP
var hidden = [];

// init value on page load
var wins = 0;
var losses = 0;
var guessAtmpt = 12;
// displays the guess attempts
guessText.textContent = "Guesses Remaining " + guessAtmpt;
// array storing key presses; code displaying the guessed letters
var userGuessLetters = []
// variable deciding the "word", converting the array to a lower case string;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var computerGuessString = computerGuess.join("").toLowerCase();

// array storing the key presses of the winning word
var winningWord = [];

// loop creating blank characters for winning word;
for (var j = 0; j < computerGuess.length; j++) {
  hidden[j] = "_ ";
  gameScreen.textContent += hidden[j];
}
//-----------------------------------KEY UP EVENTS, MAIN USER INTERFACE-------------------------------------------------------------------
document.onkeyup = function(event) {
// variable of user key press
  var userGuess = event.key.toLowerCase();
  
  
  
function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/);
}
console.log(typeof(userGuess));
console.log(isLetter(userGuess));
  
  // console.log(beta);
  if ((isLetter(userGuess) === false) || (isLetter(userGuess) === null)) {
    ;
    console.log(userGuess + "log 1");
  } else {
    check()
    console.log(userGuess + " log 2");
  }

  // if key pressed matches winning word, and doesn't match an entry in the winning word array, push into winning word array;
  function check() {
  if ((computerGuess.includes(userGuess)) && (winningWord.includes(userGuess) == false)) {
    winningWord.push(userGuess);
    console.log(userGuess + " log 3");
// otherwise, if key pressed doesn't match an entry in guessed letters array, push into guess array and minus one guess attmpt;
  } else if ((userGuessLetters.includes(userGuess) == false) && (computerGuess.includes(userGuess)) == false) {
    userGuessLetters.push(userGuess);
    guessAtmpt-- ;
    console.log(userGuess + " log 4");
// if anything else happens do nothing;
   } else {
    console.log(userGuess + " log 5");
   } 
  }
  ////-----------------------------------GAME SCREEN LOOP------------------------------------------------------------------------------
 
  //declare the length of the computer choosen word as a variable 
var wordLength = computerGuess.length;

// WRAP TEXT FOR EXPLANATION for as many times as the length of the computerchoosen word .if user guess is the same as an index in the computer guess array the same index in hidden array is changed to the user guess (correct letter) then delete any character currently displayed at that index. then, for as many times as the length of the computerchoosen word change the displayed text with the current index of our hidden array. if it doesn't match, then log the userGuess in the console.
for (i = 0; i < wordLength ; i++) {
    if (userGuess == computerGuess[i]) {
      hidden[i] = userGuess;
      gameScreen.textContent = "";
      for (var j = 0; j < wordLength; j++) {
        gameScreen.textContent += hidden[j];
      }
    } else {
      console.log(userGuess);
    }
  }

  // display stuff
  guessedLetters.textContent = "Guessed Letters:  " + userGuessLetters;
  guessText.textContent = "Guesses Remaining:  " + guessAtmpt;


// end of keyevent
  }

}
