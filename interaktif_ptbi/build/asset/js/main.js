$(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').addClass("done");
        $('.coverTxt--1').addClass("animation__sizeOut");
        $('.coverTxt--2').addClass("animation__sizeRotate");
        $('.coverTxt--3').addClass("animation__sizeOut");
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);

        $(".scroll-guide").removeClass('opac0')
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
    animationLoader.setSpeed(0.5);

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
        autoplay: false,
        path: 'asset/json/russia/event1-pin.json',
        name: 'myAnimation',
    });
    var animationEvent1Bomb = bodymovin.loadAnimation({
        container: document.getElementById('animationEvent1Bomb'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'asset/json/russia/event1-bomb.json',
        name: 'myAnimation',
    });
    var animationEvent1Tank = bodymovin.loadAnimation({
        container: document.getElementById('animationEvent1Tank'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'asset/json/russia/event1-tank.json',
        name: 'myAnimation',
    });

    var animationEvent2 = bodymovin.loadAnimation({
        container: document.getElementById('animationEvent2'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/usa/event2-pin.json',
        name: 'myAnimation',
    });
    var animationEvent2Pic = bodymovin.loadAnimation({
        container: document.getElementById('animationEvent2Pic'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'asset/json/usa/event2-trump.json',
        name: 'myAnimation',
    });
    var animationTele = bodymovin.loadAnimation({
        container: document.getElementById('animationTele'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/usa/risk-tele.json',
        name: 'myAnimation',
    });
    var animationArrow = bodymovin.loadAnimation({
        container: document.getElementById('animationArrow'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'asset/json/usa/risk-arrow.json',
        name: 'myAnimation',
    });

    var animationPredict = bodymovin.loadAnimation({
        container: document.getElementById('animationPredict'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/usa/predict-pin.json',
        name: 'myAnimation',
    });

    var animationDayPin = bodymovin.loadAnimation({
        container: document.getElementById('animationDayPin'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/asia/day-pin.json',
        name: 'myAnimation',
    });
    var animationDayFlag = bodymovin.loadAnimation({
        container: document.getElementById('animationDayFlag'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'asset/json/asia/day-flag.json',
        name: 'myAnimation',
    });
    var animationDayPic = bodymovin.loadAnimation({
        container: document.getElementById('animationDayPic'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/asia/day-pic.json',
        name: 'myAnimation',
    });

    var animationEcon = bodymovin.loadAnimation({
        container: document.getElementById('animationEcon'),
        renderer: 'svg',
        loop: false,
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
        autoplay: false,
        path: 'asset/json/key.json',
        name: 'myAnimation',
    });

    var animationIndo = bodymovin.loadAnimation({
        container: document.getElementById('animationIndo'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
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
                $(".ribbonNight").velocity({
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
                $(".ribbonNight").velocity({
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
                        $('.sphereEventLine1').removeClass('active')
                        $('.sphereEventLine2').removeClass('active')
                    },
                });
                $(".sphereEvent1").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".eventBox1").velocity({
                    opacity: "0",
                    left: "-320px"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 2 && direction == 'down') {
                $(".eventBox1").velocity({
                    opacity: "0",
                    left: "-320px"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        changeSlide(90, 60)
                        $('.sphereEventLine1').removeClass('active')
                        $('.sphereEventLine2').removeClass('active')
                    }
                });
                $(".sphereEvent1").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 3 && direction == 'up') {
                $(".eventBox2").velocity({
                    opacity: "0",
                    left: "-320px"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        changeSlide(60, 90, true)
                    },
                });
                $(".sphereEvent2").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 3 && direction == 'down') {
                $(".eventBox2").velocity({
                    opacity: "0",
                    left: "-320px"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".sphereEvent2Pic").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".event1Ribbon").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".riskBox1").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".risk1Ribbon").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        console.log('trumpout')
                        animationEvent2.playSegments([140, 200], true);
                        console.log(animationEvent2.getDuration(false))
                        console.log(animationEvent2.totalFrames)
                        animationEvent2.onLoopComplete = function () {
                            animationEvent2.goToAndStop(animationEvent2.totalFrames - 1, true)
                        }
                    }
                });
            }
            if (origin.index == 4 && direction == 'up') {
                $(".riskBox1").velocity({
                    opacity: "0",
                    left: "-320px"
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
                slide3()
            }
            if (origin.index == 4 && direction == 'down') {
                $(".riskBox1").velocity({
                    opacity: "0",
                    left: "-320px"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".sphereEvent2Pin").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        animationTele.play()
                        $(".sphereZoom").addClass("riskactive")
                    }
                });
                $(".riskBox2").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".sphereEvent2Pic").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".sphereTele").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        animationTele.play()
                    }
                });
                $(".sphereArrow").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 700,
                    complete: function () {
                        animationArrow.play()
                    }
                });
            }
            if (origin.index == 5 && direction == 'up') {
                $(".riskBox2").velocity({
                    opacity: "0",
                    left: "-320px"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".sphereZoom").removeClass("riskactive")
                    }
                });
                $(".sphereEvent2Pin").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".riskBox1").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".sphereRisk2").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 5 && direction == 'down') {
                $(".riskBox2").velocity({
                    opacity: "0",
                    left: "-320px"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".sphereZoom").removeClass("riskactive")
                    }
                });
                $(".ribbonNight").velocity({
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
                $(".sphereRisk2").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".sphereTrend").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".trendItem1").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 300,
                    duration: 700
                });
                $(".trendItem2").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 600,
                    duration: 700
                });
                $(".trendItem3").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 900,
                    duration: 700
                });
                $(".trendItem4").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 1200,
                    duration: 700
                });
                $(".trendItem5").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 1500,
                    duration: 700
                });
            }
            if (origin.index == 6 && direction == 'up') {
                $(".trendItem").velocity({
                    opacity: "0",
                    left: "-320px"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $(".sphereZoom").addClass("riskactive")
                    }
                });
                $(".sphereTrend").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".riskBox2").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".sphereTele").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".sphereArrow").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".ribbonNight").velocity({
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
                $(".ribbonNight").velocity({
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
                $(".spherePredict").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        animationPredict.play()
                    }
                });
                $(".predictBox").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".sphereTrend").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".trendItem").velocity({
                    opacity: "0",
                    left: "-320px"
                }, {
                    delay: 0,
                    duration: 300
                });
                console.log('6down')
            }
            if (origin.index == 7 && direction == 'up') {
                $(".ribbonNight").velocity({
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
                    left: "-320px"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".spherePredict").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });

                $(".sphereTrend").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".trendItem1").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 300,
                    duration: 700
                });
                $(".trendItem2").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 600,
                    duration: 700
                });
                $(".trendItem3").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 900,
                    duration: 700
                });
                $(".trendItem4").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 1200,
                    duration: 700
                });
                $(".trendItem5").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 1500,
                    duration: 700
                });

                console.log('7up')
            }
            if (origin.index == 7 && direction == 'down') {
                $(".ribbonNight").velocity({
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
                    left: "-320px"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".spherePredict").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        //indo map
                        changeSlide(30, 90, true)
                        $(".bgColor__night").addClass("opac0")
                    }
                });

                console.log('7down')
            }
            if (origin.index == 8 && direction == 'up') {
                $(".ribbonNight").velocity({
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
                    left: "0"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".spherePredict").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        animationPredict.play()
                    }
                });
                $(".marketBox").velocity({
                    opacity: "0",
                    left: "-320px"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        changeSlide(90, 30)
                        $(".bgColor__night").removeClass("opac0")
                    }
                });
                $(".sphereDay1").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });

                console.log('8up')
            }
            if (origin.index == 8 && direction == 'down') {
                $(".marketBox").velocity({
                    opacity: "0",
                    left: "-320px"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".howBox").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".sphereDayPin").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".sphereZoom").addClass("dayactive")
                    },
                    complete: function () {
                        animationDayPin.play()
                    }
                });
                $(".sphereDay1").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });

                console.log(animationEcon.getDuration(false))
                console.log(animationEcon.totalFrames)
                console.log('8down')
            }
            if (origin.index == 9 && direction == 'up') {
                $(".marketBox").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".howBox").velocity({
                    opacity: "0",
                    left: "-320px"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".sphereZoom").removeClass("dayactive")
                    }
                });
                $(".sphereDayPin").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".sphereDay1").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });

                console.log('9up')
            }
            if (origin.index == 9 && direction == 'down') {
                $(".econ1").velocity({
                    opacity: "1",
                    top: "0"
                }, {
                    delay: 700,
                    duration: 700,
                    begin: function () {
                        $(".nightStars").addClass("opac0")
                    }
                });
                $(".building").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".econAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        animationEcon.playSegments([0, 40], true);
                    },
                    complete: function () {
                        $(".econNum1").removeClass('opac0')
                    }
                });
                $(".sphere").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".howBox").velocity({
                    opacity: "0",
                    left: "-320px"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".sphereZoom").removeClass("dayactive")
                    }
                });
                $(".sphereDayPin").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 10 && direction == 'up') {
                $(".econ1").velocity({
                    opacity: "0",
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $(".nightStars").removeClass("opac0")
                        $(".econNum").addClass('opac0')
                        $(".sphereZoom").addClass("dayactive")
                    }
                });
                $(".econNum2").velocity({
                    top: "50px"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".econAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".sphere").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".sphereDayPin").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".howBox").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".building").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 10 && direction == 'down') {
                console.log('10down')
                animationEcon.playSegments([40, 240], true);
                setTimeout(function () {
                    $(".econNum2").velocity({
                        top: "0"
                    }, {
                        delay: 0,
                        duration: 300
                    });
                    $(".econNum1").addClass('opac0')
                    $(".econNum2").removeClass('opac0')
                }, 700);
            }
            if (origin.index == 11 && direction == 'up') {
                setTimeout(function () {
                    animationEcon.playSegments([0, 40], true);
                    $(".econNum2").velocity({
                        top: "50px"
                    }, {
                        delay: 0,
                        duration: 300
                    });
                    $(".econNum2").addClass('opac0')
                    $(".econNum1").removeClass('opac0')
                }, 700);
            }
            if (origin.index == 11 && direction == 'down') {
                $(".inflaAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        animationInfla.play()
                        $(".inflaNum").removeClass('opac0')
                    }
                });
                $(".inflaWrap").velocity({
                    opacity: "1",
                    top: "0"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".econ1").velocity({
                    opacity: "0",
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".econAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $(".econNum").addClass('opac0')
                    }
                });
            }
            if (origin.index == 12 && direction == 'up') {
                $(".econAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".econNum2").removeClass('opac0')
                        $(".inflaNum").addClass('opac0')
                    }
                });
                $(".econNum2").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".econ1").velocity({
                    opacity: "1",
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".inflaWrap").velocity({
                    opacity: "0",
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".inflaAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 12 && direction == 'down') {
                $(".inflaWrap").velocity({
                    opacity: "0",
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $(".inflaNum").addClass('opac0')
                    }
                });
                $(".inflaAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".rateAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        animationRate.play()
                    }
                });
                $(".rateWrap").velocity({
                    opacity: "1",
                    top: "0"
                }, {
                    delay: 700,
                    duration: 700
                });
            }
            if (origin.index == 13 && direction == 'up') {
                $(".inflaAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        $(".inflaNum").removeClass('opac0')
                    }
                });
                $(".inflaWrap").velocity({
                    opacity: "1",
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".rateWrap").velocity({
                    opacity: "0",
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".rateAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 13 && direction == 'down') {
                $(".rateWrap").velocity({
                    opacity: "0",
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".rateAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".stableAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        animationStable.play()
                    }
                });
                $(".stableWrap").velocity({
                    opacity: "1",
                    top: "0"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".buildingSun").velocity({
                    opacity: "1",
                    top: "0"
                }, {
                    delay: 700,
                    duration: 700
                });
            }
            if (origin.index == 14 && direction == 'up') {
                $(".rateAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".rateWrap").velocity({
                    opacity: "1",
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".stableWrap").velocity({
                    opacity: "0",
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".stableAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".buildingSun").velocity({
                    opacity: "0",
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 14 && direction == 'down') {
                $(".stableWrap").velocity({
                    opacity: "0",
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".stableAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".growthAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        animationGrowth.play()
                        $(".growthNum").removeClass('opac0')
                    }
                });
                $(".growthWrap").velocity({
                    opacity: "1",
                    top: "0"
                }, {
                    delay: 700,
                    duration: 700
                });
            }
            if (origin.index == 15 && direction == 'up') {
                $(".stableAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".stableWrap").velocity({
                    opacity: "1",
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".growthWrap").velocity({
                    opacity: "0",
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $(".growthNum").addClass('opac0')
                    }
                });
                $(".growthAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 15 && direction == 'down') {
                $(".growthWrap").velocity({
                    opacity: "0",
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".growthAnim").velocity({
                    opacity: "0"
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
                $(".quote").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.bgColor__grey').removeClass('opac0')
                        $(".growthNum").addClass('opac0')
                    }
                });
                $(".quoteTxt").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".quoteAttr").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".buildingSun").velocity({
                    opacity: "0",
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 16 && direction == 'up') {
                $(".growthAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.bgColor__grey').addClass('opac0')
                    },
                    complete: function () {
                        $(".growthNum").removeClass('opac0')
                    }
                });
                $(".growthWrap").velocity({
                    opacity: "1",
                    top: "0"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".quote").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".quoteTxt").velocity({
                    opacity: "0",
                    left: "100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".quoteAttr").velocity({
                    opacity: "0",
                    left: "-100vw"
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
                $(".buildingSun").velocity({
                    opacity: "1",
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 16 && direction == 'down') {
                $(".quote").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".quoteTxt").velocity({
                    opacity: "0",
                    left: "100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".quoteAttr").velocity({
                    opacity: "0",
                    left: "-100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".synergy").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".synergy").addClass('active')
                    }
                });
                $(".synergyCaption").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 17 && direction == 'up') {
                $(".quote").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".quoteTxt").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".quoteAttr").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".synergy").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $(".synergy").removeClass('active')
                    }
                });
                $(".synergyCaption").velocity({
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 17 && direction == 'down') {
                $(".synergy").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $(".synergy").removeClass('active')
                    }
                });
                $(".synergyCaption").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".balanceAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        animationBalance.play()
                    }
                });
                $(".balanceWrap").velocity({
                    opacity: "1",
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 18 && direction == 'up') {
                $(".synergy").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".synergy").addClass('active')
                    }
                });
                $(".synergyCaption").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".balanceAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".balanceWrap").velocity({
                    opacity: "0",
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 18 && direction == 'down') {
                $(".balanceAnim").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".balanceWrap").velocity({
                    opacity: "0",
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".policy").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".policy").addClass('active')
                        $(".bgColor__dark").removeClass('opac0')
                    }
                });
                $(".policyCaption").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 19 && direction == 'up') {
                $(".policy").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $(".policy").removeClass('active')
                        $(".bgColor__dark").addClass('opac0')
                    }
                });
                $(".policyCaption").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".balanceAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".balanceWrap").velocity({
                    opacity: "1",
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 19 && direction == 'down') {
                $(".policy").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $(".policy").removeClass('active')
                    }
                });
                $(".policyCaption").velocity({
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".keyImg").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        animationKey.play()
                    }
                });
                $(".keyTitle").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".ribbonKey").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".keyMap").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700,
                    complete: function () {
                        animationIndo.play()
                    }
                });
            }
            if (origin.index == 20 && direction == 'up') {
                $(".policy").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".policy").addClass('active')
                    }
                });
                $(".policyCaption").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".keyImg").velocity({
                    opacity: "0",
                    left: "100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".keyTitle").velocity({
                    opacity: "0",
                    left: "-100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".ribbonKey").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".keyMap").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 20 && direction == 'down') {
                $(".keyImg").velocity({
                    opacity: "0",
                    left: "100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".keyTitle").velocity({
                    opacity: "0",
                    left: "-100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".ribbonKey").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".keyMap").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
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
            if (origin.index == 21 && direction == 'up') {
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
                $(".keyImg").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".keyTitle").velocity({
                    opacity: "1",
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".ribbonKey").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".keyMap").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700
                });
            }
        }
    })

    waitYouCantScroll()

    //stars map
    //https://codepen.io/megan-durham/pen/JjRYdzb
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
        if (window.innerHeight > window.innerWidth) {
            // Portrait mode
            if (stArr.length >= 15) clearInterval(fadeInt);
        } else {
            // Landscape mode
            if (stArr.length >= 50) clearInterval(fadeInt);
        }
    }

    var fadeInt = setInterval(makeStar, 100);

    //sphere pause event
    function changeSlide(param, from, loop) {
        const cur = paramSphere.currentRawFrame;
        const setframe = param;
        const setfrom = from;
    
        const playSegmentsWithCallback = (segments) => {
            paramSphere.playSegments(segments, true);
            waitYouCantScroll();
            paramSphere.onLoopComplete = function () {
                youCanScroll();
                playAnimation();
            };
        };
    
        const playAnimation = () => {
            const bodyClass = $('body').attr('class');
    
            if (bodyClass.includes('fp-viewing-2')) {
                slide2();
            } else if (bodyClass.includes('fp-viewing-3')) {
                slide3();
            } else if (bodyClass.includes('fp-viewing-8')) {
                slideFlag();
            }
        };
    
        if (!!from) {
            if (loop) {
                // Slide backward
                playSegmentsWithCallback([[setfrom, 120], [0, setframe]]);
            } else {
                // Slide forward
                playSegmentsWithCallback([setfrom, setframe]);
            }
        } else {
            // Default case, play with reset
            playSegmentsWithCallback([[cur, 120], [0, setframe]]);
        }
    
        paramSphere.addEventListener('loopComplete', pause);
    }
    
    function pause() {
        paramSphere.removeEventListener('loopComplete', pause);
        paramSphere.goToAndStop(paramSphere.totalFrames - 1, true); // Stop at the last frame
        console.log(paramSphere.getDuration(false));
        console.log(paramSphere.totalFrames);
    }
    
    function playInitial(loop) {
        const cur = paramSphere.currentRawFrame;
        
        if (loop) {
            paramSphere.playSegments([cur, 120], [0, 120], true);
            paramSphere.playSegments([0, 120], false);
            waitYouCantScroll();
            setTimeout(() => {
                youCanScroll();
                console.log('scroll up');
            }, 3000);
        } else {
            paramSphere.playSegments([0, 120], true);
        }
    }
    

    function slide2() {
        $(".sphereEvent1Pin").velocity({
            opacity: "1"
        }, {
            delay: 0,
            duration: 700,
            begin: function () {
                animationEvent1.play()
                $('.sphereEventLine1').addClass('active')
                $('.sphereEventLine2').addClass('active')
            }
        });
        $(".eventBox1").velocity({
            opacity: "1",
            left: "0"
        }, {
            delay: 1400,
            duration: 700
        });
        $(".sphereEvent1Pic").velocity({
            opacity: "1"
        }, {
            delay: 1400,
            duration: 700,
            begin: function () {
                animationEvent1Bomb.play()
                animationEvent1Tank.play()
            }
        });
    }

    function slide3() {
        $(".sphereEvent2Pin").velocity({
            opacity: "1"
        }, {
            delay: 0,
            duration: 700,
            begin: function () {
                animationEvent2.playSegments([0, 40], true);
                animationEvent2.onLoopComplete = function () {
                    animationEvent2.goToAndStop(animationEvent2.totalFrames - 1, true)
                    console.log(animationEvent2.getDuration(false))
                    console.log(animationEvent2.totalFrames)
                }
            }
        });
        $(".eventBox2").velocity({
            opacity: "1",
            left: "0"
        }, {
            delay: 700,
            duration: 700
        });
        $(".sphereEvent2Pic").velocity({
            opacity: "1"
        }, {
            delay: 700,
            duration: 700,
            begin: function () {
                animationEvent2Pic.play()
            }
        });
    }

    function slideFlag() {
        $(".sphereDayFlag").velocity({
            opacity: "1"
        }, {
            delay: 0,
            duration: 700,
            begin: function () {
                //indo map
            },
            complete: function () {
                animationDayFlag.play()
            }
        });
        $(".sphereDayPic").velocity({
            opacity: "1"
        }, {
            delay: 700,
            duration: 700,
            begin: function () {
                animationDayPic.play()
            }
        });
        $(".marketBox").velocity({
            opacity: "1",
            left: "0"
        }, {
            delay: 700,
            duration: 700
        });
    }

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
    const animations = [
        animationDiagram0,
        animationDiagram1,
        animationDiagram2,
        animationDiagram3,
        animationDiagram4
    ];
    $('.policyBtn').on('click', function () {
        var num = $(this).attr('num'),
            strnum = new String(num),
            pop = $("[class*='policyPopup" + strnum + "']");
        pop.addClass("active")
        waitYouCantScroll()
        //play animation
        if (strnum >= 0 && strnum <= 4) {
            animations[strnum].play();
        }
    })
    $('.sphereRisk2').on('click', function () {
        $('.riskPopup').addClass("active")
        waitYouCantScroll()
    })
    $('.riskPop__img').on('click', function (e) {
        e.stopPropagation();
    })
    $('.riskPop__close').on('click', function () {
        closePopup()
    })
    $('.popup').on('click', function () {
        closePopup()
    })

    function closePopup() {
        $('.popup').removeClass("active")
        youCanScroll()
    }

    //click on indo map
    $('.sphereDayPin').on('click', function () {
        fullpage_api.moveTo(11);
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