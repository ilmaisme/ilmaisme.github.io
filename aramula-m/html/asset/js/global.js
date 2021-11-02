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
})

function backToTop() {
    // $(window).scrollTop(0);
    $('html,body').stop().animate({
        scrollTop: 0
    }, 1000);
}