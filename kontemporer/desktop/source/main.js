$(document).ready(function () {
    // box slider
    function createBox() {
        $('#sbox').slick({
            dots: true,
            arrows: true,
            infinite: false,
            speed: 500,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            prevArrow: $('.sbox-prev'),
            nextArrow: $('.sbox-next')
        });
    }
    if ($('#sbox').is(':visible')) {
        createBox();
    }

});