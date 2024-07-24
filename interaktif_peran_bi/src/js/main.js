$(window).on('load', function () {
    // setTimeout(function () {
    //     $('.preloader').addClass("done");
    //     $(".buttonCover").addClass("enable");
    // }, 3000);
    //console.log('loaded');
})

$(document).ready(function () {
    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        //navigation: true,
        anchors: ['cover', 'intro'],
        lockAnchors: true,
        //scrollOverflow: true,

        onLeave: function (origin, destination, direction) {
            var leavingSection = this;

            if (origin.index == 0 && direction == 'down') {}
            if (origin.index == 1 && direction == 'up') {
                fullpage_api.setAllowScrolling(false);
                fullpage_api.setKeyboardScrolling(false);
                $('.cover').addClass('active')
                $(".coverTitle").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.intro').removeClass('active')
                        $('.cover').removeClass('left')
                    }
                });
                $(".intro").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 1 && direction == 'down') {
                $(".introArticle").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.intro').addClass('fly')
                    }
                });
            }
            if (origin.index == 2 && direction == 'up') {
                $(".introArticle").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 2 && direction == 'down') {}
        }
    })

    fullpage_api.setAllowScrolling(false);
    fullpage_api.setKeyboardScrolling(false);
})

function startIntro() {
    fullpage_api.moveTo('intro', 1);
    fullpage_api.setAllowScrolling(true);
    fullpage_api.setKeyboardScrolling(true);
    $('.cover').removeClass('active')
    $(".coverTitle").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 300,
        complete: function () {
            $('.intro').addClass('active')
            $('.cover').addClass('left')
        }
    });
    $(".intro").velocity({
        opacity: "1"
    }, {
        delay: 300,
        duration: 300
    });
}

/* s: Get HEIGHT Device */
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener("resize", appHeight)
appHeight()
/* e: Get HEIGHT Device */