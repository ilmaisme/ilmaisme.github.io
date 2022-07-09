$(document).ready(function () {
    //icon play toggle
    if ($('.videoPlay').is(':visible')) {
        $('.videoPlay').on('click', function () {
            $(this).find($('.icon-play')).toggle();
        });
    }

    //select product's number
    /*
    var n = 1;
    var n_place = $('#readNumb');
    disableSubstract(n)
    $('#add').on('click', function () {
        var n = parseInt(n_place.text(), 10);
        disableSubstract(n + 1)
        n_place.empty().append(n + 1);
    });
    $('#substract').on('click', function () {
        var n = parseInt(n_place.text(), 10);
        disableSubstract(n - 1)
        n_place.empty().append(Math.max(1, n - 1));
    });

    function disableSubstract(n) {
        if (n <= 1) {
            $('#substract').addClass('disable');
        } else {
            $('#substract').removeClass('disable');
        }
    }*/

    //click button Buy Now
    $('#buy').on('click', function () {
        $(this).parent().find($('.readBuy__list')).toggle();
    });
    $('#shareprod').on('click', function () {
        $(this).parent().find($('.readShare__sosmed')).toggle();
    });

    //toggle popup report comment
    $(".-bReport").on("click", function () {
        $('#popReport').addClass('slide');
    });

    //close popup
    $('.-btnCl').on("click", function () {
        $('.popup').removeClass('slide');
    });

    //toggle form reply comment
    let bRep = $('.-bReply'),
        fRep = $('.-fReply');
    bRep.click(function (e) {
        e.preventDefault();
        var par = $(this).parent().parent().parent();
        par.siblings(fRep).toggleClass('active');
        $(this).toggleClass('active');
    })

    // slider promo
    function createSlickPromo() {
        $('#spromo').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            mobileFirst: true,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        centerPadding: '320px',
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        centerPadding: '90px',
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerPadding: '60px',
                    }
                }
            ]
        });
    }

    //check all color item on pagelist
    if ($('#allcolor').is(':visible')) {
        $("#allcolor").click(function () {
            $('input.formColor:checkbox').not(this).prop('checked', this.checked);
        });
    }
    //check all size item on pagelist
    if ($('#allsize').is(':visible')) {
        $("#allsize").click(function () {
            $('input.formSize:checkbox').not(this).prop('checked', this.checked);
        });
    }
    //check all feature item on pagelist
    if ($('#allfeat').is(':visible')) {
        $("#allfeat").click(function () {
            $('input.formFeat:checkbox').not(this).prop('checked', this.checked);
        });
    }
    //check all material item on pagelist
    if ($('#allmat').is(':visible')) {
        $("#allmat").click(function () {
            $('input.formMat:checkbox').not(this).prop('checked', this.checked);
        });
    }

    // device detection
    let isMobile = window.matchMedia("only screen and (max-width: 767px)").matches;

    if (isMobile) {
        //mobile
        /* left price position in mobile */
        var numleft = 258;
    } else {
        //desktop
        var numleft = 168;
    }

    //price range on pagelist
    var rangeSlider = document.getElementById("prices"),
        rangeBullet = document.getElementById("prices-bullet");

    if ($('#prices').is(':visible')) {
        rangeSlider.addEventListener("input", showSliderValue, false);
    }

    function showSliderValue() {
        rangeBullet.innerHTML = rangeSlider.value;
        var bulletPosition = (rangeSlider.value / rangeSlider.max);
        rangeBullet.style.left = (bulletPosition * numleft) + "px";
    }

    //filter button on mobile
    $("#filterbtn").click(function () {
        $('body').css('overflow', 'hidden');
        $('#listmob').addClass('active');
    });
    $(".-closeFilter").click(function () {
        $("body").removeAttr("style");
        $('#listmob').removeClass('active');
    });

    /* onload document */
    if ($('#spromo').is(':visible')) {
        createSlickPromo();
        $('#spromo').removeClass('load');
    }
})