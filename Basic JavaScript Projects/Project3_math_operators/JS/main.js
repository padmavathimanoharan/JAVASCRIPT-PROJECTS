// math operator assignment
function addition() {
    var add = 5+7;
    document.getElementById("math_add").innerHTML = "5 + 7 = " + add;
}
function subtraction() {
    var sub = 5-2;
    document.getElementById("math_sub").innerHTML = "5 - 2 = " + sub;
}
function multiplication() {
    var mul = 6*8;
    document.getElementById("math_mul").innerHTML = "6 * 8 = " + mul;
}
function division() {
    var div = 48/6;
    document.getElementById("math_div").innerHTML = "48 / 6 = " + div;
}

function multioperations() {
    var simple_math = (1+2)*10/2-5;
    document.getElementById("math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_math;
}

function modulus() {
    var math_mod = 25%6;
    document.getElementById("math_mod").innerHTML = "When you divide 25 by 6 you have a remainder of: " + math_mod;
}

function unary() {
    // negation operator
    var x = 10;
    document.getElementById("math_unary").innerHTML = -x;
}

function increment() {
    // increment and decrement operator
    x = 15;
    x++;
    document.getElementById("inc").innerHTML = x;
}

function decrement() {
    x = 5.25;
    x--;
    document.getElementById("dec").innerHTML = x;
}

function random() {
    //random math object
    window.alert(Math.random());
    window.alert(Math.random() * 100);
}

function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    }
    document.getElementById("Dictionary").innerHTML = "Species: " + Animal.Species + ", Color: " + Animal.Color + ", Breed: " + Animal.Breed;
}