var is_mobile = false;

function focusOnMyInputBox() {
    document.getElementById("password").focus();
}

$(".coverNum").click(function () {
    var number = $(this).data('number'),
        cI = $(".coverInput");
    if (!$(".coverInput:nth-child(1)").val()) {
        $(".coverInput:nth-child(1)").val(function () {
            return this.value + number;
        });
        $('.coverInput:nth-child(1)').next(cI).focus();
    } else if (!$(".coverInput:nth-child(2)").val()) {
        $(".coverInput:nth-child(2)").val(function () {
            return this.value + number;
        });
        $('.coverInput:nth-child(2)').next(cI).focus();
    } else if (!$(".coverInput:nth-child(3)").val()) {
        $(".coverInput:nth-child(3)").val(function () {
            return this.value + number;
        });
        $('.coverInput:nth-child(3)').next(cI).focus();
    } else if (!$(".coverInput:nth-child(4)").val()) {
        $(".coverInput:nth-child(4)").val(function () {
            return this.value + number;
        });
    }
});

function validateForm() {
    var isValid = true;
    $('.coverInput').each(function () {
        if ($(this).val() === '')
            isValid = false;
    });
    return isValid;
}

$('#moveTo').on('click', function () {
    if (validateForm() == true) {
        $('.coverForm').addClass('display-none');
        $('.coverGranted').removeClass('display-none');
        setTimeout(function () {
            fullpage_api.setAllowScrolling(true);
            fullpage_api.moveTo('start', 1);
            console.log('start');
        }, 700);
    }
});

