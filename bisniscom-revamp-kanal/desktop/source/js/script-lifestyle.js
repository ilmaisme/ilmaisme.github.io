$(document).ready(function () {

    if ($('.-js-hL-slider-for').length > 0) {
        //slider headline
        $('.-js-hL-slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            swipe: false,
            autoplay: true,
            asNavFor: '.-js-hL-slider-nav'
        });
        $('.-js-hL-slider-nav').slick({
            dots: false,
            arrows: false,
            vertical: true,
            verticalSwiping: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            focusOnSelect: true,
            speed: 1000,
            asNavFor: '.-js-hL-slider-for',
        });
    }

    if ($('.-js-photo-slider').length > 0) {
        // slider photo
        $('.-js-photo-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            swipe: false,
            infinite: false,
            // autoplay: 1,
        });
    }
})