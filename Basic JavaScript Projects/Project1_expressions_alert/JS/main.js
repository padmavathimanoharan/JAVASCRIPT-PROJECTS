// alert method
alert('Hello, World!');

// pop up
window.alert('Hello World!');

// display text
document.write('Print Hello World');

// variable assignment
var A = "This is a string";
document.write(A);

// string assignment
var S = "String Assignment";
window.alert(A);

// creating two variables
var sent1 = "This is the beginning of the string";
var sent2 = "This is the end of the string";
document.write(sent1 + sent2);

// escape character assignment
var backslash = "Lokini told me. \"Call dad! or I'll tell pragati!\" <br> \"Eat snacks!\" quotes ended.";
document.write(backslash);

// concatenation assignment
document.write("\"Be who you are say what you feel, "
    + " because those who mind don\'t matter and those who matter don\'t mind.\""
    + "-Dr. Seuss");
var B = "Padmavathi" + "Manoharan";
document.write(B);

// multiple variables
var Family = "MMM", Dad="Mano", Mom="Meena", Brother="Natraj", Spouse="Siva";
document.write(Spouse);

// expression assignment
document.write(25*3);

// function
function My_First_Function() {
    var str = "Test my button click";
    document.getElementById("btn_Text").innerHTML = str;
}

// event challenge
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}