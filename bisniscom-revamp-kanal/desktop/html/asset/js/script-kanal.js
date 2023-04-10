$(document).ready(function () {
    if ($('.-js-hL-slider-for').length > 0) {
        // slider headline
        $('.-js-hL-slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            swipe: false,
            // autoplay: 1,
            asNavFor: '.-js-hL-slider-nav'
        });
        $('.-js-hL-slider-nav').slick({
            dots: false,
            vertical: true,
            verticalSwiping: false,
            slidesToShow: 4,
            infinite: false,
            focusOnSelect: true,
            asNavFor: '.-js-hL-slider-for',
        });
    }
})