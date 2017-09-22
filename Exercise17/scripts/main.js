$(document).ready(function(){
    ///hide
    $(".error").hide();
    ///even
    var even = $(".input-group").filter(":even");

    even.addClass("even");
    ///firstName
    $('#firstName').on('blur', function(){
        var firstName = $("#firstName").val();
        var error = $('#firstName').closest(".input-group").find(".requiredMsg");
        if (firstName === "") {
            error.fadeIn();
        } else {
            error.fadeOut();
        }
    ///lastName
    });
    $('#lastName').on('blur', function(){
        var lastName = $("#lastName").val();
        var error = $('#lastName').closest(".input-group").find(".requiredMsg");
        if (lastName === "") {
            error.fadeIn();
        } else {
            error.fadeOut();
        }
        
    }); 
    ///emailAddress
    $('#emailAddress').on('blur', function(){
        var email = $("#emailAddress").val();
        var error = $('#emailAddress').closest(".input-group").find(".requiredMsg");
        var error1 = $('#emailAddress').closest(".input-group").find(".emailMsg");
        if (email === "") {
            error.fadeIn();
        } else {
            error.fadeOut();
        }
        if (email.indexOf("@") === ""){
            
        }else {
            error1.fadeIn();
        }
        if (email.indexOf("@") === -1){
            
        }else {
            error1.fadeOut();
        }
        if (email.indexOf(".com") === -1){

        }else {
            error1.fadeOut();
        }
            
        
    });



});

/// || && 