$(document).ready(function () {
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
    if ($('#comic').is(':visible')) {
        comicSlider();
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
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
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
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
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
    if ($('.-gal1').is(':visible')) {
        gallerySlider();
    }

    //back to top on click
    $("#back-top").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //nav link
    if (window.location.hash) {
        scrollToSection(window.location.hash);
    }

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

//display mobile menu
function updateMenu() {
    if ($('#menu').css('display') == 'none') {
        console.log("mobile")
        $('.menuMob').removeClass('mobile');
    } else {
        $('.menuMob').addClass('mobile');
    }
}

//nav link
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

//show back to top
$("#back-top").fadeOut("fast");
$(window).scroll(function () {
    if ($(this).scrollTop() > 275) {
        $("#back-top").fadeIn("fast");
    } else {
        $("#back-top").fadeOut("slow");
    }
})