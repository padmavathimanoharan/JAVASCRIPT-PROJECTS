// ternary operator
function Ride_Function() {
	var Height, Can_ride;
	Height = document.getElementById("Height").value;
	Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
	document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// ternary operator challenge
function checkVote() {
    var age = document.getElementById("age").value;
    var message = (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote.";
    document.getElementById("result").textContent = message;
}   

// object constructor function
function Vehicle(Make, Model, Year, Color) {
	this.Vehicle_Make = Make;
	this.Vehicle_Model = Model;
	this.Vehicle_Year = Year;
	this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1970, "Mustard");
function myFunction() {
	document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "_colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

// New Keyword Assignment
function Message(text) {
    this.text = text;
}

const myMessage = new Message("Hello from the NEW keyword!");
document.getElementById("New_and_This").innerText = myMessage.text;

function showMessage() {
    const myMessage = new Message("Button clicked — NEW keyword object created!");
    document.getElementById("New_and_This").innerText = myMessage.text;
}

// Reserved Keyword Challenge
//var for = "hello";  -> Not allowed — “for” is a reserved keyword

var word = "for";
document.write(word);


//Identifiers and Literals
var Z="Challenge";
var K= 10;

// Nested Function
function count_Function() {
	document.getElementById("Nested_Function").innerHTML = Count();
	function Count() {
		var Starting_point = 0;
		function Plus_one() {Starting_point += 1;}
		Plus_one();
		return Starting_point;	
	}	
}