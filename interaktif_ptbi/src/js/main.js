$(window).on('load', function () {
    setTimeout(function () {
        // $('.preloader').addClass("done");
        // fullpage_api.setAllowScrolling(true);
        // fullpage_api.setKeyboardScrolling(true);
    }, 3000);
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

    var paramCover = {
        container: document.getElementById('animationCover'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/cover.json',
        name: 'myAnimation',
    };
    var playCover;
    playCover = bodymovin.loadAnimation(paramCover);
    playCover.play();

    var paramSphere = bodymovin.loadAnimation({
        container: document.getElementById('animationSphere'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/sphere.json',
        name: 'myAnimation',
    });

    var animationEvent1 = bodymovin.loadAnimation({
        container: document.getElementById('animationEvent1'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'asset/json/russia/event1-pin.json',
        name: 'myAnimation',
    });
    var animationEvent1Bomb = bodymovin.loadAnimation({
        container: document.getElementById('animationEvent1Bomb'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'asset/json/russia/event1-bomb.json',
        name: 'myAnimation',
    });
    var animationEvent1Tank = bodymovin.loadAnimation({
        container: document.getElementById('animationEvent1Tank'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'asset/json/russia/event1-tank.json',
        name: 'myAnimation',
    });

    var animationEcon = bodymovin.loadAnimation({
        container: document.getElementById('animationEcon'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/econ.json',
        name: 'myAnimation',
    });

    var animationInfla = bodymovin.loadAnimation({
        container: document.getElementById('animationInfla'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/infla.json',
        name: 'myAnimation',
    });

    var animationRate = bodymovin.loadAnimation({
        container: document.getElementById('animationRate'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/rate.json',
        name: 'myAnimation',
    });

    var animationStable = bodymovin.loadAnimation({
        container: document.getElementById('animationStable'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/stable.json',
        name: 'myAnimation',
    });

    var animationGrowth = bodymovin.loadAnimation({
        container: document.getElementById('animationGrowth'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/growth.json',
        name: 'myAnimation',
    });

    var animationBalance = bodymovin.loadAnimation({
        container: document.getElementById('animationBalance'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/balance.json',
        name: 'myAnimation',
    });

    var animationDiagram0 = bodymovin.loadAnimation({
        container: document.getElementById('animationDiagram0'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/diagram/0.json',
        name: 'myAnimation',
    });

    var animationDiagram1 = bodymovin.loadAnimation({
        container: document.getElementById('animationDiagram1'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/diagram/1.json',
        name: 'myAnimation',
    });

    var animationDiagram2 = bodymovin.loadAnimation({
        container: document.getElementById('animationDiagram2'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/diagram/2.json',
        name: 'myAnimation',
    });

    var animationDiagram3 = bodymovin.loadAnimation({
        container: document.getElementById('animationDiagram3'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/diagram/3.json',
        name: 'myAnimation',
    });

    var animationDiagram4 = bodymovin.loadAnimation({
        container: document.getElementById('animationDiagram4'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/diagram/4.json',
        name: 'myAnimation',
    });

    var animationKey = bodymovin.loadAnimation({
        container: document.getElementById('animationKey'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/key.json',
        name: 'myAnimation',
    });

    var animationIndo = bodymovin.loadAnimation({
        container: document.getElementById('animationIndo'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'asset/json/indo.json',
        name: 'myAnimation',
    });

    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        //navigation: true,
        //anchors: ['cover', 'start'],
        lockAnchors: true,
        //scrollOverflow: true,

        onLeave: function (origin, destination, direction) {
            var leavingSection = this;

            if (origin.index == 0 && direction == 'down') {
                $(".coverImg").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        paramSphere.playSegments([0, 120], true);
                        $(".bgColor__night").removeClass("opac0")
                        $(".nightStars").removeClass("opac0")
                    }
                });
                $(".sphere").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".ribbon").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700
                });
                $(".challengeRibbon").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700
                });
                $(".challengeTitle").velocity({
                    opacity: "1"
                }, {
                    delay: 1000,
                    duration: 700
                });
                $(".challengeTxt").velocity({
                    opacity: "1"
                }, {
                    delay: 1300,
                    duration: 700
                });

                $(".coverAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                })
            }
            if (origin.index == 1 && direction == 'up') {
                $(".coverImg").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".bgColor__night").addClass("opac0")
                        $(".nightStars").addClass("opac0")
                    },
                    complete: function () {}
                });
                $(".coverAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".sphere").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".ribbon").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".challengeRibbon").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".challengeTitle").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".challengeTxt").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 1 && direction == 'down') {
                $(".challengeRibbon").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".challengeTitle").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".challengeTxt").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".event1Ribbon").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        changeSlide(60)
                    },
                    complete: function () {
                        $(".sphereAnim").addClass("scale")
                    }
                });
                $(".eventBox1").velocity({
                    opacity: "1",
                    left: "0vw"
                }, {
                    delay: 400,
                    duration: 700
                });

            }
            if (origin.index == 2 && direction == 'up') {
                $(".challengeRibbon").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".challengeTitle").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".challengeTxt").velocity({
                    opacity: "1"
                }, {
                    delay: 1000,
                    duration: 700
                });
                $(".event1Ribbon").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        playInitial(true)
                        $(".sphereAnim").removeClass("scale")
                    },
                });
                $(".eventBox1").velocity({
                    opacity: "0",
                    left: "-25vw"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 2 && direction == 'down') {
                $(".eventBox1").velocity({
                    opacity: "0",
                    left: "-25vw"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".eventBox2").velocity({
                    opacity: "1",
                    left: "0vw"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        changeSlide(90, 60)
                    },
                });
            }
            if (origin.index == 3 && direction == 'up') {
                $(".eventBox2").velocity({
                    opacity: "0",
                    left: "-25vw"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".eventBox1").velocity({
                    opacity: "1",
                    left: "0vw"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        changeSlide(60, 90, true)
                    },
                });
            }
            if (origin.index == 3 && direction == 'down') {
                $(".eventBox2").velocity({
                    opacity: "0",
                    left: "-25vw"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".event1Ribbon").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".riskBox1").velocity({
                    opacity: "1",
                    left: "0vw"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".risk1Ribbon").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 4 && direction == 'up') {
                $(".riskBox1").velocity({
                    opacity: "0",
                    left: "-25vw"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".eventBox2").velocity({
                    opacity: "1",
                    left: "0vw"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".risk1Ribbon").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".event1Ribbon").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 4 && direction == 'down') {
                $(".riskBox1").velocity({
                    opacity: "0",
                    left: "-25vw"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".riskBox2").velocity({
                    opacity: "1",
                    left: "0vw"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 5 && direction == 'up') {
                $(".riskBox2").velocity({
                    opacity: "0",
                    left: "-25vw"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".riskBox1").velocity({
                    opacity: "1",
                    left: "0vw"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 5 && direction == 'down') {
                $(".riskBox2").velocity({
                    opacity: "0",
                    left: "-25vw"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".ribbon").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".risk1Ribbon").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".trendItem1").velocity({
                    opacity: "1",
                    left: "0vw"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".trendItem2").velocity({
                    opacity: "1",
                    left: "0vw"
                }, {
                    delay: 300,
                    duration: 700
                });
                $(".trendItem3").velocity({
                    opacity: "1",
                    left: "0vw"
                }, {
                    delay: 600,
                    duration: 700
                });
                $(".trendItem4").velocity({
                    opacity: "1",
                    left: "0vw"
                }, {
                    delay: 900,
                    duration: 700
                });
                $(".trendItem5").velocity({
                    opacity: "1",
                    left: "0vw"
                }, {
                    delay: 1200,
                    duration: 700
                });
            }
            if (origin.index == 6 && direction == 'up') {
                $(".trendItem").velocity({
                    opacity: "0",
                    left: "-25vw"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".riskBox2").velocity({
                    opacity: "1",
                    left: "0vw"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".ribbon").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".risk1Ribbon").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 6 && direction == 'down') {
                $(".ribbon").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".predictRibbon").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".predictBox").velocity({
                    opacity: "1",
                    left: "0vw"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".trendItem").velocity({
                    opacity: "0",
                    left: "-25vw"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 7 && direction == 'up') {
                $(".ribbon").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".predictRibbon").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".predictBox").velocity({
                    opacity: "0",
                    left: "-25vw"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".trendItem1").velocity({
                    opacity: "1",
                    left: "0vw"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".trendItem2").velocity({
                    opacity: "1",
                    left: "0vw"
                }, {
                    delay: 300,
                    duration: 700
                });
                $(".trendItem3").velocity({
                    opacity: "1",
                    left: "0vw"
                }, {
                    delay: 600,
                    duration: 700
                });
                $(".trendItem4").velocity({
                    opacity: "1",
                    left: "0vw"
                }, {
                    delay: 900,
                    duration: 700
                });
                $(".trendItem5").velocity({
                    opacity: "1",
                    left: "0vw"
                }, {
                    delay: 1200,
                    duration: 700
                });
            }
            if (origin.index == 7 && direction == 'down') {
                $(".ribbon").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".predictRibbon").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".predictBox").velocity({
                    opacity: "0",
                    left: "-25vw"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".marketBox").velocity({
                    opacity: "1",
                    left: "0vw"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        //indo map
                        changeSlide(20, 90, true)
                        $(".bgColor__night").addClass("opac0")
                    }
                });
            }
            if (origin.index == 8 && direction == 'up') {
                $(".ribbon").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".predictRibbon").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".predictBox").velocity({
                    opacity: "1",
                    left: "0vw"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".marketBox").velocity({
                    opacity: "0",
                    left: "-25vw"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        changeSlide(90, 20)
                        $(".bgColor__night").removeClass("opac0")
                    }
                });
            }
            if (origin.index == 8 && direction == 'down') {
                $(".marketBox").velocity({
                    opacity: "0",
                    left: "-25vw"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".howBox").velocity({
                    opacity: "1",
                    left: "0vw"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 9 && direction == 'up') {
                $(".marketBox").velocity({
                    opacity: "1",
                    left: "0vw"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".howBox").velocity({
                    opacity: "0",
                    left: "-25vw"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 9 && direction == 'down') {
                $(".econ1").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".nightStars").addClass("opac0")
                    }
                });
                $(".econ1").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 400
                });
            }
            if (origin.index == 10 && direction == 'up') {
                $(".econ1").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $(".nightStars").removeClass("opac0")
                    }
                });
            }
        }
    })

    // fullpage_api.setAllowScrolling(false);
    // fullpage_api.setKeyboardScrolling(false);

    //stars map
    //https://codepen.io/megan-durham/pen/JjRYdzb
    var rand = Math.random();

    var map = document.querySelector('#starmap');

    function makeStar() {
        var newstar = document.createElement('div');
        newstar.style.backgroundColor = '#fff';
        newstar.style.borderRadius = '50%';
        newstar.style.position = 'absolute';
        newstar.style.top = Math.random() * 100 + '%';
        newstar.style.left = Math.random() * 100 + '%';
        newstar.style.height = Math.random() * 10 + 'px';
        newstar.style.width = newstar.style.height;
        newstar.classList.add('star');
        var glow = Math.random() * 10;
        newstar.style.boxShadow = '0 0 ' + glow + 'px' + " " + glow / 2 + 'px #fff';
        newstar.style.animationDuration = Math.random() * 3 + 1 + 's';
        map.appendChild(newstar);

        var stArr = document.querySelectorAll('.star');
        if (stArr.length >= 50) {
            clearInterval(fadeInt);
        }
    }

    var fadeInt = setInterval(makeStar, 100);

    //sphere pause event
    function changeSlide(param, from, loop) {
        var cur = paramSphere.currentRawFrame,
            setframe = param,
            setfrom = from
        if (!!from) {
            if (loop == true) {
                //slide mundur
                paramSphere.playSegments([
                    [setfrom, 120],
                    [0, setframe]
                ], true);
                waitYouCantScroll()
                paramSphere.onLoopComplete = function () {
                    youCanScroll()
                };
            } else {
                //slide maju
                paramSphere.playSegments([setfrom, setframe], true);
                waitYouCantScroll()
                paramSphere.onLoopComplete = function () {
                    youCanScroll()
                };
            }
        } else {
            //paramSphere.playSegments([cur, setframe], true);
            paramSphere.playSegments([
                [cur, 120],
                [0, setframe]
            ], true);
            waitYouCantScroll()
            paramSphere.onLoopComplete = function () {
                youCanScroll()
            };
        }
        paramSphere.addEventListener('loopComplete', pause)

    }

    function pause() {
        paramSphere.removeEventListener('loopComplete', pause);
        paramSphere.goToAndStop(paramSphere.totalFrames - 1, true) //stop at the last frame of the current segment
        console.log(paramSphere.getDuration(false))
        console.log(paramSphere.totalFrames)
    }

    function playInitial(loop) {
        // paramSphere.onLoopComplete = function () {
        // };
        var cur = paramSphere.currentRawFrame
        if (loop == true) {
            paramSphere.playSegments([cur, 120], [0, 120], true)
            paramSphere.playSegments([0, 120], false)
            waitYouCantScroll()
            paramSphere.onLoopComplete = function () {
                youCanScroll()
            };
        } else {
            paramSphere.playSegments([0, 120], true)
        }
    }

    function youCanScroll() {
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);
    }

    function waitYouCantScroll() {
        fullpage_api.setAllowScrolling(false);
        fullpage_api.setKeyboardScrolling(false);
    }

    //synergy area
    $(".synergyArea").hover(function () {
        var num = $(this).attr('num'),
            strnum = new String(num),
            icon = $("[class*='synergyIcon" + strnum + "']"),
            title = $("[class*='synergyTitle" + strnum + "']");
        $(".synergyArea").toggleClass("start")
        $(this).toggleClass("start")
        icon.toggleClass("active")
        title.toggleClass("opac0")
        $('.synergyIconCircle').toggleClass("opac0")
        //console.log(title)
    });

    //diagram popup
    $('.policyBtn').hover(function () {
        var num = $(this).attr('num'),
            strnum = new String(num),
            icon = $("[class*='policyBi" + strnum + "']"),
            title = $("[class*='policyTitle" + strnum + "']")
        $(".policyBi:not(icon)").toggleClass("start")
        $(".policyBtn").not(this).toggleClass("start")
        icon.toggleClass("start")
        title.toggleClass("start")
    });
    $('.policyPop__close').on('click', function () {
        closePopup()
    })
    $('.policyPop__wrap').on('click', function (e) {
        e.stopPropagation();
    })
    $('.policyPopup').on('click', function () {
        closePopup()
    })
    $('.policyBtn').on('click', function () {
        var num = $(this).attr('num'),
            strnum = new String(num),
            pop = $("[class*='policyPopup" + strnum + "']");
        pop.addClass("active")
        waitYouCantScroll()
        //play animation
        if (strnum == 0) {
            animationDiagram0.play()
        } else if (strnum == 1) {
            animationDiagram1.play()
        } else if (strnum == 2) {
            animationDiagram2.play()
        } else if (strnum == 3) {
            animationDiagram3.play()
        } else if (strnum == 4) {
            animationDiagram4.play()
        }
    })

    function closePopup() {
        $('.policyPopup').removeClass("active")
        youCanScroll()
    }
})

/* s: Get HEIGHT Device */
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener("resize", appHeight)
appHeight()
/* e: Get HEIGHT Device */