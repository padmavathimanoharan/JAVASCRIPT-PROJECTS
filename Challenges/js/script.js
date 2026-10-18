// Fade Challenge
document.body.classList.add('fadeOut');
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('fadeOut');
});

//Form Challenge
function validateForm() {
    const form = document.forms["myForm"];
    const fname = form["firstname"].value.trim();
    const lname = form["lastname"].value.trim();
    const phone = form["phone"].value.trim();

    if (fname == "") {
        alert("Please enter FirstName");
        return false;
    }
    else if (lname == "") {
        alert("Please enter LastName");
        return false;
    }
    else if (phone == "") {
        alert("Please enter PhoneNumber");
        return false;
    }

    alert("Form submitted successfully!");
    form.reset();
    return false;
}

//Popup Contact Form Challenge
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Automatic Slideshow Challenge
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);