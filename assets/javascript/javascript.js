// wait till the window has loaded before doing anything;
// pre-defined arrays of winning word arrays;
var square = ["s", "q", "u", "a", "r", "e"];
var circle = ["c", "i", "r", "c", "l", "e"];
var triangle = ["t", "r", "i", "a", "n", "g", "l", "e"];
var computerChoices = [square, circle, triangle];
// variable deciding the "word", converting the array to a lower case string;
function randomWord() {
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

var playButton = document.getElementById("play");

 // defines p elements as variables
 var gameScreen = document.getElementById("gameScreen");
 var winsText = document.getElementById("winsText");
 var loseText = document.getElementById("loseText");
 var guessText = document.getElementById("guessText");
 var guessedLetters = document.getElementById("guessedLetters");
 var correctText = document.getElementById("correct");

 
 // array storing key presses; code displaying the guessed letters
 var userGuessLetters = []
 // array storing the key presses of the winning word
 var winningWord = [];
 // array for GAMESCREENLOOP
 var hidden = [];
 

 
 

 


// playButton.addEventListener("click", game.state=playState());

var game = {
  state: pauseState(),
  correctGuess: 0,
  guessAtmpt: 12,
  wins: 0,
  losses: 0,
  computerGuess: randomWord(),
  addLoss: function () {
    this.losses++;
  },
  addWin: function () {
    this.wins++;
  },
  reset: function () {
    game.guessAtmpt = 12;
    game.correctGuess = 0;
    randomWord();
    game.state = pauseState();
  },
}

// loop creating blank characters for winning word;
for (var j = 0; j < game.computerGuess.length; j++) {
  hidden[j] = "_ ";
  gameScreen.textContent += hidden[j];
}

console.log(game);

function pauseState() {
  document.onkeyup = function () {
    game.state = playState();
    console.log(game);
    displayGameStats();
  }
  return "pause";
}

function playState() {
  
  //-----------------------------------KEY UP EVENTS, MAIN USER INTERFACE-------------------------------------------------------------------
  document.onkeyup = function (event) {

  game.state = playState();
     
    // variable of user key press;

    var userGuess = event.key.toLowerCase();

    // returns false if length is more than one, and string is not a character a-z;

    function isLetter(str) {
      return str.length === 1 && str.match(/[a-z]/);
    }
    
    // if false do nothing, otherwise run the checkUserGuess function;

    if ((isLetter(userGuess) === false) || (isLetter(userGuess) === null)) {
      ;
    } else {
      checkUserGuess();
    }

    // if key pressed matches winning word, and doesn't match an entry in the winning word array, push into winning word array;

    function checkUserGuess() {
      if ((game.computerGuess.includes(userGuess)) && (winningWord.includes(userGuess) == false)) {
        winningWord.push(userGuess);
        game.correctGuess++;

    // otherwise, if key pressed doesn't match an entry in guessed letters array, push into guess array and minus one guess attmpt;

      } else if ((userGuessLetters.includes(userGuess) == false) && (game.computerGuess.includes(userGuess)) == false) {
        userGuessLetters.push(userGuess);
        game.guessAtmpt--;
        
        // if anything else happens do nothing;

      } else {
       ;
      }
    }
//-----------------------------------GAME SCREEN LOOP------------------------------------------------------------------------------

    //declare the length of the computer choosen word as a variable 

    var wordLength = game.computerGuess.length;

    // WRAP TEXT FOR EXPLANATION for as many times as the length of the computerchoosen word .if user guess is the same as an index in the computer guess array the same index in hidden array is changed to the user guess (correct letter) then delete any character currently displayed at that index. then, for as many times as the length of the computerchoosen word change the displayed text with the current index of our hidden array. if it doesn't match, then log the userGuess in the console.

    for (i = 0; i < wordLength; i++) {
      if (userGuess == game.computerGuess[i]) {
        hidden[i] = userGuess;
        gameScreen.textContent = "";
        for (var j = 0; j < wordLength; j++) {
          gameScreen.textContent += hidden[j];
        }
      } else {
        ;
      }
    }

  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // display stuff
  displayGameStats();
  // checkUserGuess variables and update game state when necessary
  checkGameState();
  console.log(game);
  console.log("______________________________________________")
  // end of keyevent
  }
  return "play";
}



function winState() {
  game.addWin();
  return "win";
}

function loseState() {
  game.addLoss();
  return "lose" ;
}

function displayGameStats() {
  guessedLetters.textContent = "Guessed Letters:  " + userGuessLetters;
  winsText.textContent = "Wins: " + game.wins;
  loseText.textContent = "Losses: " + game.losses;
  guessText.textContent = "Guesses Remaining " + game.guessAtmpt;
  correctText.textContent = "Correct Guesses: " + game.correctGuess;
}

function checkGameState() {
  if (game.guessAtmpt === 0) {
    game.state = loseState();
    game.addLoss();
    game.reset()
  }
  else {
    ;
  }
}

