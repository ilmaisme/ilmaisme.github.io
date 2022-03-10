$(document).ready(function () {
    // headline slider
    function createSlick() {
        $('#sheadline').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 4000,
            pauseOnHover: true,
            appendArrows: $('#Arheadline')
        });
    }
    if ($('#sheadline').is(':visible')) {
        createSlick();
    }

    (function () {
        var section = document.querySelectorAll(".section");
        var sections = {};
        var i = 0;

        Array.prototype.forEach.call(section, function (e) {
            sections[e.id] = e.offsetTop - 180;
        });

        window.onscroll = function () {
            var scrollPosition = document.documentElement.scrollTop ||
                document.body.scrollTop;

            for (i in sections) {
                if (sections[i] <= scrollPosition) {
                    document.querySelector('.active').setAttribute('class', 'navItem ');
                    document.querySelector('a[id*=' + i +
                        ']').setAttribute('class', 'navItem active');
                }
            }
        };

        // Your code
        $("#btn-home").on('click', function () {
            $('html, body').animate({
                scrollTop: $("#home").offset().top
            }, 1000);
        });

        $("#btn-news").on('click', function () {
            $('html, body').animate({
                scrollTop: $("#news").offset().top - 125
            }, 1000);
        });

        $("#btn-events").on('click', function () {
            $('html, body').animate({
                scrollTop: $("#events").offset().top - 125
            }, 1000);
        });
    })();

    /* sticky menu */
    let hd = $("header");

    $(window).scroll(function () {
        var a = $(window).scrollTop(),
            b = hd.outerHeight();
        a > b + 40 ? (hd.addClass("header--fixed")) :
            (hd.removeClass("header--fixed"))
    })
});