$(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').fadeOut(700);
    }, 3000);
    setTimeout(function () {
        $('.headerLogo--white').addClass('display-none');
        $('.headerLogo--color').removeClass('display-none');
    }, 3700);
    setTimeout(function () {
        $('.preloader').remove();
    }, 4700);
})

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
});