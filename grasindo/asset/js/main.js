$(document).ready(function () {
    /* sticky menu */
    let hd = $(".header");
    let jno = $(".js-nav-offset");

    $(window).scroll(function () {
        var a = $(window).scrollTop(),
            b = hd.outerHeight();
        a > b + 40 ? (hd.addClass("fixed"),
                jno.addClass("active")) :
            (hd.removeClass("fixed"),
                jno.removeClass("active"))
    })
});