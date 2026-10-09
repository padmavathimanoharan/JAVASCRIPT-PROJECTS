// Loops Assignment
function count_To_Ten() {
	var Digit = "";
	var X = 1;
	while (X < 11) {
		Digit += "<br>" + X;
		X++;
	}
	document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

// Length Property Challenge
function findLength() {
	var str = document.getElementById("text").innerHTML;
	var n = str.length;
	document.getElementById("text").innerHTML = "Length of the text is: " + n;
}

// For Loops in JavaScript
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
	for(Y=0; Y < Instruments.length; Y++) {
		Content += Instruments[Y] + "<br>";
	}
	document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Arrays and Objects
function array_Function() {
		var Cat_Picture = [];
		Cat_Picture[0] = "sleeping";
		Cat_Picture[1] = "playing";
		Cat_Picture[2] = "eating";
		Cat_Picture[3] = "purring";
		document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";		
}

// Function Scope
function myFunction() {
	var carName = "Corvette";
	document.getElementById("Example").innerHTML = carName;
}

// Constant Keyword - will never change
function constant_fun() {
	const Musical_Instrument = { type:"guitar", brand:"Fender", color:"black"};
	Musical_Instrument.color = "blue";
	Musical_Instrument.price = "$900";
	document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

// tokens - constants, identifiers, separators, reserved keywords, operators

// let keyword - block scope
var X= 82;
document.write("let Keyword " + "<br>")
document.write(X);
{
	let X = 33;
	document.write("<br>" + X);
}
document.write("<br>" + X);
//output - 82 33 82
var X= 82;
document.write("<br>" + X);
{
	var X = 33;
	document.write("<br>" + X);
}
document.write("<br>" + X);
// output - 82 33 33 

// Call a function and save the return value in x
var temp = myFunction(4, 3);
document.write("<br>" + "Return Statement" + "<br>");
document.write(temp);

function myFunction(a, b) {
  // Return the product of a and b
  return a * b;
}

let car = {
	make: "Dodge",
	model: "viper",
	year: "2021",
	color: "red",
	description : function() {
		return "The car is a " + this.year + this.color + this.make + this.model; 
	}
};
document.getElementById("car_Object").innerHTML = car.description();

// Break and Continue Statement
let text = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { break loop1; }
    text += i + "<br>";
  }
}
document.getElementById("demo").innerHTML = text;
