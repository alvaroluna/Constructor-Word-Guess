// import modules
var Letter = require("./letter.js");

//////////////////////
// WORD CONSTRUCTOR //
//////////////////////
function Word(answer) {
  //Letter objects array
  this.objArray = [];

  for (var i = 0; i < answer.length; i++) {
    var letter = new Letter(answer[i]);
    this.objArray.push(letter);
  }

  this.log = function () {
    answerLog = "";
    for (var i = 0; i < this.objArray.length; i++) {
      answerLog += this.objArray[i] + " ";
    }
    console.log(answerLog + "\n");
  };

  this.userGuess = function (input) {
    for (var i = 0; i < this.objArray.length; i++) {
      this.objArray[i].guess(input);
    }
  };
}

// export Word object
module.exports = Word;

////////////////////////
// MAIN TEST FUNCTION //
////////////////////////
function TestMain() {
  // remember to use new!
  var testObj = new Word((char = "cow"));
  console.log(testObj.char);
}

// TestMain();
