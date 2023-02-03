$(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').fadeOut(700);
    }, 3000);
    setTimeout(function () {
        //content digital fadein
        $('.headerLogo--white').addClass('display-none');
        $('.headerLogo--color').removeClass('display-none');
        $('.scroll-guide').removeClass('opac0');
        $('.buttonChampion').removeClass('opac0');
        $('.digiDot').removeClass('opac0');
        $('.digiProduct').removeClass('opac0');
        $('.digiProduct__item').addClass('active');

        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);

    }, 3700);
    setTimeout(function () {
        $('.preloader').remove();
    }, 4700);
})

$(document).ready(function () {
    // 1. Animation Preloader
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationDigi__prelod'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '../asset/json/thumb-digi.json',
        name: 'myAnimation',
    });
    // 2. Animation Metaverse
    var paramMeta = {
        container: document.getElementById('animationDigi__meta'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '../asset/json/ekspansi-metaverse.json',
        name: 'myAnimation',
    };
    var playMeta;
    playMeta = bodymovin.loadAnimation(paramMeta);

    // 3. Animation KTT
    var paramKTT = {
        container: document.getElementById('animationDigi__KTT'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '../asset/json/metaverse-g20.json',
        name: 'myAnimation',
    };
    var playKTT;
    playKTT = bodymovin.loadAnimation(paramKTT);

    // 4. Animation Digital
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationDigi__digital'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '../asset/json/digital.json',
        name: 'myAnimation',
    });

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
                $(".digiMayora__content").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.digiMayora').removeClass('opac0');
                        $('.digiProduct').addClass('opac0');
                    },
                    complete: function () {
                        $('.digiMayora__stonks').removeClass('opac0');
                        setTimeout(function () {
                            $('.digiMayora__stonks').addClass('active');
                        }, 200);
                    }
                });
            }
            if (origin.index == 1 && direction == 'up') {
                $(".digiMayora__content").velocity({
                    top: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.digiMayora').addClass('opac0');
                        $('.digiMayora__stonks').addClass('opac0');
                    },
                    complete: function () {
                        $('.digiMayora__stonks').removeClass('active');
                        $('.digiProduct').removeClass('opac0');
                    }
                });
            }
            if (origin.index == 1 && direction == 'down') {
                $(".digiMayora__content").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.digiMayora__stonks').addClass('opac0');
                    },
                    complete: function () {
                        $('.digiMayora__stonks').removeClass('active');
                    }
                });
                $(".digiQris__content").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.digiMayora').addClass('opac0');
                        $('.bgColor__blue').removeClass('opac0');
                    },
                    complete: function () {
                        $('.digiQris').removeClass('opac0');
                        $('.digiMap').removeClass('opac0');
                        $('.digiMap').addClass('active');
                    }
                });
                setTimeout(function () {
                    $(".mapdot").addClass("animationPin");
                }, 800);
                $(".digiQris__img").velocity({
                    bottom: "0"
                }, {
                    delay: 1200,
                    duration: 400
                });
            }
            if (origin.index == 2 && direction == 'up') {
                $(".digiMayora__content").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {
                        $('.digiMayora__stonks').removeClass('opac0');
                        setTimeout(function () {
                            $('.digiMayora__stonks').addClass('active');
                        }, 200);
                    }
                });
                $(".digiQris__content").velocity({
                    top: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.digiMayora').removeClass('opac0');
                        $('.bgColor__blue').addClass('opac0');
                        $('.digiQris').addClass('opac0');
                        $('.digiMap').addClass('opac0');
                        $('.digiMap').removeClass('active');
                        $(".mapdot").removeClass("animationPin");
                    },
                    complete: function () {}
                });
                $(".digiQris__img").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 400
                });
            }
            if (origin.index == 2 && direction == 'down') {
                $(".digiMeta__content").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {
                        playMeta.play();
                    }
                });
                $(".digiQris__content").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.digiMeta').removeClass('opac0');
                        $('.digiQris').addClass('opac0');
                        $('.digiMap').addClass('opac0');
                        $('.digiMap').removeClass('active');
                        $(".mapdot").removeClass("animationPin");
                    },
                    complete: function () {}
                });
                $(".digiQris__img").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 400
                });
            }
            if (origin.index == 3 && direction == 'up') {
                $(".digiMeta__content").velocity({
                    top: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".digiQris__content").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.digiQris').removeClass('opac0');
                        $('.digiMap').removeClass('opac0');
                        $('.digiMap').addClass('active');
                        $('.digiMeta').addClass('opac0');
                    },
                    complete: function () {}
                });
                setTimeout(function () {
                    $(".mapdot").addClass("animationPin");
                }, 800);
                $(".digiQris__img").velocity({
                    bottom: "0"
                }, {
                    delay: 1200,
                    duration: 400
                });
            }
            if (origin.index == 3 && direction == 'down') {
                $(".digiMeta__content").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".digiG20__content").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.digiG20').removeClass('opac0');
                        $('.bgColor__grey').removeClass('opac0');
                        $('.digiMeta').addClass('opac0');
                    },
                    complete: function () {
                        playKTT.play()
                    }
                });
            }
            if (origin.index == 4 && direction == 'up') {
                $(".digiMeta__content").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".digiG20__content").velocity({
                    top: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.digiG20').addClass('opac0');
                        $('.bgColor__grey').addClass('opac0');
                        $('.digiMeta').removeClass('opac0');
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 4 && direction == 'down') {
                $(".digiMobile__content").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".digiG20__content").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.digiG20').addClass('opac0');
                        $('.digiMobile').removeClass('opac0');
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 5 && direction == 'up') {
                $(".digiMobile__content").velocity({
                    top: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".digiG20__content").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.digiG20').removeClass('opac0');
                        $('.digiMobile').addClass('opac0');
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 5 && direction == 'down') {
                $(".digiDirect__content").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".digiMobile__content").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.digiMobile').addClass('opac0');
                        $('.digiDirect').removeClass('opac0');
                    },
                    complete: function () {
                        $('.scroll-guide').addClass('opac0');
                        $('.buttonChampion').addClass('active');
                        $('.buttonCredit').addClass('active');
                    }
                });
            }
            if (origin.index == 6 && direction == 'up') {
                $(".digiMobile__content").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".digiDirect__content").velocity({
                    top: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.digiMobile').removeClass('opac0');
                        $('.digiDirect').addClass('opac0');
                        $('.buttonChampion').removeClass('active');
                        $('.buttonCredit').removeClass('active');
                    },
                    complete: function () {
                        $('.scroll-guide').removeClass('opac0');
                    }
                });
            }
        }
    })

    fullpage_api.setAllowScrolling(false);
    fullpage_api.setKeyboardScrolling(false);
});