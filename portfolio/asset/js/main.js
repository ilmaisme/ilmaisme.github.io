$(document).ready(function () {
    //preloader
    $(window).on("load", function (e) {
        $("#preloader").fadeOut(500, function () {
            $(this).remove();
        })
    })

    $('.bioToggle').click(function () {
        var $elem = $(this);
        $elem.siblings('.bioExpand').toggleClass("active");
    })

    //menu
    $("#btn-about").on('click', function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top - 50
        }, 1000);
        $('#aboutToggle').prop('checked', true);
        $('#aboutToggle').siblings('.bioExpand').addClass("active");
    });

    $("#btn-exp").on('click', function () {
        $('html, body').animate({
            scrollTop: $("#exp").offset().top - 50
        }, 1000);
        $('#expToggle').prop('checked', true);
        $('#expToggle').siblings('.bioExpand').addClass("active");
    });

    $("#btn-skill").on('click', function () {
        $('html, body').animate({
            scrollTop: $("#skill").offset().top - 50
        }, 1000);
        $('#skillToggle').prop('checked', true);
        $('#skillToggle').siblings('.bioExpand').addClass("active");
    });

    $("#btn-port").on('click', function () {
        $('html, body').animate({
            scrollTop: $("#gallery").offset().top - 50
        }, 1000);
        $('#galToggle').prop('checked', true);
        $('#galToggle').siblings('.bioExpand').addClass("active");
    });

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // mobile
    } else {}
});