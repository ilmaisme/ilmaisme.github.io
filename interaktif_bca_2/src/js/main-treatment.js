$(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').addClass("done");
        $(".buttonInfo").addClass("enable");
    }, 3000);
    setTimeout(function () {
        $(".vip").addClass("active");
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
                $(".branchBg__wrap").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".vip").removeClass("active");
                        $(".branch").addClass("active");
                    },
                    complete: function () {
                    }
                });
                $(".vip").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400
                });
            }
            if (origin.index == 1 && direction == 'up') {
                $(".vip").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".branch").removeClass("active");
                    },
                    complete: function () {
                        $(".vip").addClass("active");
                    }
                });
                $(".branchBg__wrap").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400
                });
            }
            if (origin.index == 1 && direction == 'down') {
                $(".halo").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".branch").removeClass("active");
                        $(".haloIcon").addClass("anim");
                    },
                    complete: function () {
                        $(".buttonInfo").addClass("active");
                        $(".creditTrigger").addClass("active");
                        $(".halo").addClass("active");
                    }
                });
                $(".branchBg__wrap").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400
                });
                $(".branchContent").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400
                });
                $(".treatCta").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400
                });
            }
            if (origin.index == 2 && direction == 'up') {
                $(".branchBg__wrap").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".halo").removeClass("active");
                        $(".buttonInfo").removeClass("active");
                        $(".creditTrigger").removeClass("active");
                        $(".branch").addClass("active");
                    },
                    complete: function () {
                    }
                });
                $(".halo").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".haloIcon").removeClass("anim");
                    }
                });
                $(".branchContent").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".treatCta").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
        }
    })
})