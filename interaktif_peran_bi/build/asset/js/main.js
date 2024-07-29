$(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').addClass("done");
        $(".cover").addClass("active");
        $(".coverTitle__top").velocity({
            top: "0"
        }, {
            delay: 0,
            duration: 300
        });
        $(".coverTitle__bottom").velocity({
            top: "0"
        }, {
            delay: 300,
            duration: 300
        });
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);
    }, 3000);
    //console.log('loaded');
})

$(document).ready(function () {
    // 1. Animation Ekspor
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationExport'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/koperasi-anim.json',
        name: 'myAnimation',
    });
    // 2. Animation Acceleration
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('accelAnim'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/accel-anim.json',
        name: 'myAnimation',
    });
    // 3. Animation Quote 1
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('quoteAnim1'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/perry-anim.json',
        name: 'myAnimation',
    });
    // 4. Animation Quote 2
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('quoteAnim2'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/tarmizi-anim.json',
        name: 'myAnimation',
    });
    // 5. Animation Pull
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('pullAnim'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/pull-anim.json',
        name: 'myAnimation',
    });
    // 6. Animation Push
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('pushAnim'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/push-anim.json',
        name: 'myAnimation',
    });
    // 7. Animation bifast
    var paramBifast = {
        container: document.getElementById('bifastAnim'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/bi-fast.json',
        name: 'myAnimation',
    };
    var playBifast;
    playBifast = bodymovin.loadAnimation(paramBifast);
    // 8. Animation qris
    var paramQris = {
        container: document.getElementById('qrisAnim'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/qris-anim.json',
        name: 'myAnimation',
    };
    var playQris;
    playQris = bodymovin.loadAnimation(paramQris);
    // 9. Animation ecom
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('ecomAnim'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/ecom-anim.json',
        name: 'myAnimation',
    });
    // 10. Animation efin
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('efinAnim'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/efin-anim.json',
        name: 'myAnimation',
    });
    // 11. Animation efarm
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('efarmAnim'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/efarm-anim.json',
        name: 'myAnimation',
    });

    // var animation = bodymovin.loadAnimation({
    //     container: document.getElementById('globalImg'),
    //     renderer: 'svg',
    //     loop: true,
    //     autoplay: true,
    //     path: 'asset/json/ekspor.json',
    //     name: 'myAnimation',
    // });

    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        //navigation: true,
        anchors: ['cover', 'intro', 'global', 'export', 'cup', 'accel', 'quote1', 'quote2', 'role', 'strategy', 'strategy2', 'goglobal', 'ecosystem', 'stop', 'kki', 'kkiGoal', 'kkiTimeline', 'fekdi'],
        lockAnchors: true,
        //scrollOverflow: true,

        onLeave: function (origin, destination, direction) {
            var leavingSection = this;

            if (origin.index == 0 && direction == 'down') {
                $('.cover').removeClass('active')
                $('.scroll-guide').removeClass('opac0')
            }
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
                        $('.scroll-guide').addClass('opac0')
                    },
                    complete: function () {
                        $('.intro').removeClass('fly')
                    }
                });
                $(".intro").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $('.cover').addClass('active')
            }
            if (origin.index == 1 && direction == 'down') {
                fullpage_api.setAllowScrolling(false);
                fullpage_api.setKeyboardScrolling(false);
                $(".introArticle").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.intro').addClass('fly')
                        $('.scroll-guide').addClass('opac0')
                    }
                });
                if ($('.intro').hasClass('fly')) {
                    $(".global").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $('.global').addClass('fly')
                        }
                    });
                    $(".globalPlane").velocity({
                        opacity: "1"
                    }, {
                        delay: 700,
                        duration: 700,
                        complete: function () {
                            fullpage_api.setAllowScrolling(true);
                            fullpage_api.setKeyboardScrolling(true)
                            $('.scroll-guide').removeClass('opac0')
                        }
                    });
                } else {
                    if (viewport().width >= 1180) {
                        $(".global").velocity({
                            opacity: "1"
                        }, {
                            delay: 3000,
                            duration: 700,
                            begin: function () {
                                $('.global').addClass('fly')
                            }
                        });
                        $(".globalPlane").velocity({
                            opacity: "1"
                        }, {
                            delay: 3700,
                            duration: 700,
                            complete: function () {
                                fullpage_api.setAllowScrolling(true);
                                fullpage_api.setKeyboardScrolling(true);
                                $('.scroll-guide').removeClass('opac0')
                            }
                        });
                    } else {
                        $(".global").velocity({
                            opacity: "1"
                        }, {
                            delay: 1500,
                            duration: 700,
                            begin: function () {
                                $('.global').addClass('fly')
                            }
                        });
                        $(".globalPlane").velocity({
                            opacity: "1"
                        }, {
                            delay: 2200,
                            duration: 700,
                            complete: function () {
                                fullpage_api.setAllowScrolling(true);
                                fullpage_api.setKeyboardScrolling(true);
                                $('.scroll-guide').removeClass('opac0')
                            }
                        });
                    }
                }
            }
            if (origin.index == 2 && direction == 'up') {
                $('.scroll-guide').addClass('opac0')
                $(".introArticle").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".global").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    complete: function () {
                        $('.global').removeClass('fly')
                    }
                });
                $(".globalPlane").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 2 && direction == 'down') {
                $('.globalMap').addClass('zoom')
                $(".globalWay").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    complete: function () {
                        $('.global').removeClass('fly')
                    }
                });
                $(".globalPlane").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".globalArticle").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".globalList").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".export").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".cover").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".coverPlant").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });

                $('.coverCloud').removeClass('move')
            }
            if (origin.index == 3 && direction == 'up') {
                $('.coverCloud').addClass('move')
                $('.globalMap').removeClass('zoom')
                $(".globalWay").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".globalList").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.global').addClass('fly')
                    }
                });
                $(".globalPlane").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".globalArticle").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".export").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".cover").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".coverPlant").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 3 && direction == 'down') {
                $(".cup").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        fullpage_api.setAllowScrolling(false, 'down');
                        fullpage_api.setKeyboardScrolling(false, 'down');
                        $('.scroll-guide').addClass('opac0')
                    },
                    complete: function () {
                        $('.cup').addClass('active')
                    }
                });
                $(".export").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".global").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 4 && direction == 'up') {
                $(".cup").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.cup').removeClass('active')
                        fullpage_api.setAllowScrolling(true, 'down');
                        fullpage_api.setKeyboardScrolling(true, 'down');
                        $('.scroll-guide').removeClass('opac0')
                    }
                });
                $(".export").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".global").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 4 && direction == 'down') {
                //cup click
                $('.scroll-guide').removeClass('opac0')
            }
            if (origin.index == 5 && direction == 'up') {
                $(".accelArticle").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        fullpage_api.setAllowScrolling(false, 'down');
                        fullpage_api.setKeyboardScrolling(false, 'down');
                        $('.cup').addClass('active')
                        $('.scroll-guide').addClass('opac0')
                    }
                });
                $(".accel").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".cup").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgColor__green").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".bgColor__cloud").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 5 && direction == 'down') {
                $(".accelArticle").velocity({
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".bgColor__quote").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".quote1").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".quoteTxt1").velocity({
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".quoteDsc1").velocity({
                    left: "0"
                }, {
                    delay: 400,
                    duration: 700
                });
            }
            if (origin.index == 6 && direction == 'up') {
                $(".bgColor__quote").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".quote1").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".quoteTxt1").velocity({
                    left: "-100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".quoteDsc1").velocity({
                    left: "-100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".accelArticle1").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".accelArticle2").velocity({
                    top: "0"
                }, {
                    delay: 400,
                    duration: 700
                });
            }
            if (origin.index == 6 && direction == 'down') {
                $(".quote2").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".quoteTxt2").velocity({
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".quoteDsc2").velocity({
                    left: "0"
                }, {
                    delay: 400,
                    duration: 700
                });
                $(".quote1").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".quoteTxt1").velocity({
                    left: "-100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".quoteDsc1").velocity({
                    left: "-100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 7 && direction == 'up') {
                $(".quote1").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".quoteTxt1").velocity({
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".quoteDsc1").velocity({
                    left: "0"
                }, {
                    delay: 400,
                    duration: 700
                });
                $(".quote2").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".quoteTxt2").velocity({
                    left: "-100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".quoteDsc2").velocity({
                    left: "-100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 7 && direction == 'down') {
                if (viewport().height <= 784 && viewport().width <= 768) {
                    $(".scroll-guide").addClass('-black')
                }
                $(".quote2").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".quoteTxt2").velocity({
                    left: "100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".quoteDsc2").velocity({
                    left: "100vw"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".bgColor__quote").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".bgColor__roleWrap").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".role").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.bgColor__cloud').addClass('opac')
                    }
                });
                $(".accelBranch").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".bgColor__green").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".roleItem1").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".roleItem2").velocity({
                    top: "0"
                }, {
                    delay: 300,
                    duration: 300
                });
                $(".roleItem3").velocity({
                    top: "0"
                }, {
                    delay: 600,
                    duration: 300
                });
                $(".roleItem4").velocity({
                    top: "0"
                }, {
                    delay: 900,
                    duration: 300
                });
                $(".roleItem5").velocity({
                    top: "0"
                }, {
                    delay: 1200,
                    duration: 300
                });
            }
            if (origin.index == 8 && direction == 'up') {
                $(".scroll-guide").removeClass('-black')
                $(".bgColor__roleWrap").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".accelBranch").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgColor__green").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".role").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".roleItem").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 300,
                    complete: function () {
                        $('.bgColor__cloud').removeClass('opac')
                    }
                });
                $(".quote2").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".quoteTxt2").velocity({
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".quoteDsc2").velocity({
                    left: "0"
                }, {
                    delay: 400,
                    duration: 700
                });
                $(".bgColor__quote").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 8 && direction == 'down') {
                $(".role").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".strategy").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".strategyBox1").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.strategyTxt1').addClass('active')
                    }
                });
                $(".strategyBox2").velocity({
                    top: "0"
                }, {
                    delay: 300,
                    duration: 700
                });
                $(".roleItem").velocity({
                    top: "-100vh"
                }, {
                    delay: 300,
                    duration: 300
                });
            }
            if (origin.index == 9 && direction == 'up') {
                $(".strategy").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.strategyTxt1').removeClass('active')
                    }
                });
                $(".strategyBox1").velocity({
                    top: "100vh"
                }, {
                    delay: 300,
                    duration: 300
                });
                $(".strategyBox2").velocity({
                    top: "100vh"
                }, {
                    delay: 300,
                    duration: 300
                });
                $(".role").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".roleItem1").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".roleItem2").velocity({
                    top: "0"
                }, {
                    delay: 300,
                    duration: 300
                });
                $(".roleItem3").velocity({
                    top: "0"
                }, {
                    delay: 600,
                    duration: 300
                });
                $(".roleItem4").velocity({
                    top: "0"
                }, {
                    delay: 900,
                    duration: 300
                });
                $(".roleItem5").velocity({
                    top: "0"
                }, {
                    delay: 1200,
                    duration: 300
                });
            }
            if (origin.index == 9 && direction == 'down') {
                $(".strategyTxt1").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.strategyTxt1').removeClass('active')
                    }
                });
                $(".strategyTxt2").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.strategyTxt2').addClass('active')
                    }
                });
            }
            if (origin.index == 10 && direction == 'up') {
                $(".strategyTxt2").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.strategyTxt2').removeClass('active')
                    }
                });
                $(".strategyTxt1").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.strategyTxt1').addClass('active')
                    }
                });
            }
            if (origin.index == 10 && direction == 'down') {
                $(".strategy").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.strategyTxt2').removeClass('active')
                    }
                });
                $(".goglobal").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        playBifast.play();
                        playQris.play();
                    }
                });
                $(".goglobalArticle1").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".goglobalArticle2").velocity({
                    top: "0"
                }, {
                    delay: 300,
                    duration: 300
                });
            }
            if (origin.index == 11 && direction == 'up') {
                $(".strategy").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.strategyTxt2').addClass('active')
                    }
                });
                $(".goglobal").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".goglobalArticle").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 11 && direction == 'down') {
                $(".scroll-guide").removeClass('-black')
                $(".goglobal").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".goglobalArticle").velocity({
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".ecosystem").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.ecosystem').addClass('active')
                        $('.ecosystemItem').addClass('active')
                    }
                });
            }
            if (origin.index == 12 && direction == 'up') {
                if (viewport().height <= 784 && viewport().width <= 768) {
                    $(".scroll-guide").addClass('-black')
                }
                $(".ecosystem").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.ecosystem').removeClass('active')
                        $('.ecosystemItem').removeClass('active')
                    }
                });
                $(".goglobal").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        playBifast.play();
                        playQris.play();
                    }
                });
                $(".goglobalArticle1").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".goglobalArticle2").velocity({
                    top: "0"
                }, {
                    delay: 300,
                    duration: 300
                });
            }
            if (origin.index == 12 && direction == 'down') {
                $(".stop").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.ecosystem').removeClass('active')
                    }
                });
            }
            if (origin.index == 13 && direction == 'up') {
                $(".stop").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.ecosystem').addClass('active')
                    }
                });
            }
            if (origin.index == 13 && direction == 'down') {
                $(".ecosystem").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".kki").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.kki').addClass('active')
                    }
                });
                $(".bgColor__kki").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".stop").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });

            }
            if (origin.index == 14 && direction == 'up') {
                $(".kki").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.kki').removeClass('active')
                    }
                });
                $(".stop").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bgColor__kki").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".ecosystem").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 14 && direction == 'down') {
                $(".kkiArticle").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.kki').addClass('goal')
                    }
                });
                $(".kkiGoal").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".kkiGoal__item1").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".kkiGoal__item2").velocity({
                    top: "0"
                }, {
                    delay: 300,
                    duration: 300
                });
                $(".kkiGoal__item3").velocity({
                    top: "0"
                }, {
                    delay: 600,
                    duration: 300
                });
                $(".kkiGoal__item4").velocity({
                    top: "0"
                }, {
                    delay: 900,
                    duration: 300
                });
                $(".kkiGoal__item5").velocity({
                    top: "0"
                }, {
                    delay: 1200,
                    duration: 300
                });
                // console.log('14 down')
            }
            if (origin.index == 15 && direction == 'up') {
                $(".kkiArticle").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.kki').removeClass('goal')
                    }
                });
                $(".kkiGoal").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".kkiGoal__item").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 300
                });
                // console.log('15 up')
            }
            if (origin.index == 15 && direction == 'down') {
                $(".kkiTimeline").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.kkiTimeline').addClass('active')
                        fullpage_api.setAllowScrolling(false, 'down');
                        fullpage_api.setKeyboardScrolling(false, 'down');
                        $('.scroll-guide').addClass('opac0')
                    }
                });
                $(".kkiGoal").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".kkiGoal__item").velocity({
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".kkiLogo").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                // console.log('15 down')
            }
            if (origin.index == 16 && direction == 'up') {
                $(".kkiLogo").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".kkiGoal").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".kkiGoal__item1").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".kkiGoal__item2").velocity({
                    top: "0"
                }, {
                    delay: 300,
                    duration: 300
                });
                $(".kkiGoal__item3").velocity({
                    top: "0"
                }, {
                    delay: 600,
                    duration: 300
                });
                $(".kkiGoal__item4").velocity({
                    top: "0"
                }, {
                    delay: 900,
                    duration: 300
                });
                $(".kkiGoal__item5").velocity({
                    top: "0"
                }, {
                    delay: 1200,
                    duration: 300
                });
                $(".kkiTimeline").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.kkiTimeline').removeClass('active')
                        fullpage_api.setAllowScrolling(true, 'down');
                        fullpage_api.setKeyboardScrolling(true, 'down');
                        $('.scroll-guide').removeClass('opac0')
                    }
                });
                // console.log('16 up')
            }
            if (origin.index == 16 && direction == 'down') {
                //start fekdi
                $('.scroll-guide').removeClass('opac0')
                // console.log('16 down')
            }
            if (origin.index == 17 && direction == 'up') {
                $(".bgColor__fekdi").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".fekdi").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".kkiTimeline").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.kkiTimeline').addClass('active')
                        fullpage_api.setAllowScrolling(false, 'down');
                        fullpage_api.setKeyboardScrolling(false, 'down');
                        $('.scroll-guide').addClass('opac0')
                    }
                });
                // console.log('17 up')
            }
            if (origin.index == 17 && direction == 'down') {
                $(".collab").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.fekdiLogo').addClass('collab')
                    }
                });
                // console.log('17 down')
            }
            if (origin.index == 18 && direction == 'up') {
                $(".collab").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.fekdiLogo').removeClass('collab')
                    }
                });
                // console.log('18 up')
            }
            if (origin.index == 18 && direction == 'down') {
                $(".collabTxt2").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                })
                $(".collabTxt1").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".collabCaption").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                // console.log('18 down')
            }
            if (origin.index == 19 && direction == 'up') {
                $(".collabTxt1").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                })
                $(".collabTxt2").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".collabCaption").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                // console.log('19 up')
            }
            if (origin.index == 19 && direction == 'down') {
                $(".socmed").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.socmed').addClass('active')
                        $(".scroll-guide").addClass('opac0')
                    }
                })
                $(".bgColor__fekdi").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".bgColor__socmed").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".collab").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.fekdiLogo').removeClass('collab')
                        $('.fekdiLogo').addClass('web')
                    }
                });

                // console.log('19 down')
            }
            if (origin.index == 20 && direction == 'up') {
                $(".socmed").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.socmed').removeClass('active')
                        $(".scroll-guide").removeClass('opac0')
                    }
                })
                $(".collab").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.fekdiLogo').addClass('collab')
                        $('.fekdiLogo').removeClass('web')
                    }
                });
                $(".bgColor__socmed").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
                $(".bgColor__fekdi").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });

                // console.log('20 up')
            }
            if (origin.index == 20 && direction == 'down') {
                $(".creditSection").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.creditTitle').addClass('active')
                        $('.creditName').addClass('active')
                    }
                })
                $(".socmed").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.socmed').removeClass('active')
                        $('.fekdiLogo').addClass('credit')
                    }
                })
                $(".bgColor__socmed").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 21 && direction == 'up') {
                $(".creditSection").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.creditTitle').removeClass('active')
                        $('.creditName').removeClass('active')
                    }
                })
                $(".socmed").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.socmed').addClass('active')
                        $('.fekdiLogo').removeClass('credit')
                    }
                })
                $(".bgColor__socmed").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
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

