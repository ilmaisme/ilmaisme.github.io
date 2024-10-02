$(document).ready(function () {
    //slider product
    $('.-sproduct.--right').on('init', function (event, slick) {
        $(this).find('.slick-prev').hide()
    });
    $('.-sproduct.--banner').on('init', function (event, slick) {
        $(this).find('.slick-prev').hide()
    });
    $('.-sproduct').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 700,
        mobileFirst: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        initialSlide: length + 1,
        accessibility: false,
        responsive: [{
                breakpoint: 1140,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 912,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.-sproduct.--right').on('beforeChange', function (event, slick) {
        $(this).find('.slick-prev').show()
    });
    $('.-sproduct.--banner').on('beforeChange', function (event, slick) {
        $(this).find('.slick-prev').show()
    });
});