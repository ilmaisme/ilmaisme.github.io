//MENU
window.addEventListener('wheel', function (event) {
    if (event.deltaY < 0 && ($('#fullpage').hasClass("fp-destroyed"))) {
        console.log('scrolling up');
        UPRotate()
    } else if (event.deltaY > 0 && ($('#fullpage').hasClass("fp-destroyed"))) {
        console.log('scrolling down');
        DOWNRotate()
    }
});

let start = null;

window.addEventListener('touchstart', function (e) {
    start = e.changedTouches[0];
});

window.addEventListener('touchend', function (e) {
    let end = e.changedTouches[0];

    if (end.screenY - start.screenY > 0 && ($('#fullpage').hasClass("fp-destroyed"))) {
        console.log('scrolling up');
        UPRotate()
    } else if (end.screenY - start.screenY < 0 && ($('#fullpage').hasClass("fp-destroyed"))) {
        console.log('scrolling down');
        DOWNRotate()
    }
});

$(document).keyup(function (e) {
    if (e.keyCode == 38) {
        if (($('#fullpage').hasClass("fp-destroyed"))) {
            console.log('scrolling up');
            UPRotate()
        }
    } else if (e.keyCode == 40) {
        if (($('#fullpage').hasClass("fp-destroyed"))) {
            console.log('scrolling down');
            DOWNRotate()
        }
    }
})

$("#UP").on('click', function () {
    UPRotate()
})
$("#DOWN").on('click', function () {
    DOWNRotate()
})

function initRotate() {
    $('.menuWheel').removeClass(function (index, css) {
        return (css.match(/(^|\s)rotate\S+/g) || []).join(' ');
    });
}

function UPRotate() {
    if ($('.menuWheel').hasClass("rotate1")) {
        initRotate()
        $('.menuWheel').addClass("slow");
        $('.menuWheel').addClass("rotate6");
        console.log('MENU 1, to menu 6')
    } else if ($('.menuWheel').hasClass("rotate6")) {
        initRotate()
        $('.menuWheel').removeClass("slow");
        $('.menuWheel').addClass("rotate5");
    } else if ($('.menuWheel').hasClass("rotate5")) {
        initRotate()
        $('.menuWheel').addClass("rotate4");
    } else if ($('.menuWheel').hasClass("rotate4")) {
        initRotate()
        $('.menuWheel').addClass("rotate3");
    } else if ($('.menuWheel').hasClass("rotate3")) {
        initRotate()
        $('.menuWheel').addClass("rotate2");
    } else if ($('.menuWheel').hasClass("rotate2")) {
        initRotate()
        $('.menuWheel').addClass("rotate1");
    }
}

function DOWNRotate() {
    if ($('.menuWheel').hasClass("rotate1")) {
        initRotate()
        $('.menuWheel').removeClass("slow");
        $('.menuWheel').addClass("rotate2");
        console.log('MENU 1, to menu 2')
    } else if ($('.menuWheel').hasClass("rotate2")) {
        initRotate()
        $('.menuWheel').addClass("rotate3");
    } else if ($('.menuWheel').hasClass("rotate3")) {
        initRotate()
        $('.menuWheel').addClass("rotate4");
    } else if ($('.menuWheel').hasClass("rotate4")) {
        initRotate()
        $('.menuWheel').addClass("rotate5");
    } else if ($('.menuWheel').hasClass("rotate5")) {
        initRotate()
        $('.menuWheel').addClass("rotate6");
    } else if ($('.menuWheel').hasClass("rotate6")) {
        initRotate()
        $('.menuWheel').addClass("slow");
        $('.menuWheel').addClass("rotate1");
    }
}