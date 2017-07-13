$(function(){
    $("#sideMenuBtn").on("click", function(){
        var me = $(this);
        if(me.hasClass("active")){
            $(".side-menu").css({
                "transform":"translateX(-100%)"
            })
            me.removeClass("active");
        }else{
            me.addClass("active");
            $(".side-menu").css({
                "transform":"translateX(0)"
            })
        }


    })


})