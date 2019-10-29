//declaring global variables
var allMyLetters = []; //empty array
var amountOfLetters = 15;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function preload() {
  // put preload code here
}

function setup() {
  noCanvas();

  for (var i = 0; i < amountOfLetters; i++) {
    var tempLetter = new Letter();
    allMyLetters.push(tempLetter);
  }
}

function draw() {
  // put drawing code here
  for (var i = 0; i < allMyLetters.length; i++) {
    var tempLetter = allMyLetters[i];
    tempLetter.display();
    //console.log("i = " + i);
    //console.log(allMyLetters.length);
  }

  //html element modify using DOM
  var myMessage = select('#message');
  myMessage.style("font-family: Inconsolata; user-select: none;  color: green; background-color: white; padding: 25px; position: absolute; width: 225px; margin: 0 auto; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 2;");
}

//creating the object
function Letter() {
  this.display = function() {
    //html = letters array elements
    var index = round(random(letters.length));
    var letter = createElement('div', letters[index]);
    //css style
    letter.position(random(0, windowWidth), random(0, windowHeight));
    letter.style("font-family: Inconsolata; user-select: none;  color: green;");
    letter.style('font-size', 5 + mouseX / 15 + 'px');
    //callback
    letter.mouseClicked(letterClicked);
  }
}

//callback function
function letterClicked() {
  this.style('color:red; font-size: 150px;');
}
