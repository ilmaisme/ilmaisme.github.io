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

    //close popup
    $('.-btnCl').on("click", function () {
        $('.popup').removeClass('active');
    });

    //icon play toggle
    if ($('.videoPlay').is(':visible')) {
        $('.videoPlay').click(function () {
            $(this).find($('.icon-play')).toggle();
        });
    }
});


//hide menu
let navtog = $('#navToggle'),
    usrtog = $('#navUser');
if (navtog.is(':visible')) {
    function checkToggleTrue() {
        navtog.prop('checked', false);
    }
    navtog.click(function (e) {
        e.stopPropagation();
    });
};
if (usrtog.is(':visible')) {
    function checkUserTrue() {
        usrtog.prop('checked', false);
    }
    usrtog.click(function (e) {
        e.stopPropagation();
    });
};
$('body').click(function () {
    if (navtog.is(':visible')) {
        checkToggleTrue()
    }
    if (usrtog.is(':visible')) {
        checkUserTrue()
    }
});

//back to top button
function backToTop() {
    // $(window).scrollTop(0);
    $('html,body').stop().animate({
        scrollTop: 0
    }, 1000);
}