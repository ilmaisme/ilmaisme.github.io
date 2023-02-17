$(document).ready(function () {
    //slider headline
    $('.-sheadline').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'ease',
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        appendDots: $('.-dtheadline')
    });

    //slider new release
    $('.-snew').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1220,
                settings: {
                    slidesToShow: 5,
                    arrows: true,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 4,
                    arrows: true,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    arrows: true,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 330,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });

    //slider best seller
    $('.-sbest').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1220,
                settings: {
                    slidesToShow: 5,
                    arrows: true,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 4,
                    arrows: true,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    arrows: true,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 330,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });

    //slider editor's choice
    $('.-seditor').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1220,
                settings: {
                    slidesToShow: 5,
                    arrows: true,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 4,
                    arrows: true,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    arrows: true,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 330,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });
});

//tab books
function openTabBook(evt, cityName) {
    var book = document.querySelector('.productTab');
    var i, tablinkcontent, tabbutton;
    tablinkcontent = book.querySelectorAll(".tabcontent");
    for (i = 0; i < tablinkcontent.length; i++) {
        // tablinkcontent[i].style.display = "none";
        tablinkcontent[i].classList.remove("-active");
    }
    tabbutton = book.querySelectorAll(".tabbutton");
    for (i = 0; i < tabbutton.length; i++) {
        tabbutton[i].className = tabbutton[i].className.replace(" active", "");
    }
    // document.getElementById(cityName).style.display = "block";
    document.getElementById(cityName).classList.add("-active");
    evt.currentTarget.className += " active";
}