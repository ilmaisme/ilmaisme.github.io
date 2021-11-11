$(document).ready(function () {
    //close sticky ads
    $('.-closeads').click(function (e) {
        e.preventDefault();
        $(this).parent().remove();
    });

    //scroll menu nav
    let nav = $('.navLink.active');
    if (nav.length > 0) {
        let msp = nav.position().left - nav.width();
        $('.navList').animate({
            scrollLeft: msp
        });
    }

    //close popup
    $('.-btnCl').on("click", function () {
        $('.popup').removeClass('active');
    });


    //icon play trigger
    if ($('.videoPlay').is(':visible')) {
        $('.videoPlay .icon-play').click(function () {
            if ($('.videoPlay video').paused == false) {
                $('.videoPlay video').get(0).pause();
            } else {
                $('.videoPlay video').get(0).play();
            }
        });
        $(".videoPlay video").on("play", function () {
            $('.icon-play').hide();
        });
        $(".videoPlay video").on("pause", function () {
            $('.icon-play').show();
        });
    }

})

function backToTop() {
    // $(window).scrollTop(0);
    $('html,body').stop().animate({
        scrollTop: 0
    }, 1000);
}