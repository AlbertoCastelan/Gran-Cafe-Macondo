

$(document).ready(function() {
    $(".navBtn .fa-times").hide();
    
    $(".navBtn .fa-bars").click(function() {
        $(this).hide();
        $(".navBtn .fa-times").show();
        $("nav#mobile ul").addClass("active");
    });
    
    $(".navBtn .fa-times").click(function() {
        $(this).hide();
        $(".navBtn .fa-bars").show();
        $("nav#mobile ul").removeClass("active");
    });
    
});