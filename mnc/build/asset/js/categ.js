$(document).ready(function () {
    //initialize swiper
    // var swiper = new Swiper(".productSwiper", {
    //     effect: "cards",
    //     grabCursor: true,
    //     loop: true,
    //     speed: 300,
    //     centeredSlides: true,
    //     cardsEffect: {
    //         perSlideOffset: 15,
    //         rotate: 0,
    //         slideShadows: false
    //     },
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     }
    // });
    var swiper = new Swiper(".productSwiper", {
        effect: "coverflow",
        grabCursor: false,
        loop: true,
        speed: 300,
        centeredSlides: true,
        slidesPerView: 1,
        coverflowEffect: {
            rotate: 1, // Slide rotate in degrees
            stretch: 100, // Stretch space between slides (in px)
            depth: 150, // Depth offset in px (slides translate in Z axis)
            modifier: 1.2, // Effect multipler
            scale: .95,
            slideShadows: false, // Enables slides shadows
        },
        parallax: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                coverflowEffect: {
                    rotate: 1,
                    modifier: 1.5,
                }
            }
        }
    });

    //price range on pagelist
    var rangeSlider = document.getElementById("prices"),
        rangeBullet = document.getElementById("prices-bullet"),
        value = (rangeSlider.value - rangeSlider.min) / (rangeSlider.max - rangeSlider.min) * 100;

    if ($('#prices').is(':visible')) {
        rangeSlider.style.background = 'linear-gradient(to right, #232221 0%, #232221 ' + value + '%, #D9D9D9 ' + value + '%, #D9D9D9 100%)'
        rangeSlider.addEventListener("input", showSliderValue, false);
    }

    function showSliderValue() {
        rangeBullet.innerHTML = rangeSlider.value;
        var bulletPosition = (rangeSlider.value / rangeSlider.max);
        rangeBullet.style.left = (bulletPosition * numleft) + "px";
        var value = (rangeSlider.value - rangeSlider.min) / (rangeSlider.max - rangeSlider.min) * 100;
        rangeSlider.style.background = 'linear-gradient(to right, #232221 0%, #232221 ' + value + '%, #D9D9D9 ' + value + '%, #D9D9D9 100%)'
    }

    if (viewport().width >= 1180) {
        // console.log("desktop")        
        var numleft = 220;
        $('#listmob').removeClass('listMobile');
    } else {
        // console.log("mobile")
        var numleft = 258;
        $('#listmob').addClass('listMobile');
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
})