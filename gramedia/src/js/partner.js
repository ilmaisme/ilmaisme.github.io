$(document).ready(function () {
    //slider headline partner
    var totalslides = $('.-sheadline').attr("data-number") / 2;
    $('.-sheadline').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 700,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: 0,
        fade: true,
        cssEase: 'linear',
        initialSlide: parseInt(totalslides),
    });
});