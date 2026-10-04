document.write(typeof "Hello World!"); // returns string
document.write("<br>");
document.write(typeof 42); // returns number
document.write("<br>");
document.write("10" + 5); // returns string
document.write("<br>");

document.write(2E310); // returns Infinity
document.write("<br>");
document.write(-3E310); // returns Negative Infinity
document.write("<br>");

//Boolean Assignment
function checkBoolean() {
    document.getElementById("check").innerHTML = (10 > 2 && 20 < 30); // returns true
    console.log(10 > 2 && 20 < 15); // returns false
}

//Double Equal Sign Assignment
function verifyBoolean() {
    document.getElementById("verify").innerHTML = (10 == 10); // returns true
    console.log(10 == 15); // returns false
}

//Triple Equal Sign Assignment
function tripleEqual() {
    document.getElementById("triple").innerHTML = (10 === 10); // returns true
    x = 82;
    y = "92";
    console.log(x === y); // returns false
    x = 82;
    y = "82";
    console.log(x === y); // returns false
    x = 15;
    y = 20;
    console.log(x === y); // returns false
    console.log(10 === 15); // returns false    
}

//And Operator Assignment
function andCheck() {
    document.getElementById("andcheck").innerHTML = (5 > 2 && 10 > 4); // returns true
    console.log(5 > 10 && 10 > 4); // returns false
}

//OR Operator Assignment
function orCheck() {
    document.getElementById("orcheck").innerHTML = (5 > 10 || 10 < 4); // returns true
    console.log(5 > 10 || 10 > 20); // returns false
}

//NOT Operator Assignment
function notCheck() {
    document.getElementById("notCheck").innerHTML = !(20 > 10); // returns false
    console.log(!(5 > 10)); // returns true
}

//console.log() Assignment
console.log(2 + 2); // returns 4
