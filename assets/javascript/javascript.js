// pre-defined arrays of winning word arrays;
var square = "square";
var circle = "circle";
var triangle = "triangle";
var parallelogram = "parallelogram";
var trapezoid = "trapezoid";

var computerChoices = [square, circle, triangle, parallelogram, trapezoid]

var x = "";
// variable deciding the "word";
function randomWord() {
  x = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return x;
}

 // defines p elements as variables
 var messageText = document.getElementById("message")
 var gameScreen = document.getElementById("gameScreen");
 var winsText = document.getElementById("winsText");
 var loseText = document.getElementById("loseText");
 var guessText = document.getElementById("guessText");
 var guessedLetters = document.getElementById("guessedLetters");
 var victorySound = document.getElementById("victorySound");
 var sadTrombone = document.getElementById("sadTrombone");
 var successSound = document.getElementById("success");
 var incorrectGuess = document.getElementById("incorrectGuess")
 var startSound = document.getElementById("start");
 var easyHardBox = document.getElementById("easyHardBox");
 var instructions = document.getElementById("instructions");

 // array storing key presses; code displaying the guessed letters
 var userGuessLetters = []
 // array storing the key presses of the winning word
 var winningWord = [];
 // array for GAMESCREENLOOP
 var hidden = [];
// -----------------------------------MAIN GAME OBJECT------------------------------------------------------------------------------------
var game = {
  state: pauseState(),
  computerGuess: randomWord(),
  wins: 0,
  losses: 0,
  guessAtmpt: 12,
  addLoss: function () {
    this.losses++;
  },
  addWin: function () {
    this.wins++;
  },
  reset: function () {
    hidden = [];
    game.guessAtmpt = "";
    hardModeState();
    game.guessAtmpt = hardModeState();
    game.correctGuess = 0;
    this.computerGuess = "";
    randomWord();
    this.computerGuess = randomWord();
    gameScreen.textContent = "";
    gameScreenLoopInt();
    userGuessLetters = [];
    winningWord = [];
    document.onkeyup = function () {
      game.state = playState();
    };
  },
}
// ------------------------------------------------------------------END GAME OBJECT--------------------------------------------------------------------------------------------

// loop function creating blank characters for winning word;
function gameScreenLoopInt () {
  for (var j = 0; j < game.computerGuess.length; j++) {
    hidden[j] = "_";
    gameScreen.textContent += hidden[j];
  }
  }

  gameScreenLoopInt();

function pauseState() {
  messageText.textContent = "Press any key to Play!"
  document.onkeyup = function () {
    game.state = playState();
    console.log(game);
    displayGameStats();
    startSound.play();
  }
  return "pause";
}

function playState() {

  messageText.textContent = "You are now Playing!";

  //-----------------------------------KEY UP EVENTS, MAIN USER INTERFACE-------------------------------------------------------------------
  document.onkeyup = function (event) {



    // variable of user key press;

    var userGuess = event.key.toLowerCase();

    // returns false if length is more than one, and string is not a character a-z;

    function isLetter(str) {
      return str.length === 1 && str.match(/[a-z]/);
    }

    // if false do nothing, otherwise run the checkUserGuess function;

    if ((isLetter(userGuess) === false) || (isLetter(userGuess) === null)) {
      incorrectGuess.play();
    } else {
      checkUserGuess();
    }

    // if key pressed matches winning word, and doesn't match an entry in the winning word array, push into winning word array;

    function checkUserGuess() {
      if ((game.computerGuess.includes(userGuess)) && (winningWord.includes(userGuess) === false)) {
        winningWord.push(userGuess);
        successSound.play();

    // otherwise, if key pressed doesn't match an entry in guessed letters array, push into guess array and minus one guess attmpt;

      } else if ((userGuessLetters.includes(userGuess) == false) && (game.computerGuess.includes(userGuess) == false)) {
        userGuessLetters.push(userGuess);
        game.guessAtmpt--;
        incorrectGuess.play();

        // if anything else happens do nothing;

      } else {
       incorrectGuess.play();
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
  // log various gamestats and variables to the console
  console.log(errorFunction());
  console.log(hidden.toString());
  console.log(easyHardBox.checked);
  console.log(game);
  console.log("______________________________________________");

  // end of keyevent
  }
  return "play";
}

function winState() {
  messageText.textContent = "CONGRATULATIONS! YOU WIN! PRESS ANY KEY TO PLAY AGAIN!";
  game.addWin();
  displayGameStats();
  victorySound.play();
  document.onkeyup = function () {
    game.reset();
    console.log(game);
    displayGameStats();
    startSound.play();
  }
  return "win";
}

function loseState() {
  messageText.textContent = "YOU LOST! PRESS ANY KEY TO PLAY AGAIN!";
  game.addLoss();
  displayGameStats();
  sadTrombone.play();
  document.onkeyup = function () {
    game.reset();
    console.log(game);
    displayGameStats();
    startSound.play();
  }

  return "lose" ;
}

function displayGameStats() {

  var guessedLettersPrint = userGuessLetters.join(" ");
  winsText.textContent = "Wins: " + game.wins;
  loseText.textContent = "Losses: " + game.losses;
  guessText.textContent = "Guesses Remaining: " + game.guessAtmpt;
  guessedLetters.textContent = "Guessed Letters: " + guessedLettersPrint;
}

function checkGameState() {
  if (hidden.join("") === game.computerGuess.toString()){
    game.state = winState();
  } else if (game.guessAtmpt == 0) {
    game.state = loseState();
  } else {
    ;
  }
}

function errorFunction() {
  return hidden.toString() == game.computerGuess.toString();
}

function hardModeState() {
  if (easyHardBox.checked) {
    return 3;
  } else {
    return 12;
  }
}
