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

/* s: Get HEIGHT Device */
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener("resize", appHeight)
appHeight()
/* e: Get HEIGHT Device */