$(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').addClass("done");
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);
    }, 3000);
    console.log('loaded');
})

$(document).ready(function () {
    // 1. Animation Preloader
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationPreload'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '../asset/json/preload.json',
        name: 'myAnimation',
    });
    // 2. Animation sphere
    var paramSphere = {
        container: document.getElementById('animationSphere'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '../asset/json/sphere.json',
        name: 'myAnimation',
    };
    var playSphere;
    playSphere = bodymovin.loadAnimation(paramSphere);
    playSphere.play();

    // 3. Animation sphere2
    var paramSphere = {
        container: document.getElementById('animationSphere2'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '../asset/json/sphere.json',
        name: 'myAnimation',
    };
    var playSphere2;
    playSphere2 = bodymovin.loadAnimation(paramSphere);

    // 4. Animation Grafik 1
    var paramGrafik1 = {
        container: document.getElementById('animationGrafik1'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '../asset/json/grafik-1.json',
        name: 'myAnimation',
    };
    var playGrafik1;
    playGrafik1 = bodymovin.loadAnimation(paramGrafik1);

    // 5. Animation Grafik 2
    var paramGrafik2 = {
        container: document.getElementById('animationGrafik2'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '../asset/json/grafik-2.json',
        name: 'myAnimation',
    };
    var playGrafik2;
    playGrafik2 = bodymovin.loadAnimation(paramGrafik2);

    // 6. Animation SphereBI
    var paramSphereBI = {
        container: document.getElementById('animationSphereBI'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '../asset/json/preload.json',
        name: 'myAnimation',
    };
    var playSphereBI;
    playSphereBI = bodymovin.loadAnimation(paramSphereBI);

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
                    duration: 700,
                    begin: function () {
                        $(".bgColor__red").removeClass("opac0")
                        $(".coverAnim").addClass("hide")
                        playSphere2.play();
                        $(".prospekImg").removeClass("opac0")
                    },
                    complete: function () {
                        playSphere.goToAndStop(0, true);
                    }
                });
                $(".sphere").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700,
                    begin: function () {},
                    complete: function () {
                        $(".prospekBg").addClass("active")
                    }
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
                        $(".bgColor__red").addClass("opac0")
                        playSphere.play();
                        $(".coverAnim").removeClass("hide")
                    },
                    complete: function () {
                        playSphere2.goToAndStop(0, true);
                        $(".prospekBg").removeClass("active")
                    }
                });
                $(".coverAnim").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 300,
                })
                $(".sphere").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".prospekImg").addClass("opac0")
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 1 && direction == 'down') {
                $(".sphere").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".menuHex").addClass("active")
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 2 && direction == 'up') {
                $(".sphere").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".menuHex").removeClass("active")
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 2 && direction == 'down') {
                $(".prospekImg").addClass("opac0")
                $(".quoteTxt__wrap1").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {
                        $(".quoteTxt1").velocity({
                            opacity: "1"
                        })
                    }
                });
            }
            if (origin.index == 3 && direction == 'up') {
                $(".prospekImg").removeClass("opac0")
                $(".quoteTxt__wrap1").velocity({
                    top: "50%"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".quoteTxt1").velocity({
                            opacity: "0"
                        })
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 3 && direction == 'down') {
                $(".bgColor__blue").removeClass("opac0")
                $(".sphere").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".grafikImg").removeClass("opac0")
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 4 && direction == 'up') {
                $(".bgColor__blue").addClass("opac0")
                $(".sphere").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".grafikImg").addClass("opac0")
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 4 && direction == 'down') {
                $(".sphere").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {
                        playGrafik1.play();
                    }
                });
            }
            if (origin.index == 5 && direction == 'up') {
                $(".sphere").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {
                        playGrafik1.goToAndStop(0);
                    }
                });
            }
            if (origin.index == 5 && direction == 'down') {
                $(".sphere").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".sphereAnim").addClass('scale')
                        $(".grafikBg--building").addClass('scale')
                        $(".grafikBg--grass").velocity({
                            opacity: "0"
                        })
                    },
                    complete: function () {
                        playGrafik1.goToAndStop(0);
                    }
                });
                $(".artBox__inflasi").velocity({
                    top: "0"
                }, {
                    delay: 300,
                    duration: 700,
                    begin: function () {
                        $(".artBox__inflasi li:nth-child(1)").velocity({
                            opacity: "1"
                        })
                        $(".artBox__inflasi li:nth-child(2)").velocity({
                            opacity: "1"
                        }, {
                            delay: 600
                        })
                    },
                    complete: function () {
                        $(".artBox__inflasi li:nth-child(3)").velocity({
                            opacity: "1"
                        }, {
                            delay: 500
                        })
                    }
                });
            }
            if (origin.index == 6 && direction == 'up') {
                $(".sphere").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".sphereAnim").removeClass('scale')
                        $(".grafikBg--building").removeClass('scale')
                        $(".grafikBg--grass").velocity({
                            opacity: "1"
                        })
                    },
                    complete: function () {
                        playGrafik1.play();
                    }
                });
                $(".artBox__inflasi").velocity({
                    top: "50%"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".artBox__inflasi li").velocity({
                            opacity: "0"
                        })
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 6 && direction == 'down') {
                $(".sphere").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {
                        playGrafik2.play();
                    }
                });
            }
            if (origin.index == 7 && direction == 'up') {
                $(".sphere").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {
                        playGrafik2.goToAndStop(0);
                    }
                });
            }
            if (origin.index == 7 && direction == 'down') {
                $(".quoteTxt__wrap2").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {
                        $(".quoteTxt2").velocity({
                            opacity: "1"
                        })
                        playGrafik2.goToAndStop(0);
                    }
                });
            }
            if (origin.index == 8 && direction == 'up') {
                $(".quoteTxt__wrap2").velocity({
                    top: "50%"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".quoteTxt2").velocity({
                            opacity: "0"
                        })
                    },
                    complete: function () {
                        playGrafik2.play();
                    }
                });
            }
            if (origin.index == 8 && direction == 'down') {
                $(".grafikImg").addClass("opac0")
                //sphere BI in
                $(".sphereBI").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        playSphereBI.play();
                        $(".sphereBIAnim").addClass("left")
                    },
                    complete: function () {}
                });
                $(".stability").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 300
                });
            }
            if (origin.index == 9 && direction == 'up') {
                $(".grafikImg").removeClass("opac0")
                //sphere BI out
                $(".sphereBI").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {},
                    complete: function () {
                        $(".sphereBIAnim").removeClass("left")
                    }
                });
                $(".stability").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 9 && direction == 'down') {
                $(".artBox__bauran1").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {
                        $(".artBox__bauran1 li").velocity({
                            opacity: "1"
                        })
                    }
                });
                $(".artBox__bauran2").velocity({
                    top: "0"
                }, {
                    delay: 300,
                    duration: 700,
                    begin: function () {},
                    complete: function () {
                        $(".artBox__bauran2 li").velocity({
                            opacity: "1"
                        })
                    }
                });
            }
            if (origin.index == 10 && direction == 'up') {
                $(".artBox__bauran").velocity({
                    top: "50%"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".artBox__bauran li").velocity({
                            opacity: "0"
                        })
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 10 && direction == 'down') {}
            if (origin.index == 11 && direction == 'up') {}
            if (origin.index == 11 && direction == 'down') {
                $(".artBox__sinergi li:nth-child(1)").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700,
                    begin: function () {
                        $(".artBox__sinergi li").addClass('active')
                    },
                    complete: function () {}
                });
                $(".artBox__sinergi li:nth-child(2)").velocity({
                    opacity: "1"
                }, {
                    delay: 600,
                    duration: 700
                });
                $(".artBox__sinergi li:nth-child(3)").velocity({
                    opacity: "1"
                }, {
                    delay: 900,
                    duration: 700
                });
                $(".artBox__sinergi li:nth-child(4)").velocity({
                    opacity: "1"
                }, {
                    delay: 1200,
                    duration: 700
                });
                $(".artBox__sinergi li:nth-child(5)").velocity({
                    opacity: "1"
                }, {
                    delay: 1500,
                    duration: 700
                });
            }
            if (origin.index == 12 && direction == 'up') {
                $(".artBox__sinergi li").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".artBox__sinergi li").removeClass('active')
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 12 && direction == 'down') {
                $(".sphereBIAnim").addClass("bottom")
            }
            if (origin.index == 13 && direction == 'up') {
                $(".sphereBIAnim").removeClass("bottom")
            }
            if (origin.index == 13 && direction == 'down') {
                $(".sphereBI").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {},
                    complete: function () {}
                });
                $(".sektorTxt1").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 300
                });
                $(".sektorTxt2").velocity({
                    opacity: "1"
                }, {
                    delay: 600,
                    duration: 300
                });
                $(".sektorTxt3").velocity({
                    opacity: "1"
                }, {
                    delay: 900,
                    duration: 300
                });
                $(".sektorTxt4").velocity({
                    opacity: "1"
                }, {
                    delay: 1200,
                    duration: 300
                });
                $(".sektorTxt5").velocity({
                    opacity: "1"
                }, {
                    delay: 1500,
                    duration: 300
                });
            }
            if (origin.index == 14 && direction == 'up') {
                $(".sphereBI").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
                $(".sektorTxt").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {},
                    complete: function () {}
                });
            }
            if (origin.index == 14 && direction == 'down') {
                $('.creditTitle').addClass('active');
                $('.creditName').addClass('active');
            }
            if (origin.index == 15 && direction == 'up') {
                $('.creditTitle').removeClass('active');
                $('.creditName').removeClass('active');
            }
        }
    })

    fullpage_api.setAllowScrolling(false);
    fullpage_api.setKeyboardScrolling(false);

    //popup hexagon menu
    let cpop = $('#poptitle'),
        tpop = $('#poptxt'),
        mdl = $('#popup');

    function clearModalsContent() {
        if (mdl.length) {
            cpop.empty();
            tpop.empty();
        }
    }

    //close modal popup 
    $('.buttonClose').on('click', function (e) {
        if (mdl.length) {
            fullpage_api.setAllowScrolling(true);
            fullpage_api.setKeyboardScrolling(true);

            mdl.removeClass('active')
            clearModalsContent()
        }
    })

    //open modal popup
    $('.menuHex').on('click', function (e) {
        if (mdl.length) {
            fullpage_api.setAllowScrolling(false);
            fullpage_api.setKeyboardScrolling(false);
            $('.menuClick').addClass('opac0')

            clearModalsContent()
            mdl.addClass('active')
            let title = $(this).find($('.menuHex__title span')).clone(),
                txt = $(this).find($('.menuHex__desc span')).clone();
            console.log()
            cpop.append(title)
            tpop.append(txt)
        } else {
            console.log('template modals not found');
            return;
        }
    })
})