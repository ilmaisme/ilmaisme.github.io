$(document).ready(function () {
    //display content
    $('#enter').on('click', function () {
        scrollTop()
        displayContent()
        updateMenu();
        $('body').removeClass('pgwelcome');
        if ($('.comic').is(':visible')) {
            comicSlider();
        }
        if ($('.-gal1').is(':visible')) {
            gallerySlider();
        }
    })

    if (window.location.href.includes('#')) {
        displayContent()
        $('body').removeClass('pgwelcome');
        if ($('.comic').is(':visible')) {
            comicSlider();
        }
        if ($('.-gal1').is(':visible')) {
            gallerySlider();
        }

        // if (window.location.hash) {
        //     setTimeout(function () {
        //         scrollToSection(window.location.hash);
        //     }, 700);
        // }

        if (window.location.hash) {
            if(window.chrome) {
                setTimeout(function () {
                    scrollToSection(window.location.hash);
                }, 700);
            } else {
                window.location.href = window.location.hash;
                setTimeout(function () {
                    scrollToSection(window.location.hash);
                }, 700);
            }
        }
    }

    if ($('.pgwelcome').is(':visible')) {
        $('.menuMob').removeClass('mobile');
    } else {
        updateMenu()
    }

    //toggle mobile menu
    $('#menuToggle').on('click', function () {
        isChecked = $(this).is(':checked')

        if (isChecked) {
            $('.menuMob').addClass('active');
            $('.menu').addClass('active');
        } else {
            hideMenuMobile()
        }
    })

    function comicSlider() {
        //comic slider
        $('#comic').slick({
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            pauseOnHover: false,
            focusOnSelect: false,
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
    var accItem = document.getElementsByClassName('faqItem');
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
    }
});

//display content
function displayContent() {
    $('#menu').removeClass('hide')
    $('#nav').removeClass('display-none')
    $('#welcome').addClass('display-none')
    $('#content').addClass('active')
    $('#footer').addClass('active')
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

function hideMenuMobile() {
    $('.menuMob').removeClass('active');
    $('.menu').removeClass('active');
}
uncheckedMenu()

function uncheckedMenu() {
    $('#menuToggle').prop('checked', false);
}

function scrollToSection(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top - 100
    }, 1000);
}

//scroll top
function scrollTop() {
    $("html, body").animate({
        scrollTop: 0
    }, 500);
    return false;
}

$("#back-top").fadeOut("fast");
$(window).scroll(function () {
    //show back to top
    if ($(this).scrollTop() > 275) {
        $("#back-top").fadeIn("fast");
    } else {
        $("#back-top").fadeOut("slow");
    }
    //fixed header
    let hd = $("header");
    var a = $(window).scrollTop(),
        b = hd.outerHeight();
    a > b + 40 ? (hd.addClass("fixed")) :
        (hd.removeClass("fixed"))
})