$(document).ready(function () {
    /* web story slider */
    function createSlick() {
        $('#slide_story').slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            autoplaySpeed: 3000,
            appendDots: $('#dots_story')
        });
    }

    createSlick()
    $('.-js-slick-story').click(function () {
        // autoplay slide when click
        $('#slide_story').slick('slickPlay');
    })
})