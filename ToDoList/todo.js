// Finish todo
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// Enter todo
$("input[type='text']").keypress(function(event){
    if (event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        // creat new todo (li) and add to list (ul)
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

// Toggle form
$("#hide").click(function(){
    $("input[type='text']").fadeToggle();
});