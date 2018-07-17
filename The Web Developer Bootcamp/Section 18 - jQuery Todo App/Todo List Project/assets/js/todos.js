// Check off specific todos by clicking

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// CLick on X to delete todo
$("ul").on("click", "span", function(){
    $(this).parent().fadeOut(400, function(){
        $(this).remove();
    }); 
    event.stopPropagation();
});

// Using enter key, add todo (li) from input text field into the ul
$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        // Grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val(" ");
        // Create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }    
});

$("#plus-btn").click(function(){
    $("input[type='text'").fadeToggle();
});
