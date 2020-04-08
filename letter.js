////////////////////////
// LETTER CONSTRUCTOR //
////////////////////////
function Letter(char) {
  // input parameters
  this.char = char;

  // variable if char has been solved
  this.solved = false;

  // methods
  this.ToString = function () {
    if (this.char === " ") {
      this.solved = true;
      return " ";
    } else {
      if (this.solved === false) {
        return "_";
      } else {
        return this.char;
      }
    }
  };

  this.guess = function (guess) {
    if (guess === this.char) {
      this.solved = true;
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
