var is_mobile = false;

function focusOnMyInputBox() {
    document.getElementById("password").focus();
}

$(".passInput").keyup(function (e) {
    if (this.value.length == this.maxLength) {
        $(this).next('.passInput').focus();
        if ($(this).is(':last-child')) {
            $('#passSubmit').focus();
        }
    }
    if (e.keyCode == 8) {
        $(this).prev('.passInput').focus();
    }
});

function validateForm() {
    // var isValid = false;
    var isValid = true;
    $('.passInput').each(function () {
        if ($(".passInput:nth-child(1)").val() === 'B' ||
            $(".passInput:nth-child(1)").val() === 'b' &&
            $(".passInput:nth-child(2)").val() === 'C' ||
            $(".passInput:nth-child(2)").val() === 'c' &&
            $(".passInput:nth-child(3)").val() === 'A' ||
            $(".passInput:nth-child(3)").val() === 'a' &&
            $(".passInput:nth-child(4)").val() === 'P' ||
            $(".passInput:nth-child(4)").val() === 'p' &&
            $(".passInput:nth-child(5)").val() === 'R' ||
            $(".passInput:nth-child(5)").val() === 'r' &&
            $(".passInput:nth-child(6)").val() === 'I' ||
            $(".passInput:nth-child(6)").val() === 'i' &&
            $(".passInput:nth-child(7)").val() === 'O' ||
            $(".passInput:nth-child(7)").val() === 'o') {
            isValid = true;
        }
    });
    return isValid;
}

$('#passSubmit').on('click', function () {
    if (validateForm() == true) {
        $('.passGranted').removeClass('display-none');
        $('.passGranted').addClass('active');
        $(".passContent").velocity({
            opacity: "0"
        }, {
            delay: 2400,
            duration: 1000,
            begin: function () {
                $('.passGranted').removeClass('active');
                $('.passGranted__txt').html('Welcome');
            },
            complete: function () {
                $(".passSection").fadeOut(300);
                fullpage_api.moveTo('start', 2);
                console.log('start');
            }
        });
        $('#passSubmit').addClass('disable');
        $('.passLabel').removeClass('active');
    } else {
        $('.passLabel').addClass('active');
        $(".passInput").val('');
        focusOnMyInputBox()
    }
});

$('#introbtn').on('click', function () {
    fullpage_api.setAllowScrolling(true, 'down');
    fullpage_api.setKeyboardScrolling(true, 'down');
    fullpage_api.moveTo('global', 3);
    console.log('global');
})

