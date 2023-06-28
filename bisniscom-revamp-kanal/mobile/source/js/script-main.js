$(document).ready(function () {
    let back = $(".-js-backtop")
    $(window).scroll(function () {
        var a = $(window).scrollTop()

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

// active scroll left
let das = document.querySelector('[data-active=scroll]')
if (!!das) {
    let sadt = das.querySelector('.-active')
    if (sadt) {
        var sw = sadt.clientWidth,
            sv = sadt.getBoundingClientRect()['x']
    } else {
        var sw = 0,
            sv = 0
    }
    das.scrollLeft = sv - sw
}