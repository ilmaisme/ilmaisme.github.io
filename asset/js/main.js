$(document).ready(function () {

    // BODYMOVIN Animation
    // 1
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationWorld'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/Peta-Dunia-Covid/petadunia.json',
        name: 'myAnimation',
    });
    // 2
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationVirusEntered'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/human-with-virus/virus-entered.json',
        name: 'myAnimation',
    });
    // 3
    var state = 'play';
    var animationCounter = bodymovin.loadAnimation({
        container: document.getElementById('animationAirport'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/Bandara/data.json',
        name: 'myAnimation',
    })
    animationCounter.goToAndStop(0, true);
    // 4
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationIndonesia'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/Indonesia-Covid/Peta-Indonesia-covid.json',
        name: 'myAnimation',
    });
    // 5
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationLabDesk'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/Lab/data.json',
        name: 'myAnimation',
    });
    // 6
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationLabVaccine'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/Robot-1/Robot.json',
        name: 'myAnimation',
    });
    // 7
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationRobot2'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/Robot-2/Robot.json',
        name: 'myAnimation',
    });
    // 8
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationRobot'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/Robot-Pipet/Robot-Pipet.json',
        name: 'myAnimation',
    });
    // 9
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationCoverDesktop'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/Cover-Desktop/Cover-Desktop.json',
        name: 'myAnimation',
    });
    // 10
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationCoverMobile'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/Cover-Mobile/Cover-Mobile.json',
        name: 'myAnimation',
    });
    // 11
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationPreload'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/preloader/data.json',
        name: 'myAnimation',
    });

    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        //responsiveHeight: 500,
        //navigation: true,
        anchors: ['cover', 'start'],
        lockAnchors: true,
        scrollOverflow: true,

        onLeave: function (origin, destination, direction) {
            var leavingSection = this;

            if (origin.index == 0 && direction == 'down') {
                $(".text1").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 800,
                    duration: 700
                });
                $(".imgWuhan").addClass("pushUp");
            }
            if (origin.index == 1 && direction == 'down') {
                $(".bgOverlay__top").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 800,
                    duration: 700
                });
                $(".text2").velocity({
                    opacity: 1,
                    display: "block"
                }, {
                    duration: 700,
                    delay: 1600,
                    begin: function () {
                        //console.log('test');
                    },
                    complete: function () {
                        //console.log('test');
                    }
                });
                //console.log('1down')
            }
            if (origin.index == 2 && direction == 'up') {
                $(".bgOverlay__top").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".text2").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".text3").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".text4").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".text5").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
            }
            if (origin.index == 2 && direction == 'down') {
                $(".text3").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 800,
                    duration: 700
                });
            }
            if (origin.index == 3 && direction == 'up') {
                $(".text2").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 800,
                    duration: 700
                });
            }
            if (origin.index == 3 && direction == 'down') {
                $(".text4").velocity({
                    opacity: "1",
                    display: "flex",
                    bottom: "0"
                }, {
                    delay: 200,
                    duration: 700
                });
            }
            if (origin.index == 4 && direction == 'down') {
                $(".text5").velocity({
                    opacity: "1",
                    display: "flex",
                    bottom: "0"
                }, {
                    delay: 200,
                    duration: 700
                });
            }
            if (origin.index == 4 && direction == 'up') {
                $(".text3").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 800,
                    duration: 700
                });
            }
            if (origin.index == 5 && direction == 'up') {
                $(".text4").velocity({
                    opacity: "1",
                    display: "flex",
                    bottom: "0"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".text4").removeClass("moveUp");
            }
            if (origin.index == 5 && direction == 'down') {
                $(".text2").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".text3").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".text4").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".text5").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".bgOverlay__top").fadeOut(300);
                $(".bgOpening").fadeOut(300);
                $(".bgColor--blue").fadeOut(300);
                $(".imgWuhan").fadeOut(100);
                $(".bgColor--purple").fadeIn(0);
                $(".imgInfected").velocity({
                    opacity: "1",
                    display: "block",
                    left: "0"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".imgInfected__hand").addClass("animationCough");
                $(".bgText--2").css('z-index', '3');
                //console.log('5down')
            }
            if (origin.index == 6 && direction == 'up') {
                $(".text5").velocity({
                    opacity: "1",
                    display: "flex",
                    bottom: "0"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".text5").removeClass("moveUp");
                $(".bgOverlay__top").fadeIn(300);
                $(".bgOpening").fadeIn(300);
                $(".imgWuhan").fadeIn(300);
                $(".bgColor--purple").fadeOut(300);
                $(".imgInfected").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".imgInfected").removeClass("moveLeft");
                $(".bgText--2").css('z-index', '0');
                //console.log('6up')
            }
            if (origin.index == 6 && direction == 'down') {
                $(".imgInfected__hand").addClass("animationCough");
                $(".imgParticle").velocity({
                    left: "30%",
                    display: "block"
                }, {
                    delay: 2700,
                    duration: 200
                });
                $(".imgInfected").removeClass("moveLeft");
                $(".imgInfected").velocity({
                    opacity: 1,
                    display: "block",
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".imgInfected__hand").removeClass("animationCough");
                    },
                    complete: function () {
                        $(".imgInfected__hand").addClass("animationCough");
                    }
                });
            }
            if (origin.index == 7 && direction == 'up') {
                $(".imgParticle").velocity({
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".imgParticle--2").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                //console.log('7up')
            }
            if (origin.index == 7 && direction == 'down') {
                $(".imgInfected").velocity({
                    opacity: 1,
                    display: "block"
                }, {
                    duration: 700,
                    begin: function () {
                        $(".imgInfected__hand").removeClass("animationCough");
                    },
                    complete: function () {
                        $(".imgInfected__hand").addClass("animationCough");
                    }
                });
                $(".imgParticle--2").velocity({
                    left: "50%",
                    display: "block"
                }, {
                    delay: 2700,
                    duration: 200
                });
            }
            if (origin.index == 8 && direction == 'up') {
                $(".text6").addClass("textOpac");
                //console.log('8up')
            }
            if (origin.index == 8 && direction == 'down') {
                $(".imgInfected").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".bgColor--blue").fadeIn(300);
                $(".bgColor--blue").velocity({
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".text6").removeClass("textOpac");
                $(".imgHuman").velocity({
                    opacity: 1,
                    display: "block"
                }, {
                    delay: 0,
                    duration: 200,
                    begin: function () {

                    },
                    complete: function () {
                        //$(".imgParticle").velocity({ opacity: "1", display: "block" }, { delay: 200, duration: 700 });
                        //$(".imgParticle").addClass('left2');
                        //$(".imgParticle--2").velocity({ opacity: "1", display: "block", bottom: "10%" }, { delay: 200, duration: 700 });
                        //$(".imgParticle--2").addClass('left1');
                    }
                });
                //console.log('8down')
            }
            if (origin.index == 9 && direction == 'up') {
                $(".bgColor--purple").fadeIn(300);
                $(".bgColor--blue").velocity({
                    left: "100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgHuman").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".text6").addClass("textOpac");
                $(".imgParticle").addClass("left30");
                $(".imgParticle").removeClass("left2");
                $(".imgParticle--2").removeClass("left2 left1");
                $(".imgParticle--2").addClass("left50");

                $(".imgInfected").velocity({
                    opacity: "1",
                    display: "block",
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700
                });

                //console.log('9up');
            }
            if (origin.index == 9 && direction == 'down') {
                $(".imgHuman").addClass("zoom");
                $(".imgParticle").velocity({
                    display: "block"
                }, {
                    duration: 200,
                    delay: 0,
                    begin: function () {
                        //$(".imgParticle--2").velocity({ opacity: "1", display: "block" }, { delay: 0, duration: 100 });
                        //$(".imgParticle--2").addClass('left2');
                        //$(".imgParticle").addClass('left0');
                    },
                    complete: function () {
                        //$(".imgParticle").velocity({ bottom: "28%", opacity: "1", display: "block" }, { delay: 700, duration: 700 });
                        $(".imgParticle--2").velocity({
                            opacity: "0",
                            display: "none"
                        }, {
                            delay: 700,
                            duration: 200
                        });
                        $(".imgHuman").velocity({
                            opacity: "0",
                            display: "none"
                        }, {
                            delay: 700,
                            duration: 200
                        });
                        $(".imgXray").velocity({
                            opacity: "1",
                            display: "block"
                        }, {
                            delay: 800,
                            duration: 200
                        });
                        //$(".imgParticle").addClass('left2');
                        //console.log('zoom');
                    }
                });

            }
            if (origin.index == 10 && direction == 'up') {
                $(".imgHuman").removeClass("zoom");
                $(".text6").removeClass("textOpac");

                $(".imgHuman").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".imgXray").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });

                $(".imgParticle").velocity({
                    bottom: "30%",
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 800,
                    duration: 700
                });
                $(".imgParticle--2").velocity({
                    bottom: "8%",
                    opacity: "1",
                    display: "block"
                }, {
                    duration: 700,
                    delay: 200,
                    begin: function () {
                        $(".imgParticle").addClass('left0');
                    },
                    complete: function () {
                        $(".imgParticle--2").addClass('left1');
                        $(".imgParticle").removeClass('left30 left2');
                    }
                })

                //console.log('10up');

            }
            if (origin.index == 10 && direction == 'down') {
                $(".text6").addClass("textOpac");
                $(".imgXray").addClass('moveUp');
                $(".imgParticle").velocity({
                    bottom: "14%"
                }, {
                    delay: 200,
                    duration: 200
                });
                //console.log('10down');
            }
            if (origin.index == 11 && direction == 'up') {
                $(".text6").removeClass("textOpac");
                $(".imgXray").removeClass('moveUp');
                $(".imgParticle").velocity({
                    bottom: "28%",
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".imgParticle").addClass('left2');
                $(".imgXray").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 200
                });
                //console.log('11up');

            }
            if (origin.index == 11 && direction == 'down') {
                //$(".imgParticle").velocity({ bottom: "8%", opacity: "1", display: "block" }, { delay: 200, duration: 200 });
                //$(".imgParticle").addClass('left2');
                $(".imgParticle--2").velocity({
                    bottom: "10%",
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 200
                });
                //$(".imgParticle--2").addClass('left2');
                //console.log('11down');
            }
            if (origin.index == 12 && direction == 'up') {
                //$(".imgParticle").velocity({ opacity: "0", display: "none" }, { delay: 0, duration: 200 });
                //$(".imgParticle--2").velocity({ opacity: "0", display: "none" }, { delay: 0, duration: 200 });
                //console.log('12up');
            }
            if (origin.index == 12 && direction == 'down') {
                //$(".imgXray").velocity({ left: "40%" }, { delay: 0, duration: 0 });
                $(".imgParticle").velocity({
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".imgParticle--2").velocity({
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".imgXray").addClass("scaledown");
                $(".imgXray").velocity({
                    opacity: 0,
                    display: "none",
                    left: "50%"
                }, {
                    duration: 700,
                    delay: 0,
                    begin: function () {
                        $(".imgXray").removeClass("moveUp");
                    },
                    complete: function () {
                        $(".imgXraylines").velocity({
                            opacity: "1",
                            display: "block"
                        }, {
                            delay: 0,
                            duration: 200
                        });
                        $(".animationWidth").addClass("active");
                        $(".textlines").addClass("active");

                        //$(".xrayMob .st9").addClass("active");
                        $(".xrayMob .st10").addClass("active");

                        //console.log('lines');
                    }
                });
                //$(".imgXray").removeClass("moveUp");
                //$(".imgXray").addClass("moveDown");

                $(".bgColor--yblue").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".bgText--2").css('z-index', '0')
                $(".bgStatic--gejala").addClass('active');
                //console.log('12down');
            }
            if (origin.index == 13 && direction == 'up') {
                $(".imgParticle--2").velocity({
                    display: "block"
                }, {
                    delay: 200,
                    duration: 200
                });
                $(".imgParticle--2").removeClass('hide');
                $(".imgParticle").removeClass('hide');
                $(".imgParticle").velocity({
                    display: "block"
                }, {
                    delay: 200,
                    duration: 200
                });
                $(".imgXray").velocity({
                    opacity: "1",
                    display: "block",
                    scale: 1,
                    left: "50%"
                }, {
                    delay: 200,
                    duration: 200
                });
                $(".imgXraylines").velocity({
                    opacity: 0,
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".imgXray").addClass("moveUp");
                $(".imgXray").removeClass("moveDown");
                $(".imgXray").removeClass("scaledown");
                $(".bgText--2").css('z-index', '3');
                $(".bgStatic--gejala").removeClass('active');
                closeXray()
                //console.log('13up');
            }
            if (origin.index == 13 && direction == 'down') {
                $(".imgXraylines").velocity({
                    opacity: 0,
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".imgXray").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".bgColor--yblue").velocity({
                    top: "0",
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".textChina").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    duration: 200,
                    delay: 1800,
                    begin: function () {

                    },
                    complete: function () {
                        $(".imgHubei").velocity({
                            opacity: "1",
                            display: "block"
                        }, {
                            delay: 700,
                            duration: 200
                        });
                    }
                });
                $(".bgStatic--gejala").removeClass('active');
                closeXray()
                //console.log('13down');
            }
            if (origin.index == 14 && direction == 'up') {
                $(".bgColor--blue").fadeIn(300);
                $(".imgXraylines").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".bgStatic--gejala").addClass('active');
                //console.log('14up');
            }
            if (origin.index == 14 && direction == 'down') {
                $(".text7").velocity({
                    opacity: "1",
                    display: "block",
                    bottom: "0"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".imgWorld").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    duration: 700,
                    delay: 200,
                    begin: function () {

                    },
                    complete: function () {

                    }
                });
                //console.log('14down');
            }
            if (origin.index == 15 && direction == 'up') {
                $(".imgWorld").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".imgWorld2").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".text7").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                //console.log('15up');
            }
            if (origin.index == 15 && direction == 'down') {
                $(".imgWorld2").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 200
                });
                counterInfected()
            }
            if (origin.index == 16 && direction == 'up') {
                $(".text7").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 200
                });
                //console.log('16up');
            }
            if (origin.index == 16 && direction == 'down') {
                //animationCounter.playSegments([14, 27], true);
                //state = 'pause';

                $(".text7").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".imgWorld").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".imgWorld2").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".imgIndonesia").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".imgIndonesia").addClass("active");
                //console.log('16down');
            }
            if (origin.index == 17 && direction == 'up') {
                $(".imgIndonesia").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".imgIndonesia").removeClass("active");
                $(".text7").velocity({
                    opacity: "1",
                    display: "block",
                    bottom: "0"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".imgWorld").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    duration: 700,
                    delay: 200,
                    begin: function () {

                    },
                    complete: function () {

                    }
                });
                $(".imgWorld2").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 200
                });
                counterInfected()
                //console.log('17up');
            }
            if (origin.index == 17 && direction == 'down') {
                $(".imgIndonesia").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".text10").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".redLine").addClass("active");
                $(".redCase").addClass("active");
                $(".redArea").addClass("active");
                //console.log('17down');
            }
            if (origin.index == 18 && direction == 'up') {
                $(".imgIndonesia").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".imgIndonesia").addClass("active");
                $(".redLine").removeClass("active");
                $(".redCase").removeClass("active");
                $(".redArea").removeClass("active");
                $(".text10").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                //console.log('18up');
            }
            if (origin.index == 18 && direction == 'down') {
                $(".imgPlane").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    duration: 0,
                    delay: 200,
                    begin: function () {

                    },
                    complete: function () {
                        $(".imgPlane").addClass("moveCenter");
                        $(".bgStatic--plane").addClass("active");
                    }
                });
                $(".text10").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".imgAirport").velocity({
                    left: "0",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgFlag--1").velocity({
                    opacity: 1,
                    display: "block"
                }, {
                    delay: 400,
                    duration: 700
                });
                $(".imgFlag--2").velocity({
                    opacity: 1,
                    display: "block"
                }, {
                    delay: 400,
                    duration: 700
                });
                //console.log('18down');
            }
            if (origin.index == 19 && direction == 'up') {
                $(".text10").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".imgPlane").removeClass("moveCenter moveBottom");
                $(".bgStatic--plane").removeClass("active");
                $(".imgAirport").velocity({
                    left: "100%",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgFlag--1").velocity({
                    opacity: 0,
                    display: "none"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgFlag--2").velocity({
                    opacity: 0,
                    display: "none"
                }, {
                    delay: 0,
                    duration: 700
                });
                //console.log('19up');
            }
            if (origin.index == 19 && direction == 'down') {
                $(".imgPlane").removeClass("moveCenter");
                $(".imgPlane").addClass("moveBottom");
                $(".imgAirport2").velocity({
                    left: "0",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgAirport").velocity({
                    left: "-100%",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgFlag--1").velocity({
                    opacity: 0,
                    display: "none"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgFlag--2").velocity({
                    opacity: 0,
                    display: "none"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgFlag--3").velocity({
                    opacity: 1,
                    display: "block"
                }, {
                    delay: 400,
                    duration: 700
                });
                $(".imgFlag--4").velocity({
                    opacity: 1,
                    display: "block"
                }, {
                    delay: 400,
                    duration: 700
                });
                //console.log('19down');
            }
            if (origin.index == 20 && direction == 'up') {
                $(".imgPlane").velocity({
                    opacity: "0",
                    display: "none"
                });
                $(".bgStatic--plane").addClass("active");
                $(".bgColor--orange").velocity({
                    left: "100%",
                    display: "none"
                })
                $(".imgAirport2").velocity({
                    left: "100%",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgAirport").velocity({
                    left: "0",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgFlag--1").velocity({
                    opacity: 1,
                    display: "block"
                }, {
                    delay: 400,
                    duration: 700
                });
                $(".imgFlag--2").velocity({
                    opacity: 1,
                    display: "block"
                }, {
                    delay: 400,
                    duration: 700
                });
                $(".imgFlag--3").velocity({
                    opacity: 0,
                    display: "none"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgFlag--4").velocity({
                    opacity: 0,
                    display: "none"
                }, {
                    delay: 0,
                    duration: 700
                });
                //console.log('20up');
            }
            if (origin.index == 20 && direction == 'down') {
                $(".imgFlag--3").velocity({
                    opacity: 0,
                    display: "none"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgFlag--4").velocity({
                    opacity: 0,
                    display: "none"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgAirport2").velocity({
                    left: "-100%",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgAirport").velocity({
                    left: "-200%",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgPlane").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 0
                });
                $(".bgStatic--plane").removeClass("active");
                $(".bgColor--orange").velocity({
                    left: "0",
                    display: "block"
                }, {
                    duration: 700,
                    delay: 200,
                    begin: function () {

                    },
                    complete: function () {

                    }
                });
                $(".imgVaclab").velocity({
                    left: "0"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".bgVacdesk").velocity({
                    left: "0"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".text15").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                //console.log('20down');
            }
            if (origin.index == 21 && direction == 'up') {
                $(".imgFlag--3").velocity({
                    opacity: 1,
                    display: "block"
                }, {
                    delay: 400,
                    duration: 700
                });
                $(".imgFlag--4").velocity({
                    opacity: 1,
                    display: "block"
                }, {
                    delay: 400,
                    duration: 700
                });
                $(".bgColor--orange").velocity({
                    left: "100%",
                    display: "none"
                }, {
                    duration: 700,
                    delay: 200,
                    begin: function () {

                    },
                    complete: function () {}
                });
                $(".bgStatic--plane").addClass("active");
                $(".bgVacdesk").velocity({
                    left: "100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgVaclab").velocity({
                    left: "100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgAirport").velocity({
                    left: "-100%",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgAirport2").velocity({
                    left: "0",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".text15").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".text16").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".text17").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                //console.log('21up');
            }
            if (origin.index == 21 && direction == 'down') {
                $(".text16").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
            }
            if (origin.index == 22 && direction == 'up') {
                $(".text15").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
            }
            if (origin.index == 22 && direction == 'down') {
                $(".text17").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
            }
            if (origin.index == 23 && direction == 'up') {
                $(".text16").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
            }
            if (origin.index == 23 && direction == 'down') {
                $(".bgVacdesk").velocity({
                    left: "100%"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".imgVaclab").velocity({
                    left: "100%"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".bgColor--orange").velocity({
                    left: "100%",
                    display: "none"
                }, {
                    delay: 200,
                    duration: 700
                })
                $(".text15").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".text16").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".text17").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                //console.log('23down');
            }
            if (origin.index == 24 && direction == 'up') {
                $(".bgVacdesk").velocity({
                    left: "0"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".imgVaclab").velocity({
                    left: "0"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".bgColor--orange").velocity({
                    left: "0",
                    display: "block"
                }, {
                    duration: 700,
                    delay: 200,
                    begin: function () {

                    },
                    complete: function () {

                    }
                });
                $(".text17").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                //console.log('24up');
            }
            if (origin.index == 24 && direction == 'down') {
                $(".bgColor--pink").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".imgJokowi").velocity({
                    bottom: "0"
                }, {
                    delay: 200,
                    duration: 700
                });
                //console.log('24down');
            }
            if (origin.index == 25 && direction == 'up') {
                $(".bgColor--pink").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".imgJokowi").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 200
                });
                //console.log('25up');
            }
            if (origin.index == 26 && direction == 'down') {
                $(".bgColor--pink").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".imgJokowi").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgStep--1").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".bgStep--1").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 700
                });
                //console.log('26down');
            }
            if (origin.index == 27 && direction == 'up') {
                $(".bgColor--pink").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".imgJokowi").velocity({
                    bottom: "0"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".bgStep--1").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                //console.log('27up');
            }
            if (origin.index == 27 && direction == 'down') {
                $(".imgStep--2").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".bgStep--2").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgStep--1").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                //console.log('27down');
            }

            if (origin.index == 28 && direction == 'up') {
                $(".bgStep--1").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgStep--2").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
            }

            if (origin.index == 28 && direction == 'down') {
                $(".imgStep--3").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".bgStep--3").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgStep--2").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
            }

            if (origin.index == 29 && direction == 'up') {
                $(".bgStep--2").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgStep--3").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
            }
            if (origin.index == 29 && direction == 'down') {
                $(".bgStep--3").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".bgStep--4").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgStep4").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".text11").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".text14").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                //console.log('29down');
            }
            if (origin.index == 30 && direction == 'down') {
                $(".text12").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
            }

            if (origin.index == 30 && direction == 'up') {
                $(".text11").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".text12").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".text13").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".text14").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".bgStep--4").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".imgStep4").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".bgStep--3").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 31 && direction == 'up') {
                $(".text11").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
            }
            if (origin.index == 31 && direction == 'down') {
                $(".text13").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
            }
            if (origin.index == 32 && direction == 'up') {
                $(".text12").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".bgStep--4").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgStep4").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 700,
                    duration: 700
                });
                //console.log('32up');
            }

            if (origin.index == 32 && direction == 'down') {
                $(".text11").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".text12").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".text13").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".text14").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".bgStep--4").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".imgStep4").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".bgColor--green").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 700
                });

                $(".imgHerd").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".textBlack").velocity({
                    opacity: "1",
                    display: "flex"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".imgHerd").addClass("herdGoals");
                $(".herdHuman.men-yellow-1").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.women-yellow-1").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.women-yellow-3").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.women-yellow-4").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.men-yellow-3").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.men-yellow-4").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.men-blue-5").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.men-blue-6").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.men-blue-7").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.women-blue-3").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.women-blue-4").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                //console.log('32down');
            }
            if (origin.index == 33 && direction == 'up') {
                $(".text14").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".text13").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".imgHerd").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".textBlack").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".imgStep4").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".bgColor--green").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".bgStep--4").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 200
                });
                //console.log('33up');
            }

            if (origin.index == 33 && direction == 'down') {
                $(".imgHerd").addClass("herdWho");
                $(".imgHerd").removeClass("herdGoals");
                $(".herdHuman.men-blue-1").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.men-blue-2").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.men-blue-3").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.men-blue-4").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.women-yellow-2").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.women-blue-1").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.women-blue-2").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.men-red-1").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.women-red-2").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.women-red-1").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });

                $(".virusLine").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 1400,
                    duration: 700
                });
                $(".virusLine").addClass("active");
                $(".virusLine--2").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 1400,
                    duration: 700
                });
                $(".virusLine--2").addClass("active");
                $(".virusAttack").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".virusAttack--2").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgAttack").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 1400,
                    duration: 700
                });
                $(".imgAttack--2").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 1400,
                    duration: 700
                });
                $(".imgAttack").addClass("active");
                $(".imgAttack--2").addClass("active");
                //console.log('33down');
            }
            if (origin.index == 34 && direction == 'up') {
                $(".imgHerd").removeClass("herdWho");
                $(".imgHerd").addClass("herdGoals");
                $(".herdHuman.men-blue-1").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.men-blue-2").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.men-blue-3").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.men-blue-4").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.women-yellow-2").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.women-blue-1").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.women-blue-2").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.men-red-1").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.women-red-2").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdHuman.women-red-1").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".virusAttack").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".virusAttack--2").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 200
                });
                //console.log('34up');
            }
            if (origin.index == 34 && direction == 'down') {
                $(".textBlack").velocity({
                    opacity: "1",
                    display: "flex"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".herdMisc-3").velocity({
                    opacity: "1",
                    display: "inline-flex"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".imgHerd").addClass("herdNumbers");
                $(".imgHerd").removeClass("herdWho");
                $(".herdLine").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdLine-1").addClass("active");
                $(".herdLine-2").addClass("active");
                $(".herdLine-3").addClass("active");
                $(".herdLine-4").addClass("active");
                $(".herdLine-5").addClass("active");
                $(".herdLine-6").addClass("active");
                $(".virusAttack").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 0
                });
                $(".virusAttack--2").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 0
                });
                //console.log('34down');
            }
            if (origin.index == 35 && direction == 'up') {
                $(".herdMisc-3").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".imgHerd").addClass("herdWho");
                $(".imgHerd").removeClass("herdNumbers");
                $(".herdLine").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdLine-1").removeClass("active");
                $(".herdLine-2").removeClass("active");
                $(".herdLine-3").removeClass("active");
                $(".herdLine-4").removeClass("active");
                $(".herdLine-5").removeClass("active");
                $(".herdLine-6").removeClass("active");
                $(".virusAttack").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".virusAttack--2").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".imgAttack").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 1400,
                    duration: 700
                });
                $(".imgAttack--2").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 1400,
                    duration: 700
                });
                $(".imgAttack").addClass("active");
                $(".imgAttack--2").addClass("active");
                //console.log('35up');
            }
            if (origin.index == 35 && direction == 'down') {
                $(".textBlack").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".imgHerd").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".herdLine").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdLine-1").removeClass("active");
                $(".herdLine-2").removeClass("active");
                $(".herdLine-3").removeClass("active");
                $(".herdLine-4").removeClass("active");
                $(".herdLine-5").removeClass("active");
                $(".herdLine-6").removeClass("active");

                $(".text9").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                //$(".bgEnd").velocity({ top: "0" }, { delay: 0, duration: 700 });
                $(".bgEnd").velocity({
                    display: "block"
                }, {
                    duration: 200,
                    delay: 0,
                    begin: function () {},
                    complete: function () {
                        $(".bgEnd").addClass("top0");
                    }
                });
                //console.log('35down');
            }
            if (origin.index == 36 && direction == 'up') {
                $(".textBlack").velocity({
                    opacity: "1",
                    display: "flex"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".imgHerd").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdLine").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".herdLine-1").addClass("active");
                $(".herdLine-2").addClass("active");
                $(".herdLine-3").addClass("active");
                $(".herdLine-4").addClass("active");
                $(".herdLine-5").addClass("active");
                $(".herdLine-6").addClass("active");
                $(".text9").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".text9").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 700
                });
                //$(".bgEnd").velocity({ top: "100%" }, { delay: 0, duration: 700 });
                $(".bgEnd").velocity({
                    display: "block"
                }, {
                    duration: 0,
                    delay: 200,
                    begin: function () {},
                    complete: function () {
                        $(".bgEnd").addClass("bottom0");
                        $(".bgEnd").removeClass("top0");
                    }
                });
            }
            if (origin.index == 36 && direction == 'down') {
                // $(".bgEnd").velocity({ top: "-44%" }, { delay: 200, duration: 700 });
                $(".bgEnd").velocity({
                    display: "block"
                }, {
                    duration: 200,
                    delay: 0,
                    begin: function () {},
                    complete: function () {
                        $(".bgEnd").removeClass("bottom0");
                        $(".bgEnd").addClass("down1");
                    }
                });
                //console.log('36down');
            }
            if (origin.index == 37 && direction == 'up') {
                //$(".bgEnd").velocity({ top: 0 }, { delay: 200, duration: 700 });
                $(".bgEnd").velocity({
                    display: "block"
                }, {
                    duration: 200,
                    delay: 0,
                    begin: function () {},
                    complete: function () {
                        $(".bgEnd").addClass("top0");
                        $(".bgEnd").removeClass("down1");
                    }
                });
                //console.log('37up');
            }
            if (origin.index == 37 && direction == 'down') {
                //$(".bgEnd").velocity({ top: "-90%" }, { delay: 200, duration: 700 });
                $(".bgEnd").velocity({
                    display: "block"
                }, {
                    duration: 200,
                    delay: 0,
                    begin: function () {},
                    complete: function () {
                        $(".bgEnd").removeClass("down1");
                        $(".bgEnd").addClass("down2");
                    }
                });
                //console.log('37down');
            }
            if (origin.index == 39 && direction == 'up') {
                //$(".bgEnd").velocity({ top: "-44%" }, { delay: 200, duration: 700 });
                $(".bgEnd").velocity({
                    display: "block"
                }, {
                    duration: 200,
                    delay: 0,
                    begin: function () {},
                    complete: function () {
                        $(".bgEnd").addClass("down1");
                        $(".bgEnd").removeClass("down2");
                    }
                });
                //console.log('39up');
            }
            if (origin.index == 39 && direction == 'down') {
                //$(".bgEnd").velocity({ top: "-140%" }, { delay: 200, duration: 700 });
                $(".bgEnd").velocity({
                    display: "block"
                }, {
                    duration: 200,
                    delay: 0,
                    begin: function () {},
                    complete: function () {
                        $(".bgEnd").removeClass("down2");
                        $(".bgEnd").addClass("down3");
                    }
                });
                //console.log('39down');
            }
            if (origin.index == 40 && direction == 'up') {
                //$(".bgEnd").velocity({ top: "-90%" }, { delay: 200, duration: 700 });
                $(".bgEnd").velocity({
                    display: "block"
                }, {
                    duration: 200,
                    delay: 0,
                    begin: function () {},
                    complete: function () {
                        $(".bgEnd").addClass("down2");
                        $(".bgEnd").removeClass("down3");
                    }
                });
                //console.log('40up');
            }
            if (origin.index == 40 && direction == 'down') {
                $(".bgEnd").velocity({
                    display: "block"
                }, {
                    duration: 200,
                    delay: 0,
                    begin: function () {},
                    complete: function () {
                        $(".bgEnd").removeClass("down3");
                        $(".bgEnd").addClass("cap");
                    }
                });
                //console.log('40down');
            }
            if (origin.index == 41 && direction == 'up') {
                //$(".bgEnd").velocity({ top: "-140%" }, { delay: 200, duration: 700 });
                //$(".bgEnd").removeClass("cap");
                $(".bgEnd").velocity({
                    display: "block"
                }, {
                    duration: 200,
                    delay: 0,
                    begin: function () {},
                    complete: function () {
                        $(".bgEnd").addClass("down3");
                        $(".bgEnd").removeClass("cap");
                    }
                });
                //console.log('41up');
            }
            if (origin.index == 41 && direction == 'down') {
                $(".text9").velocity({
                    opacity: "0",
                    display: "none"
                }, {
                    delay: 0,
                    duration: 200
                });
                $(".bgEnd").velocity({
                    display: "block"
                }, {
                    duration: 0,
                    delay: 0,
                    begin: function () {},
                    complete: function () {
                        $(".bgEnd").removeClass("cap");
                        $(".bgEnd").addClass("end");
                    }
                });
                //console.log('41down');
            }
            if (origin.index == 42 && direction == 'up') {
                $(".text9").velocity({
                    opacity: "1",
                    display: "block"
                }, {
                    delay: 200,
                    duration: 700
                });
                $(".bgEnd").velocity({
                    display: "block"
                }, {
                    duration: 200,
                    delay: 0,
                    begin: function () {},
                    complete: function () {
                        $(".bgEnd").removeClass("end");
                        $(".bgEnd").addClass("cap");
                    }
                });
            }
            if (origin.index == 42 && direction == 'down') {

                //console.log('42down');
            } else if (origin.index == 1 && direction == 'up') {
                //alert("Going to section 1!");
            }
        },

    });

    $(document).on('click', '#moveTo', function () {
        fullpage_api.moveTo('start', 1);
        //console.log('start');
    });

    fullpage_api.setAllowScrolling(false);
    setTimeout(function () {
        $("#animationPreload").fadeOut(3000, function () {
            $('.preloader').remove();
            fullpage_api.setAllowScrolling(true);
            //console.log('remove');
        })
    }, 1000);

    function counterInfected() {
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 1000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                },
                complete: function (now) {
                    counterInfected();
                }
            });
        });
    }

    $(".vaccineBottle").on('click', function () {
        $(".vaccineText__item").addClass("active");
        $(".vaccineText").addClass("active");
        $(".vaccineCursor").fadeOut(700);
        //fullpage_api.setAllowScrolling(false);
    });
    $(".vaccineClose").on('click', function () {
        $(".vaccineText__item").removeClass("active");
        $(".vaccineText").removeClass("active");
        //fullpage_api.setAllowScrolling(true);
    });
    //$(".quoteItem").on('click', function () {
    //$(".quoteContent").addClass("active");
    //$(".bgOverlay__quote").velocity({ opacity: "1", display: "block" }, { delay: 0, duration: 200 });
    //});
    $(".quoteClose").on('click', function () {
        $(".quoteContent").removeClass("active");
        $(".bgOverlay__quote").removeClass("active");
    });

    function addPositionQuoteTop() {
        $(".quoteContent").addClass("quoteContent__top");
        $(".quoteContent").removeClass("quoteContent__middle");
        $(".quoteContent").removeClass("quoteContent__bottom");
    }

    function addPositionQuoteMiddle() {
        $(".quoteContent").addClass("quoteContent__middle");
        $(".quoteContent").removeClass("quoteContent__top");
        $(".quoteContent").removeClass("quoteContent__bottom");
    }

    function addPositionQuoteBottom() {
        $(".quoteContent").addClass("quoteContent__bottom");
        $(".quoteContent").removeClass("quoteContent__middle");
        $(".quoteContent").removeClass("quoteContent__top");
    }
    $(".quoteItem--1").on('click', function () {
        addPositionQuoteTop();
    });
    $(".quoteItem--2").on('click', function () {
        addPositionQuoteTop();
    });
    $(".quoteItem--3").on('click', function () {
        addPositionQuoteMiddle();
    });
    $(".quoteItem--4").on('click', function () {
        addPositionQuoteMiddle();
    });
    $(".quoteItem--5").on('click', function () {
        addPositionQuoteBottom();
    });
    $(".quoteItem--6").on('click', function () {
        addPositionQuoteBottom();
    });

    $('.slider-quote-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: false,
        focusOnSelect: false,
        swipeToSlide: false,
        swipe: false,
    });
    $('.slider-quote-nav').slick({
        slidesToShow: 6,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        swipeToSlide: false,
        infinite: false,
        accessibility: false
    });

    let popQuote = $('.slider-quote-for');
    $('.slider-quote-nav .slick-slide').on('click', function (event) {
        popQuote.slick('slickGoTo', $(this).data('slickIndex'));
        $(".quoteContent").addClass("active");
        $(".bgOverlay__quote").addClass("active");

    });

    //xray popup
    $('.xrayPop1').on('click', function (event) {
        $(".xrayPop__wrap1").velocity({
            opacity: "1",
            display: "block"
        }, {
            delay: 0,
            duration: 200
        });
        $(".xrayPop__wrap2").velocity({
            opacity: "0",
            display: "none"
        }, {
            delay: 0,
            duration: 200
        });
    });
    $('.xrayPop2').on('click', function (event) {
        $(".xrayPop__wrap2").velocity({
            opacity: "1",
            display: "block"
        }, {
            delay: 0,
            duration: 200
        });
        $(".xrayPop__wrap1").velocity({
            opacity: "0",
            display: "none"
        }, {
            delay: 0,
            duration: 200
        });
    });
    $('.xrayClose').on('click', function (event) {
        closeXray()
        console.log('close');
    })

    function closeXray() {
        $(".xrayPop__wrap1").velocity({
            opacity: "0",
            display: "none"
        }, {
            delay: 0,
            duration: 200
        });
        $(".xrayPop__wrap2").velocity({
            opacity: "0",
            display: "none"
        }, {
            delay: 0,
            duration: 200
        });
    }

});

function refreshPage() {
    window.location.reload(false);
}
// Mobile Version
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });    
    $('.slick-arrow').html('');

} else {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: false,
        focusOnSelect: false,
        swipeToSlide: false,
        swipe: false,
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        swipeToSlide: false,
        infinite: false,
        accessibility: false
    });

    let popVac = $('.slider-for');
    $('.slider-nav .slick-slide').on('click', function (event) {
        popVac.slick('slickGoTo', $(this).data('slickIndex'));
    });

}