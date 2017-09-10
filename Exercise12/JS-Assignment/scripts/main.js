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
    var errList = document.getElementById("error-list");
    var i = 0;
    for (var i = 0; i < messages.length; i++) {
        errList.innerHTML = "</ul";
        console.log(messages[i]);
    }



    //Create javascript object for the user
    var user = {
        firstName: fName,
        lastName: lName,
        email: email,
        fullname2: fName + " " + this.lanename
            return this.firstname + " " + this.lastname



        //log the user object to the console
        firstName: function (firstName) {
            this.firstName + " " + this.lastName;
        }
    }
    //Check to see if everything is valid
    console.log(user);
    //Create string for today's date. Remember, if you hard code this, it will be invalid tomorrow.
    var today = new Date(); 
    console.log(today.toDateString());
    //Make the alert box.
    alert("submitted on" + today.toDateString());

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