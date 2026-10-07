// concat() Method Assignment
function full_sentence() {
	var part_1 = "I have ";
	var part_2 = "made this ";
	var part_3 = "into a complete ";
	var part_4 = "sentence.";
	var whole_sentence = part_1.concat(part_2, part_3, part_4);
	document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// slice() Method
function slice_Method() {
	var Sentence = "All work and no play makes Johnny a dull boy.";
	var Section = Sentence.slice(27, 33);
	document.getElementById("slice").innerHTML = Section;
}

// UpperCase() Method
function upper_case() {
	var str = "i am learning javascript string methods";
	var res = str.toUpperCase();
	document.getElementById("toUpperCase").innerHTML = res;
}

// search() Method
function search_Method() {
	var str = "The search() method searches a string for a specified value and returns the position of the match.";
	var pos = str.search("specified");
	document.getElementById("search").innerHTML = pos;
}	

// Number MEthods
function string_Method() {
	var X = 182;
	document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

// toPrecision() Method
function precision_Method() {
	var X = 12938.3012987376112;
	document.getElementById("precision").innerHTML = X.toPrecision(4);
}

// New Methods Challenge
// toFixed() Method
function toFixed_Method() {
	var num = 5.56789;
	var n = num.toFixed(2);
	document.getElementById("toFixed").innerHTML = n;
}

// valueOf() Method
function valueOf_Method() {
	var X = 182;
	document.getElementById("valueOf").innerHTML = X.valueOf();
}	 