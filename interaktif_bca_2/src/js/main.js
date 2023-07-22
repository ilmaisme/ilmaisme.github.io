var is_mobile = false;

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
        $(".start").velocity({
            opacity: "1"
        }, {
            delay: 700,
            duration: 700,
            begin: function () {
                console.log('unlock');
                $(".bgColor__start").removeClass("opac0");
                $(".cover").addClass("opac0");
                $(".pass").fadeOut(300);
            },
            complete: function () {
                fullpage_api.moveTo('start', 1);
                console.log('start');
                fullpage_api.setAllowScrolling(true);
                fullpage_api.setKeyboardScrolling(true);
            }
        });
        $(".startImg").velocity({
            top: "0"
        }, {
            delay: 700,
            duration: 700
        });
        $('.pass').addClass('disable');
        $('.passLabel').removeClass('active');
    } else {
        $('.passLabel').addClass('active');
        $(".passInput").val('');
        focusOnMyInputBox()
    }
});

$('#introbtn').on('click', function () {
    fullpage_api.moveTo('menu', 3);
    console.log('menu');
})

// $(window).on('load', function () {
//     setTimeout(function () {
//         $('.preloader').fadeOut(700);
//     }, 3000);
//     setTimeout(function () {
//         $('.preloader').remove();
//     }, 3700);
//     console.log('loaded');
// })

$(document).ready(function () {
    if ($('#some-element').css('display') == 'none') {
        is_mobile = true;
    }

    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        //navigation: true,
        anchors: ['cover', 'start', 'intro', 'menu'],
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
                    $(".bgColor__start").removeClass("opac0");
                    $(".cover").addClass("opac0");
                    $(".start").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700
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
                $(".start").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".bgColor__start").addClass("opac0");
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
                $(".intro").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".introCursor").addClass("active");
                    },
                    complete: function () {
                        $(".introButton").addClass("enable");
                    }
                });
                $(".startImg").velocity({
                    top: "10%"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 2 && direction == 'up') {
                $(".intro").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".introCursor").removeClass("active");
                    },
                    complete: function () {
                        $(".introButton").removeClass("enable");
                    }
                });
                $(".startImg").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 2 && direction == 'down') {
                $(".menu").velocity({
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".introCursor").removeClass("active");
                        $(".introButton").removeClass("enable");
                    },
                    complete: function () {
                    }
                });
            }
        }
    })
});

function refreshPage() {
    window.location.reload(false);
}