////////////////////
// IMPORT MODULES //
////////////////////
var Word = require("./word.js");
var inquirer = require("inquirer");

///////////////////
// MAIN FUNCTION //
///////////////////
function Main() {
  // letter list
  var letterList = "abcdefghijklmnopqrstuvwxyz";

  // list of USA presidents
  var americanPresidents = [
    "George Washington",
    "John Adams",
    "Thomas Jefferson",
    "James Madison",
    "James Monroe",
    "John Quincy Adams",
    "Andrew Jackson",
    "Martin Van Buren",
    "William Henry Harrison",
    "John Tyler",
    "James K Polk",
    "Zachary Taylor",
    "Millard Fillmore",
    "Franklin Pierce",
    "James Buchanan",
    "Abraham Lincoln",
    "Andrew Johnson",
    "Ulysses S. Grant",
    "Rutherford B. Hayes",
    "James Garfield",
    "Chester A Arthur",
    "Grover Cleveland",
    "Benjamin Harrison",
    "Grover Cleveland",
    "William McKinley",
    "Theodore Roosevelt",
    "William Howard Taft",
    "Woodrow Wilson",
    "Warren G Harding",
    "Calvin Coolidge",
    "Herbert Hoover",
    "Franklin D Roosevelt",
    "Harry S Truman",
    "Dwight D Eisenhower",
    "John F Kennedy",
    "Lyndon B Johnson",
    "Richard M Nixon",
    "Gerald R Ford",
    "James Carter",
    "Ronald Reagan",
    "George HW Bush",
    "William J Clinton",
    "George W Bush",
    "Barack Obama",
    "Racist Asshole",
  ];

  // pick random index from americanPresidents list
  var randomIndex = Math.floor(Math.random() * americanPresidents.length);
  var randomWord = americanPresidents[randomIndex];

  // pass random word through Word() constructor
  gameWordObj = new Word(randomWord);

  var requireNewWord = false;

  // list of guessed letters
  var incorrectLetters = [];
  var correctLetters = [];

  // guesses left
  var guessesLeft = randomWord.length * 1.5;

  function GameLogic() {
    // generate new word for Word() constructor if true
    if (requireNewWord) {
      // selects random american president from list
      var randomIndex = Math.floor(Math.random() * americanPresidents.length);
      var randomWord = americanPresidents[randomIndex];

      // passes random word through Word() constructor
      gameWordObj = new Word(randomWord);

      requireNewWord = false;
    }

    // test if letter guessed is correct
    var wordComplete = [];
    gameWordObj.objList.forEach(CompleteCheck);

    // letters remaining to be guessed
    if (wordComplete.includes(false)) {
      inquirer
        .prompt([
          {
            name: "userInput",
            type: "input",
            message: "Guess a letter between A-Z!",
          },
        ])
        .then(function (res) {
          if (!letterList.includes(res.userInput) || res.userInput.length > 1) {
            console.log("\nPlease try again!");

            // run game logic again
            GameLogic();
          } else {
            if (
              incorrectLetters.includes(res.userInput) ||
              correctLetters.includes(res.userInput) ||
              res.userInput === ""
            ) {
              console.log("\nAlready guessed or nothing entered\n");

              // run game logic again
              GameLogic();
            } else {
              // checks if guess is correct
              var wordCheckList = [];

              gameWordObj.UserGuess(res.userInput);

              // checks if guess is correct
              gameWordObj.objList.forEach(WordCheck);
              if (wordCheckList.join(" ") === wordComplete.join(" ")) {
                console.log("\nIncorrect!\n");

                incorrectLetters.push(res.userInput);
                guessesLeft--;
              } else {
                console.log("\nCorrect!\n");
                correctLetters.push(res.userInput);
              }

              gameWordObj.Log();

              // print guesses left
              console.log("Guesses left: " + guessesLeft + "\n");

              // print letters guessed already
              console.log(
                "Letters guessed: " + incorrectLetters.join(" ") + "\n"
              );

              // guesses left
              if (guessesLeft > 0) {
                // call function
                GameLogic();
              } else {
                console.log("Sorry, you lose!\n");

                RestartGame();
              }

              function WordCheck(key) {
                wordCheckList.push(key.guessed);
              }
            }
          }
        });
    } else {
      console.log("YOU WIN!\n");

      RestartGame();
    }

    function CompleteCheck(key) {
      wordComplete.push(key.guessed);
    }
  }

  function RestartGame() {
    inquirer
      .prompt([
        {
          name: "restart",
          type: "list",
          message: "Would you like to:",
          choices: ["Play Again", "Exit"],
        },
      ])
      .then(function (res) {
        if (res.restart === "Play Again") {
          requireNewWord = true;
          incorrectLetters = [];
          correctLetters = [];
          guessesLeft = randomWord.length * 1.5;
          GameLogic();
        } else {
          return;
        }
      });
  }

  GameLogic();
}

/////////////////////////
// PROGRAM ENTRY POINT //
/////////////////////////
Main();
