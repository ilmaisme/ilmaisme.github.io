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