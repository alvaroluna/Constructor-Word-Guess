//// Constructor initialize
var Word = require("./word.js");
var inquirer = require("inquirer");

// letters entry
var letterArray = "abcdefghijklmnopqrstuvwxyz";

// List of words to choose from
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

// Pick Random index from americanPresidents array
var randomIndex = Math.floor(Math.random() * americanPresidents.length);
var randomWord = americanPresidents[randomIndex];

// Pass random word through Word constructor
computerWord = new Word(randomWord);

var requireNewWord = false;

// Array for guessed letters
var incorrectLetters = [];
var correctLetters = [];

// Guesses left
var guessesLeft = 10;

function GameLogic() {
  // Generates new word for Word constructor if true
  if (requireNewWord) {
    // Selects random americanPresidents array
    var randomIndex = Math.floor(Math.random() * americanPresidents.length);
    var randomWord = americanPresidents[randomIndex];

    // Passes random word through the Word constructor
    computerWord = new Word(randomWord);

    requireNewWord = false;
  }

  // TestS if a letter guessed is correct
  var wordComplete = [];
  computerWord.objArray.forEach(completeCheck);

  // letters remaining to be guessed
  if (wordComplete.includes(false)) {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Guess a letter between A-Z!",
          name: "userinput",
        },
      ])
      .then(function (input) {
        if (
          !letterArray.includes(input.userinput) ||
          input.userinput.length > 1
        ) {
          console.log("\nPlease try again!\n");
          GameLogic();
        } else {
          if (
            incorrectLetters.includes(input.userinput) ||
            correctLetters.includes(input.userinput) ||
            input.userinput === ""
          ) {
            console.log("\nAlready Guessed or Nothing Entered\n");
            GameLogic();
          } else {
            // Checks if guess is correct
            var wordCheckArray = [];

            computerWord.userGuess(input.userinput);

            // Checks if guess is correct
            computerWord.objArray.forEach(wordCheck);
            if (wordCheckArray.join("") === wordComplete.join("")) {
              console.log("\nIncorrect\n");

              incorrectLetters.push(input.userinput);
              guessesLeft--;
            } else {
              console.log("\nCorrect!\n");

              correctLetters.push(input.userinput);
            }

            computerWord.log();

            // Print guesses left
            console.log("Guesses Left: " + guessesLeft + "\n");

            // Print letters guessed already
            console.log(
              "Letters Guessed: " + incorrectLetters.join(" ") + "\n"
            );

            // Guesses left
            if (guessesLeft > 0) {
              // Call function
              GameLogic();
            } else {
              console.log("Sorry, you lose!\n");

              restartGame();
            }

            function wordCheck(key) {
              wordCheckArray.push(key.guessed);
            }
          }
        }
      });
  } else {
    console.log("YOU WIN!\n");

    restartGame();
  }

  function completeCheck(key) {
    wordComplete.push(key.guessed);
  }
}

function restartGame() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to:",
        choices: ["Play Again", "Exit"],
        name: "restart",
      },
    ])
    .then(function (input) {
      if (input.restart === "Play Again") {
        requireNewWord = true;
        incorrectLetters = [];
        correctLetters = [];
        guessesLeft = 10;
        GameLogic();
      } else {
        return;
      }
    });
}

GameLogic();
