////////////////////////
// LETTER CONSTRUCTOR //
////////////////////////
function Letter(word) {
  // input parameters
  this.word = word;

  // variable if word has been solved
  this.solved = false;

  // methods
  this.something = function () {};

  this.otherSomething = function () {};
}

////////////////////////
// MAIN TEST FUNCTION //
////////////////////////
function TestMain() {
  // remember to use new!
  var testObj = new Letter((word = "cow"));
  console.log(testObj.word);
}

TestMain();
