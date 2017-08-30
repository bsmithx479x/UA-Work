function update() {
    /* ===================
        Your code starts here
    =====================*/

    //Create new array.
    var messages = [];
    //If first name is empty. Add it to the array
    var firstName = getValue("firstName");
    if (firstName.length === 0) {
        messages.push("First Name is required")
    }

    //If last name is empty. Add it to the array
    var lastName = getValue("lastName");
    if (lastName.length === 0) {
        messages.push("Last Name is required")
    }

    //Email is empty. Add it to the array
    var email = getValue("emailAddress");
    if (email.length === 0) {
        messages.push("Email is required");
    }

    //Loop through array

    var i = 0;
    for (var i = 0; i < messages.length; i++) {
        console.log(messages[i]);
    }


    //Create javascript object for the user
    var user = {
        firstName: getValue("firstName"),
        lastName: getValue("lastName"),
        email: getValue("emailAddress"),



        //log the user object to the console
        fullName: function (firstName) {
            this.firstName + " " + this.lastName;
        }
    }
    //Check to see if everything is valid
    console.log(user);
    //Create string for today's date. Remember, if you hard code this, it will be invalid tomorrow.
    var now = new Date(); 
    console.log(now.toDateString());
    //Make the alert box.
    alert("Submitted on Mon Aug 28, 2017");

    /* ===================
        Your code ends here
    =====================*/


}



var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}