function startAccel() {
    fullpage_api.moveTo('accel', 5);
    $(".accelArticle1").velocity({
        top: "0"
    }, {
        delay: 0,
        duration: 700
    });
    $(".accelArticle2").velocity({
        top: "0"
    }, {
        delay: 400,
        duration: 700,
        complete: function () {
            fullpage_api.setAllowScrolling(true, 'down');
            fullpage_api.setKeyboardScrolling(true, 'down');
        }
    });
    $(".accel").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 700
    });
    $(".bgColor__green").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 700
    });
    $(".bgColor__cloud").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 700
    });
    $(".cup").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 300,
        begin: function () {
            $('.cup').removeClass('active')
        }
    })
}

function startFekdi() {
    fullpage_api.moveTo('fekdi', 17);
    // console.log('start fekdi')
    $(".bgColor__fekdi").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 700
    });
    $(".fekdi").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 700
    });
    $(".kkiTimeline").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 300,
        begin: function () {
            $('.kkiTimeline').removeClass('active')
            fullpage_api.setAllowScrolling(true, 'down');
            fullpage_api.setKeyboardScrolling(true, 'down');
        }
    });
}

//close modal popup 
let mdl = $('.popup');
$('.buttonClose').on('click', function (e) {
    closePopup()
})

$('.popup').on("click", function () {
    closePopup()
})

$('.ecosystemPop__wrap').on('click', function (e) {
    e.stopPropagation();
})

function closePopup() {
    if (mdl.length) {
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);

        mdl.removeClass('active')
    }
}

//open modal popup
function openPopup(type) {
    let popupnum = type;
    if (mdl.length) {
        fullpage_api.setAllowScrolling(false);
        fullpage_api.setKeyboardScrolling(false);
        $('.ecosystemClick').addClass('opac0')

        $('#popup' + popupnum).addClass('active')
        // console.log()
    }
}

//slider journey
var boxMd = new Swiper(".boxSwiper", {
    effect: 'slide',
    slidesPerView: 1.1,
    // autoplay: {                         
    //     delay: 2000,  
    // },  
    spaceBetween: 0,
    grabCursor: true,
    loop: false,
    breakpoints: {
        // 768: {
        //     slidesPerView: 3.5
        // },
        1270: {
            slidesPerView: 2.6,
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                // dragSize: dragSize
            },
        },
    }
});
boxMd.on('slideChange', function () {
    $('.kkiTimelineClick').addClass('opac0')
});

/* s: Get HEIGHT Device */
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener("resize", appHeight)
appHeight()
/* e: Get HEIGHT Device */

//calc width window
function viewport() {
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
    };
}