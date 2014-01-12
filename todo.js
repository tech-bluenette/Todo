
// Below code: "wait until page is done loading so that elements have time to load.""
$(document).ready(function () {


  var initialItems = ["Buy groceries", "Walk the dog", "Make dinner", "Graduate from LL"];

  var createListItem = function(text){
    // Below creates a list item each time this function is called
    var listItem = $( "<li>" );
    var deleteButton = $('<button class="delete">Delete</button>');
    var checkBox = $("<input type=checkbox>");
    // theList matches ALL html elements that are ul and have a parent element that have an id of #list 
    var theList = $( "#list ul" );

    // Sets the html value of listItem to be "text"
    listItem.html(text);
    // Appends the list item to the list
    theList.append( listItem );
    // Append delete button to every generated list item
    listItem.append(deleteButton);
    // Prepend checkbox to every generated list item 
    listItem.prepend(checkBox);

    // Clears textbox because of empty string
    $('#txtDescription').val('');
    // "this" refers to deleteButton on line above it. The parent of deleteButton is li, so when delete button is clicked it removes that li item.
    deleteButton.click(function () {
      $(this).parent().remove();
    });
    // when checkbox is clicked it applies the css text-decoration: line-through to the parent of checkbox (that li item)
    checkBox.click(function () {
      if($(this).parent().css("text-decoration") == "line-through solid rgb(0, 0, 0)") {
        $(this).parent().css("text-decoration", "none");
      }
      else {
        $(this).parent().css("text-decoration", "line-through");
      }
    });
  };

  for (var i = 0; i < initialItems.length; i++ ) {
    var item = initialItems[i];
    createListItem(item);
  }

  // When the submit button is clicked, the text entered in text area is sent to the createListItem function.
  $("#btnSubmit").click(function() {
    var getText= $("#txtDescription").val();
    createListItem(getText);
  });

  // "this" (and selectors like it) always select the last element in the selector.  So it's referring to .delete here.  So when the delete
  // element is clicked, it removes the parent of .delete (which would be a list item)
  $("#list .delete").click(function() { 
    $(this).parent().remove();
  });

  // this allows the li items to be sortable
  $(function () {
    $("#sortable").sortable();
  });

// $('input[type=checkbox]').on('change',function(){
//   var input = $(this).parent().find('li');
//   $(input).css('textDecoration','line-through');
// });



});




