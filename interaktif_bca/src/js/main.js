var is_mobile = false;

/* s: cover password */
function focusOnMyInputBox() {
    document.getElementById("pass1").focus();
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
    var isValid = false;
    // var isValid = true;
    $('.passInput').each(function () {
        if (($("#pass1").val() == 'B' ||
                $("#pass1").val() == 'b') &&
            ($("#pass2").val() == 'C' ||
                $("#pass2").val() == 'c') &&
            ($("#pass3").val() == 'A' ||
                $("#pass3").val() == 'a')) {
            isValid = true;
        }
    });
    console.log($("#pass1").val(), $("#pass2").val(), $("#pass3").val())
    return isValid;
}

$('#passSubmit').on('click', function () {
    if (validateForm() == true) {
        $('.passLogo').addClass('active');
        $(".intro").velocity({
            opacity: "1"
        }, {
            delay: 700,
            duration: 700,
            begin: function () {
                console.log('unlock');
                $(".bgColor__white").removeClass("opac0");
                $(".cover").addClass("opac0");
                $(".pass").fadeOut(300);
            }
        });
        $(".introImg").velocity({
            top: "0"
        }, {
            delay: 700,
            duration: 700,
            complete: function () {}
        });
        $(".introTxt1").velocity({
            top: "0"
        }, {
            delay: 1100,
            duration: 700
        });
        $(".introTxt2").velocity({
            top: "0"
        }, {
            delay: 1400,
            duration: 700,
            complete: function () {
                fullpage_api.moveTo('intro', 1);
                console.log('intro');
            }
        });
        $('.pass').addClass('disable');
        $('.passLabel').removeClass('active');
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);
    } else {
        $('.passLabel').addClass('active');
        $(".passInput").val('');
        focusOnMyInputBox()
    }
});

/* e: cover password */

$(document).ready(function () {
    if ($('#some-element').css('display') == 'none') {
        is_mobile = true;
    }

    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        // navigation: true,
        anchors: ['cover', 'intro', 'partnership', 'business', 'community', 'step'],
        lockAnchors: true,
        //scrollOverflow: true,

        onLeave: function (origin, destination, direction) {
            var leavingSection = this;

            if (origin.index == 0 && direction == 'down') {
                $(".pass").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".pass").removeClass("disable");
                    },
                    complete: function () {
                        focusOnMyInputBox()
                    }
                });
                if ($('.pass').css('display') == 'none') {
                    $(".bgColor__white").removeClass("opac0");
                    $(".cover").addClass("opac0");
                    $(".intro").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700,
                        complete: function () {}
                    });
                    $(".cover").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {},
                        complete: function () {}
                    });
                    console.log("going through pass")
                } else {
                    fullpage_api.setAllowScrolling(false);
                    fullpage_api.setKeyboardScrolling(false);
                    console.log("display pass")
                }
            }
            if (origin.index == 1 && direction == 'up') {
                $(".intro").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".bgColor__white").addClass("opac0");
                    }
                });
                $(".cover").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
                console.log('up cover');
            }
            if (origin.index == 1 && direction == 'down') {
                console.log('down intro');
                $(".introTxt").addClass("opac0");
                $(".partnership").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".partnershipItem1").velocity({
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        $(".partnershipItem1 .articleContent").removeClass("opac0");
                    }
                });
                $(".partnershipItem2").velocity({
                    top: "0"
                }, {
                    delay: 400,
                    duration: 700,
                    complete: function () {
                        $(".partnershipItem2 .articleContent").removeClass("opac0");
                    }
                });
                $(".partnershipItem3").velocity({
                    right: "0"
                }, {
                    delay: 800,
                    duration: 700,
                    complete: function () {
                        $(".partnershipItem3 .articleContent").removeClass("opac0");
                    }
                });
            }
            if (origin.index == 2 && direction == 'up') {
                console.log('up intro');
                $(".introTxt").removeClass("opac0");
                $(".partnership").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".partnershipItem1").velocity({
                    left: "-100vw"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".partnershipItem2").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".partnershipItem3").velocity({
                    right: "-100vw"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 2 && direction == 'down') {
                $(".partnership").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".introImg").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".business").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".businessTxt1").velocity({
                    top: "0"
                }, {
                    delay: 400,
                    duration: 700
                });
                $(".businessTxt2").velocity({
                    top: "0"
                }, {
                    delay: 800,
                    duration: 700
                });
            }
            if (origin.index == 3 && direction == 'up') {
                $(".partnership").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".introImg").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".business").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".businessTxt").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 3 && direction == 'down') {
                $(".business").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".community").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".bgColor__community").removeClass("opac0");
                        $(".community").addClass("active");
                    }
                });
                $(".communityItem1").velocity({
                    top: "0"
                }, {
                    delay: 400,
                    duration: 700,
                    complete: function () {
                        $(".communityItem1 .articleContent").removeClass("opac0");
                    }
                });
                $(".communityItem2").velocity({
                    top: "0"
                }, {
                    delay: 800,
                    duration: 700,
                    complete: function () {
                        $(".communityItem2 .articleContent").removeClass("opac0");
                    }
                });
                $(".communityItem3").velocity({
                    top: "0"
                }, {
                    delay: 1200,
                    duration: 700,
                    complete: function () {
                        $(".communityItem3 .articleContent").removeClass("opac0");
                    }
                });
                $(".communityItem4").velocity({
                    top: "0"
                }, {
                    delay: 1600,
                    duration: 700,
                    complete: function () {
                        $(".communityItem4 .articleContent").removeClass("opac0");
                    }
                });
            }
            if (origin.index == 4 && direction == 'up') {
                $(".business").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".community").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".bgColor__community").addClass("opac0");
                        $(".community").removeClass("active");
                    }
                });
                $(".communityItem").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        $(".communityItem .articleContent").addClass("opac0");
                    }
                });
            }
        }
    })

    // fullpage_api.setAllowScrolling(false);
    // fullpage_api.setKeyboardScrolling(false);
    fullpage_api.setAllowScrolling(true);
    fullpage_api.setKeyboardScrolling(true);

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // mobile
        console.log('mobile')
    } else {
        // desktop
        console.log('desktop')
    }
});

/* s: Get HEIGHT Device */
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener("resize", appHeight)
appHeight()
/* e: Get HEIGHT Device */