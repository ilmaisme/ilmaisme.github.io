$(document).ready(function () {
    // box slider
    function createBox() {
        $('#sbox').slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 1000,
            autoplaySpeed: 4000,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            prevArrow: $('.sbox-prev'),
            nextArrow: $('.sbox-next')
        });
    }
    if ($('#sbox').is(':visible')) {
        createBox();
    }

});