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
        $('.bgColor__cloud').removeClass('opac0');

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
                    complete: function () {
                    }
                });
            }
        }
    })

    fullpage_api.setAllowScrolling(false);
    fullpage_api.setKeyboardScrolling(false);
})