$(document).ready(function () {

    if ($('#some-element').css('display') == 'none') {
        is_mobile = true;
    }
    // 1. Animation Medal
    /*
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

    // 6
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationPumpbrown'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/pompa-brown.json',
        name: 'myAnimation',
    });
    */

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
                $(".coverTop").addClass("active");
                $(".coverBottom").addClass("active");
                $(".coverTop").addClass("move");
                $(".coverBottom").addClass("move");
                $(".bgStatic__wrap").removeClass("active");
                console.log("0down")
            }
            if (origin.index == 1 && direction == 'up') {
                $(".bgStatic__wrap").addClass("active");
                $(".coverTop").removeClass("move");
                $(".coverBottom").removeClass("move");
                $(".bgStatic__wrap").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 600,
                    complete: function () {
                        $(".coverTop").removeClass("active");
                        $(".coverBottom").removeClass("active");
                    }
                });
            }
            if (origin.index == 1 && direction == 'down') {
                $(".introTxt").fadeIn(300);
                $(".introTxt__wrap").addClass("active");
                $(".introImg").addClass("scale");
            }
            if (origin.index == 2 && direction == 'up') {
                $(".introTxt").fadeOut(300);
                $(".introImg").removeClass("scale");
                $(".introTxt__wrap").removeClass("active");
            }
            if (origin.index == 2 && direction == 'down') {
                $(".introBorder").addClass("moveTop");
                $(".goalImg").removeClass("moveUp");
                $(".goalTxt").removeClass("opac0");
                $(".goalTxt").velocity({
                    opacity: "1"
                })
            }
            if (origin.index == 3 && direction == 'up') {
                $(".goalImg").addClass("moveUp");
                $(".goalTxt").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".goalTxt").addClass("opac0");
                        $(".goalImg").addClass("moveUp");
                    },
                    complete: function () {
                        $(".introBorder").removeClass("moveTop");
                    }
                });
                //console.log("3up")
            }
            if (origin.index == 3 && direction == 'down') {
                $(".goalImg").addClass("opac0");
                $(".goalTxt").addClass("opac0");
                $(".speechContent").addClass("scale");
                $(".speechContent__wrap").removeClass("opac0");
                $(".speech").velocity({
                    bottom: "0"
                }, {
                    delay: 700,
                    duration: 700,
                    begin: function () {},
                    complete: function () {
                        $(".speech").removeClass("moveUp");
                    }
                });
                $(".goalTxt").velocity({
                    opacity: "0"
                })
            }
            if (origin.index == 4 && direction == 'up') {
                $(".speech").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".speech").addClass("moveUp");
                    },
                    complete: function () {
                        $(".goalImg").removeClass("opac0");
                        $(".goalTxt").removeClass("opac0");
                    }
                });
                //console.log("4up")
            }
            if (origin.index == 4 && direction == 'down') {
                $(".ooredoo").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".speech").addClass("opac0");
                        $(".ooredoo").removeClass("moveUp");
                    },
                    complete: function () {
                        $(".speech").addClass("moveUp");
                        $(".bgColor--corporate").addClass("yellow");
                        $(".bgCircle").addClass("opac0");
                    }
                });
                $(".ooredooContent").removeClass("opac0");
            }
            if (origin.index == 5 && direction == 'up') {
                $(".ooredoo").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {
                        $(".bgColor--corporate").removeClass("yellow");
                        $(".speech").removeClass("opac0");
                        $(".speech").removeClass("moveUp");
                        $(".bgCircle").removeClass("opac0");
                    }
                });
                $(".ooredoo").addClass("moveUp");
                $(".ooredooContent").addClass("opac0");
                ///console.log("5up")
            }
            if (origin.index == 5 && direction == 'down') {
                $(".ooredoo").velocity({
                    left: "-100%"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".bgColor--corporate").addClass("opac0");
                        $(".bgColor--white").removeClass("opac0");
                    },
                    complete: function () {
                        $(".bgColor--corporate").removeClass("yellow");
                    }
                });
                $(".hutchison").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".hutchison").removeClass("moveUp");
                    }
                });
            }
            if (origin.index == 6 && direction == 'up') {
                $(".ooredoo").velocity({
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".bgColor--corporate").removeClass("opac0");
                        $(".bgColor--white").addClass("opac0");
                    },
                    complete: function () {
                        $(".bgColor--corporate").addClass("yellow");
                        $(".hutchison").addClass("moveUp");
                    }
                });
                $(".hutchison").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".hutchison").addClass("moveUp");
                    }
                });
            }
            if (origin.index == 6 && direction == 'down') {
                $(".hutchison").velocity({
                    bottom: "100%"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".bgColor--corporate").removeClass("opac0");
                        $(".bgColor--white").addClass("opac0");
                        $(".holdings").fadeIn(300);
                    },
                    complete: function () {
                        $(".hutchison").removeClass("moveUp");
                        $(".holdingsWrap").removeClass("opac0");
                        $(".bgColor--corporate").addClass("blue");
                        $(".bgCircle").removeClass("opac0");
                    }
                });
            }
            if (origin.index == 7 && direction == 'up') {
                $(".hutchison").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".hutchison").addClass("moveUp");
                        $(".holdingsWrap").addClass("opac0");
                    },
                    complete: function () {
                        $(".bgColor--corporate").addClass("opac0");
                        $(".bgColor--white").removeClass("opac0");
                        $(".holdings").fadeOut(300);
                        $(".bgColor--corporate").removeClass("blue");
                        $(".bgColor--corporate").removeClass("active");
                        $(".bgCircle").addClass("opac0");
                    }
                });
            }
            if (origin.index == 7 && direction == 'down') {
                $(".holdings").removeClass("moveDown");
                $(".holdings").addClass("moveTop");
                $(".joinContent").addClass("scale");
                $(".joinContent__wrap").removeClass("opac0");
                $(".join").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {
                        $(".bgColor--corporate").addClass("active");
                        $(".join").removeClass("moveUp");
                    }
                });
            }
            if (origin.index == 8 && direction == 'up') {
                $(".join").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".join").addClass("moveUp");
                    },
                    complete: function () {
                        $(".holdings").addClass("moveDown");
                        $(".holdings").removeClass("moveTop");
                        $(".bgColor--corporate").removeClass("active");
                    }
                });
            }
            if (origin.index == 8 && direction == 'down') {
                $(".join").velocity({
                    bottom: "100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".operation").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".operation").removeClass("moveUp");
                    },
                    complete: function () {
                        $(".operationDot").addClass("active");
                    }
                });
            }
            if (origin.index == 9 && direction == 'up') {
                $(".join").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".operation").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".operation").removeClass("moveUp");
                    }
                });
            }
            if (origin.index == 9 && direction == 'down') {
                $(".operation").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".operationAnim").addClass("scale");
                    },
                    complete: function () {
                        $(".serviceAnim").addClass("scale");
                        $(".service").removeClass("opac0");
                    }
                });
            }
            if (origin.index == 10 && direction == 'up') {
                $(".operation").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".serviceAnim").removeClass("scale");
                        $(".service").addClass("opac0");
                    },
                    complete: function () {
                        $(".operationAnim").removeClass("scale");
                    }
                });
            }
            if (origin.index == 10 && direction == 'down') {
                $(".service").velocity({
                    bottom: "100%"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".service").addClass("opac0");
                    },
                    complete: function () {
                        $(".bgColor--dblue").removeClass("opac0");
                        $(".remarks").removeClass("moveUp");
                    }
                });
                $(".remarks").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 11 && direction == 'up') {
                $(".service").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".service").removeClass("opac0");
                    },
                    complete: function () {
                        $(".bgColor--dblue").addClass("opac0");
                    }
                });
                $(".remarks").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
            }
            if (origin.index == 11 && direction == 'down') {
                $(".remarks").velocity({
                    bottom: "100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".board").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".board").removeClass("moveUp");
                        $(".bgColor--corporate").removeClass("blue");
                        $(".bgColor--dblue").addClass("opac0");
                        $(".bgStatic__wrap").addClass("active");
                    }
                });
            }
            if (origin.index == 12 && direction == 'up') {
                $(".remarks").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".board").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".bgColor--corporate").addClass("blue");
                        $(".bgColor--dblue").removeClass("opac0");
                        $(".bgStatic__wrap").removeClass("active");
                    }
                });
            }
            if (origin.index == 12 && direction == 'down') {
                $(".board").velocity({
                    bottom: "100%"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".tvc").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".tvc").removeClass("moveUp");
                    },
                    complete: function () {
                        $(".bgColor--tvc").removeClass("opac0");
                    }
                });
                //console.log("12down")
            }
            if (origin.index == 13 && direction == 'up') {
                $(".board").velocity({
                    bottom: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".tvc").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".bgColor--tvc").addClass("opac0");
                    }
                });
                $('video').trigger('pause');
                //console.log("13up")
            }
            if (origin.index == 13 && direction == 'down') {
                $(".bgStatic__wrap").removeClass("active");
                $('video').trigger('pause');
            }
            if (origin.index == 14 && direction == 'up') {
                $(".bgStatic__wrap").addClass("active");
            }
        }
    })

    fullpage_api.setAllowScrolling(false);

    // function stopVideo() {
    //     $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    //     $('.youtube-video')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    //     $('.youtube-video')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    //     //console.log('stopvid');
    // }

    //slider komisaris
    function createSlick() {
        $('#com-slide').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            //fade: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            vertical: true,
            verticalSwiping: true,
            autoplay: false,
            autoplaySpeed: 4000,
            pauseOnHover: true,
            mobileFirst: true,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        vertical: false,
                        verticalSwiping: false,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }
            ]
        });
    }
    createSlick();

    //slider direksi
    function createSlickdir() {
        $('#dir-slide').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            //fade: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            vertical: true,
            verticalSwiping: true,
            autoplay: false,
            autoplaySpeed: 4000,
            pauseOnHover: true,
            mobileFirst: true,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        vertical: false,
                        verticalSwiping: false,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }
            ]
        });
    }
    createSlickdir();

    //icon play toggle
    // if ($('.tvcVid__wrap').is(':visible')) {
    //     $('.tvcVid__wrap').click(function () {
    //         $(this).find($('.icon-play')).toggle();
    //     });
    // }

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
        //$("#animationPreload").fadeOut(2000, function () {
        // $('.preloader').remove();
        // fullpage_api.setAllowScrolling(true);
        // $(".introLogo").removeClass("opac0");
        // $(".introCaption").removeClass("opac0");
        // $(".introImg__item").addClass("active");
        // $(".introCaption--desc").removeClass("opac0");
        // $(".introGear--x1").addClass("animationRotateright");
        // $(".introGear--x2").addClass("animationRotateleft");
        // $(".introGear--x3").addClass("animationRotateright");
        // $(".introGear--x4").addClass("animationRotateleft");
        // $(".introGear--x5").addClass("animationRotateright");
        // $(".introGear--x6").addClass("animationRotateleft");
        //})
        //}, 4000);
    }, 1000);
    console.log('loaded');
})

function refreshPage() {
    window.location.reload(false);
}