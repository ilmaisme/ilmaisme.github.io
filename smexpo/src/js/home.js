$(document).ready(function () {

    /* slider banner */
    function createSlick() {
        $('#sbanner').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 1500,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            appendDots: $('#dtbanner'),
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        centerPadding: '520px',
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        centerPadding: '281px',
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
                        centerPadding: '40px',
                    }
                }
            ]
        });
    }
    createSlick();

    /* slider flash sale */
    function createSlickflash() {
        $('#sflash').slick({
            dots: false,
            arrows: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            autoplay: false,
            autoplaySpeed: 2000,
            mobileFirst: true,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 960,
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
    createSlickflash();
});