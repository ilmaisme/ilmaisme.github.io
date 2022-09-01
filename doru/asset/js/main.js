$(document).ready(function () {
    //display content
    $('#enter').on('click', function () {
        scrollTop()
        displayContent()
        if ($('.comic').is(':visible')) {
            comicSlider();
        }
        if ($('.-gal1').is(':visible')) {
            gallerySlider();
        }
    })

    //nav link
    $('.navLink').click(function (e) {
        e.preventDefault();

        if ($('#contentgal').css('display') == 'none') {} else {
            hideContentGallery()
        }

        scrollToSection(this.hash);
        uncheckedMenu()
        hideMenuMobile()

        /*if (this.pathname === window.location.pathname) {
            scrollToSection(this.hash);
        } else {
            window.location.replace(this.href);
        }*/
    });

    /*
    if (window.location.href.includes('#')) {
        displayContent()
        if ($('.comic').is(':visible')) {
            comicSlider();
        }
        if ($('.-gal1').is(':visible')) {
            gallerySlider();
        }

        if (window.location.hash) {
            scrollToSection(window.location.hash);
        }
    }*/

    //toggle mobile menu
    $('#menuToggle').on('click', function () {
        isChecked = $(this).is(':checked')

        if (isChecked) {
            $('.menuMob').addClass('active');
            $('.menu').addClass('active');
            $('body').addClass('stop');
        } else {
            hideMenuMobile()
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

//display content
function displayContent() {
    $('#nav').removeClass('display-none')
    $('#welcome').addClass('display-none')
    $('#content').addClass('active')
    $('#footer').addClass('active')
}

//display hide gallery
function displayContentGallery() {
    scrollTop()
    $('#content').removeClass('active')
    $('#contentgal').addClass('active')
}

function hideContentGallery() {
    scrollTop()
    $('#content').addClass('active')
    $('#contentgal').removeClass('active')
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
    $('body').removeClass('stop');
}
uncheckedMenu()

function uncheckedMenu() {
    $('#menuToggle').prop('checked', false);
}

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