$(document).ready(function () {
    let imgprlx = $(".overlay-detail~.wrapper__parallax .wrapper__parallax-show"),
        hnav = $(".navbar__bottom").outerHeight();

    $(window).scroll(function () {
        var a = $(window).scrollTop(),
            b = hnav;
        a >= b ? (
                imgprlx.css({
                    "transform": "translateY(62px)"
                })) :
            (imgprlx.css({
                "transform": ""
            }))
        //console.log(hnav)
    })
})