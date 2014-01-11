
// 5. Add an "x" button alongside each todo item that when clicked removes that item.
// 6. Create a checkbox to the left of todo items. 
// 7. If checkbox is selected, the text in the todo item is marked with line­through (strike­through)

//code inspired by http://jsfiddle.net/4VkcF/1/
$(document).ready(function () {
    
  $("#btnSubmit").click(function(){

    var getText= $("#txtDescription").val();
    var listItem = $( "<li>" );
    var deleteButton = $('<button class="delete">Delete</button>');

    $( "#list ul" ).append( listItem.html(getText) );
    listItem.append(deleteButton);
    // Clears textbox after submit is clicked
    $('#txtDescription').val('');
    deleteButton.click(function () {
    $(this).parent().remove();
    });
  });

  $("#list .delete").click(function() { 
    $(this).parent().remove();
});

});




