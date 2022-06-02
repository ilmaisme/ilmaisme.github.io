$(document).ready(function () {

    /* slider headline */
    function createSlick() {
        $('#sheadline').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            appendDots: $('#dtheadline'),
            mobileFirst: true,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        centerPadding: '300px',
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        centerPadding: '90px',
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerPadding: '60px',
                    }
                }
            ]
        });
    }
    createSlick();
    /* slider best seller */
    function createSlickBest() {
        $('#sbest').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            mobileFirst: true,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        centerPadding: '110px',
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        centerPadding: '90px',
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerPadding: '60px',
                    }
                }
            ]
        });
    }
    createSlickBest();
    /* slider evershare */
    function createSlickevershare() {
        $('#severshare').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            centerMode: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            swipeToSlide: true,
            autoplay: false,
            autoplaySpeed: 2000,
            mobileFirst: true,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }
    createSlickevershare();
    $('.headline').removeClass('load');
});