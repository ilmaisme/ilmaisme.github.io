$(document).ready(function () {
    let hd = $(".header");

    // sticky menu
    $(window).scroll(function () {
        var a = $(window).scrollTop(),
            b = hd.outerHeight();
        a > b + 0 ? (hd.addClass("fixed")) :
            (hd.removeClass("fixed"))
    })

    if (viewport().width >= 1180) {
        // console.log("desktop")
    } else {
        // console.log("mobile")
        hd.remove();
    }

    $(document).on("click", function () {
        //hide video
        var popupvideo = document.querySelector('.-pVideo');
        if (!!popupvideo) {
            popupvideo.classList.remove('active')
            toggleVideo('#video', 'hide')
        }
    });
});

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