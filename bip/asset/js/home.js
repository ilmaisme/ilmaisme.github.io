$(document).ready(function () {
    //slider headline
    $('.-sheadline').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '30px',
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        appendDots: $('.-dtheadline'),
        responsive: [{
                breakpoint: 1220,
                settings: {
                    centerPadding: '273px',
                }
            },
            {
                breakpoint: 700,
                settings: {
                    centerPadding: '80px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '30px',
                }
            }
        ]
    });

    //slider new release
    $('.-srelease').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '60px',
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1220,
                settings: {
                    centerPadding: '80px',
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1020,
                settings: {
                    centerPadding: '80px',
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    centerPadding: '100px',
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '60px',
                    slidesToShow: 1,
                }
            }
        ]
    });

    //slider best seller
    $('.-sbest').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '60px',
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1900,
                settings: {
                    centerPadding: '220px',
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    centerPadding: '220px',
                    slidesToShow: 4,
                }
            },{
                breakpoint: 1220,
                settings: {
                    centerPadding: '120px',
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1020,
                settings: {
                    centerPadding: '120px',
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    centerPadding: '140px',
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '60px',
                    slidesToShow: 1,
                }
            }
        ]
    });

    //slider event
    $('.-sevent').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '30px',
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
                breakpoint: 1220,
                settings: {
                    centerPadding: '380px',
                }
            },
            {
                breakpoint: 700,
                settings: {
                    centerPadding: '140px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '30px',
                }
            }
        ]
    });
});