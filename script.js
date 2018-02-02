var backgroundSwitcher = $("body").bgswitcher({
    images: ["dark-background.png", "background-light.jpg"],
    loop: false
    });

$(document).ready(function() {
    $(".invisible-block-right").mouseenter(function(){
        $("body").addClass("black");
        // $(".bg").css("opacity", 1);
        backgroundSwitcher.bgswitcher("select", 1);
    });
    $(".invisible-block-left").mouseenter(function(){
        $("body").removeClass("black");
        // $(".bg").css( "opacity", 0);
        backgroundSwitcher.bgswitcher("select", 0);
    });
});
