$(document).ready(function () {
    //initialize swiper
    var swiper = new Swiper(".productSwiper", {
        effect: "cards",
        grabCursor: true,
        //loop: true,
        initialSlide: 0,
        cardsEffect: {
            perSlideOffset: 15,
            rotate: false,
            slideShadows: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
    
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