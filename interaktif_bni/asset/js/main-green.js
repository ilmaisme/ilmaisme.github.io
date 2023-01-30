$(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').fadeOut(700);
    }, 3000);
    setTimeout(function () {
        //content green fadein
        $('.headerLogo--white').addClass('display-none');
        $('.headerLogo--color').removeClass('display-none');
        $('.scroll-guide').removeClass('opac0');
        $('.buttonChampion').removeClass('opac0');
        $('.greenNature').removeClass('opac0');
        $('.greenNature__number').addClass('active');
        $('.greenNature__item').addClass('active');

        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);

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
        // anchors: ['cover', 'teaser-1', 'teaser-2', 'teaser-3', 'menu'],
        lockAnchors: true,
        //scrollOverflow: true,

        onLeave: function (origin, destination, direction) {
            var leavingSection = this;

            if (origin.index == 0 && direction == 'down') {
                $(".greenOrganic__content").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.greenOrganic').removeClass('opac0');
                        $('.greenNature').addClass('opac0');
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 1 && direction == 'up') {
                $(".greenOrganic__content").velocity({
                    top: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.greenOrganic').addClass('opac0');
                    },
                    complete: function () {
                        $('.greenNature').removeClass('opac0');
                    }
                });
            }
            if (origin.index == 1 && direction == 'down') {
                $(".greenOrganic__content").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.greenOrganic').addClass('opac0');
                    },
                    complete: function () {}
                });
                $(".greenRehab__content").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.greenRehab').removeClass('opac0');
                        $('.greenCloud').addClass('opac0');
                    },
                    complete: function () {
                        $('.greenNature__img').addClass('zoom');
                        $('.scroll-guide').addClass('-black');
                    }
                });
            }
            if (origin.index == 2 && direction == 'up') {
                $(".greenOrganic__content").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.greenOrganic').removeClass('opac0');
                    },
                    complete: function () {}
                });
                $(".greenRehab__content").velocity({
                    top: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.greenRehab').addClass('opac0');                        
                    },
                    complete: function () {
                        $('.greenNature__img').removeClass('zoom');
                        $('.scroll-guide').removeClass('-black');
                        $('.greenCloud').removeClass('opac0');
                    }
                });
            }
            if (origin.index == 2 && direction == 'down') {
                $(".greenBunaken__content").velocity({
                    top: "0"
                }, {
                    delay: 400,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".bgColor__bunaken").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {
                        $('.greenBunaken').removeClass('opac0');
                        $('.headerLogo--white').removeClass('display-none');
                        $('.headerLogo--color').addClass('display-none');
                    }
                });
                $(".bgColor__nature").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".greenRehab__content").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.greenRehab').addClass('opac0');
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 3 && direction == 'up') {
                $(".greenBunaken__content").velocity({
                    top: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".bgColor__bunaken").velocity({
                    top: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.greenBunaken').addClass('opac0');
                    },
                    complete: function () {
                        $('.headerLogo--white').addClass('display-none');
                        $('.headerLogo--color').removeClass('display-none');
                    }
                });
                $(".bgColor__nature").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".greenRehab__content").velocity({
                    top: "0"
                }, {
                    delay: 400,
                    duration: 400,
                    begin: function () {
                        $('.greenRehab').removeClass('opac0');
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 3 && direction == 'down') {
                $(".greenSpklu__content").velocity({
                    top: "0"
                }, {
                    delay: 400,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".bgColor__dblue").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {
                        $('.greenSpklu').removeClass('opac0');
                    }
                });
                $(".bgColor__bunaken").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".greenBunaken__content").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.greenBunaken').addClass('opac0');
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 4 && direction == 'up') {
                $(".greenSpklu__content").velocity({
                    top: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".bgColor__dblue").velocity({
                    top: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.greenSpklu').addClass('opac0');
                    },
                    complete: function () {}
                });
                $(".bgColor__bunaken").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".greenBunaken__content").velocity({
                    top: "0"
                }, {
                    delay: 400,
                    duration: 400,
                    begin: function () {
                        $('.greenBunaken').removeClass('opac0');
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 4 && direction == 'down') {
                $(".greenSll__content").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.greenSll').removeClass('opac0');
                    },
                    complete: function () {}
                });
                $(".greenSpklu__content").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.greenSpklu').addClass('opac0');
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 5 && direction == 'up') {
                $(".greenSll__content").velocity({
                    top: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.greenSll').addClass('opac0');
                    },
                    complete: function () {}
                });
                $(".greenSpklu__content").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.greenSpklu').removeClass('opac0');
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 5 && direction == 'down') {
                $(".greenBond__content-1").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.greenBond-1').removeClass('opac0');
                        $('.bgColor__blue').removeClass('opac0');
                        $('.headerLogo--white').addClass('display-none');
                        $('.headerLogo--color').removeClass('display-none');
                    },
                    complete: function () {}
                });
                $(".greenSll__content").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.greenSll').addClass('opac0');
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 6 && direction == 'up') {
                $(".greenBond__content-1").velocity({
                    top: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.greenBond-1').addClass('opac0');
                        $('.bgColor__blue').addClass('opac0');
                        $('.headerLogo--white').removeClass('display-none');
                        $('.headerLogo--color').addClass('display-none');
                    },
                    complete: function () {}
                });
                $(".greenSll__content").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.greenSll').removeClass('opac0');
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 6 && direction == 'down') {
                $(".greenBond__content-2").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.greenBond-2').removeClass('opac0');
                    },
                    complete: function () {
                        $('.scroll-guide').addClass('opac0');
                        $('.buttonChampion').addClass('active');
                        $('.buttonCredit').addClass('active');
                    }
                });
                $(".greenBond__content-1").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
            }
            if (origin.index == 7 && direction == 'up') {
                $(".greenBond__content-2").velocity({
                    top: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.greenBond-2').addClass('opac0');
                        $('.buttonChampion').removeClass('active');
                        $('.buttonCredit').removeClass('active');
                    },
                    complete: function () {
                        $('.scroll-guide').removeClass('opac0');
                    }
                });
                $(".greenBond__content-1").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
            }
        }
    })

    fullpage_api.setAllowScrolling(false);
    fullpage_api.setKeyboardScrolling(false);
});