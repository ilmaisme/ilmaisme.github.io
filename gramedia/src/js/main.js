let hd = $(".header"),
    mTg = $('#menuToggle');

$(document).ready(function () {
    // sticky menu
    $(window).scroll(function () {
        var a = $(window).scrollTop(),
            b = hd.outerHeight();
        a > b + 0 ? (hd.addClass("fixed")) :
            (hd.removeClass("fixed"))
    })

    //toggle mobile menu
    mTg.on('click', function () {
        isChecked = $(this).is(':checked')

        if (isChecked) {
            $('.menuWrap').addClass('active');
            $('.menu').addClass('active');
            $('html, body').css({
                overflow: 'hidden'
            });
        } else {
            hideMenuMobile()
        }
    })

    $(document).on("click", function () {
        //hide video
        var popupvideo = document.querySelector('.-pVideo');
        if (!!popupvideo) {
            popupvideo.classList.remove('active')
            toggleVideo('#video', 'hide')
        }
    });
});

//update mobile menu
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
    updateMenu()
    if (viewport().width >= 1280) {
        uncheckedMenu()
        hideMenuMobile()
    }
});

function updateMenu() {
    if (viewport().width >= 1280) {
        // console.log("desktop")
        $('.menuWrap').removeClass('mobile');
        hd.removeClass('mobile');
        /* move nav position in desktop */
        $('.nav').appendTo('#navDesk');
        $('.headerBil').appendTo('.headerCta');
    } else {
        // console.log("mobile")
        $('.menuWrap').addClass('mobile');
        hd.addClass('mobile');
        /* move nav position in mobile */
        $('.nav').appendTo('#navMob .menuWrap');
        $('.headerBil').appendTo('#navMob .menuWrap');
    }
}

function uncheckedMenu() {
    mTg.prop('checked', false);
}

function hideMenuMobile() {
    $('.menuWrap').removeClass('active');
    $('.menu').removeClass('active');
    $('html, body').css({
        overflow: 'auto'
    });
}

//trigger active button
function triggerActive(item) {
    let target = document.querySelector(item),
        targetActive = target.classList.contains('active');
    if (!!target) {
        if (targetActive == false) {
            target.classList.add('active');
        } else {
            target.classList.remove('active');
        }
    }
}

//pause video
function toggleVideo(video, state) {
    var div = document.querySelector(video);
    if (!!div) {
        var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
        func = state == 'hide' ? 'pauseVideo' : 'playVideo';
        iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
    }
}

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