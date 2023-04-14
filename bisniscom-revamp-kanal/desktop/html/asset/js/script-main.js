$(document).ready(function () {
    let hd = $(".headerTop"),
        nav = $(".nav"),
        sky = $(".skyscrapper"),
        back = $(".-js-backtop")
    $(window).scroll(function () {
        var a = $(window).scrollTop()
        // sticky billboard skyscrapper
        if (sky.length > 0) {
            var b = hd.outerHeight(),
                c = nav.outerHeight()
            a > b + c ? (sky.addClass("-top"),
                    $(".headerLogo--kanal").addClass("hidden"),
                    $(".headerLogo--bisniscom").addClass("visible")) :
                (sky.removeClass("-top"),
                    $(".headerLogo--kanal").removeClass("hidden"),
                    $(".headerLogo--bisniscom").removeClass("visible"))
        }

        // visible back to top button
        if (a > 175) {
            back.fadeIn("slow");
        } else {
            back.fadeOut("slow");
        }
    })

    // back to top button
    back.on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });
})

//open menu
function toggleMenu(e) {
    let menu = $('.menuPanel');
    jQuery(e).toggleClass('-active');
    menu.toggleClass('-open');
}