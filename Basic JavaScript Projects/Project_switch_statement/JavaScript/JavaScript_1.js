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
