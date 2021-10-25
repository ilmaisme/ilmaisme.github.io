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
    if ($('#sheadline').is(':visible')) {
        createSlick();
    }

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
    if ($('#sstories').is(':visible')) {
        createStories();
    }

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
    if ($('#spromo').is(':visible')) {
        createPromo();
    }

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
    if ($('#sphoto').is(':visible')) {
        createPhoto();
    }

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
    if ($('#svideo').is(':visible')) {
        createVideo();
    }

    //icon event play
    if ($('.eventVid').is(':visible')) {
        $('.eventVid').click(function () {
            $(this).find($('.icon-play')).toggle();
        });
    }

    //sticky right ads
    if ($('.-right-sticky').is(':visible')) {
        $(".-right-sticky").stick_in_parent({
            parent: ".-parent-sticky",
            inner_scrolling: true,
            spacer: false,
        }).on('sticky_kit:bottom', function (e) {
            //console.log('stuck');
            $(this).css('position', 'absolute');
        }).on('sticky_kit:unbottom', function (e) {
            // console.log('unstuck');
        });
    }
});