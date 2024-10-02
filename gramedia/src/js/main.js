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
updateMenu()
window.addEventListener('unload', function (event) {
    document.getElementById('menuToggle').reset();
}, false);

$(window).on('resize', function () {
    updateMenu()
});

function updateMenu() {
    if (viewport().width >= 1140) {
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