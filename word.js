// import modules
var Letter = require("./letter.js");

//////////////////////
// WORD CONSTRUCTOR //
//////////////////////
function Word(answer) {
  // letter objects array
  this.objList = [];

  for (var i = 0; i < answer.length; i++) {
    var letter = new Letter(answer[i]);
    this.objList.push(letter);
  }

  this.Log = function () {
    answerLog = "";
    for (var i = 0; i < this.objList.length; i++) {
      answerLog += this.objList[i] + " ";
    }

    console.log(answerLog + "\n");
  };

  this.UserGuess = function (input) {
    for (var i = 0; i < this.objList.length; i++) {
      this.objList[i].guess(input);
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
