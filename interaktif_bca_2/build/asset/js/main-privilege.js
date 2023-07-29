$(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').addClass("done");
        $(".buttonInfo").addClass("enable");
    }, 3000);
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
                $(".edu").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                    },
                    complete: function () {                      
                    }
                });
            }
            if (origin.index == 1 && direction == 'up') {
                $(".edu").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                    },
                    complete: function () {                      
                    }
                });
            }
            if (origin.index == 1 && direction == 'down') {
                $(".life").velocity({
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                    },
                    complete: function () {                      
                    }
                });
            }
            if (origin.index == 2 && direction == 'up') {
                $(".life").velocity({
                    left: "100vw"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                    },
                    complete: function () {                      
                    }
                });
            }
            if (origin.index == 2 && direction == 'down') {
                $(".franchise").velocity({
                    left: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                    },
                    complete: function () {                      
                    }
                });
            }
            if (origin.index == 3 && direction == 'up') {
                $(".franchise").velocity({
                    left: "100vw"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                    },
                    complete: function () {                      
                    }
                });
            }
            if (origin.index == 3 && direction == 'down') {
                $(".airport").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                    },
                    complete: function () { 
                        $(".buttonInfo").addClass("active");
                        $(".creditTrigger").addClass("active");                        
                        $(".airportBg__plane").addClass("anim");                        
                    }
                });
                $(".privilegeCta").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400
                });
            }
            if (origin.index == 4 && direction == 'up') {
                $(".airport").velocity({
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".buttonInfo").removeClass("active");
                        $(".creditTrigger").removeClass("active");
                    },
                    complete: function () {                   
                    }
                });
                $(".privilegeCta").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
        }
    })
})