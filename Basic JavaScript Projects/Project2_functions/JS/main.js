// function assignment
function change() {
    var first = document.getElementById("text1");
    var second = document.getElementById("text2");
    var btnName = document.getElementById("btnSubmit");
    first.style.color = "Red";
    second.style.backgroundColor = "lightblue";
    btnName.innerHTML = "Check Colors";
    if (btnName.innerHTML = "Check Colors")
        document.getElementById("message").textContent = "Success!";
        // Operator Assignment
        var sentence = "Learning and ";
        sentence+= "use the += operator to concatenate a string";
        document.getElementById("concat").innerHTML = sentence;
}

