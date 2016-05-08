
$(document).ready(function(){



});



/* GENERAL TAB ACTION */
$(".general-tab .tab").on('click',function(){
    var dataIndex = $(this).data("index");
    $(this).closest(".general-tab").find(".tab").removeClass("active");
    $(this).addClass("active");

    // Tab Area
    $(this).closest(".general-tab").find(".area").removeClass("active");
    $(this).closest(".general-tab").find(".area[data-index="+dataIndex+"]").addClass("active");
});


var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    duration: 100,
    offset: 50
}).setPin("#screen-one").addTo(controller);