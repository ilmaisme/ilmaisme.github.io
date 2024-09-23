$(document).ready(function () {
    let hd = $(".header");

    // sticky menu
    $(window).scroll(function () {
        var a = $(window).scrollTop(),
            b = hd.outerHeight();
        a > b + 0 ? (hd.addClass("fixed")) :
            (hd.removeClass("fixed"))
    })
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

/* s: Get HEIGHT Device */
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener("resize", appHeight)
appHeight()
/* e: Get HEIGHT Device */