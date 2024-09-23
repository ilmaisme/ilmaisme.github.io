$(document).ready(function () {
    //slider awards
    $('.-sawards').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 700,
        mobileFirst: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide: true,
        centerPadding: '50px',
        responsive: [{
            breakpoint: 1441,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 700,
            centerPadding: '80px',
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
    });
});