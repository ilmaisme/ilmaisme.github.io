$(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').addClass("done");
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);
    }, 3000);
    setTimeout(function () {        
        $(".businessImg1").velocity({
            top: "0"
        }, {
            delay: 0,
            duration: 700,
            begin: function () {
                $(".buttonInfo").addClass("enable");
            }
        });
        $(".businessImg2").velocity({
            top: "0"
        }, {
            delay: 300,
            duration: 700
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
                $(".young").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                    },
                    complete: function () {
                        $(".buttonInfo").addClass("active");
                        $(".creditTrigger").addClass("active");
                        $(".youngIcon").addClass("active");                        
                    }
                });
                $(".business").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400
                });
                $(".businessImg1").velocity({
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 400
                });
                $(".businessImg2").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 400
                });
                $(".komunitasCta").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400
                });
            }
            if (origin.index == 1 && direction == 'up') {
                $(".young").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".buttonInfo").removeClass("active");
                        $(".creditTrigger").removeClass("active");
                        $(".youngIcon").removeClass("active");  
                    },
                    complete: function () {                      
                    }
                });
                $(".business").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                    },
                    complete: function () {
                    }
                });
                $(".businessImg1").velocity({
                    top: "0"
                }, {
                    delay: 400,
                    duration: 700
                });
                $(".businessImg2").velocity({
                    top: "0"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".komunitasCta").velocity({
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