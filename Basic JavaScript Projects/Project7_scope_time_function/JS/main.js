// Scope: Global and Local Variables
var X= 10; // global variable
function Add_numbers_1() {
	var x = 90; // local variable
	window.alert(10 + x + "<br>"); // using local variable
}

function Add_numbers_2() {
	window.alert(X + 11); // using global variable
	console.log(X);	// using console.log to debug which variable is being used
}

// method assignment
function get_Date() {
	if (new Date().getHours() < 18) {
		document.getElementById("greeting").innerHTML= "How are you today?";
	}
}

// if statement assignment
function Name_Function() {
	Name= document.getElementById("Name").value;
	if(Name.length > 10) {
		document.getElementById("nameMessage").innerHTML= "Your name is too long!";
	}
	else {
		document.getElementById("nameMessage").innerHTML = "Hi " + Name + "!"; 
	}
}

// else statement assignment
function Age_Function() {
	Age= document.getElementById("Age").value;
	if (Age >= 18) {
		Vote= "You are old enough to vote!";
	}
	else {
		Vote= "You are not old enough to vote!";
	}
	document.getElementById("How old are you?").innerHTML= Vote;
}

// else if statement assignment
function Time_function() {
	var Time= new Date().getHours();
	var Reply;
	if (Time < 12 == Time > 0) {
		Reply= "It is morning time!";
	}
	else if (Time >= 12 == Time < 18) {
		Reply= "It is afternoon.";
	}
	else {
		Reply= "It is evening time.";
	}
	document.getElementById("Time_of_day").innerHTML= Reply;
}	
