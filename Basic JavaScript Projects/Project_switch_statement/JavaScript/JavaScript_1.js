// switch statement assignment
function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_string = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_string;
            break;
        case "Yellow":
            Color_Output = "Yellow" + Color_string;
            break;
        case "Green":
            Color_Output = "Green" + Color_string;
            break;
        case "Blue":
            Color_Output = "Blue" + Color_string;
            break;
        case "Pink":
            Color_Output = "Pink" + Color_string;
            break;
        case "Purple":
            Color_Output = "Purple" + Color_string;
            break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list.";          
    }
    document.getElementById("ID_Name").innerHTML = Color_Output;
}

// implicit - action automatically taken by lang
document.write(3 + "3" + 3); // 333

// getElementsByClassName() Method
function Hello_world_Fn() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "The text has changed!";
}

// Canvas Graphics
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

// Canvas Reference
const fillCanvas = document.getElementById("fillCanvas");
const ctxc = fillCanvas.getContext("2d");
ctxc.fillStyle = "red";
ctxc.fillRect(20, 20, 150, 100);

// Gradient Color Challenge
const liGra = document.getElementById("linGra");
const cont = liGra.getContext("2d");

// Create a Gradient
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

// Draw a filled Rectangle
cont.fillStyle = grd;
cont.fillRect(20, 20, 150, 100);