function validateForm() {
    const form = document.forms["myForm"];
    const fname = form["firstname"].value.trim();
    const lname = form["lastname"].value.trim();
    const country = form["country"].value;

    if (fname == "") {
        alert("Please enter FirstName");
        return false;
    }
    else if (lname == "") {
        alert("Please enter LastName");
        return false;
    }
    else if (country == "") {
        alert("Please select a country");
        return false;
    }

    alert("Form submitted successfully!");
    form.reset();
    return false;
}