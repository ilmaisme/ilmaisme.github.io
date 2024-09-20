$(document).ready(function () {
    //headline logo
    initTransformLogo();
});

//Logo transition
function initTransformLogo() {
    setTimeout(function () {
        $('.g-1').fadeIn();
        initAnimateTransform();
    }, 500);
}

function initAnimateTransform() {
    //console.log('animate');
    zSequence = 0;
    setTimeout(function () {
        $('.g-2').fadeIn();
        zSequence = zSequence + 1;
        $('.g-2').css({
            '-webkit-animation': 'scale 1.5s',
            'z-index': zSequence
        });
        // loopOngoing = true;
    }, 1000);
    setTimeout(function () {
        $('.g-1').fadeOut();
    }, 2000);
    setTimeout(function () {
        $('.g-1').fadeIn();
        zSequence = zSequence + 1;
        $('.g-1').css({
            '-webkit-animation': 'scale 1.5s',
            'z-index': zSequence
        });
    }, 3000);
    setTimeout(function () {
        $('.g-2').fadeOut();
    }, 4000);
    setTimeout(function () {
        $('.g-3').fadeIn();
        zSequence = zSequence + 1;
        $('.g-3').css({
            '-webkit-animation': 'scale 1.5s',
            'z-index': zSequence
        });
    }, 5000);
    setTimeout(function () {
        $('.g-1').fadeOut();
    }, 6000);
    setTimeout(function () {
        $('.g-1').fadeIn();
        zSequence = zSequence + 1;
        $('.g-1').css({
            '-webkit-animation': 'scale 1.5s',
            'z-index': zSequence
        });
    }, 7000);
    setTimeout(function () {
        $('.g-3').fadeOut();
    }, 8000);
    setTimeout(function () {
        $('.g-4').fadeIn();
        zSequence = zSequence + 1;
        $('.g-4').css({
            '-webkit-animation': 'scale 1.5s',
            'z-index': zSequence
        });
    }, 9000);
    setTimeout(function () {
        $('.g-1').fadeOut();
    }, 10000);
    setTimeout(function () {
        $('.g-1').fadeIn();
        zSequence = zSequence + 1;
        $('.g-1').css({
            '-webkit-animation': 'scale 1.5s',
            'z-index': zSequence
        });
    }, 11000);
    setTimeout(function () {
        $('.g-4').fadeOut();
    }, 12000);
    setTimeout(function () {
        $('.g-5').fadeIn();
        zSequence = zSequence + 1;
        $('.g-5').css({
            '-webkit-animation': 'scale 1.5s',
            'z-index': zSequence
        });
    }, 13000);
    setTimeout(function () {
        $('.g-1').fadeOut();
    }, 14000);
    setTimeout(function () {
        $('.g-1').fadeIn();
        zSequence = zSequence + 1;
        $('.g-1').css({
            '-webkit-animation': 'scale 1.5s',
            'z-index': zSequence
        });
    }, 15000);
    setTimeout(function () {
        $('.g-5').fadeOut();
    }, 16000);
    setTimeout(function () {
        $('.g-6').fadeIn();
        zSequence = zSequence + 1;
        $('.g-6').css({
            '-webkit-animation': 'scale 1.5s',
            'z-index': zSequence
        });
    }, 17000);
    setTimeout(function () {
        $('.g-1').fadeOut();
    }, 18000);
    setTimeout(function () {
        $('.g-1').fadeIn();
        zSequence = zSequence + 1;
        $('.g-1').css({
            '-webkit-animation': 'scale 1.5s',
            'z-index': zSequence
        });
    }, 19000);
    setTimeout(function () {
        $('.g-6').fadeOut();
    }, 20000);
    setTimeout(function () {
        $('.g-7').fadeIn();
        zSequence = zSequence + 1;
        $('.g-7').css({
            '-webkit-animation': 'scale 1.5s',
            'z-index': zSequence
        });
    }, 21000);
    setTimeout(function () {
        $('.g-1').fadeOut();
    }, 22000);
    setTimeout(function () {
        $('.g-1').fadeIn();
        zSequence = zSequence + 1;
        $('.g-1').css({
            '-webkit-animation': 'scale 1.5s',
            'z-index': zSequence
        });
    }, 23000);
    setTimeout(function () {
        $('.g-7').fadeOut();
    }, 24000);
    setTimeout(function () {
        $('.g-8').fadeIn();
        zSequence = zSequence + 1;
        $('.g-8').css({
            '-webkit-animation': 'scale 1.5s',
            'z-index': zSequence
        });
    }, 25000);
    setTimeout(function () {
        $('.g-1').fadeOut();
    }, 26000);
    setTimeout(function () {
        $('.g-1').fadeIn();
        zSequence = zSequence + 1;
        $('.g-1').css({
            '-webkit-animation': 'scale 1.5s',
            'z-index': zSequence
        });
    }, 27000);
    setTimeout(function () {
        $('.g-8').fadeOut();
    }, 28000);
    setTimeout(function () {
        $('.g-9').fadeIn();
        zSequence = zSequence + 1;
        $('.g-9').css({
            '-webkit-animation': 'scale 1.5s',
            'z-index': zSequence
        });
    }, 29000);
    setTimeout(function () {
        $('.g-1').fadeOut();
    }, 30000);
    setTimeout(function () {
        $('.g-1').fadeIn();
        zSequence = zSequence + 1;
        $('.g-1').css({
            '-webkit-animation': 'scale 1.5s',
            'z-index': zSequence
        });
    }, 31000);
    setTimeout(function () {
        $('.g-9').fadeOut();
        loopOngoing = false;
        initAnimateTransform();
    }, 32000);
}