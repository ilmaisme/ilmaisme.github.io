$(document).ready(function () {
    let hd = $(".headerTop"),
        nav = $(".nav"),
        net = $(".network"),
        body = $("body")

    $(window).scroll(function () {
        scrollNav()
    })

    $(window).on('load', function () {
        scrollNav()
    })

    function scrollNav() {
        var a = $(window).scrollTop()

        // network navigation header
        var b = hd.outerHeight(),
            c = nav.outerHeight()
        a > 0 ? (body.addClass("-scroll")) :
            (body.removeClass("-scroll"))
        if (net.length > 0) {
            var d = net.outerHeight()
            a > b + c - d ? (body.addClass("-nav")) :
                (body.removeClass("-nav"))
        } else {
            a > b + c ? (body.addClass("-nav")) :
                (body.removeClass("-nav"))
        }
    }

    if ($('.-js-flashnews').length > 0) {
        // slider flashnews
        $('.-js-flashnews').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            swipe: false,
            infinite: true,
            autoplay: 1,
        });
    }
})