$(function(){
    "use strict";
    //navbar hover  
$(".navbar-light .navbar-nav .nav-item:first-of-type").hover(function(){
    $(".navbar-light .navbar-nav .nav-link .span1").css({
        width:"100%",
        height:"100%"
    })
    }
,
function(){
    $(".navbar-light .navbar-nav .nav-link .span1").css({
        width:"10px",
        height:"10px"
    })
})

$(".navbar-light .navbar-nav .nav-item:nth-of-type(2)").hover(function(){
    $(".navbar-light .navbar-nav .nav-link .span2").css({
        width:"100%",
        height:"100%"
    })
    }
,
function(){
    $(".navbar-light .navbar-nav .nav-link .span2").css({
        width:"10px",
        height:"10px"
    })
})

$(".navbar-light .navbar-nav .nav-item:nth-of-type(3)").hover(function(){
    $(".navbar-light .navbar-nav .nav-link .span3").css({
        width:"100%",
        height:"100%"
    })
    }
,
function(){
    $(".navbar-light .navbar-nav .nav-link .span3").css({
        width:"10px",
        height:"10px"
    })
})

$(".navbar-light .navbar-nav .nav-item:nth-of-type(4)").hover(function(){
    $(".navbar-light .navbar-nav .nav-link .span4").css({
        width:"100%",
        height:"100%"
    })
    }
,
function(){
    $(".navbar-light .navbar-nav .nav-link .span4").css({
        width:"10px",
        height:"10px"
    })
})

$(".navbar-light .navbar-nav .nav-item:nth-of-type(5)").hover(function(){
    $(".navbar-light .navbar-nav .nav-link .span5").css({
        width:"100%",
        height:"100%"
    })
    }
,
function(){
    $(".navbar-light .navbar-nav .nav-link .span5").css({
        width:"10px",
        height:"10px"
    })
})
$(".navbar-light .navbar-nav .nav-item:nth-of-type(6)").hover(function(){
    $(".navbar-light .navbar-nav .nav-link .span6").css({
        width:"100%",
        height:"100%"
    })
    }
,
function(){
    $(".navbar-light .navbar-nav .nav-link .span6").css({
        width:"10px",
        height:"10px"
    })
})
// tabs click
$(".Ulist li").click(function(){
    var myID=$(this).attr("id");
    $(this).removeClass("Cactive").siblings().addClass("Cactive");
    $(".tabs .container div").hide();
    $("#" + myID + "-content").fadeIn("1000");
})
// hover on pricing table
$(".pricing .p1").hover(function(){
    $(".pricing .p1  .c0").css("width","100%")
})

,
function(){
    $(".pricing .p1  .c0").css("width","0%") 
}

$(".pricing .p2").hover(function(){
    $(".pricing .p2  .c1").css("width","100%")
})

,
function(){
    $(".pricing .p2  .c1").css("width","0%") 
}

$(".pricing .p3").hover(function(){
    $(".pricing .p3  .c2").css("width","100%")
})

,
function(){
    $(".pricing .p3  .c2").css("width","0%") 
}
});
