$(document).ready(function () {
    //close sticky ads
    $('.-closeads').click(function (e) {
        e.preventDefault();
        $(this).parent().remove();
    });

    //header fixed
    let hc = $(".headerContent"),
        hfl = $(".headerFixed__logo");

    $(window).scroll(function () {
        var a = $(window).scrollTop(),
            b = hc.outerHeight();
        a > b + 69 ? (hfl.addClass("active")) :
            (hfl.removeClass("active"))
    })
});

//back to top button
function backToTop() {
    // $(window).scrollTop(0);
    $('html,body').stop().animate({
        scrollTop: 0
    }, 1000);
}

//hide menu
let navtog = $('#navToggle')
if (!!navtog) {
    function checkToggleTrue() {
        navtog.prop('checked', false);
    }
    navtog.click(function (e) {
        e.stopPropagation();
    });
};
$('body').click(function () {
    if (!!navtog) {
        checkToggleTrue()
    }
});