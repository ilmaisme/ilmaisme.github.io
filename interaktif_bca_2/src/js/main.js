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
            }
        });
        $(".startImg").velocity({
            top: "0"
        }, {
            delay: 700,
            duration: 700,
            complete: function () {
                $('.startItem__img').addClass('bounce');
                setTimeout(function () {
                    fullpage_api.moveTo('intro', 2);
                }, 2000);
            }
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
$('#infobtn').on('click', function () {
    $(".info").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 700,
        begin: function () {
            $(".menu").removeClass("active");
            $(".info").addClass("active");
        },
        complete: function () {}
    });
    //console.log('info');
})
$('#closeinfo').on('click', function () {
    $(".info").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 700,
        begin: function () {
            $(".menu").addClass("active");
            $(".info").removeClass("active");
        },
        complete: function () {}
    });
    //console.log('close info');
})

$(document).ready(function () {
    if ($('#some-element').css('display') == 'none') {
        is_mobile = true;
    }

    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        // navigation: true,
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
                        duration: 700,
                        complete: function () {
                            setTimeout(function () {
                                fullpage_api.moveTo('intro', 2);
                            }, 2000);
                        }
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
                        $(".intro").addClass("active");
                    },
                    complete: function () {
                        fullpage_api.setAllowScrolling(true);
                        fullpage_api.setKeyboardScrolling(true);                        
                    }
                });
                $(".introTxt").velocity({
                    opacity: "1"
                }, {
                    delay: 1200,
                    duration: 700
                });
                $(".startImg").velocity({
                    top: "10%"
                }, {
                    delay: 0,
                    duration: 700
                });
                console.log('intro')
            }
            if (origin.index == 2 && direction == 'up') {
                $(".intro").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".introCursor").removeClass("active");
                        $(".intro").removeClass("active");
                    },
                    complete: function () {}
                });
                $(".introTxt").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".startImg").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                console.log('intro up')
            }
            if (origin.index == 2 && direction == 'down') {
                $(".introCursor").removeClass("active");
                $(".intro").removeClass("active");
                $('.menu').addClass("active bounce");
                $('.menuWheel').addClass("rotate");
                setTimeout(function () {
                    $('.menuWheel').removeClass("rotate");
                    $('.menuWheel').addClass("rotate1");
                    fullpage_api.destroy();
                }, 3000);
                console.log('menu')
            }
            // if (origin.index == 3 && direction == 'up') {
            //     $('.menuWheel').removeClass(function (index, css) {
            //         return (css.match(/(^|\s)rotate\S+/g) || []).join(' ');
            //     });
            //     $('.menuWheel').addClass("rotate6");
            //     console.log('MENU 1, to menu 6')
            //     fullpage_api.moveTo('menu6', 8);

            //     $('.menuWheel').removeClass("rotate");
            // }
            // if (origin.index == 3 && direction == 'down') {
            //     $('.menuWheel').removeClass(function (index, css) {
            //         return (css.match(/(^|\s)rotate\S+/g) || []).join(' ');
            //     });
            //     $('.menuWheel').addClass("rotate2");
            //     console.log('MENU 1, to menu 2')

            //     $('.menuWheel').removeClass("rotate");
            // }
            // if (origin.index == 4 && direction == 'up') {
            //     $('.menuWheel').removeClass(function (index, css) {
            //         return (css.match(/(^|\s)rotate\S+/g) || []).join(' ');
            //     });
            //     $('.menuWheel').addClass("rotate1");
            //     console.log('MENU 2, to menu 1')
            // }
            // if (origin.index == 4 && direction == 'down') {
            //     $('.menuWheel').removeClass(function (index, css) {
            //         return (css.match(/(^|\s)rotate\S+/g) || []).join(' ');
            //     });
            //     $('.menuWheel').addClass("rotate3");
            //     console.log('MENU 2, to menu 3')
            // }
            // if (origin.index == 5 && direction == 'up') {
            //     $('.menuWheel').removeClass(function (index, css) {
            //         return (css.match(/(^|\s)rotate\S+/g) || []).join(' ');
            //     });
            //     $('.menuWheel').addClass("rotate2");
            //     console.log('MENU 3, to menu 2')
            // }
            // if (origin.index == 5 && direction == 'down') {
            //     $('.menuWheel').removeClass(function (index, css) {
            //         return (css.match(/(^|\s)rotate\S+/g) || []).join(' ');
            //     });
            //     $('.menuWheel').addClass("rotate4");
            //     console.log('MENU 3, to menu 4')
            // }
            // if (origin.index == 6 && direction == 'up') {
            //     $('.menuWheel').removeClass(function (index, css) {
            //         return (css.match(/(^|\s)rotate\S+/g) || []).join(' ');
            //     });
            //     $('.menuWheel').addClass("rotate3");
            //     console.log('MENU 4, to menu 3')
            // }
            // if (origin.index == 6 && direction == 'down') {
            //     $('.menuWheel').removeClass(function (index, css) {
            //         return (css.match(/(^|\s)rotate\S+/g) || []).join(' ');
            //     });
            //     $('.menuWheel').addClass("rotate5");
            //     console.log('MENU 4, to menu 5')
            // }
            // if (origin.index == 7 && direction == 'up') {
            //     $('.menuWheel').removeClass(function (index, css) {
            //         return (css.match(/(^|\s)rotate\S+/g) || []).join(' ');
            //     });
            //     $('.menuWheel').addClass("rotate4");
            //     console.log('MENU 5, to menu 4')
            // }
            // if (origin.index == 7 && direction == 'down') {
            //     $('.menuWheel').removeClass(function (index, css) {
            //         return (css.match(/(^|\s)rotate\S+/g) || []).join(' ');
            //     });
            //     $('.menuWheel').addClass("rotate6");
            //     console.log('MENU 5, to menu 6')
            // }
            // if (origin.index == 8 && direction == 'up') {
            //     $('.menuWheel').removeClass(function (index, css) {
            //         return (css.match(/(^|\s)rotate\S+/g) || []).join(' ');
            //     });
            //     $('.menuWheel').addClass("rotate5");
            //     console.log('MENU 6, to menu 5')
            // }
            // if (origin.index == 8 && direction == 'down') {
            //     $('.menuWheel').removeClass(function (index, css) {
            //         return (css.match(/(^|\s)rotate\S+/g) || []).join(' ');
            //     });
            //     $('.menuWheel').addClass("rotate1");
            //     console.log('MENU 6, to menu 1')
            //     fullpage_api.moveTo('menu', 3);
            // }
        }
    })

    fullpage_api.setAllowScrolling(false);
    fullpage_api.setKeyboardScrolling(false);
});