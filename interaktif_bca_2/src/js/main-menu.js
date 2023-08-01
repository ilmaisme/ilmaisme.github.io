//MENU
var c_time = 0;
window.addEventListener('wheel', function (event) {
    // console.log(event.wheelDeltaY);
    if (($.now() - c_time) > 400) //0.4s
    {
        c_time = $.now();
        //console.log(c_time);
        if (event.wheelDeltaY < 0 && ($('#fullpage').hasClass("fp-destroyed"))) {
            console.log('scrolling down');
            DOWNRotate()
        } else if (event.wheelDeltaY > 0 && ($('#fullpage').hasClass("fp-destroyed"))) {
            console.log('scrolling up');
            UPRotate()
        }
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

// function initRotate() {
//     $('.menuWheel').removeClass(function (index, css) {
//         return (css.match(/(^|\s)rotate\S+/g) || []).join(' ');
//     });
// }
var rot = 0

function UPRotate() {
    rot += 60
    $('.menuWheel').css({
        'transform': `rotate(${rot}deg)`
    });
}

function DOWNRotate() {
    rot -= 60
    $('.menuWheel').css({
        'transform': `rotate(${rot}deg)`
    });
}

//GET HEIGHT Device
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener("resize", appHeight)
appHeight()