$(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').addClass("done");
    }, 3000);
    setTimeout(function () {
        $(".buttonInfo").addClass("active");
        $(".creditTrigger").addClass("active");
        $(".buttonInfo").addClass("enable");
        $(".t1").velocity({
            top: "0",
            opacity : "1"
        }, {
            delay: 0,
            duration: 400
        });
        $(".t2").velocity({
            top: "0",
            opacity : "1"
        }, {
            delay: 200,
            duration: 400
        });
        $(".t3").velocity({
            top: "0",
            opacity : "1"
        }, {
            delay: 400,
            duration: 400
        });
        $(".t4").velocity({
            top: "0",
            opacity : "1"
        }, {
            delay: 600,
            duration: 400
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
        }
    })
})