let hd = $(".header");
let jno = $(".js-nav-offset");
let mTg = $('#menuToggle');

$(document).ready(function () {
    uncheckedMenu()
    //responsive menu
    updateMenu()

    // sticky menu
    $(window).scroll(function () {
        var a = $(window).scrollTop(),
            b = hd.outerHeight();
        a > b + 40 ? (hd.addClass("fixed"),
                jno.addClass("active")) :
            (hd.removeClass("fixed"),
                jno.removeClass("active"))
    })

    //toggle mobile menu
    mTg.on('click', function () {
        isChecked = $(this).is(':checked')

        if (isChecked) {
            $('.menuMob').addClass('active');
            $('.menu').addClass('active');
        } else {
            hideMenuMobile()
        }
    })

    function hideMenuMobile() {
        $('.menuMob').removeClass('active');
        $('.menu').removeClass('active');
    }
});

//update mobile menu
function updateMenu() {
    if ($('#menu').css('display') == 'none') {
        //console.log("desktop")        
        $('.menuMob').removeClass('mobile');
        hd.removeClass('mobile');
        /* move nav position in desktop */
        $('.nav').appendTo('.headerWrap');
    } else {
        //console.log("mobile")
        $('.menuMob').addClass('mobile');
        hd.addClass('mobile');
    }
    $('.headerWrap').removeClass('hidden');
}

function uncheckedMenu() {
    mTg.prop('checked', false);
}