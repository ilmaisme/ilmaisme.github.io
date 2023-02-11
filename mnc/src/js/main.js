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
    if (viewport().width >= 1180) {
        uncheckedMenu()
        hideMenuMobile()
        updateMenu()
    }
});

$(document).ready(function () {
    // sticky menu
    $(window).scroll(function () {
        var a = $(window).scrollTop(),
            b = hd.outerHeight();
        a > b + 0 ? (hd.addClass("fixed"),
                jno.addClass("active")) :
            (hd.removeClass("fixed"),
                jno.removeClass("active"))

        a > $(window).height() ? $(".buttonWhatsapp").show() : $(".buttonWhatsapp").hide()
    })

    //toggle mobile menu
    mTg.on('click', function () {
        resetMobileMenu()
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

//calc width window
function viewport() {
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
    };
}

//update mobile menu
function updateMenu() {
    if (viewport().width >= 1180) {
        console.log("desktop")        
        $('.menuMob').removeClass('mobile');
        hd.removeClass('mobile');
        /* move nav position in desktop */
        $('.nav').appendTo('#navDesk');
    } else {
        console.log("mobile")
        $('.menuMob').addClass('mobile');
        hd.addClass('mobile');
        /* move nav position in mobile */
        // $('.nav').appendTo('#navMob');
    }
}

function uncheckedMenu() {
    mTg.prop('checked', false);
}

function hideMenuMobile() {
    $('.menuMob').removeClass('active');
    $('.menu').removeClass('active');
}

//open search box
function openSearch(){
    $('.searchboxInput').animate({width: 'toggle'}, 700);
    $('#search').focus();
}

//open user menu
function openUserMenu(e) {
    let drop = $('.headerDrop');
    jQuery(e).toggleClass('active');
    drop.toggleClass('visible');
}

//like button
function likeButton(e){
    jQuery(e).toggleClass('active');
}