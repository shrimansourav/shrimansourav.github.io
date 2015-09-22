$(document).ready(function () {
    var winHeight = $(window).height();
    $(".container1").css("height", winHeight);

    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover({'trigger':'hover'});

    //Navigation By Scroll From Menu 
    $(".navbar-nav li a").on("click", function (e) {
        e.preventDefault();
        $(".navbar-nav li a").removeClass("active");
        $(this).addClass("active");
        $("body, html").animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });

    //Navigation By Scroll From Navigation
    $(".navigation li a").on("click", function (e) {
        e.preventDefault();
        $(".navigation li a").removeClass("active");
        $(".tooltip").hide();
        $(this).addClass("active");
        $("body, html").animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });
});
