
// 4. after "add" is clicked, text should clear from textbox
// 5. Add an "x" button alongside each todo item that when clicked removes that item.
// 6. Create a checkbox to the left of todo items. 
// 7. If checkbox is selected, the text in the todo item is marked with line­through (strike­through)

//code inspired by http://jsfiddle.net/4VkcF/1/
$(document).ready(function () {
    
  $("#btnSubmit").click(function(){

    var getText= $("#txtDescription").val();

    $( "#list ul" ).append( $( "<li>" ).html(getText) );

    // Clears textbox after submit is clicked
    $('#txtDescription').val('');
  });

});




