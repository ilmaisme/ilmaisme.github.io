$(document).ready(function () {
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

    if (viewport().width >= 1180) {
        // console.log("desktop")        
        var numleft = 220;
    } else {
        // console.log("mobile")
        var numleft = 258;
    }

    //reset filter on pagelist
    $('.-resetFilter').click(function () {
        //remove active categories
        $('.listLink').removeClass('active')
        //reset rating
        $('input[name="rating"]:radio').prop('checked', false);
        //reset genre
        $('input[name="genre"]:checkbox').prop('checked', false);
        //reset range price
        $('#prices').val(0);
        rangeBullet.style.left = 0 + "px";
        rangeBullet.innerHTML = 0;
    });

    //filter button on mobile
    $("#filterbtn").click(function () {
        $('body').css('overflow', 'hidden');
        $('#listmob').addClass('active');
    });
    $(".-closeFilter").click(function () {
        $("body").removeAttr("style");
        $('#listmob').removeClass('active');
    });

    //slider product
    $('.productSlide').slick({
        dots: false,
        arrows: true,
        infinite: true,
        accessibility: true,
        centerMode: true,
        centerPadding: '28px',
        speed: 500,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1220,
                settings: {
                    centerPadding: '28px',
                }
            },
            {
                breakpoint: 700,
                settings: {
                    centerPadding: '60px',
                }
            }
        ]
    });

    $('.productSlide .slick-arrow').click(function (e) {
        e.preventDefault();
    });
})