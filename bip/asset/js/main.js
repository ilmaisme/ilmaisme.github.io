let hd = $(".header");
let jno = $(".js-nav-offset");
let mTg = $('#menuToggle');

uncheckedMenu()
hideMenuMobile()
updateMenu()
if (window.history && window.history.pushState) {
    window.history.pushState('forward', null, '');
    $(window).on('popstate', function () {
        uncheckedMenu()
        hideMenuMobile()
    });
}

$(window).on('resize', function () {
    uncheckedMenu()
    hideMenuMobile()
    updateMenu()
});

$(document).ready(function () {
    // sticky menu
    $(window).scroll(function () {
        var a = $(window).scrollTop(),
            b = hd.outerHeight();
        a > b + 40 ? (hd.addClass("fixed"),
                jno.addClass("active")) :
            (hd.removeClass("fixed"),
                jno.removeClass("active"))
                
        a > $(window).height() ? $(".buttonWhatsapp").show() : $(".buttonWhatsapp").hide()
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

    //back to top
    $(".buttonBacktop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow")
    });
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
        /* move nav position in mobile */
        $('.nav').appendTo('#navMob');
    }
    $('.headerWrap').removeClass('hidden');
}

function uncheckedMenu() {
    mTg.prop('checked', false);
}

function hideMenuMobile() {
    $('.menuMob').removeClass('active');
    $('.menu').removeClass('active');
}

//open category menu
function openCategory(e){
    let drop = $('.drop');
    jQuery(e).toggleClass('active');
    drop.toggleClass('visible');
}