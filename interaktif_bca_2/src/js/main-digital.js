$(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').addClass("done");
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);
    }, 3000);
    setTimeout(function () {
        $(".uiMbca").velocity({
            opacity: "1"
        }, {
            delay: 0,
            duration: 700,
            begin: function () {
                $(".buttonInfo").addClass("enable");
                $(".uiMbca").addClass("active");
            }
        });
        $(".iconMbca").velocity({
            opacity: "1"
        }, {
            delay: 300,
            duration: 700,
            begin: function () {
                $(".iconPrioritas").addClass("active");
                $(".iconSolitaire").addClass("active");
            }
        });
    }, 3700);
    //console.log('loaded');
})

$(document).ready(function () {
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
                $(".ebranch .articleContent").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".mbca").removeClass("active1");
                        $(".offer").addClass("hide");
                        $(".iconPrioritas").removeClass("active");
                        $(".iconSolitaire").removeClass("active");
                    },
                    complete: function () {
                        $(".iconEbranch").addClass("active");
                    }
                });
                $(".offer .articleContent").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    complete: function () {
                        $(".uiEbranch").addClass("active");
                        $(".uiVindi").addClass("bang");
                    }
                });
            }
            if (origin.index == 1 && direction == 'up') {
                $(".ebranch .articleContent").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".uiEbranch").removeClass("active");
                        $(".iconEbranch").removeClass("active");                        
                        $(".uiVindi").removeClass("bang");
                    }
                });
                $(".offer .articleContent").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".mbca").addClass("active1");
                        $(".offer").removeClass("hide");
                    }
                });
                $(".uiMbca1").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 0,
                    complete: function () {
                        $(".iconPrioritas").addClass("active");
                        $(".iconSolitaire").addClass("active");
                    }
                });
            }
            if (origin.index == 1 && direction == 'down') {
                $(".vindi .articleContent").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".uiEbranch").removeClass("active");
                        $(".iconEbranch").removeClass("active");
                    },
                    complete: function () {
                        $(".uiVindi").addClass("active");
                    }
                });
                $(".ebranch .articleContent").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400
                });
            }
            if (origin.index == 2 && direction == 'up') {
                $(".ebranch .articleContent").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".uiVindi").removeClass("active");
                    },
                    complete: function () {
                        $(".iconEbranch").addClass("active");
                    }
                });
                $(".vindi .articleContent").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    complete: function () {
                        $(".uiEbranch").addClass("active");
                    }
                });
            }
            if (origin.index == 2 && direction == 'down') {
                $(".mbca .articleContent").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".uiVindi").removeClass("active");
                    },
                    complete: function () {
                        $(".buttonInfo").addClass("active");
                        $(".creditTrigger").addClass("active");
                    }
                });
                $(".vindi .articleContent").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400
                });
                $(".digitalCta").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400
                });
            }
            if (origin.index == 3 && direction == 'up') {
                $(".vindi .articleContent").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {
                        $(".uiVindi").addClass("active");
                    }
                });
                $(".mbca .articleContent").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".buttonInfo").removeClass("active");
                        $(".creditTrigger").removeClass("active");
                    }
                });
                $(".digitalCta").velocity({
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