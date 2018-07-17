$('#fade-out').click(function(){
    $("div").fadeOut(3000, function(){
        $(this).remove();
    });
});

$('#fade-toggle').on('click', function(){
    $("div").fadeToggle(500); 
});

$("#slide-down").click(function(){
    $('div').slideDown();
});

$("#slide-up").click(function(){
    $('div').slideUp();
});

$("#slide-toggle").click(function(){
    $('div').slideToggle();
});