# word_guess_game

tasks:

<!-- build variables -->

<!-- log user input in array -->

<!-- compare new input to data currently in array and don't store input if key pressed is already stored in array -->

<!-- example script -->
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var n = fruits.includes("Mango");

document.getElementById("demo").innerHTML = n;
<!-- example script end -->

<!-- compare input to computer generated random word -->



define win conditions
when x == computerGuess
when userGuessLetters includes all letters of computer Guess;

define lose conditions
when guessAtmpt == 0
when userguessletters = false -- guessAtmp


Thoughts:
use a for each statement to display _ for each letter in the "word"

output the "word" into the game array so each letter is an index.

array.length might prove usefull
