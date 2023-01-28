$(document).ready(function () {

    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        //navigation: true,
        anchors: ['cover', 'teaser-1', 'teaser-2', 'teaser-3', 'menu'],
        lockAnchors: true,
        //scrollOverflow: true,

        onLeave: function (origin, destination, direction) {
            var leavingSection = this;

            if (origin.index == 0 && direction == 'down') {
                $(".teaser-1").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.headerLogo--color').removeClass('display-none');
                    },
                    complete: function () {}
                });

                setTimeout(function () {
                    //cover content fadeout  
                    $(".coverContent").addClass('opac0')
                }, 200);
            }
            if (origin.index == 1 && direction == 'up') {
                $(".teaser-1").velocity({
                    top: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".coverContent").removeClass('opac0')
                        $('.headerLogo--color').addClass('display-none');
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 1 && direction == 'down') {
                $(".teaser-1").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".teaser-2").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
            }
            if (origin.index == 2 && direction == 'up') {
                $(".teaser-1").velocity({
                    top: "0"
                }, {
                    delay: 200,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".teaser-2").velocity({
                    top: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
            }
            if (origin.index == 2 && direction == 'down') {
                $(".teaser-2").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".teaser-3").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
            }
            if (origin.index == 3 && direction == 'up') {
                $(".teaser-2").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".teaser-3").velocity({
                    top: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
            }
            if (origin.index == 3 && direction == 'down') {
                $(".teaser-3").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.scroll-guide').addClass('opac0');
                    },
                    complete: function () {
                        $('.menu').removeClass('opac0');
                        $('.menuItem').addClass('active');
                        $('.headerLogo--color').addClass('display-none');
                    }
                });
            }
            if (origin.index == 4 && direction == 'up') {
                $(".teaser-3").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.menu').addClass('opac0');
                        $('.headerLogo--color').removeClass('display-none');
                    },
                    complete: function () {
                        $('.scroll-guide').removeClass('opac0');
                    }
                });
                $(".menuItem").velocity({
                    top: "100%"
                }, {
                    delay: 400,
                    duration: 0,
                    begin: function () {
                        $('.menuItem').removeClass('active');
                    },
                    complete: function () {}
                });
            }
        }
    })

    fullpage_api.setAllowScrolling(false);
    fullpage_api.setKeyboardScrolling(false);
});

var pre = document.querySelector('.preloader');
var imgv = document.querySelector('.preloaderWrap');
var imgo = document.querySelector('.oculus');

function triggerOculus() {
    imgv.classList.add('opac0')
    imgo.classList.remove('opac0')

    zoomOculus()
}

function zoomOculus() {
    var hdw = document.querySelector('.headerLogo--white');
    var hdc = document.querySelector('.headerLogo--color');
    var bcc = document.querySelector('.bgColor__circle');
    var bcv = document.querySelector('.bgColor__orange');
    var cv = document.querySelector('.cover');
    var scg = document.querySelector('.scroll-guide');

    setTimeout(function () {
        //oculus zoomin
        imgo.classList.add('zoom');
    }, 1800);
    setTimeout(function () {
        //preloader fadeout  
        pre.classList.add('opac0');
        hdw.classList.add('display-none');
        hdc.classList.remove('display-none');
    }, 3800);
    setTimeout(function () {
        pre.classList.add('display-none');
    }, 4200);
    setTimeout(function () {
        //bg white fadeout  
        bcv.classList.remove('opac0');
        bcc.classList.remove('opac0');
    }, 5600);
    setTimeout(function () {
        //content cover fadein
        hdc.classList.add('display-none');
        cv.classList.remove('opac0');
        scg.classList.remove('opac0');
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);
    }, 5800);
}