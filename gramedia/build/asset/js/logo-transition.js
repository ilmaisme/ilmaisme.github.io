$(document).ready(function () {
    //headline logo
    $('.-sheadline').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 700,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear'
    });
});