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

    //slider journey
    let sJour = $('.-sJourney')
    sJour.slick({
        focusOnSelect: true,
        pauseOnHover: false,
        dots: false,
        arrows: false,
        infinite: false,
        speed: 700,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: false,
        autoplay: false,
        fade: true,
        cssEase: 'linear',
        // draggable: false,
        asNavFor: ".-syears"
    });

    //button year
    $('.companyJourneyCta').click(function (e) {
        e.preventDefault();
        years = $(this).html()
        currValue = parseInt(years, 10)
        item = sJour.find('.companyJourneySlide')
        active = item.filter(function () {
            return $(this).data('years') === currValue;
        })
        slideActive = active.data('slick-index')
        //console.log(active)

        sJour.slick('slickGoTo', slideActive, true);
        $('.companyJourneyCta').parent().removeClass('active');
        $(this).parent().addClass('active');
    });

    sJour.on("afterChange", function () {
        var currentIndex = $('.-sJourney .slick-current').attr('data-years');

        yearsActive = $('.companyJourneyList').find('button').filter(function () {
            return $(this).html() === currentIndex;
        })
        //console.log(yearsActive)
        $('.companyJourneyCta').parent().removeClass('active');
        yearsActive.parent().addClass('active');
    });

    //slider year
    $('.-syears').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 2000,
        mobileFirst: true,
        // variableWidth: false,
        // centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        asNavFor: ".-sJourney",
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 8,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    });

});