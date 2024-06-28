$(document).ready(function () {
    let hd = $(".headerTop"),
        nav = $(".nav"),
        sky = $(".skyscrapper"),
        net = $(".network"),
        back = $(".-js-backtop")
    $(window).scroll(function () {
        var a = $(window).scrollTop()
        // sticky billboard skyscrapper
        if (sky.length > 0) {
            var b = hd.outerHeight(),
                c = nav.outerHeight()
            a > b + c ? (sky.addClass("-top")) :
                (sky.removeClass("-top"))
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

//close billboard
var cBillboard = document.querySelector('.billboardClose');
if (cBillboard != null) {
    cBillboard.addEventListener("click", function () {
        this.parentNode.style.display = "none";
    });
}

//open menu
function toggleMenu(e) {
    let menu = $('.menuPanel');
    jQuery(e).toggleClass('-active');
    menu.toggleClass('-open');
    event.stopPropagation();
}

document.body.addEventListener('click', function (e) {
    this.getElementsByClassName('menuPanel')[0].classList.remove('-open');
    this.getElementsByClassName('menuBar')[0].classList.remove('-active');
});