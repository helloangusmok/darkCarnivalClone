$(document).ready(function() {
    $(".invisible-block-right").mouseenter(function(){
        $("body").addClass("black", 5000);
    });
    $(".invisible-block-left").mouseenter(function(){
        $("body").removeClass("black", 5000);
    });
});