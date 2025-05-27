$(document).ready(function () {
    // headline slider
    function createSlick() {
        $('#sheadline').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            appendDots: $('#dtheadline')
        });
    }
    if ($('#sheadline').is(':visible')) {
        createSlick();
    }

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