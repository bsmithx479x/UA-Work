document.getElementById("btnUpdate").addEventListener("click", submit);
document.getElementById("btnReset").addEventListener("click", reset);



function submit() {

  var errorList = [];


  var userName = getElm('userName');
  if (userName.value.length === 0) {
    errorList.push('Username is required')
  
  } else {
  }
  
  var userName = getElm('emailAddress');
  if (userName.value.length === 0) {
    errorList.push('Email address is required')
  
  } else {
  }

  var userName = getElm('pass');
  if (userName.value.length === 0) {
    errorList.push('Password is required')
  
  } else {
  }

  var userName = getValue('timeZone');
  if (userName === "") {
    errorList.push('You must select a Time zone')
  
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
      '<ul class="red"><li>' + errorList.join("</li><li>") + "</li></ul>";
      
  } else {
    html = "<h1>You registerred!</h1>";

  }

  document.getElementById("message").innerHTML = html;

}


function reset() {
  getElm('userName').value = "";
  getElm('pass').value = "";
  getElm('emailAddress').value = "";
  getElm('timeZone').value = "";
}

function reset () {
  document.getElementById("message").reset();
}


function getValue(id) {
  return getElm(id).value;
}

function getElm(id) {
  return document.getElementById(id);
}
