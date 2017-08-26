var arrayItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayItems);
var numbers = arrayItems.length;
document.getElementById("p4_arraylength").innerHTML = numbers;



function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    var fullName = firstName + " " + lastName;
    document.getElementById("p1_fullName").innerHTML = fullName;

    var p1IsValid = true;
    if (firstName.length===0 || lastName.length===0){
        p1IsValid = false;
    }
    document.getElementById("p1_valid").innerHTML = p1IsValid;

    var fName = fullName.length;
    document.getElementById("p1_fullNameLength").innerHTML = fName;

    console.log(firstName);
    console.log(lastName);
    console.log(p1IsValid);




    // Part 2
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);
    document.getElementById("p2_email").innerHTML = emailAddress;

    var email = "bsmithx479x@gmail.com";
    var isValidEmail = (email.indexOf('@') >-1);
    console.log(isValidEmail)
    document.getElementById("p2_valid").innerHTML = isValidEmail;

    var email = emailAddress.length;
    document.getElementById("p2_emailLength").innerHTML = email;



    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);
    document.getElementById("p3_number").innerHTML = randomNumber;

    // Really hope I did this part correctly
    var x = "true"
    if (isNaN(x)){
        
    }else{
        
    }
    console.log(x);
    document.getElementById("p3_valid").innerHTML = x;
    


    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);
    var arrayItems = "true"
    if (isNaN(arrayItems)) {

    }else{

    }
    console.log(x);
    document.getElementById("p4_valid").innerHTML = arrayItems;









    ////////////////////////Your code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}

