$(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').addClass("done");
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);
    }, 3000);
    setTimeout(function () {
        $(".buttonInfo").addClass("enable");
        $(".insightsMenu").addClass("active");
        $(".i1").velocity({
            top: "0",
            opacity: "1"
        }, {
            delay: 0,
            duration: 400
        });
        $(".i2").velocity({
            top: "0",
            opacity: "1"
        }, {
            delay: 200,
            duration: 400
        });
        $(".i3").velocity({
            top: "0",
            opacity: "1"
        }, {
            delay: 400,
            duration: 400
        });
    }, 3700);
    //console.log('loaded');
})

$('.i1').on('click', function () {
    $(".magz").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 700,
        begin: function () {
            $(".insightsClose").addClass("active");
        },
        complete: function () {
            $(".buttonInfo").addClass("active");
            $(".creditTrigger").addClass("active");
        }
    });
    $(".insightsMenu").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 400,
        begin: function () {
            $(".insightsMenu").removeClass("active")
        },
        complete: function () {
            $(".magz").addClass("active");
        }
    });
})
$('.i2').on('click', function () {
    $(".web").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 700,
        begin: function () {
            $(".insightsClose").addClass("active");
        },
        complete: function () {
            $(".buttonInfo").addClass("active");
            $(".creditTrigger").addClass("active");
        }
    });
    $(".insightsMenu").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 400,
        begin: function () {
            $(".insightsMenu").removeClass("active")
        },
        complete: function () {
            $(".web").addClass("active");
        }
    });
})
$('.i3').on('click', function () {
    $(".event").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 700,
        begin: function () {
            $(".insightsClose").addClass("active");
        },
        complete: function () {
            $(".buttonInfo").addClass("active");
            $(".creditTrigger").addClass("active");
        }
    });
    $(".insightsMenu").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 400,
        begin: function () {
            $(".insightsMenu").removeClass("active")
        },
        complete: function () {
            $(".event").addClass("active");
        }
    });
})
$('#closeinsight').on('click', function () {
    $(".insightsBox").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 400,
        begin: function () {
            $(".buttonInfo").removeClass("active");
            $(".creditTrigger").removeClass("active");
            $(".insightsClose").removeClass("active");
            $(".insightsBox").removeClass("active");
            $(".insightsMenu").addClass("active")
        },
        complete: function () {}
    });
    $(".insightsMenu").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 700,
        complete: function () {}
    });
    //console.log('close insight');
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
        }
    })
})