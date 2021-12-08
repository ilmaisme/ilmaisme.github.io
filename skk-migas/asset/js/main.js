var is_mobile = false;
$(document).ready(function () {   

    function reset() {
        $("#reduxmob").eraser('reset');
        $(".imgEraser").show();
    }

    // BODYMOVIN Animation
    // 1
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationPump'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/pompa.json',
        name: 'myAnimation',
    });
    // 2
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationPump2'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/pompa.json',
        name: 'myAnimation',
    });
    // 3
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationPump3'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/pompa.json',
        name: 'myAnimation',
    });
    // 4
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationPump4'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/pompa.json',
        name: 'myAnimation',
    });
    // 5
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationDolphins'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/dolphins.json',
        name: 'myAnimation',
    });
    // 6
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationFishing'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/mancing.json',
        name: 'myAnimation',
    });

    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        //navigation: true,
        lockAnchors: true,
        //scrollOverflow: true,

        onLeave: function (origin, destination, direction) {
            var leavingSection = this;

            if (origin.index == 0 && direction == 'down') {
                $(".bg1").velocity({
                    left: "-100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bg2").velocity({
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
            }

            if (origin.index == 1 && direction == 'up') {
                $(".bg1").velocity({
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bg2").velocity({
                    left: "100%"
                }, {
                    delay: 0,
                    duration: 700
                });
            }

            if (origin.index == 1 && direction == 'down') {
                $(".bg2").velocity({
                    left: "-100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bg3").velocity({
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgTanker__wrap").addClass("move");
            }

            if (origin.index == 2 && direction == 'up') {
                $(".bg2").velocity({
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bg3").velocity({
                    left: "100%"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 2 && direction == 'down') {
                $(".imgPump__bg").addClass('active');
                $(".bg3").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bg4").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgCloud").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".intro").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgColor--sky").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgColor--gray").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".article4").fadeIn(700);
                $(".bgStatic__wrap").addClass("active");
            }

            if (origin.index == 3 && direction == 'up') {
                $(".imgPump__bg").removeClass('active');
                $(".bgStatic__wrap").removeClass("active");
                $(".bg3").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bg4").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgCloud").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".intro").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgColor--sky").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgColor--gray").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".article4").fadeOut(300);
            }

            if (origin.index == 3 && direction == 'down') {
                $(".bgStatic__wrap").removeClass("active");
                $(".articleText4").fadeOut(300);
                $(".imgCursorPump").velocity({
                    opacity: "0"
                });
                $(".articleText5--left").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 300,
                    duration: 700
                });
                $(".articleText5--right").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 600,
                    duration: 700
                });
            }

            if (origin.index == 4 && direction == 'up') {
                $(".bgStatic__wrap").addClass("active");
                $(".articleText4").fadeIn(700);
                $(".articleText5").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 0
                });
                $(".imgCursorPump").velocity({
                    opacity: "1"
                });
            }

            if (origin.index == 4 && direction == 'down') {
                $(".imgPump__bg").removeClass('active');
                $(".bg4").velocity({
                    bottom: "100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgColor--gray").velocity({
                    bottom: "100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgColor--sky2").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bg6").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".articleText5").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".imgCursorPump").velocity({
                    opacity: "1"
                });
                $(".article6").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 300
                });
                $(".imgTanker__wrap2").addClass("move");
                $(".imgDolphins").addClass("animationDolphinsmove");
            }

            if (origin.index == 5 && direction == 'up') {
                $(".imgCursorPump").velocity({
                    opacity: "0"
                });
                $(".imgPump__bg").addClass('active');
                $(".bg4").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgColor--gray").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgColor--sky2").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bg6").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".articleText5--left").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 300,
                    duration: 700
                });
                $(".articleText5--right").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 600,
                    duration: 700
                });
                $(".article6").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }

            if (origin.index == 5 && direction == 'down') {
                //$(".bg6").fadeOut(300);
                $(".bg6").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".article6").fadeOut(300);
                $(".bgColor--circle").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 300,
                    complete: function () {
                        $(".imgLogo").addClass("active");
                    }
                });
                $(".imgLogo").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 300,
                });
            }

            if (origin.index == 6 && direction == 'up') {
                //$(".bg6").fadeIn(300);
                $(".bg6").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".article6").fadeIn(300);
                $(".bgColor--circle").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".imgLogo").removeClass("active");
                $(".imgLogo").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 0,
                });
            }

            if (origin.index == 6 && direction == 'down') {
                $(".imgLogo").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".imgLogo").addClass("right");
                        $(".imgLogo").addClass("scale");
                    },
                    complete: function () {}
                });
                $(".bg8").fadeIn(300);
            }

            if (origin.index == 7 && direction == 'up') {
                $(".imgLogo").removeClass("right");
                $(".bg8").fadeOut(300);
            }

            if (origin.index == 7 && direction == 'down') {
                $(".imgSkema").addClass("scale");
                $(".bg9").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgIcon1").velocity({
                    opacity: "1"
                }, {
                    delay: 600,
                    duration: 300
                });
                $(".imgIcon2").velocity({
                    opacity: "1"
                }, {
                    delay: 900,
                    duration: 300
                });
                $(".imgIcon3").velocity({
                    opacity: "1"
                }, {
                    delay: 1200,
                    duration: 300
                });
            }

            if (origin.index == 8 && direction == 'up') {
                $(".imgSkema").removeClass("scale");
                $(".bg9").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 0
                });
                $(".imgIcon").velocity({
                    opacity: "0"
                });
            }

            if (origin.index == 8 && direction == 'down') {
                $(".bgColor--circle").velocity({
                    bottom: "100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bg8").fadeOut(300);
                $(".imgIcon").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 0,
                    begin: function () {
                        $(".article9").velocity({
                            opacity: "0"
                        })
                        $(".imgIcon2").velocity({
                            opacity: "1"
                        })
                        $(".imgIcon2").addClass("move");
                        $(".imgIcon2__txt").velocity({
                            opacity: "0"
                        })
                    }
                });
                $(".imgLogo").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 0,
                    complete: function () {
                        $(".imgLogo").removeClass("active");
                    }
                });
                $(".bgColor--cream").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".article10").fadeIn(700);
                $(".bg10").velocity({
                    bottom: "0"
                }, {
                    delay: 300,
                    duration: 700
                });
                $(".bgStatic__erase").addClass("active");
            }

            if (origin.index == 9 && direction == 'up') {
                $(".bgColor--circle").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgLogo").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        $(".imgLogo").addClass("active");
                        $(".imgIcon2").removeClass("move");
                        $(".imgIcon2__txt").velocity({
                            opacity: "1"
                        })
                    }
                });
                $(".bg8").fadeIn(700);
                $(".imgIcon").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700,
                    begin: function () {
                        $(".article9").velocity({
                            opacity: "1"
                        })
                    }
                });
                $(".bgColor--cream").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".article10").fadeOut(300);
                $(".bg10").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgStatic__erase").removeClass("active");
            }

            if (origin.index == 9 && direction == 'down') {
                $(".article10").fadeOut(300);
                $(".article11").fadeIn(700);
                $(".articleText--help").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgEraser").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 300
                });
                $("body").addClass("cursor");
                $(".bgStatic__erase").addClass("pointer");
            }

            if (origin.index == 10 && direction == 'up') {
                $(".article10").fadeIn(700);
                $(".article11").fadeOut(300);
                $(".articleText--help").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".imgEraser").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $("body").removeClass("cursor");
                $(".bgStatic__erase").removeClass("pointer");
                $('#redux').eraser('reset');
                //$('#reduxmob').eraser('reset');
                reset();
            }

            if (origin.index == 10 && direction == 'down') {
                $("body").removeClass("cursor");
                $('#redux').eraser('clear');
                $('#reduxmob').eraser('clear');
                $(".article11").fadeOut(300);
                $(".article12").fadeIn(700);
                $(".articleText--help").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".imgEraser").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }

            if (origin.index == 11 && direction == 'up') {
                $('#redux').eraser('reset');
                //$('#reduxmob').eraser('reset');
                reset();
                $("body").addClass("cursor");
                $(".article11").fadeIn(700);
                $(".article12").fadeOut(300);
                $(".articleText--help").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgEraser").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 300
                });
            }

            if (origin.index == 11 && direction == 'down') {
                $(".bgStatic__erase").removeClass("active");
                $(".article12").fadeOut(300);
                $(".bgColor--cream").velocity({
                    bottom: "100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgColor--sky3").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bg13").velocity({
                    bottom: "0"
                }, {
                    delay: 300,
                    duration: 700
                });
            }
            if (origin.index == 12 && direction == 'up') {
                $(".bgStatic__erase").addClass("active");
                $(".article12").fadeIn(300);
                $(".bgColor--cream").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".article12").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgStatic__erase").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgColor--sky3").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bg13").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 12 && direction == 'down') {
                $(".bg13").velocity({
                    bottom: "100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bg14").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        $(".barCateg").addClass("active");
                        $(".mobCateg").addClass("active");
                    }
                });
                $(".bgStatic__wrap").addClass("active");
                $(".articleContent14__wrap").addClass("active");
                $(".barItem").velocity({
                    opacity: '1'
                }, {
                    delay: 1400,
                    duration: 700,
                    complete: function () {
                        $(".barItem").addClass("active");
                    }
                });
                $(".mobItem").velocity({
                    opacity: '1'
                }, {
                    delay: 1400,
                    duration: 700,
                    complete: function () {
                        $(".mobItem").addClass("active");
                    }
                });
            }
            if (origin.index == 13 && direction == 'up') {
                $(".bg13").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bg14").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgStatic__wrap").removeClass("active");
                $(".articleContent14__wrap").removeClass("active");
            }
            if (origin.index == 13 && direction == 'down') {
                $(".bgStatic__wrap").removeClass("active");
                $(".articleContent14__wrap").removeClass("active");
                $(".imgIcon2").velocity({
                    opacity: "0"
                })
                $(".bg14").velocity({
                    bottom: "100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgColor--sky3").velocity({
                    bottom: "100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgColor--sky4").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bg15").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".imgHill6").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        $(".imgHill7").addClass("pushUp");
                    }
                });
                $(".bgCloud").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                //content 
                $(".articleContent15__icon").velocity({
                    bottom: "0",
                    opacity: "1"
                }, {
                    delay: 1000,
                    duration: 300
                });
                $(".lci-1").velocity({
                    bottom: "0",
                    opacity: "1"
                }, {
                    delay: 1300,
                    duration: 300
                });
                $(".lci-2").velocity({
                    bottom: "0",
                    opacity: "1"
                }, {
                    delay: 1600,
                    duration: 300
                });
                $(".lci-3").velocity({
                    bottom: "0",
                    opacity: "1"
                }, {
                    delay: 1900,
                    duration: 300
                });
                $(".lci-4").velocity({
                    bottom: "0",
                    opacity: "1"
                }, {
                    delay: 2200,
                    duration: 300
                });
                $(".lci-5").velocity({
                    bottom: "0",
                    opacity: "1"
                }, {
                    delay: 2500,
                    duration: 300
                });
                $(".lci-6").velocity({
                    bottom: "0",
                    opacity: "1"
                }, {
                    delay: 2800,
                    duration: 300
                });

            }
            if (origin.index == 14 && direction == 'up') {
                $(".articleContent14__wrap").addClass("active");
                $(".bgStatic__wrap").addClass("active");
                $(".imgIcon2").velocity({
                    opacity: "1"
                })
                $(".bg14").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bg15").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".bgColor--sky3").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgColor--sky4").velocity({
                    bottom: "-100%",
                    top: "unset"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgHill6").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 300,
                    complete: function () {
                        $(".imgHill7").removeClass("pushUp");
                    }
                });
                $(".bgCloud").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".articleContent15__icon").velocity({
                    bottom: "-100%",
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".lci").velocity({
                    bottom: "-100%",
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
            }

            if (origin.index == 14 && direction == 'down') {
                $(".lci").fadeOut(300);
                $(".articleContent15__icon").addClass('move');
                $(".imgIcon4__txt").fadeOut(300);
                $(".article16").fadeIn(700);
                $(".imgTrophy__wrap").fadeIn(300);
                $(".imgTrophy__item1").velocity({
                    bottom: "0",
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".imgTrophy__item2").velocity({
                    bottom: "0",
                    opacity: "1"
                }, {
                    delay: 1000,
                    duration: 700
                });
                $(".imgTrophy__item3").velocity({
                    bottom: "0",
                    opacity: "1"
                }, {
                    delay: 1300,
                    duration: 700
                });
                $(".imgTrophy__item4").velocity({
                    bottom: "0",
                    opacity: "1"
                }, {
                    delay: 1600,
                    duration: 700
                });
            }
            if (origin.index == 15 && direction == 'up') {
                $(".lci").fadeIn(300);
                $(".articleContent15__icon").removeClass('move');
                $(".imgIcon4__txt").fadeIn(300);
                $(".article16").fadeOut(300);
                $(".imgTrophy__wrap").fadeOut(300);
                $(".imgTrophy").velocity({
                    bottom: "-100%",
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 15 && direction == 'down') {
                $(".articleContent16").fadeOut(300);
                $(".article17").fadeIn(300);
                $(".imgConserv1").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700
                });
                $(".imgConserv2").velocity({
                    opacity: "1"
                }, {
                    delay: 1000,
                    duration: 700
                });
                $(".imgConserv3").velocity({
                    opacity: "1"
                }, {
                    delay: 1300,
                    duration: 700
                });
                $(".imgConserv4").velocity({
                    opacity: "1"
                }, {
                    delay: 1600,
                    duration: 700
                });
                $(".imgConserv5").velocity({
                    opacity: "1"
                }, {
                    delay: 1900,
                    duration: 700
                });
            }
            if (origin.index == 16 && direction == 'up') {
                $(".articleContent16").fadeIn(300);
                $(".article17").fadeOut(300);
                $(".imgConserv").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 16 && direction == 'down') {
                $(".article17").fadeOut(300);
                $(".article18").fadeIn(300);
                $(".bg15").velocity({
                    left: "-100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bg18").velocity({
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".articleText18--1").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 300
                });
                $(".articleText18--2").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 300
                });
            }
            if (origin.index == 17 && direction == 'up') {
                $(".article17").fadeIn(300);
                $(".article18").fadeOut(300);
                $(".bg15").velocity({
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bg18").velocity({
                    left: "100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".articleText18").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 17 && direction == 'down') {
                $(".article18").fadeOut(300);
                $(".imgPipe5").velocity({
                    opacity: "0"
                });
                $(".imgPipe6").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".articleText18").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".article19").fadeIn(300);
                $(".bg19").fadeIn(300);
                $(".articleText19--1").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 300
                });
                $(".articleText19--2").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 300
                });
                $(".articleText19--3").velocity({
                    opacity: "1"
                }, {
                    delay: 1000,
                    duration: 300
                });
                $(".articleText19--4").velocity({
                    opacity: "1"
                }, {
                    delay: 1300,
                    duration: 300
                });
            }
            if (origin.index == 18 && direction == 'up') {
                $(".article18").fadeIn(300);
                $(".imgPipe5").velocity({
                    opacity: "1"
                });
                $(".imgPipe6").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".articleText18").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".article19").fadeOut(300);
                $(".bg19").fadeOut(300);
            }
            if (origin.index == 18 && direction == 'down') {
                $(".article19").fadeOut(300);
                $(".article20").fadeIn(300);
            }
            if (origin.index == 19 && direction == 'up') {
                $(".article19").fadeIn(300);
                $(".bg19").fadeIn(300);
                $(".article20").fadeOut(300);
            }
            if (origin.index == 19 && direction == 'down') {
                $(".article20").fadeOut(300);
                $(".articleContent21").fadeIn(300);
                $(".imgFishing").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".articleButton1").velocity({
                    top: "0",
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 300,
                    begin: function () {
                        $(".articleButton").addClass("active");
                    },
                });
                $(".articleButton2").velocity({
                    top: "0",
                    opacity: "1"
                }, {
                    delay: 600,
                    duration: 300
                });
                $(".bgStatic__wrap").addClass("active");
                $(".imgCursor").velocity({
                    opacity: "1"
                }, {
                    delay: 600,
                    duration: 300
                });
            }
            if (origin.index == 20 && direction == 'up') {
                $(".imgFishing").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".article20").fadeIn(300);
                $(".articleContent21").fadeOut(300);
                $(".articleButton1").velocity({
                    top: "-100%",
                    opacity: "0"
                }, {
                    delay: 300,
                    duration: 300
                });
                $(".articleButton2").velocity({
                    top: "-100%",
                    opacity: "0"
                }, {
                    delay: 600,
                    duration: 300
                });
                $(".bgStatic__wrap").removeClass("active");
                $(".articleButton").removeClass("active");
                $(".imgCursor").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 20 && direction == 'down') {
                $(".imgFishing").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".articleContent21").fadeOut(300);
                $(".bg19").fadeOut(300);
                $(".bg18").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgColor--sky4").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgCloud").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgColor--ocean2").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        $(".article23").fadeIn(300);
                    }
                });
                $(".article22").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700
                });
                $(".articleText22--1").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 300
                });
                $(".articleText22--2").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 300
                });
                $(".articleText22--3").velocity({
                    opacity: "1"
                }, {
                    delay: 1000,
                    duration: 300
                });
                $(".articleText22--4").velocity({
                    opacity: "1"
                }, {
                    delay: 1300,
                    duration: 300
                });
                $(".articleText22--5").velocity({
                    opacity: "1"
                }, {
                    delay: 1600,
                    duration: 300
                });
                $(".articleText22--6").velocity({
                    opacity: "1"
                }, {
                    delay: 1900,
                    duration: 300
                });
            }
            if (origin.index == 21 && direction == 'up') {
                $(".imgFishing").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".bg19").fadeIn(700);
                $(".articleContent21").fadeIn(300);
                $(".article23").fadeOut(300);
                $(".bg18").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgColor--sky4").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgCloud").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {}
                });
                $(".bgColor--ocean2").velocity({
                    top: "unset",
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".article22").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".articleText22").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 21 && direction == 'down') {
                $(".article22").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".articleText23").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".imgMap__lap1").velocity({
                    opacity: "1"
                }, {
                    delay: 1400,
                    duration: 300
                });
                $(".imgMap__lap2").velocity({
                    opacity: "1"
                }, {
                    delay: 2100,
                    duration: 300
                });
                $(".imgMap__lap3").velocity({
                    opacity: "1"
                }, {
                    delay: 2600,
                    duration: 300
                });
                $(".imgMap__line").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 300,
                    complete: function () {
                        $(".imgMap__line1").addClass("active");
                        $(".imgMap__line2").addClass("active");
                        $(".imgMap__line3").addClass("active");
                    }
                });
                $(".imgMap").addClass("move");
                $(".bgStatic__wrap").addClass("active");
                $(".imgMap").addClass("active");
            }
            if (origin.index == 22 && direction == 'up') {
                $(".article22").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".articleText23").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".imgMap").removeClass("move");
                $(".imgMap__lap").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".imgMap__line").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    complete: function () {
                        $(".imgMap__line1").removeClass("active");
                        $(".imgMap__line2").removeClass("active");
                        $(".imgMap__line3").removeClass("active");
                    }
                });
            }
            if (origin.index == 22 && direction == 'down') {
                $(".articleContent15__icon").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".article24").addClass("active");
                $(".creditBack").addClass("active");
                $(".bgStatic__wrap").removeClass("active");
                $(".imgMap").removeClass("active");
                $(".article23").fadeOut(300);
                $(".bgColor--ocean2").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgCloud").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgColor--sky5").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        $(".article24").fadeIn(300);
                        $(".creditLogo").fadeIn(700);
                        $(".creditBack").fadeIn(700);
                    }
                });
                $(".creditCol1").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 300
                });
                $(".creditCol2").velocity({
                    opacity: "1"
                }, {
                    delay: 1000,
                    duration: 300
                });
                $(".creditCol3").velocity({
                    opacity: "1"
                }, {
                    delay: 1300,
                    duration: 300
                });
                $(".creditCol4").velocity({
                    opacity: "1"
                }, {
                    delay: 1600,
                    duration: 300
                });
                $(".creditCol5").velocity({
                    opacity: "1"
                }, {
                    delay: 1900,
                    duration: 300
                });
            }
            if (origin.index == 23 && direction == 'up') {
                $(".articleContent15__icon").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".article24").removeClass("active");
                $(".creditBack").removeClass("active");
                $(".imgMap").addClass("active");
                $(".bgStatic__wrap").addClass("active");
                $(".article23").fadeIn(300);
                $(".article24").fadeOut(300);
                $(".bgColor--ocean2").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgCloud").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgColor--sky5").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".creditCol").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".creditLogo").fadeOut(300);
                $(".creditBack").fadeOut(300);
            }
        }
    })

    fullpage_api.setAllowScrolling(false);

    $('.articleButton').on('click', function () {
        $('.imgCursor').hide();
    });
    $('#btn1').on('click', function () {
        $('.-pReal').addClass('active');
        fullpage_api.setAllowScrolling(false);
    });
    $('#btn2').on('click', function () {
        $('.-pReb').addClass('active');
        fullpage_api.setAllowScrolling(false);
    });
    $('.imgMap__lap1').on('click', function () {
        $('.-pLap1').addClass('active');
        fullpage_api.setAllowScrolling(false);
    });
    $('.imgMap__lap2').on('click', function () {
        $('.-pLap2').addClass('active');
        fullpage_api.setAllowScrolling(false);
    });
    $('.imgMap__lap3').on('click', function () {
        $('.-pLap3').addClass('active');
        fullpage_api.setAllowScrolling(false);
    });
    $('.popupClose').on('click', function () {
        $('.popup').removeClass('active');
        fullpage_api.setAllowScrolling(true);
    });

    $('.imgPump3').on('click', function () {
        $('.imgCursorPump1').hide();
        $('.articleText4--prod').addClass('active');
    });
    $('.imgPump4').on('click', function () {
        $('.imgCursorPump2').hide();
        $('.articleText4--eks').addClass('active');
    });

    if ($('#some-element').css('display') == 'none') {
        is_mobile = true;
    }

    /*ar isMobile = false; //initiate as false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
    */
    if (is_mobile == true) {
        // mobile
        console.log('dragdealer mobile true')
        new Dragdealer('js-drag-mobileslider', {
            horizontal: false,
            vertical: true,
            steps: 7,
            snap: true,
            callback: function (x, y) {
                var t = Math.round(y * 100);
                console.log(t);
            },
            dragStartCallback: function (x, y) {
                $('.mobTooltip').addClass('hide');
                $('.stepmob0').removeClass('top');
            },
            animationCallback: function (x, y) {
                var t = Math.round(y * 100);
                $('.stepmobContent').removeClass('active');
                $('.mob' + t + ' span').addClass('active');
                $('.mob' + t).addClass('stepmob');
                $('.stepmob' + t).addClass('active');

                if (t == 0) {

                }
            }
        });
    } else {
        // desktop
        console.log('dragdealer desktop true')
        new Dragdealer('js-drag-slider', {
            horizontal: true,
            vertical: false,
            steps: 7,
            snap: true,
            callback: function (x, y) {
                var t = Math.round(x * 100);
                console.log(t);
                $('.barTooltip').addClass('hide');
            },
            dragStartCallback: function (x, y) {},
            animationCallback: function (x, y) {
                var t = Math.round(x * 100);
                $('.stepContent').removeClass('active');
                $('.bar' + t + ' span').addClass('active');
                $('.bar' + t).addClass('step');
                $('.step' + t).addClass('active');

                if (t == 0) {

                }
            }
        });

    }
})

$(window).on('load', function () {
    setTimeout(function () {
        $("#animationPreload").fadeOut(2000, function () {
            $('.preloader').remove();
            fullpage_api.setAllowScrolling(true);
            $(".imgHill").addClass("pushUp");
            $(".imgHill2").addClass("pushUp");
            $(".imgHill3").addClass("pushUp");
            $(".imgPipe1").addClass("opac1");
            $(".introCaption").addClass("active");
            //console.log('remove');
        })
    }, 4000);
})

function refreshPage() {
    window.location.reload(false);
}