$(document).ready(function () {
    if ($('#some-element').css('display') == 'none') {
        is_mobile = true;
    }

    // 1. Animation Woman
    var paramWoman = {
        container: document.getElementById('animationWoman'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/global-modist-women.json',
        name: 'myAnimation',
    };
    var playWoman;
    playWoman = bodymovin.loadAnimation(paramWoman);

    // 2. Animation Men
    var paramMen = {
        container: document.getElementById('animationMen'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/global-classy-men.json',
        name: 'myAnimation',
    };
    var playMen;
    playMen = bodymovin.loadAnimation(paramMen);

    // 3. Animation HNWI Indo
    var paramHNWII = {
        container: document.getElementById('animationHNWII'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/hnwi-indonesia.json',
        name: 'myAnimation',
    };
    var playHNWII;
    playHNWII = bodymovin.loadAnimation(paramHNWII);

    // 3. Animation HNWI Dunia
    var paramHNWID = {
        container: document.getElementById('animationHNWID'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/hnwi-dunia.json',
        name: 'myAnimation',
    };
    var playHNWID;
    playHNWID = bodymovin.loadAnimation(paramHNWID);

    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        //navigation: true,
        anchors: ['cover', 'pass', 'start', 'global'],
        lockAnchors: true,
        //scrollOverflow: true,

        onLeave: function (origin, destination, direction) {
            var leavingSection = this;

            if (origin.index == 0 && direction == 'down') {
                $(".coverImg").addClass("zoom");
                setTimeout(function () {
                    $(".coverCta").addClass("opac0 hidden");
                }, 200);
                $(".coverImg").velocity({
                    opacity: "0"
                }, {
                    delay: 1500,
                    duration: 800,
                    begin: function () {
                        $(".bgColor__pass").removeClass("opac0");
                    },
                    complete: function () {
                        $(".passSection").fadeIn(300);
                        $(".bgColor__cloud").addClass("opac0");
                        focusOnMyInputBox()
                    }
                });
                fullpage_api.setAllowScrolling(false);
                fullpage_api.setKeyboardScrolling(false, 'down');
            }
            if (origin.index == 1 && direction == 'up') {
                $(".coverImg").removeClass("zoom");
                setTimeout(function () {
                    $(".coverCta").removeClass("opac0 hidden");
                }, 200);
                $(".coverImg").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 800,
                    begin: function () {
                        $(".bgColor__pass").addClass("opac0");
                        $(".passSection").fadeOut(300);
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 1 && direction == 'down') {
                $(".passBg").addClass("active");
                $(".passBg").addClass("open");
                $(".bgIntro").removeClass("opac0");
                setTimeout(function () {
                    $(".passBg").removeClass("active");
                }, 1000);
                setTimeout(function () {
                    $(".intro").removeClass("opac0");
                    $(".introCta__cursor").addClass("active");
                    $(".introCta__btn").addClass("enable");
                }, 3300);
            }
            if (origin.index == 2 && direction == 'down') {
                $(".bgColor__global").removeClass("opac0");
                $(".global").removeClass("opac0");
                $(".introCta__btn").removeClass("enable");
                $(".intro").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 200,
                    begin: function () {
                        $(".intro").addClass("opac0");
                    },
                    complete: function () {
                        $(".globalCenter").removeClass("opac0");
                    }
                });
                $(".globalAnim1").velocity({
                    bottom: "0"
                }, {
                    delay: 200,
                    duration: 700,
                    begin: function () {},
                    complete: function () {
                        playWoman.play();
                    }
                });
                $(".globalAnim2").velocity({
                    top: "0"
                }, {
                    delay: 400,
                    duration: 700,
                    begin: function () {},
                    complete: function () {
                        playMen.play();
                    }
                });
            }
            if (origin.index == 3 && direction == 'down') {
                $(".globalView").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 200,
                    begin: function () {},
                    complete: function () {}
                });
                $(".globalHnwi").velocity({
                    opacity: "1"
                }, {
                    delay: 200,
                    duration: 700,
                    begin: function () {},
                    complete: function () {
                        playHNWII.play();
                        playHNWID.play();
                    }
                });
            }
            if (origin.index == 4 && direction == 'down') {
                $(".globalAnim1").velocity({
                    bottom: "100%"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {},
                    complete: function () {}
                });
                $(".globalAnim2").velocity({
                    top: "100%"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {},
                    complete: function () {}
                });
                $(".bgColor__blue").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".globalCenter").fadeOut(300)
                    },
                    complete: function () {}
                });
                $(".solitaire1").velocity({
                    top: "0"
                }, {
                    delay: 400,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
            }
            if (origin.index == 5 && direction == 'down') {
                $(".solitaire1").velocity({
                    top: "-8%"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
                $(".solitaire2").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
            }
            if (origin.index == 6 && direction == 'down') {
                $(".solitaire1").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
                $(".solitaire2").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
                $(".solitaire3").velocity({
                    top: "-10%"
                }, {
                    delay: 400,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
            }
            if (origin.index == 7 && direction == 'down') {
                $(".privilegeLeft1").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".solitaire3").addClass("hidden");
                        $(".privilege1").removeClass("opac0");
                        $(".bgColor__privilege").removeClass("opac0");
                    },
                    complete: function () {}
                });
                $(".privilegeItem1").velocity({
                    opacity: "1"
                }, {
                    delay: 400,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".privilegeItem2").velocity({
                    opacity: "1"
                }, {
                    delay: 600,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".privilegeItem3").velocity({
                    opacity: "1"
                }, {
                    delay: 800,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".privilegeItem4").velocity({
                    opacity: "1"
                }, {
                    delay: 1000,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".privilegeItem5").velocity({
                    opacity: "1"
                }, {
                    delay: 1200,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".privilegeItem6").velocity({
                    opacity: "1"
                }, {
                    delay: 1400,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
            }
            if (origin.index == 8 && direction == 'down') {
                $(".privilege1").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".privilege2").removeClass("opac0");
                    },
                    complete: function () {}
                });
                $(".privilegeLeft2").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {
                        $(".privilegeReq__item1").addClass("scale");
                    }
                });
                setTimeout(function () {
                    $(".privilegeReq__item2").addClass("scale");
                }, 1400);
            }
            if (origin.index == 9 && direction == 'down') {
                $(".bgColor__invite").removeClass("opac0");
                $(".invitation1").removeClass("opac0");
                $(".privilege2").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {
                        $(".invitationLeft1").removeClass("opac0");
                    }
                });
                $(".invitationRight1").velocity({
                    top: "0"
                }, {
                    delay: 400,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
            }
            if (origin.index == 10 && direction == 'down') {
                $(".invitation2").removeClass("opac0");
                $(".invitationRight1").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".invitationImg1").fadeOut(300)
                    },
                    complete: function () {
                        $(".invitationLeft2").removeClass("opac0");
                    }
                });
                $(".invitationRight2").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
            }
            if (origin.index == 11 && direction == 'down') {
                $(".invitation3").removeClass("opac0");
                $(".invitationRight2").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".invitationImg2").fadeOut(300)
                    },
                    complete: function () {
                        $(".invitationLeft3").removeClass("opac0");
                    }
                });
                $(".invitationRight3").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
            }
            if (origin.index == 12 && direction == 'down') {
                $(".invitation4").removeClass("opac0");
                $(".invitationRight3").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".invitationRight4").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
            }
            if (origin.index == 13 && direction == 'down') {
                $(".bgColor__contact").removeClass("opac0");
                $(".invitationRight4").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".invitationImg3").fadeOut(300)
                    },
                    complete: function () {
                        $(".contactCaption").addClass("scale");
                    }
                });
                $(".contact1").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
            }
            if (origin.index == 14 && direction == 'down') {
                $(".contact1").velocity({
                    top: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".contact2").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {
                        $(".contactList1 .contactItem").addClass("active");
                    }
                });
                $(".contactList1").velocity({
                    opacity: "1"
                }, {
                    delay: 400,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
            }
            if (origin.index == 15 && direction == 'down') {
                $(".contactInfo").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {},
                    complete: function () {}
                });
                $(".contactList1").velocity({
                    opacity: "0"
                }, {
                    delay: 700,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
                $(".contactList2").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".contactMobile__content1").addClass("scale");
                    },
                    complete: function () {
                        $(".contactList2 .contactItem9").addClass("active");
                        $(".contactList1 .contactItem").removeClass("active");
                    }
                });
            }
            if (origin.index == 16 && direction == 'down') {
                $(".contactList2 .contactItem10").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".contactMobile__content2").addClass("scale");
                        $(".contactList2 .contactItem10").addClass("active");
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 17 && direction == 'down') {
                $(".contactList2 .contactItem11").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".contactMobile__content3").addClass("scale");
                        $(".contactList2 .contactItem11").addClass("active");
                        $(".contactPrivilege").addClass("opac1");
                    },
                    complete: function () {}
                });
            }
            if (origin.index == 18 && direction == 'down') {
                //credit
                $(".bgColor__bca").removeClass("opac0");
                $(".contact").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                    },
                    complete: function () {}
                });
                $(".credit").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {
                        $(".creditSocmed__item").addClass("active");
                        $(".creditButton").addClass("active");
                    }
                });
            }
        }
    })
});

function refreshPage() {
    window.location.reload(false);
}