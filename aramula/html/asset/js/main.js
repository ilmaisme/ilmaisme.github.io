$(document).ready(function () {
    /* banner promo */
    function createSlick() {
        $('#sheadline').slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            appendDots: $('#dtheadline')
        });
    }
    createSlick();
});