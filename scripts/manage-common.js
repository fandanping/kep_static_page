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
    $(".side-menu .btn-close").on("click", function(){
        var $menuBtn = $("#sideMenuBtn");
        if($menuBtn.hasClass("active")){
            $(".side-menu").css({
                "transform":"translateX(-100%)"
            })
            $menuBtn.removeClass("active");
        }

    })

    //初始化icheck插件
    $('input:checkbox').iCheck({
        checkboxClass: 'icheckbox_minimal-blue',
        radioClass: 'iradio_minimal-blue',
        increaseArea: '20%' // optional
    });
    //全选
    $(".group-checkable").on("ifChecked", function(){
        var set = $(this).attr("data-set");
        $(set).iCheck("check");
    })
    //反选
    $(".group-checkable").on("ifUnchecked", function(){
        var set = $(this).attr("data-set");
        $(set).iCheck("uncheck");
    })


})