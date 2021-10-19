$(document).ready(function () {
    // headline slider
    function createSlick() {
        $('#sheadline').slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            appendDots: $('#dtheadline')
        });
    }
    createSlick();

    // stories slider
    function createStories() {
        $('#sstories').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            cssEase: 'linear',
            // centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false
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
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: false,
            appendDots: $('#dtpromo')
        });
    }
    createPromo();

    // photo slider
    function createPhoto() {
        $('#sphoto').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            cssEase: 'linear',
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            appendDots: $('#dtphoto')
        });
    }
    createPhoto();

    // video slider
    function createVideo() {
        $('#svideo').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            cssEase: 'linear',
            slidesToShow: 3,
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

});

function backToTop() {
    // $(window).scrollTop(0);
    $('html,body').stop().animate({ scrollTop: 0 }, 1000);
}