$('#creditbtn').on('click', function () {
    $(".credit").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 700,
        begin: function () {
            $(".buttonInfo").removeClass("enable");
            $(".creditTrigger").removeClass("active");
            fullpage_api.setAllowScrolling(false);
            fullpage_api.setKeyboardScrolling(false);
        },
        complete: function () {
            $(".credit").addClass("active");
        }
    });
    //console.log('credit');
})
$('#closecredit').on('click', function () {
    $(".credit").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 400,
        begin: function () {
            $(".credit").removeClass("active");
            $(".buttonInfo").addClass("enable");
            $(".creditTrigger").addClass("active");
            fullpage_api.setAllowScrolling(true);
            fullpage_api.setKeyboardScrolling(true);
        },
        complete: function () {}
    });
    //console.log('close credit');
})
$('#menu').on('click', function () {
    $("#menu").fadeOut(400);
    $(".scrollCta").fadeOut(400);
    $(".buttonInfo").removeClass("active");
    $(".creditTrigger").removeClass("active");
    $('.menu').addClass("active bounce");
    $('.menuWheel').addClass("rotate");
    setTimeout(function () {
        $('.menuWheel').removeClass("rotate");
        $('.menuWheel').addClass("rotate1");
    }, 3000);
    console.log('menu')
    fullpage_api.destroy();
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