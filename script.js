$(document).ready(function() {
    $(".invisible-block-right").mouseenter(function(){
        $("body").addClass("black");
        $(".bg").css("opacity", 1);
        $("#logo").css("filter", brightness(0));
    });
    $(".invisible-block-left").mouseenter(function(){
        $("body").removeClass("black");
        $(".bg").css( "opacity", 0);
    });
});
