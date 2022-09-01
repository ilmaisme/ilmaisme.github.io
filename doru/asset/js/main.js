$(document).ready(function () {
    //display content
    $('#enter').on('click', function () {
        scrollTop()
        displayContent()
        comicSlider();
        gallerySlider();
    })

    //nav link
    if (window.location.href.includes('#')) {
        displayContent()
        comicSlider();
        gallerySlider();

        //nav link
        if (window.location.hash) {
            scrollToSection(window.location.hash);
        }
    }

    //toggle mobile menu
    $('#menuToggle').on('click', function () {
        isChecked = $(this).is(':checked')

        if (isChecked) {
            $('.menuMob').addClass('active');
            $('.menu').addClass('active');
            $('body').addClass('stop');
        } else {
            $('.menuMob').removeClass('active');
            $('.menu').removeClass('active');
            $('body').removeClass('stop');
        }
    })

    updateMenu();
    $(window).resize(function () {
        updateMenu();
    });

    function comicSlider() {
        //comic slider
        $('#comic').slick({
            dots: true,
            infinite: false,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    }

    function gallerySlider() {
        //gallery slider
        $('.-gal1').slick({
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 3,
            responsive: [{
                    breakpoint: 1230,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $('.-gal2').slick({
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 3,
            responsive: [{
                    breakpoint: 1230,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    //back to top on click
    $("#back-top").on("click", function () {
        scrollTop()
    });

    //show content faq
    /*var accItem = document.getElementsByClassName('faqItem');
    var accHD = document.getElementsByClassName('-js-show');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }

    function toggleItem() {
        var itemClass = this.parentNode.className;

        if (itemClass == 'faqItem close') {
            for (i = 0; i < accItem.length; i++) {
                accItem[i].className = 'faqItem close';
            }
            this.parentNode.className = 'faqItem open';
        } else {
            this.parentNode.className = 'faqItem close';
        }
    }*/
});

//hide content
function displayContent() {
    $('#welcome').addClass('display-none')
    $('#content').addClass('active')
}
//display mobile menu
function updateMenu() {
    if ($('#menu').css('display') == 'none') {
        //console.log("mobile")
        $('.menuMob').removeClass('mobile');
    } else {
        $('.menuMob').addClass('mobile');
    }
}

$('.navLink').click(function (e) {
    e.preventDefault();

    if (this.pathname === window.location.pathname) {
        scrollToSection(this.hash);
    } else {
        window.location.replace(this.href);
    }
});

function scrollToSection(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top - 40
    }, 1000);
}

//scroll top
function scrollTop() {
    $("html, body").animate({
        scrollTop: 0
    }, 500);
    return false;
}

//show back to top
$("#back-top").fadeOut("fast");
$(window).scroll(function () {
    if ($(this).scrollTop() > 275) {
        $("#back-top").fadeIn("fast");
    } else {
        $("#back-top").fadeOut("slow");
    }
})