$(document).ready(function () {

    // stories slider
    function createStories() {
        $('#sstories').slick({
            dots: false,
            arrows: true,
            infinite: false,
            speed: 500,
            cssEase: 'linear',
            // centerMode: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: false,
            variableWidth: true,
            variableHeight: true
        });
    }
    createStories();

    // promo slider
    function createPromo() {
        $('#spromo').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            appendDots: $('#dtpromo')
        });
    }
    createPromo();

    // video slider
    function createVideo() {
        $('#svideo').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            appendDots: $('#dtvideo')
        });
    }
    createVideo();

    //close sticky ads
    $('.-closeads').click(function (e) {
        e.preventDefault();
        $(this).parent().remove();
    });

    //icon event play
    if (!!$('.eventVid')) {
        $('.eventVid').click(function () {
            $(this).find($('.icon-play')).toggle();
        });
    }

});

function backToTop() {
    // $(window).scrollTop(0);
    $('html,body').stop().animate({
        scrollTop: 0
    }, 1000);
}