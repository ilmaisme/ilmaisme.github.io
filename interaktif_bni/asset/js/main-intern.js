$(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').fadeOut(700);
    }, 3000);
    setTimeout(function () {
        //content intern fadein
        $('.headerLogo--white').addClass('display-none');
        $('.headerLogo--color').removeClass('display-none');
        $('.scroll-guide').removeClass('opac0');
        $('.buttonChampion').removeClass('opac0');

        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);

    }, 3700);

    setTimeout(function () {
        //content green fadein
        $('.internSinergi').removeClass('opac0');
        $('.internSinergi__content').addClass('active');

        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);

    }, 4100);
    setTimeout(function () {
        $('.preloader').remove();
    }, 5100);
})

$(document).ready(function () {

    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        //navigation: true,
        // anchors: ['cover', 'teaser-1', 'teaser-2', 'teaser-3', 'menu'],
        lockAnchors: true,
        //scrollOverflow: true,

        onLeave: function (origin, destination, direction) {
            var leavingSection = this;

            if (origin.index == 0 && direction == 'down') {
                $(".internICC__content").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.internICC').removeClass('opac0');
                        $('.internSinergi__content').addClass('move');
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 1 && direction == 'up') {
                $(".internICC__content").velocity({
                    top: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.internICC').addClass('opac0');
                        $('.internSinergi__content').removeClass('move');
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 1 && direction == 'down') {
                $(".bgColor__cloud").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".internICC__content").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".internSinergi__content").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.internSinergi').addClass('opac0');
                    },
                    complete: function () {}
                });
                $(".internEngland").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {
                        $('.internEngland__bus').addClass('active');
                    }
                });
            }
            if (origin.index == 2 && direction == 'up') {
                $(".bgColor__cloud").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".internICC__content").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".internSinergi__content").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.internSinergi').removeClass('opac0');
                    },
                    complete: function () {}
                });
                $(".internEngland").velocity({
                    top: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
            }
            if (origin.index == 2 && direction == 'down') {
                $(".internEngland").velocity({
                    left: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        // $(".internEngland__mount").addClass('move');
                    },
                    complete: function () {}
                });
                $(".internJapan").velocity({
                    left: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".bgColor__orange").removeClass('opac0');
                    },
                    complete: function () {
                        $(".internJapan__train").addClass('active')
                    }
                });
            }
            if (origin.index == 3 && direction == 'up') {
                $(".internEngland").velocity({
                    left: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        // $(".internEngland__mount").removeClass('move');
                    },
                    complete: function () {}
                });
                $(".internJapan").velocity({
                    left: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".bgColor__orange").addClass('opac0');      
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 3 && direction == 'down') {
                $(".bgColor__cloud").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".internJapan").velocity({
                    top: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".internTurki").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
            }
            if (origin.index == 4 && direction == 'up') {
                $(".bgColor__cloud").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".internJapan").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".internTurki").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
            }
            if (origin.index == 4 && direction == 'down') {
                $(".internTurki").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".bgColor__cloud").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.internXpora').removeClass('opac0');
                        $('.internXpora__content').addClass('active');
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 5 && direction == 'up') {
                $(".internTurki").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".bgColor__cloud").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.internXpora').addClass('opac0');
                        $('.internXpora__content').removeClass('active');
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 5 && direction == 'down') {
                $('.internXpora').addClass('opac0');
                $('.internKorea').removeClass('opac0');
                $('.internKorea__content').addClass('active');
                setTimeout(function () {
                    $('.scroll-guide').addClass('opac0');
                    $('.buttonChampion').addClass('active');
                    $('.buttonCredit').addClass('active');
                }, 400);
            }
            if (origin.index == 6 && direction == 'up') {
                $('.internXpora').removeClass('opac0');
                $('.internKorea').addClass('opac0');                
                $('.internKorea__content').removeClass('active');
                $('.buttonChampion').removeClass('active');
                $('.buttonCredit').removeClass('active');
                setTimeout(function () {
                    $('.scroll-guide').removeClass('opac0');
                }, 400);
            }
        }
    })

    fullpage_api.setAllowScrolling(false);
    fullpage_api.setKeyboardScrolling(false);
})