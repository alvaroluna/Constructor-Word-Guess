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
  var randomWord = americanPresidents[i];
}

/////////////////////////
// PROGRAM ENTRY POINT //
/////////////////////////
Main();
