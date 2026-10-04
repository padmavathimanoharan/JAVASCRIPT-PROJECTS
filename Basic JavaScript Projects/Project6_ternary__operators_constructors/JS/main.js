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