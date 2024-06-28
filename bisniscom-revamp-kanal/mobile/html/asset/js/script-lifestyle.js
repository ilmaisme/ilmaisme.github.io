$(document).ready(function () {

    if ($('.-js-hL-slider-for').length > 0) {
        //slider headline
        $('.-js-hL-slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            fade: true,
            swipe: true,
            autoplay: true
        });
    }
})