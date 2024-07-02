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

    if ($('.-js-hl-big').length > 0) {
        // slider headline
        $('.-js-hl-big').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            swipe: false,
            infinite: true,
            // autoplay: 1,
        });
    }

    if ($('.-js-igrafis').length > 0) {
        // slider infografis
        $('.-js-igrafis').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            swipe: false,
            infinite: true,
            // autoplay: 1,
        });
    }

    if ($('.-js-slider-premium').length > 0) {
        // slider infografis
        $('.-js-slider-premium').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            swipe: false,
            infinite: false,
            // autoplay: 1,
        });
    }

    if ($('.-js-photo-slider').length > 0) {
        // slider photo
        $('.-js-photo-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            swipe: false,
            infinite: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2000,
            asNavFor: '.-js-photo-slider-nav',
        });
        $('.-js-photo-slider-nav').slick({
            dots: false,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            focusOnSelect: true,
            centerMode: false,
            speed: 1000,
            asNavFor: '.-js-photo-slider',
        });
    }
})

//cta trigger active
function triggerActiveButton(el, txt, txtrev, target, parent) {
    elActive = el.classList.contains('-active');
    el.classList.toggle('-active');
    let elemparent = el.parentNode.parentNode;
    if (!!txt) {
        if (elActive == false) {
            el.innerHTML = txt;
        } else {
            el.innerHTML = txtrev;
        }
    }
    if (!!parent) {
        elemparent.classList.toggle('-active');
    }
    if (!!target) {
        let elemtarget = document.getElementsByClassName(target)[0];
        tgHeight = elemtarget.scrollHeight;
        console.log(tgHeight)
        elemtarget.style.maxHeight = elemtarget.style.maxHeight ? null : tgHeight + 'px';
    }
}