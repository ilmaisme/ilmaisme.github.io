$(document).ready(function () {
    let imgprlx = $(".wrapper__parallax-show"),
        hnav = $(".navbar__bottom").outerHeight();

    $(window).scroll(function () {
        var a = $(window).scrollTop(),
            b = hnav;
        a >= b ? (
                imgprlx.css({
                    "transform": "translateY(61px)"
                })) :
            (imgprlx.css({
                "transform": ""
            }))
        //console.log(hnav)
    })
})