//GET HEIGHT Device
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener("resize", appHeight)
appHeight()

function refreshPage() {
    window.location.href = window.location.href
}

$(window).on('load', removePreloader);
//preloader
function removePreloader() {
    setTimeout(function () {
        $("#preloader").fadeOut(200, function () {
            $(this).remove();
        })
    }, 1500);
}

$(document).ready(function () {

    //scrollreveal
    window.sr = ScrollReveal({
        vFactor: 0.20,
        mobile: true
    });
    sr.reveal('.articleTable', {
        origin: 'bottom',
        delay: 100,
    });
    sr.reveal('.reveal', {
        origin: 'bottom',
        delay: 100,
    });
    sr.reveal('.credit__member', {
        origin: 'right',
        delay: 200,
        reset: true,
        distance: '5vw'
    });
    sr.reveal('.credit__team', {
        origin: 'left',
        delay: 200,
        reset: true,
        distance: '5vw'
    });
    sr.reveal('.credit__logo', {
        opacity: 0,
        origin: 'bottom',
        delay: 200,
        duration: 1500,
        reset: true
    });

    // parallax cover
    var currentX = '';
    var currentY = '';
    var movementConstant = .012;
    $(document).mousemove(function (e) {
        if (currentX == '') currentX = e.pageX;
        var xdiff = e.pageX - currentX;
        currentX = e.pageX;
        if (currentY == '') currentY = e.pageY;
        var ydiff = e.pageY - currentY;
        currentY = e.pageY;
        $('.parallax .par').each(function (i, el) {
            var movement = (i + 1) * (xdiff * movementConstant);
            var movementy = (i + 1) * (ydiff * movementConstant);
            var newX = $(el).position().left + movement;
            var newY = $(el).position().top + movementy;
            $(el).css('left', newX + 'px');
            $(el).css('top', newY + 'px');
        });
    });
});
