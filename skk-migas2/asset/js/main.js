var is_mobile = false;
$(document).ready(function () {

    if ($('#some-element').css('display') == 'none') {
        is_mobile = true;
    }
    // 1. Animation Medal
    var paramMedal = {
        container: document.getElementById('animationMedal'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/project-medal.json',
        name: 'myAnimation',
    };
    var playMedal;
    playMedal = bodymovin.loadAnimation(paramMedal);

    // 2. Animation Proyek
    var paramProyek = {
        container: document.getElementById('animationProyek'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'asset/json/lifebar-proyek.json',
        name: 'myAnimation',
    };
    var playProyek;
    playProyek = bodymovin.loadAnimation(paramProyek);

    // 3. Animation Invest
    var paramInvest = {
        container: document.getElementById('animationInvest'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'asset/json/lifebar-investasi.json',
        name: 'myAnimation',
    };
    var playInvest;
    playInvest = bodymovin.loadAnimation(paramInvest);

    // 4
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationPump'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/pompa.json',
        name: 'myAnimation',
    });

    // 5
    var paramPump = {
        container: document.getElementById('animationPump2'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/pompa.json',
        name: 'myAnimation',
    };
    var playPump;
    playPump = bodymovin.loadAnimation(paramPump);

    // 6
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationPumpbrown'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/pompa-brown.json',
        name: 'myAnimation',
    });

    // 7
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationPumpred'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/pompa-red.json',
        name: 'myAnimation',
    });

    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        //navigation: true,
        anchors: ['cover', 'start'],
        lockAnchors: true,
        //scrollOverflow: true,

        onLeave: function (origin, destination, direction) {
            var leavingSection = this;

            if (origin.index == 0 && direction == 'down') {
                $(".article2").fadeIn(700);
                $(".bgOrange__img").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".bgOrange").removeClass("boxup");
                        $(".bgOrange").removeClass("boxdown2");
                        $(".bgOrange").addClass("boxdown");
                        playPump.goToAndPlay(0);
                    }
                });
                $(".bgCloud").fadeIn(700);
            }
            if (origin.index == 1 && direction == 'up') {
                $(".article2").fadeOut(300);
                $(".bgOrange__img").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".bgOrange").removeClass("boxdown");
                        $(".bgOrange").removeClass("boxdown2");
                        $(".bgOrange").addClass("boxup");
                    }
                });
                $(".bgCloud").fadeOut(300);
            }
            if (origin.index == 1 && direction == 'down') {
                $(".article2").fadeOut(300);
                $(".article3").fadeIn(700);
            }
            if (origin.index == 2 && direction == 'up') {
                $(".article2").fadeIn(700);
                $(".article3").fadeOut(300);
            }
            if (origin.index == 2 && direction == 'down') {
                $(".article3").fadeOut(300);
                $(".bgCloud").fadeOut(300);
                $(".bgColor--ocean").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        $(".imgTanker2").addClass("left-move");
                        $(".imgTanker3").addClass("right-move");
                    }
                });
                $(".bgOrange__img").velocity({
                    bottom: "100%"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".bgOrange").removeClass("boxdown");
                        $(".bgOrange").removeClass("boxup");
                        $(".bgOrange").addClass("boxdown2");
                    },
                    complete: function () {
                        $(".article4").fadeIn(700);
                    }
                });
            }
            if (origin.index == 3 && direction == 'up') {
                $(".article3").fadeIn(700);
                $(".bgCloud").fadeIn(700);
                $(".article4").fadeOut(300);
                $(".bgColor--ocean").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 300,
                    complete: function () {
                        $(".imgTanker2").removeClass("left-move");
                        $(".imgTanker3").removeClass("right-move");
                    }
                });
                $(".bgOrange__img").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".bgOrange").removeClass("boxup");
                        $(".bgOrange").removeClass("boxdown2");
                        $(".bgOrange").addClass("boxdown");
                    }
                });
            }
            if (origin.index == 3 && direction == 'down') {
                $(".article4").fadeOut(300);
                $(".bgColor--ocean").velocity({
                    bottom: "100%"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        $(".imgTanker2").removeClass("left-move");
                        $(".imgTanker3").removeClass("right-move");
                    }
                });
                $(".article5").fadeIn(700);
                $(".bgOrange").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".imgMill--oc").fadeOut(300);
                $(".bgColor--yellow").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 400,
                    complete: function () {
                        $(".mapsPoint").addClass("animationPin");
                        $(".mapsNum").addClass("animationOpacity");
                        $(".imgLighting").addClass("animationSpin");
                    }
                });
            }
            if (origin.index == 4 && direction == 'up') {
                $(".article5").fadeOut(300);
                $(".bgColor--ocean").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    complete: function () {
                        $(".imgTanker2").addClass("left-move");
                        $(".imgTanker3").addClass("right-move");
                    }
                });
                $(".bgOrange").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 400,
                    complete: function () {
                        $(".article4").fadeIn(700);
                    }
                });
                $(".imgMill--oc").fadeIn(700);
                $(".bgColor--yellow").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    complete: function () {
                        $(".mapsPoint").removeClass("animationPin");
                        $(".mapsNum").removeClass("animationOpacity");
                        $(".imgLighting").removeClass("animationSpin");
                    }
                });
            }
            if (origin.index == 4 && direction == 'down') {
                $(".article5").fadeOut(300);
                $(".article6").fadeIn(700);
                $(".imgLighting").removeClass("animationSpin");
                $(".imgLighting").addClass("animationSpin");
                playMedal.play();
                //play confetti
                playConfetti();
            }
            if (origin.index == 5 && direction == 'up') {
                $(".article6").fadeOut(300);
                $(".article5").fadeIn(700);
            }
            if (origin.index == 5 && direction == 'down') {
                $(".article6").fadeOut(300);
                $(".articleText7").fadeIn(700);
                $(".bgColor--green").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".articleList__wrap").fadeIn(700);
                $(".articleList__item1").velocity({
                    bottom: "0",
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".articleList__item2").velocity({
                    bottom: "0",
                    opacity: "1"
                }, {
                    delay: 1000,
                    duration: 700
                });
                $(".articleList__item3").velocity({
                    bottom: "0",
                    opacity: "1"
                }, {
                    delay: 1300,
                    duration: 700
                });
                $(".articleList__item4").velocity({
                    bottom: "0",
                    opacity: "1"
                }, {
                    delay: 1600,
                    duration: 700
                });
            }
            if (origin.index == 6 && direction == 'up') {
                $(".articleText7").fadeOut(300);
                $(".article6").fadeIn(700);
                $(".bgColor--green").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".articleList__wrap").fadeOut(300);
                $(".articleList__item").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 6 && direction == 'down') {
                $(".articleList__wrap").fadeOut(300);
                $(".articleList__item").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".bgColor--maps").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".articleText7").fadeOut(300);
                $(".article8").fadeIn(700);

                //maps pointer begins                        
                $(".mapsDot4").velocity({
                    opacity: "1"
                }, {
                    delay: 3200,
                    duration: 700,
                    begin: function () {
                        $(".mapsLine4").addClass("active");
                    },
                    complete: function () {
                        $(".mapsProjdesk4").addClass("active");
                        $(".mapsTooltip").addClass("active");
                        $(".mapsCursor").addClass("animationbounce");
                    }
                });
                $(".mapsDot13").velocity({
                    opacity: "1"
                }, {
                    delay: 5200,
                    duration: 700,
                    begin: function () {
                        $(".mapsLine13").addClass("active");
                    },
                    complete: function () {
                        $(".mapsProjdesk13").addClass("active");
                    }
                });
                $(".mapsDot2").velocity({
                    opacity: "1"
                }, {
                    delay: 2400,
                    duration: 700,
                    begin: function () {
                        $(".mapsLine2").addClass("active");
                    },
                    complete: function () {
                        $(".mapsProjdesk2").addClass("active");
                    }
                });
                $(".mapsDot10").velocity({
                    opacity: "1"
                }, {
                    delay: 4400,
                    duration: 700,
                    begin: function () {
                        $(".mapsLine10").addClass("active");
                    },
                    complete: function () {
                        $(".mapsProjdesk10").addClass("active");
                        $(".mapsProjdesk11").addClass("active");
                    }
                });
                $(".mapsDot14").velocity({
                    opacity: "1"
                }, {
                    delay: 5600,
                    duration: 700,
                    begin: function () {
                        $(".mapsLine14").addClass("active");
                    },
                    complete: function () {
                        $(".mapsProjdesk14").addClass("active");
                    }
                });
                $(".mapsDot8").velocity({
                    opacity: "1"
                }, {
                    delay: 4000,
                    duration: 700,
                    begin: function () {
                        $(".mapsLine8").addClass("active");
                    },
                    complete: function () {
                        $(".mapsProjdesk8").addClass("active");
                        $(".mapsProjdesk9").addClass("active");
                    }
                });
                $(".mapsDot5").velocity({
                    opacity: "1"
                }, {
                    delay: 3600,
                    duration: 700,
                    begin: function () {
                        $(".mapsLine5").addClass("active");
                    },
                    complete: function () {
                        $(".mapsProjdesk5").addClass("active");
                        $(".mapsProjdesk6").addClass("active");
                        $(".mapsProjdesk7").addClass("active");
                    }
                });
                $(".mapsDot12").velocity({
                    opacity: "1"
                }, {
                    delay: 4800,
                    duration: 700,
                    begin: function () {
                        $(".mapsLine12").addClass("active");
                    },
                    complete: function () {
                        $(".mapsProjdesk12").addClass("active");
                    }
                });
                $(".mapsDot1").velocity({
                    opacity: "1"
                }, {
                    delay: 2000,
                    duration: 700,
                    begin: function () {
                        $(".article8").fadeOut(700);
                        $(".mapsLegend").addClass("active");
                        $(".mapsLine1").addClass("active");
                    },
                    complete: function () {
                        $(".mapsProjdesk1").addClass("active");
                    }
                });
                $(".mapsDot3").velocity({
                    opacity: "1"
                }, {
                    delay: 2800,
                    duration: 700,
                    begin: function () {
                        $(".mapsLine3").addClass("active");
                    },
                    complete: function () {
                        $(".mapsProjdesk3").addClass("active");
                    }
                });

                //maps mob begins
                $(".mapsProjbg4").velocity({
                    opacity: "1"
                }, {
                    delay: 2000,
                    duration: 700,
                    complete: function () {
                        $(".mapsProjnum4").addClass("active");
                    }
                });
                $(".mapsProjbg13").velocity({
                    opacity: "1"
                }, {
                    delay: 2400,
                    duration: 700,
                    complete: function () {
                        $(".mapsProjnum13").addClass("active");
                    }
                });
                $(".mapsProjbg2").velocity({
                    opacity: "1"
                }, {
                    delay: 2800,
                    duration: 700,
                    complete: function () {
                        $(".mapsProjnum2").addClass("active");
                    }
                });
                $(".mapsProjbg11").velocity({
                    opacity: "1"
                }, {
                    delay: 3200,
                    duration: 700,
                    complete: function () {
                        $(".mapsProjnum11").addClass("active");
                    }
                });
                $(".mapsProjbg14").velocity({
                    opacity: "1"
                }, {
                    delay: 3600,
                    duration: 700,
                    complete: function () {
                        $(".mapsProjnum14").addClass("active");
                    }
                });
                $(".mapsProjbg10").velocity({
                    opacity: "1"
                }, {
                    delay: 4000,
                    duration: 700,
                    complete: function () {
                        $(".mapsProjnum10").addClass("active");
                    }
                });
                $(".mapsProjbg9").velocity({
                    opacity: "1"
                }, {
                    delay: 4400,
                    duration: 700,
                    complete: function () {
                        $(".mapsProjnum9").addClass("active");
                    }
                });
                $(".mapsProjbg6").velocity({
                    opacity: "1"
                }, {
                    delay: 4800,
                    duration: 700,
                    complete: function () {
                        $(".mapsProjnum6").addClass("active");
                    }
                });
                $(".mapsProjbg12").velocity({
                    opacity: "1"
                }, {
                    delay: 5200,
                    duration: 700,
                    complete: function () {
                        $(".mapsProjnum12").addClass("active");
                    }
                });
                $(".mapsProjbg7").velocity({
                    opacity: "1"
                }, {
                    delay: 5600,
                    duration: 700,
                    complete: function () {
                        $(".mapsProjnum7").addClass("active");
                    }
                });
                $(".mapsProjbg1").velocity({
                    opacity: "1"
                }, {
                    delay: 6000,
                    duration: 700,
                    complete: function () {
                        $(".mapsProjnum1").addClass("active");
                    }
                });
                $(".mapsProjbg3").velocity({
                    opacity: "1"
                }, {
                    delay: 6400,
                    duration: 700,
                    complete: function () {
                        $(".mapsProjnum3").addClass("active");
                    }
                });
                $(".mapsProjbg5").velocity({
                    opacity: "1"
                }, {
                    delay: 7000,
                    duration: 700,
                    complete: function () {
                        $(".mapsProjnum5").addClass("active");
                    }
                });
                $(".mapsProjbg8").velocity({
                    opacity: "1"
                }, {
                    delay: 7400,
                    duration: 700,
                    complete: function () {
                        $(".mapsProjnum8").addClass("active");
                    }
                });
            }
            if (origin.index == 7 && direction == 'up') {
                $(".bgColor--maps").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".articleText7").fadeIn(700);
                $(".articleList__wrap").fadeIn(700);
                $(".article8").fadeOut(300);

                $(".mapsDot").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".mapsProj").removeClass("active");
                        $(".mapsTooltip").removeClass("active");
                        $(".mapsLegend").removeClass("active");
                        $(".mapsLine").removeClass("active");
                    }
                });
                $(".mapsProjbg").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400
                });
            }
            if (origin.index == 7 && direction == 'down') {
                $(".bgMills__wrap").fadeIn(700);
                $(".bgColor--maps").velocity({
                    bottom: "100%"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".bgColor--red").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                playProyek.goToAndPlay(0);
                playInvest.goToAndPlay(0);
            }
            if (origin.index == 8 && direction == 'up') {
                $(".bgColor--maps").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".bgColor--red").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".bgMills__wrap").fadeOut(300);
            }
            if (origin.index == 8 && direction == 'down') {
                $(".article9").addClass("active");
                $(".imgLifebar").addClass("pushTop");
                playProyek.pause();
                playInvest.pause();
                //console.log('8down')
            }
            if (origin.index == 9 && direction == 'up') {
                $(".article9").removeClass("active");
                $(".imgLifebar").removeClass("pushTop");
                playProyek.goToAndPlay(0);
                playInvest.goToAndPlay(0);
                //console.log('9up')
            }
            if (origin.index == 9 && direction == 'down') {
                $(".bgColor--red").velocity({
                    bottom: "100%"
                }, {
                    delay: 0,
                    duration: 400
                });
                $(".bgMills__wrap").fadeOut(300);
                $(".article9").fadeOut(300);
                $(".bgColor--blue").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 300,
                    complete: function () {
                        $(".article10").fadeIn(700);
                        $(".creditCol").removeClass("opac0");
                    }
                });
                $(".bgText__wrap").addClass("active");
                //console.log('9down')
            }
            if (origin.index == 10 && direction == 'up') {
                $(".bgMills__wrap").fadeIn(700);
                $(".bgColor--blue").velocity({
                    opacity: "0"
                }, {
                    delay: 300,
                    duration: 400,
                    begin: function () {
                        $(".article10").fadeOut(700);
                    }
                });
                $(".bgColor--red").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    complete: function () {
                        $(".article9").fadeIn(700);
                    }
                });
                $(".bgText__wrap").removeClass("active");
            }
        }
    })

    fullpage_api.setAllowScrolling(false);

    $('#moveTo').on('click', function () {
        fullpage_api.moveTo('start', 1);
        //console.log('start');
    });
    $('.mapsProj').on('click', function () {
        $('.mapsTooltip').hide();
        fullpage_api.setAllowScrolling(false);
        $('.mapsProj').removeClass("active");
        $('.mapsDot').removeAttr("style")
        $('.mapsProjbg').removeAttr("style")
        $(".mapsLegend").removeClass("active");
        $(".mapsLine").removeClass("active");
        $('.maps').removeClass('mapsZoom__bukit');
        $('.maps').removeClass('mapsZoom__eor');
        $('.maps').removeClass('mapsZoom__epf');
        $('.maps').removeClass('mapsZoom__kld');
        $('.maps').removeClass('mapsZoom__lematang');
        $('.maps').removeClass('mapsZoom__merakes');
        $('.maps').removeClass('mapsZoom__north');
        $('.maps').removeClass('mapsZoom__ruv');
        $('.maps').removeClass('mapsZoom__sidayu');
        $('.maps').removeClass('mapsZoom__akasia');
        $('.maps').removeClass('mapsZoom__asso');
        $('.maps').removeClass('mapsZoom__upgrade');
        $('.maps').removeClass('mapsZoom__wb');
        $('.maps').removeClass('mapsZoom__west');
    });
    $('.mapsProj1').on('click', function () {
        $('.-p1').addClass('active');
        setTimeout(function () {
            $('.maps').addClass('mapsZoom__sidayu');
        }, 400);
    });
    $('.mapsProj2').on('click', function () {
        $('.-p2').addClass('active');
        setTimeout(function () {
            $('.maps').addClass('mapsZoom__west');
        }, 400);
    });
    $('.mapsProj3').on('click', function () {
        $('.-p3').addClass('active');
        setTimeout(function () {
            $('.maps').addClass('mapsZoom__bukit');
        }, 400);
    });
    $('.mapsProj4').on('click', function () {
        $('.-p4').addClass('active');
        setTimeout(function () {
            $('.maps').addClass('mapsZoom__kld');
        }, 400);
    });
    $('.mapsProj5').on('click', function () {
        $('.-p5').addClass('active');
        setTimeout(function () {
            $('.maps').addClass('mapsZoom__asso');
        }, 400);
    });
    $('.mapsProj6').on('click', function () {
        $('.-p6').addClass('active');
        setTimeout(function () {
            $('.maps').addClass('mapsZoom__akasia');
        }, 400);
    });
    $('.mapsProj7').on('click', function () {
        $('.-p7').addClass('active');
        setTimeout(function () {
            $('.maps').addClass('mapsZoom__upgrade');
        }, 400);
    });
    $('.mapsProj8').on('click', function () {
        $('.-p8').addClass('active');
        setTimeout(function () {
            $('.maps').addClass('mapsZoom__lematang');
        }, 400);
    });
    $('.mapsProj9').on('click', function () {
        $('.-p9').addClass('active');
        setTimeout(function () {
            $('.maps').addClass('mapsZoom__eor');
        }, 400);
    });
    $('.mapsProj10').on('click', function () {
        $('.-p10').addClass('active');
        setTimeout(function () {
            $('.maps').addClass('mapsZoom__north');
        }, 400);
    });
    $('.mapsProj11').on('click', function () {
        $('.-p11').addClass('active');
        setTimeout(function () {
            $('.maps').addClass('mapsZoom__epf');
        }, 400);
    });
    $('.mapsProj12').on('click', function () {
        $('.-p12').addClass('active');
        setTimeout(function () {
            $('.maps').addClass('mapsZoom__wb');
        }, 400);
    });
    $('.mapsProj13').on('click', function () {
        $('.-p13').addClass('active');
        setTimeout(function () {
            $('.maps').addClass('mapsZoom__ruv');
        }, 400);
    });
    $('.mapsProj14').on('click', function () {
        $('.-p14').addClass('active');
        setTimeout(function () {
            $('.maps').addClass('mapsZoom__merakes');
        }, 400);
    });

    function stopVideo() {
        $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        $('.youtube-video')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        $('.youtube-video')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        //console.log('stopvid');
    }
    $('.popslideClose').on('click', function () {
        $('.popup').removeClass('active');
        fullpage_api.setAllowScrolling(true);
        $('.mapsProj').addClass("active");
        $('.mapsDot').css({
            "opacity": "1"
        });
        $('.mapsProjbg').css({
            "opacity": "1"
        });
        $(".mapsLegend").addClass("active");
        $(".mapsLine").addClass("active");
        $('.maps').removeClass('mapsZoom__bukit');
        $('.maps').removeClass('mapsZoom__eor');
        $('.maps').removeClass('mapsZoom__epf');
        $('.maps').removeClass('mapsZoom__kld');
        $('.maps').removeClass('mapsZoom__lematang');
        $('.maps').removeClass('mapsZoom__merakes');
        $('.maps').removeClass('mapsZoom__north');
        $('.maps').removeClass('mapsZoom__ruv');
        $('.maps').removeClass('mapsZoom__sidayu');
        $('.maps').removeClass('mapsZoom__akasia');
        $('.maps').removeClass('mapsZoom__asso');
        $('.maps').removeClass('mapsZoom__upgrade');
        $('.maps').removeClass('mapsZoom__wb');
        $('.maps').removeClass('mapsZoom__west');
        stopVideo()
    });

    //maps slider
    $('.mapsSlider').cardslider({
        //            swipe: true,
        dots: false,
        loop: true,
        nav: true,
        direction: 'up',
    });
    $('.mapsSlider--2').cardslider({
        //swipe: true,
        dots: false,
        loop: true,
        nav: true,
        direction: 'up',
    });
    $('.mapsSlider--3').cardslider({
        //swipe: true,
        dots: false,
        loop: true,
        nav: true,
        direction: 'up',
    });
    $('.mapsSlider--4').cardslider({
        //swipe: true,
        dots: false,
        loop: true,
        nav: true,
        direction: 'up',
    });

    if (is_mobile == true) {
        // mobile
        //console.log('mobile true')
    } else {
        // desktop
        //console.log('desktop true')
    }
})

$(window).on('load', function () {
    setTimeout(function () {
        $("#animationPreload").fadeOut(2000, function () {
            $('.preloader').remove();
            fullpage_api.setAllowScrolling(true);
            $(".introLogo").removeClass("opac0");
            $(".introCaption").removeClass("opac0");
            $(".introImg__item").addClass("active");
            $(".introCaption--desc").removeClass("opac0");
            $(".introGear--x1").addClass("animationRotateright");
            $(".introGear--x2").addClass("animationRotateleft");
            $(".introGear--x3").addClass("animationRotateright");
            $(".introGear--x4").addClass("animationRotateleft");
            $(".introGear--x5").addClass("animationRotateright");
            $(".introGear--x6").addClass("animationRotateleft");
            //console.log('remove');
        })
        //}, 4000);
    }, 1000);
})

function refreshPage() {
    window.location.reload(false);
}