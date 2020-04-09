////////////////////////
// LETTER CONSTRUCTOR //
////////////////////////
function Letter(value) {
  this.letter = value;
  this.guessed = false;
  this.toString = function () {
    if (this.letter === " ") {
      this.guessed = true;
      return " ";
    } else {
      if (this.guessed === false) {
        return "_";
      } else {
        return this.letter;
      }
    }
  };

  this.guess = function (guess) {
    if (guess === this.letter) {
      this.guessed = true;
    }
  };
}

// export Letter object
module.exports = Letter;

////////////////////////
// MAIN TEST FUNCTION //
////////////////////////
function TestMain() {
  // remember to use new!
  var testObj = new Letter((char = "c"));
  console.log(testObj.char);
}

// TestMain();
