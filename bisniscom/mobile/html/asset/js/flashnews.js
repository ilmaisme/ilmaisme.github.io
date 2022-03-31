$(document).scroll(function () {
    var moveScroll = $(this).scrollTop();
    // if (moveScroll > 100) {
    if ($("#sticky1-sticky-wrapper").hasClass("is-sticky")) {
        $(".wrapper__flashnews").addClass("bottom");
    } else {
        $(".wrapper__flashnews").removeClass("bottom");
    }
});