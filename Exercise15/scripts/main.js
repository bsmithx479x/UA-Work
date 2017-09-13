$(document).ready(function(){

     ///// Code goes here

     ///Part 1
     $('#btnOne');
     $('#btnOne').on('click', myFunction);
     function myFunction() {
        alert("You Clicked Me");
     }


     ///Part 2
     $('#btnTwo');
     $('#btnTwo').on('click', myFunction2);
     function myFunction2() {       
        $('.update-html').html('<h3>Hello Word!</h3>') 
     }


     ///Part 3
     $('#btnThree');
     $('#btnThree').on('click', myFunction3);
     function myFunction3() {
    $('#text-update').val("Hello World")
     }

     ///Part 4
     $('#btnCopyHtml');
     $("#btnCopyHtml").on("click", myFunction4)
     function myFunction4() {
        var html = $('.copy-html').html()  
        $('.paste-html').html(html)
     }

     ///Part 5
     $('#btnCopyValues');
     $("#btnCopyValues").on("click", myFunction5)
     function myFunction5() {
        var html2 = $('#copy-text').html()  
        $('#paste-text').val("I will be copied")
     }


});
