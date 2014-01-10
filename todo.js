// 1. create an ol of to-do items
// 2. Create a textbox, 
// 3. save entered text in variable (?)
// 3. Add a button to or around textbox that adds the text entered when "add" is clicked.
// 4. after "add" is clicked, text should clear from textbox
// 5. after "add" is clicked, text should be added to todo list
// 5. Add an "x" button alongside each todo item that when clicked removes that item.
// 6. Create a checkbox to the left of todo items. 
// 7. If checkbox is selected, the text in the todo item is marked with line­through (strike­through)

$('form').submit(function () {
    if ($('input').val() !== '') {
        var input_value = $('input').val();
        $('ul').append('<li>' + input_value + '<a href="">x</a></li>');
        //$('ul').append('<li>' + input_value '<a href="">x</a></li>');

    };
    $('input').val('');
    return false;
});

$(document).on('click', 'a', function (e) {
    e.preventDefault();
    $(this).parent().remove();
});