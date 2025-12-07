$(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').addClass("done");
        $('.coverTxt--1').addClass("animation__sizeOut");
        $('.coverTxt--2').addClass("animation__sizeOut");
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);

        $(".scroll-guide").removeClass('opac0')
    }, 3000);
    setTimeout(function () {
        $('.coverAnim').addClass("active");
    }, 3700);
    console.log('loaded');
})

$(document).ready(function () {
    var animationLoader = bodymovin.loadAnimation({
        container: document.getElementById('animationPreload'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/preload.json',
        name: 'myAnimation',
    });
    animationLoader.play();
    animationLoader.setSpeed(0.5);

    var paramCover = {
        container: document.getElementById('animationCover'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/1-cover.json',
        name: 'myAnimation',
    };
    var playCover;
    playCover = bodymovin.loadAnimation(paramCover);
    playCover.play();

    var animationBomb = bodymovin.loadAnimation({
        container: document.getElementById('animationBomb'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/2-bomb.json',
        name: 'myAnimation',
    });

    var animationStonk = bodymovin.loadAnimation({
        container: document.getElementById('animationStonk'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/3-stonk.json',
        name: 'myAnimation',
    });
    animationStonk.play()

    var animationDebt = bodymovin.loadAnimation({
        container: document.getElementById('animationDebt'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/4-debt.json',
        name: 'myAnimation',
    });
    animationDebt.play()

    var animationMarket = bodymovin.loadAnimation({
        container: document.getElementById('animationMarket'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/5-market.json',
        name: 'myAnimation',
    });
    animationMarket.play()

    var animationCrypto = bodymovin.loadAnimation({
        container: document.getElementById('animationCrypto'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/6-crypto.json',
        name: 'myAnimation',
    });
    animationCrypto.play()

    var animationMap = bodymovin.loadAnimation({
        container: document.getElementById('animationMap'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/7-map.json',
        name: 'myAnimation',
    });
    animationMap.play()

    var animationBase1 = bodymovin.loadAnimation({
        container: document.getElementById('animationBase1'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/8-base1.json',
        name: 'myAnimation',
    });
    animationBase1.play()
    var animationBase2 = bodymovin.loadAnimation({
        container: document.getElementById('animationBase2'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/9-base2.json',
        name: 'myAnimation',
    });
    animationBase2.play()
    var animationBase3 = bodymovin.loadAnimation({
        container: document.getElementById('animationBase3'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/10-base3.json',
        name: 'myAnimation',
    });
    animationBase3.play()
    var animationBase4 = bodymovin.loadAnimation({
        container: document.getElementById('animationBase4'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/11-base4.json',
        name: 'myAnimation',
    });
    animationBase4.play()
    var animationBase5 = bodymovin.loadAnimation({
        container: document.getElementById('animationBase5'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/12-base5.json',
        name: 'myAnimation',
    });
    animationBase5.play()

    var animationAspect = bodymovin.loadAnimation({
        container: document.getElementById('animationAspect'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/13-aspect.json',
        name: 'myAnimation',
    });
    animationAspect.play()


    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        //navigation: true,
        anchors: ['cover', 'globe1', 'globe2', 'globe3', 'globe4', 'globe5', 'map', 'base1'],
        lockAnchors: true,
        //scrollOverflow: true,

        onLeave: function (origin, destination, direction) {
            var leavingSection = this;

            if (origin.index == 0 && direction == 'down') {
                $(".coverAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $(".coverAnim").removeClass("active")
                    }
                });
                $(".globeImg").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 300
                });
                $(".bombAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700,
                    complete: function () {
                        animationBomb.play()
                    }
                });
                $(".bombTxt").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 700,
                    duration: 700
                });
            }
            if (origin.index == 1 && direction == 'up') {
                $(".coverAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $(".coverAnim").addClass("active")
                    }
                });
                $(".globeImg").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".bombAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".bombTxt").velocity({
                    opacity: "0",
                    left: "-100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 1 && direction == 'down') {
                $(".bombAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".bombTxt").velocity({
                    opacity: "0",
                    left: "-100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".stonkAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700,
                    complete: function () {
                        animationStonk.play()
                    }
                });
                $(".stonkTxt").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 300,
                    duration: 700
                });

            }
            if (origin.index == 2 && direction == 'up') {
                $(".stonkAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".stonkTxt").velocity({
                    opacity: "0",
                    left: "-100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".bombAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700
                });
                $(".bombTxt").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 300,
                    duration: 700
                });
            }
            if (origin.index == 2 && direction == 'down') {
                $(".stonkAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".stonkTxt").velocity({
                    opacity: "0",
                    left: "-100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".debtAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700,
                    complete: function () {
                        animationDebt.play()
                    }
                });
                $(".debtTxt").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 300,
                    duration: 700
                });
            }
            if (origin.index == 3 && direction == 'up') {
                $(".debtAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".debtTxt").velocity({
                    opacity: "0",
                    left: "-100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".stonkAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700
                });
                $(".stonkTxt").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 300,
                    duration: 700
                });
            }
            if (origin.index == 3 && direction == 'down') {
                $(".debtAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".debtTxt").velocity({
                    opacity: "0",
                    left: "-100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".marketAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700,
                    complete: function () {
                        animationMarket.play()
                    }
                });
                $(".marketTxt").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 300,
                    duration: 700
                });
            }
            if (origin.index == 4 && direction == 'up') {
                $(".marketAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".marketTxt").velocity({
                    opacity: "0",
                    left: "-100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".debtAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700
                });
                $(".debtTxt").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 300,
                    duration: 700
                });
            }
            if (origin.index == 4 && direction == 'down') {
                $(".marketAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".marketTxt").velocity({
                    opacity: "0",
                    left: "-100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".cryptoAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700,
                    complete: function () {
                        animationCrypto.play()
                    }
                });
                $(".cryptoTxt").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 300,
                    duration: 700
                });
            }
            if (origin.index == 5 && direction == 'up') {
                $(".cryptoAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".cryptoTxt").velocity({
                    opacity: "0",
                    left: "-100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".marketAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700
                });
                $(".marketTxt").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 300,
                    duration: 700
                });
            }
            if (origin.index == 5 && direction == 'down') {
                $(".cryptoAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".cryptoTxt").velocity({
                    opacity: "0",
                    left: "-100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
                //BASE STONE
                $(".globeImg").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    complete: function () {
                        animationMap.play()
                    }
                });
                $(".bgColor__blue--grad").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".mapClick").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 300
                });
            }
            if (origin.index == 6 && direction == 'up') {
                $(".cryptoAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700
                });
                $(".cryptoTxt").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 300,
                    duration: 700
                });
                $(".globeImg").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".bgColor__blue--grad").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 6 && direction == 'down') {
                //BASE 1
                $(".building").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 300,
                    complete: function () {
                        animationBase1.play()
                    }
                });
                $(".mapClick").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 7 && direction == 'up') {
                $(".mapClick").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".building").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 7 && direction == 'down') {
                //BASE 2
                setTimeout(function () {
                    animationBase2.play()
                }, 300);
            }
            if (origin.index == 8 && direction == 'up') {

            }
            if (origin.index == 8 && direction == 'down') {
                //BASE 3
                setTimeout(function () {
                    animationBase3.play()
                }, 300);
            }
            if (origin.index == 9 && direction == 'up') {

            }
            if (origin.index == 9 && direction == 'down') {
                //BASE 4
                setTimeout(function () {
                    animationBase4.play()
                }, 300);
            }
            if (origin.index == 10 && direction == 'up') {

            }
            if (origin.index == 10 && direction == 'down') {
                //BASE 5
                setTimeout(function () {
                    animationBase5.play()
                }, 300);
            }
            if (origin.index == 11 && direction == 'up') {
                $(".aspectSection").removeClass('anim')
            }
            if (origin.index == 11 && direction == 'down') {
                //ASPECT POPUP
                $(".building").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".aspectAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".aspectSection").addClass('anim')
                    },
                    complete: function () {
                        animationAspect.play()
                    }
                });
            }
            if (origin.index == 12 && direction == 'up') {
                $(".aspectAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".aspectSection").addClass('anim')
                    }
                });
                $(".policyAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".building").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 12 && direction == 'down') {
                //POLICY
                $(".aspectAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $(".aspectSection").removeClass('anim')
                    }
                });
                $(".policyAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 13 && direction == 'up') {
                $(".policyAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".aspectAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".aspectSection").addClass('anim')
                    }
                });

            }
            if (origin.index == 13 && direction == 'down') {
                //synergy
                $(".bgColor__grey--grad").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".policyAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".synergyAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        $('.synergyItem').addClass('active')
                    }
                });
            }
            if (origin.index == 14 && direction == 'up') {
                $(".bgColor__grey--grad").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".synergyAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    complete: function () {
                        $('.synergyItem').removeClass('active')
                    }
                });
                $(".policyAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 14 && direction == 'down') {
                //direct
                $(".synergyAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    complete: function () {
                        $('.synergyItem').removeClass('active')
                    }
                });
                $(".directAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.directItem').addClass('active')
                    }
                });
            }
            if (origin.index == 15 && direction == 'up') {
                $(".directAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.directItem').removeClass('active')
                    }
                });
                $(".synergyAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        $('.synergyItem').addClass('active')
                    }
                });
            }
            if (origin.index == 15 && direction == 'down') {
                //quote
                $(".bgColor__grey").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".directAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.directItem').removeClass('active')
                    }
                });
                $(".quoteAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".quoteTxt").velocity({
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".quoteAuthor").velocity({
                    left: "0"
                }, {
                    delay: 400,
                    duration: 400,
                    begin: function () {
                        $('.quoteAttrWrap').addClass('flipped')
                    }
                });
            }
            if (origin.index == 16 && direction == 'up') {
                $(".bgColor__grey").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".quoteAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".quoteTxt").velocity({
                    left: "100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".quoteAuthor").velocity({
                    left: "100vw"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.quoteAttrWrap').removeClass('flipped')
                    }
                });
                $(".directAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.directItem').addClass('active')
                    }
                });
            }
            if (origin.index == 16 && direction == 'down') {
                $(".quoteAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".quoteTxt").velocity({
                    left: "100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".quoteAuthor").velocity({
                    left: "100vw"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.quoteAttrWrap').removeClass('flipped')
                    }
                });
                //CREDIT
                $(".sectionCredit").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.creditTitle').addClass('active')
                        $('.creditName').addClass('active')
                        $(".scroll-guide").addClass('opac0')
                    }
                })
            }
            if (origin.index == 17 && direction == 'up') {
                $(".quoteAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".quoteTxt").velocity({
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".quoteAuthor").velocity({
                    left: "0"
                }, {
                    delay: 400,
                    duration: 400,
                    begin: function () {
                        $('.quoteAttrWrap').addClass('flipped')
                    }
                });
                $(".sectionCredit").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.creditTitle').removeClass('active')
                        $('.creditName').removeClass('active')
                        $(".scroll-guide").removeClass('opac0')
                    }
                })
            }
        }
    })

    waitYouCantScroll()

    function youCanScroll() {
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);
        $(".scroll-guide").removeClass('opac0')
    }

    function waitYouCantScroll() {
        fullpage_api.setAllowScrolling(false);
        fullpage_api.setKeyboardScrolling(false);
        $(".scroll-guide").addClass('opac0')
    }

    //aspect popup
    $('.aspectBtn').click(function () {
        waitYouCantScroll()
        var num = $(this).attr('class').match(/aspectBtn(\d+)/)[1];
        var pop = $("[class*='aspectPopup" + num + "']");

        // remove class from all
        $('.aspectBtn').removeClass('start');
        $('.aspectPopup').removeClass('active');

        // add start only to clicked items
        $(this).addClass('start');
        pop.addClass('active');
    });
    $('.aspectPop__close').on('click', function () {
        closePopup()
    })
    $('.aspectPop__wrap').on('click', function (e) {
        e.stopPropagation();
    })

    //diagram popup
    $('.policyBtn').click(function () {
        waitYouCantScroll()
        var num = $(this).attr('class').match(/policyBtn(\d+)/)[1];
        var pop = $("[class*='policyPopup" + num + "']");

        // remove class from all
        $('.policyBtn').removeClass('start');
        $('.policyPopup').removeClass('active');

        // add start only to clicked items
        $(this).addClass('start');
        pop.addClass('active');
    });
    $('.policyPop__close').on('click', function () {
        closePopup()
    })
    $('.policyPop__wrap').on('click', function (e) {
        e.stopPropagation();
    })
    $('.popup').on('click', function () {
        closePopup()
    })

    function closePopup() {
        $('.popup').removeClass("active")
        $('.policyBtn').removeClass('start');
        youCanScroll()
    }

    //click on map
    $('#animationMap').on('click', function () {
        fullpage_api.moveTo(8);
        console.log('move')
    })
})

/* s: Get HEIGHT Device */
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener("resize", appHeight)
appHeight()

//const appHeightValue = getComputedStyle(document.documentElement).getPropertyValue('--app-height');
//console.log(appHeightValue); // Access and use the value
/* e: Get HEIGHT Device */