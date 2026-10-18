/* Javascript dictionary object */
var dog = { name: "Dax", breed: "Great Pyrenees", color: "white" };
/*convert Javascript objects to string format*/
var JSONstring = JSON.stringify(dog);        
document.getElementById("myDog").innerHTML = JSONstring;

/* This is a JSON string variable */
var car = '{ "name": "Ford", "modal": "Ford Fiesta", "color": "red" }';
/*convert JSON strings to Javascript objects */
var JSONstring = JSON.parse(car);
document.getElementById("myCar").innerHTML = JSONstring.name + " the " + JSONstring.modal;

/*set the data as a key/value pair to be saved locally in your browser*/
localStorage.setItem("Name", "Brown");
/*then use the key "Name" to return its value "Brown"*/
document.getElementById("myColors").innerHTML = localStorage.getItem("Name");

function myFunction() {
    document.getElementById("example").style.color = "red";
}