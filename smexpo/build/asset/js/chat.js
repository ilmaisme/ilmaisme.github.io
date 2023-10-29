//Chat position on device

let popsheet = $('.popsheet')
updateChatPos()
$(window).on('resize', function () {
    updateChatPos()
});

function updateChatPos() {
    if (viewport().width >= 1230) {
        /* move chat position in desktop */
        if (!!popsheet) {
            popsheet.appendTo('#chatDesk');
            popsheet.removeClass('mobile');
        }
    } else {
        $('.popsheet').removeClass('active');
        /* move chat position in mobile */
        if (!!popsheet) {
            popsheet.appendTo('#chatMob');
            popsheet.addClass('mobile');
        }
    }
}