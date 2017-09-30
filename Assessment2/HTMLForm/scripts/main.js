document.getElementById("btnSubmit").addEventListener("click", submit);




function submit() {

  var errorList = [];

  var userName = getElm('userName');
  if (userName.value.length === 0) {
    errorList.push('First Name must be filled out')
  
  } else {
  }
  
  var userName = getElm('lastName');
  if (userName.value.length === 0) {
    errorList.push('Last Name must be filled out')
  
  } else {
  }

  
  var userName = getElm('emailAddress');
  if (userName.value.length === 0) {
    errorList.push('Email Address is required')
  
  } else {
  }

  var userName = getValue('dropOptions');
  if (userName === "") {
    errorList.push('Please select an option from the drop down menu')
  
  } else {
  }

  var userName = getElm('whyDo');
  if (userName.value.length === 0) {
    errorList.push('"why do you need this blender" must be filled out')
  
  } else {
  }
 
  var check = getElm('mycheck1');
  if (check.checked === false) {

    errorList.push('You must accept the terms and conditions');
  } else {
  
  }
  
  var html;
  if (errorList.length > 0) {
    html =
      '<div class="red"><li>' + errorList.join("</li><li>") + "</li></ul><br>";
      
  } else {
    html = "<h1>Thank you for your submission!</h1><br>";

  }

  document.getElementById("message").innerHTML = html;

}


function getValue(id) {
  return getElm(id).value;
}

function getElm(id) {
  return document.getElementById(id);
}