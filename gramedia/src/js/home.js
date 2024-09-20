$(document).ready(function () {

    //slider new release
    $('.-supdates').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1700,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
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

    //slider brands
    $('.-sbrands').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 700,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear'
    });

    //slider testimonial
    $('.-stesti').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 2000,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1441,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
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

    //slider widget event
    $('.-sEventWid').on('afterChange init', function (event, slick, direction) {
            // console.log('afterChange/init', event, slick, slick.$slides);
            // remove all prev/next
            slick.$slides.removeClass('prevSlide').removeClass('nextSlide');

            // find current slide
            for (var i = 0; i < slick.$slides.length; i++) {
                var $slide = $(slick.$slides[i]);
                if ($slide.hasClass('slick-current')) {
                    // update DOM siblings
                    $slide.prev().addClass('prevSlide');
                    $slide.next().addClass('nextSlide');
                    break;
                }
            }
        })
        .on('beforeChange', function (event, slick) {
            // remove all prev/next
            slick.$slides.removeClass('prevSlide').removeClass('nextSlide');
        })
    $('.-sEventWid').slick({
        // centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        swipeToSlide: true,
        // autoplay: true
    });
});